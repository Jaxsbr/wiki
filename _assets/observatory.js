// ver-kyker observatory front-end: render markdown, paint parallax star
// layers, and draw constellation lines that link stars near the cursor.

(function () {
  'use strict';

  // ── markdown ──────────────────────────────────────────────────
  document.getElementById('content').innerHTML =
    marked.parse(window.__MD__, { gfm: true });

  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ── star layers (procedural — no image assets) ────────────────
  // Each .stars layer gets a generated canvas as its background. Nearer
  // layers (higher data-depth) have fewer, larger, warmer stars.
  function paintStars() {
    const w = innerWidth * 1.2;
    const h = innerHeight * 1.2;
    document.querySelectorAll('.layer.stars').forEach((layer) => {
      const count = Number(layer.dataset.stars);
      const size = Number(layer.dataset.size);
      const cvs = document.createElement('canvas');
      cvs.width = w;
      cvs.height = h;
      const ctx = cvs.getContext('2d');
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const r = size * (0.4 + Math.random() * 0.8);
        const warm = Math.random() < 0.3;
        const a = 0.25 + Math.random() * 0.6;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = warm
          ? `rgba(196, 163, 90, ${a})`
          : `rgba(225, 228, 240, ${a})`;
        ctx.shadowColor = warm ? 'rgba(196,163,90,0.8)' : 'rgba(200,210,255,0.8)';
        ctx.shadowBlur = r * 2.5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      layer.style.background = `url(${cvs.toDataURL()})`;
    });
  }
  paintStars();

  if (!reduceMotion && window.Parallax) {
    new Parallax(document.getElementById('scene'), {
      relativeInput: false,
      hoverOnly: false,
      frictionX: 0.06,
      frictionY: 0.06,
    });
  }

  // ── constellation: gold threads between stars near the cursor ─
  // The metaphor: wiki pages are stars; moving through them reveals links.
  const cvs = document.getElementById('constellation');
  const ctx = cvs.getContext('2d');
  let pts = [];
  let mouse = null;
  let raf = 0;

  function reseed() {
    cvs.width = innerWidth;
    cvs.height = innerHeight;
    pts = Array.from({ length: Math.round((innerWidth * innerHeight) / 16000) }, () => ({
      x: Math.random() * innerWidth,
      y: Math.random() * innerHeight,
    }));
  }
  reseed();

  const REACH = 150; // px around cursor where constellations appear

  function draw() {
    raf = 0;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    if (!mouse) return;
    const near = pts.filter(
      (p) => Math.hypot(p.x - mouse.x, p.y - mouse.y) < REACH
    );
    for (const p of near) {
      const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
      const a = (1 - d / REACH) * 0.5;
      ctx.strokeStyle = `rgba(196, 163, 90, ${a})`;
      ctx.lineWidth = 0.7;
      ctx.beginPath();
      ctx.moveTo(mouse.x, mouse.y);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
      ctx.fillStyle = `rgba(232, 220, 190, ${a + 0.25})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
      ctx.fill();
    }
    // faint threads between revealed stars themselves
    for (let i = 0; i < near.length; i++) {
      for (let j = i + 1; j < near.length; j++) {
        const d = Math.hypot(near[i].x - near[j].x, near[i].y - near[j].y);
        if (d < REACH * 0.7) {
          ctx.strokeStyle = `rgba(196, 163, 90, ${(1 - d / (REACH * 0.7)) * 0.18})`;
          ctx.beginPath();
          ctx.moveTo(near[i].x, near[i].y);
          ctx.lineTo(near[j].x, near[j].y);
          ctx.stroke();
        }
      }
    }
  }

  if (!reduceMotion) {
    addEventListener('mousemove', (e) => {
      mouse = { x: e.clientX, y: e.clientY };
      if (!raf) raf = requestAnimationFrame(draw);
    });
    addEventListener('mouseout', () => {
      mouse = null;
      if (!raf) raf = requestAnimationFrame(draw);
    });
  }

  let resizeTimer = 0;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      paintStars();
      reseed();
    }, 200);
  });
})();
