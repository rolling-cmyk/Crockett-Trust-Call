-- Upgrade from the earlier minimal schema previously provided for this project.
-- Run this INSTEAD of admin-schema.sql if the old users/subscriptions tables already exist.
-- Old subscription rows are archived. Only IDs shaped like Stripe sub_* IDs are copied
-- into the live Stripe-backed table; review archived rows after applying.

ALTER TABLE users ADD COLUMN stripe_customer_id TEXT;
ALTER TABLE users ADD COLUMN updated_at TEXT;
UPDATE users SET updated_at = COALESCE(created_at, strftime('%Y-%m-%dT%H:%M:%fZ','now')) WHERE updated_at IS NULL;
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_stripe_customer_id ON users(stripe_customer_id);

DROP INDEX IF EXISTS idx_subscriptions_status;
DROP INDEX IF EXISTS idx_subscriptions_user_id;
ALTER TABLE subscriptions RENAME TO subscriptions_legacy_archive;

CREATE TABLE subscriptions (
  stripe_subscription_id TEXT PRIMARY KEY NOT NULL,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT,
  status TEXT NOT NULL,
  price_id TEXT,
  unit_amount INTEGER,
  currency TEXT NOT NULL DEFAULT 'usd',
  interval_unit TEXT NOT NULL DEFAULT 'month',
  current_period_start TEXT,
  current_period_end TEXT,
  cancel_at_period_end INTEGER NOT NULL DEFAULT 0 CHECK (cancel_at_period_end IN (0, 1)),
  canceled_at TEXT,
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  updated_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  last_event_created INTEGER NOT NULL DEFAULT 0
);

-- Preserve any Stripe-looking IDs from the earlier table. Other previous rows remain
-- in subscriptions_legacy_archive and are not counted as live Stripe subscriptions.
INSERT OR IGNORE INTO subscriptions (
  stripe_subscription_id, user_id, status, current_period_end, created_at, updated_at
)
SELECT id, user_id, status, current_period_end,
       COALESCE(created_at, strftime('%Y-%m-%dT%H:%M:%fZ','now')),
       COALESCE(created_at, strftime('%Y-%m-%dT%H:%M:%fZ','now'))
FROM subscriptions_legacy_archive
WHERE id GLOB 'sub_*';

CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_status ON subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_subscriptions_customer_id ON subscriptions(stripe_customer_id);

CREATE TABLE IF NOT EXISTS stripe_events (
  stripe_event_id TEXT PRIMARY KEY NOT NULL,
  event_type TEXT NOT NULL,
  processed_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_stripe_events_processed_at ON stripe_events(processed_at);
