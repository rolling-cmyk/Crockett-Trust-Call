export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Crockett Trust Call — AI-Powered Dating for Business Professionals</title>
  <meta name="description" content="Crockett Trust Call is an AI-powered dating platform with smart avatars, connecting business professionals through intelligent matching and communication tools.">
  <style>
    :root { --primary: #6C5CE7; --accent: #00CEC9; --darker: #16213e; --light: #f8f9fa; --text: #e0e0e0; --text-muted: #a0a0b0; --card: rgba(255,255,255,0.05); --border: rgba(255,255,255,0.1); }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; background: var(--darker); color: var(--text); line-height: 1.6; overflow-x: hidden; }
    nav { position: fixed; top: 0; width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1rem 3rem; background: rgba(22,33,62,0.85); backdrop-filter: blur(12px); z-index: 1000; border-bottom: 1px solid var(--border); }
    .logo { font-size: 1.4rem; font-weight: 700; color: var(--light); letter-spacing: 1px; }
    .logo span { color: var(--accent); }
    .nav-links { display: flex; gap: 2rem; list-style: none; }
    .nav-links a { color: var(--text-muted); text-decoration: none; font-size: 0.95rem; transition: color 0.3s; }
    .nav-links a:hover { color: var(--accent); }
    .nav-cta { padding: 0.5rem 1.5rem; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 50px; color: white; font-weight: 600; cursor: pointer; text-decoration: none; font-size: 0.9rem; transition: transform 0.2s, box-shadow 0.2s; }
    .nav-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(108,92,231,0.4); }
    .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 6rem 2rem 3rem; background: radial-gradient(ellipse at top, rgba(108,92,231,0.15), transparent 60%), radial-gradient(ellipse at bottom, rgba(0,206,201,0.1), transparent 60%); }
    .hero-content { max-width: 800px; }
    .hero h1 { font-size: 3.5rem; font-weight: 800; line-height: 1.15; margin-bottom: 1.5rem; background: linear-gradient(135deg, #fff, #a0a0ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero p { font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2.5rem; }
    .hero-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn-primary { padding: 1rem 2.5rem; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 50px; color: white; font-size: 1.05rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: transform 0.2s, box-shadow 0.2s; }
    .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 12px 35px rgba(108,92,231,0.5); }
    .btn-secondary { padding: 1rem 2.5rem; background: transparent; border: 2px solid var(--border); border-radius: 50px; color: var(--light); font-size: 1.05rem; font-weight: 600; cursor: pointer; text-decoration: none; transition: border-color 0.3s, background 0.3s; }
    .btn-secondary:hover { border-color: var(--accent); background: rgba(0,206,201,0.08); }
    section { padding: 5rem 2rem; }
    .section-title { text-align: center; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; color: var(--light); }
    .section-subtitle { text-align: center; color: var(--text-muted); font-size: 1.15rem; margin-bottom: 3.5rem; max-width: 600px; margin-left: auto; margin-right: auto; }
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 1100px; margin: 0 auto; }
    .feature-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem 2rem; text-align: center; transition: transform 0.3s, border-color 0.3s; }
    .feature-card:hover { transform: translateY(-8px); border-color: var(--primary); }
    .feature-icon { width: 64px; height: 64px; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; background: linear-gradient(135deg, rgba(108,92,231,0.2), rgba(0,206,201,0.2)); border-radius: 16px; }
    .feature-card h3 { font-size: 1.3rem; margin-bottom: 0.75rem; color: var(--light); }
    .feature-card p { color: var(--text-muted); font-size: 0.98rem; }
    .steps { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 1000px; margin: 0 auto; }
    .step { text-align: center; }
    .step-number { width: 56px; height: 56px; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 1.4rem; font-weight: 700; background: linear-gradient(135deg, var(--primary), var(--accent)); border-radius: 50%; color: white; }
    .step h3 { font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--light); }
    .step p { color: var(--text-muted); font-size: 0.95rem; }
    .avatars-section { background: linear-gradient(180deg, transparent, rgba(108,92,231,0.05), transparent); }
    .avatars-row { display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; max-width: 900px; margin: 0 auto 2rem; }
    .avatar-card { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2rem; text-align: center; width: 200px; transition: transform 0.3s; }
    .avatar-card:hover { transform: scale(1.05); }
    .avatar-circle { width: 80px; height: 80px; margin: 0 auto 1rem; border-radius: 50%; background: linear-gradient(135deg, var(--primary), var(--accent)); display: flex; align-items: center; justify-content: center; font-size: 2rem; }
    .avatar-card h4 { color: var(--light); margin-bottom: 0.3rem; }
    .avatar-card p { color: var(--text-muted); font-size: 0.85rem; }
    .contact-section { text-align: center; max-width: 600px; margin: 0 auto; }
    .contact-form { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
    .contact-form input, .contact-form textarea { padding: 1rem 1.5rem; background: var(--card); border: 1px solid var(--border); border-radius: 12px; color: var(--text); font-size: 1rem; font-family: inherit; }
    .contact-form input::placeholder, .contact-form textarea::placeholder { color: var(--text-muted); }
    .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: var(--accent); }
    .contact-form button { padding: 1rem; background: linear-gradient(135deg, var(--primary), var(--accent)); border: none; border-radius: 12px; color: white; font-size: 1.05rem; font-weight: 600; cursor: pointer; transition: transform 0.2s; }
    .contact-form button:hover { transform: translateY(-2px); }
    footer { text-align: center; padding: 3rem 2rem; border-top: 1px solid var(--border); color: var(--text-muted); font-size: 0.9rem; }
    footer a { color: var(--accent); text-decoration: none; }
    @media (max-width: 768px) { nav { padding: 1rem 1.5rem; } .nav-links { display: none; } .hero h1 { font-size: 2.2rem; } .hero p { font-size: 1.05rem; } .section-title { font-size: 1.8rem; } }
  </style>
</head>
<body>
  <nav><div class="logo">Crockett Trust <span>Call</span></div><ul class="nav-links"><li><a href="#features">Features</a></li><li><a href="#how">How It Works</a></li><li><a href="#avatars">AI Avatars</a></li><li><a href="#contact">Contact</a></li></ul><a href="#contact" class="nav-cta">Get Started</a></nav>
  <section class="hero"><div class="hero-content"><h1>AI-Powered Dating for Business Professionals</h1><p>Connect with like-minded entrepreneurs through intelligent AI avatars, smart matching, and seamless communication tools built for professionals.</p><div class="hero-buttons"><a href="#contact" class="btn-primary">Start Dating Smarter</a><a href="#features" class="btn-secondary">Learn More</a></div></div></section>
  <section id="features"><h2 class="section-title">Why Crockett Trust Call</h2><p class="section-subtitle">A dating experience designed for business professionals who value time, trust, and meaningful connections.</p><div class="features-grid"><div class="feature-card"><div class="feature-icon">🤖</div><h3>AI Avatars</h3><p>Interactive AI-powered avatars that represent you and help break the ice with potential matches.</p></div><div class="feature-card"><div class="feature-icon">💼</div><h3>Business Professional Matching</h3><p>Connect with other registered business owners and entrepreneurs who share your ambitions.</p></div><div class="feature-card"><div class="feature-icon">💬</div><h3>Smart Communication</h3><p>AI-assisted messaging tools that help you communicate confidently and authentically.</p></div><div class="feature-card"><div class="feature-icon">🔗</div><h3>Platform Integrations</h3><p>Connected with GitHub, Lovable AI, and more — bring your digital identity into your dating profile.</p></div><div class="feature-card"><div class="feature-icon">🛡️</div><h3>Verified Profiles</h3><p>EMI business registration verification ensures every member is a genuine professional.</p></div><div class="feature-card"><div class="feature-icon">⚡</div><h3>Fast &amp; Secure</h3><p>Powered by Cloudflare's global edge network for lightning-fast, secure connections worldwide.</p></div></div></section>
  <section id="how"><h2 class="section-title">How It Works</h2><p class="section-subtitle">Three simple steps to find your perfect professional match.</p><div class="steps"><div class="step"><div class="step-number">1</div><h3>Register Your Business</h3><p>Verify your profile with your EMI business registration to join our trusted professional network.</p></div><div class="step"><div class="step-number">2</div><h3>Create Your AI Avatar</h3><p>Set up your AI avatar connected to your GitHub, Lovable AI, and other platform profiles.</p></div><div class="step"><div class="step-number">3</div><h3>Connect &amp; Communicate</h3><p>Get matched with compatible professionals and start communicating with AI-assisted tools.</p></div></div></section>
  <section id="avatars" class="avatars-section"><h2 class="section-title">Meet Your AI Avatar</h2><p class="section-subtitle">Your AI avatar represents you across the platform, making connections effortless.</p><div class="avatars-row"><div class="avatar-card"><div class="avatar-circle">🧑‍💼</div><h4>Professional</h4><p>Business-focused avatar for networking</p></div><div class="avatar-card"><div class="avatar-circle">🌟</div><h4>Creative</h4><p>Express your creative side</p></div><div class="avatar-card"><div class="avatar-circle">🚀</div><h4>Entrepreneur</h4><p>Showcase your startup journey</p></div><div class="avatar-card"><div class="avatar-circle">🎯</div><h4>Custom</h4><p>Build your own unique avatar</p></div></div></section>
  <section id="contact"><div class="contact-section"><h2 class="section-title">Get Started Today</h2><p class="section-subtitle">Join Crockett Trust Call and find your perfect professional match.</p><form class="contact-form" onsubmit="event.preventDefault(); alert('Thank you! We will be in touch soon.'); this.reset();"><input type="text" placeholder="Your Name" required><input type="email" placeholder="Your Email" required><input type="text" placeholder="Business Name" required><textarea rows="4" placeholder="Tell us about yourself and your business..."></textarea><button type="submit">Request Early Access</button></form></div></section>
  <footer><p>&copy; 2026 Crockett Trust Call. All rights reserved.</p><p style="margin-top:0.5rem;">Powered by <a href="https://www.cloudflare.com">Cloudflare</a></p></footer>
</body></html>`;
    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
};
