/* Cal Niu — immersive scroll behaviours (vanilla, no deps) */
(function () {
  "use strict";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nav = document.querySelector(".nav");
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };

  /* ---- reveal on scroll ---- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal, .reveal-zoom");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  /* ---- background parallax ---- */
  var parallaxEls = [];
  function applyParallax() {
    var vh = window.innerHeight;
    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      var host = el.closest("section") || el.parentElement;
      var r = host.getBoundingClientRect();
      if (r.bottom < -300 || r.top > vh + 300) continue;
      var speed = parseFloat(el.getAttribute("data-parallax")) || 0.16;
      var dy = ((r.top + r.height / 2) - vh / 2) * -speed;
      el.style.transform = "translate3d(0," + dy.toFixed(1) + "px,0)";
    }
  }

  /* ---- pinned scene reel (crossfade scrub) ---- */
  var reel, reelBgs, reelCaps, reelDots;
  function applyReel() {
    if (!reel) return;
    var vh = window.innerHeight;
    var total = reel.offsetHeight - vh;
    if (total <= 0) return;
    var top = reel.getBoundingClientRect().top;
    var p = clamp(-top / total, 0, 1);
    var n = reelBgs.length;
    var pos = p * (n - 1);
    var active = Math.round(pos);
    for (var i = 0; i < n; i++) {
      var d = Math.abs(pos - i);
      var op = clamp(1 - d, 0, 1);
      reelBgs[i].style.opacity = op.toFixed(3);
      var img = reelBgs[i].firstElementChild;
      if (img && !reduce) img.style.transform = "scale(" + (1.12 - 0.12 * op).toFixed(3) + ")";
      if (reelCaps[i]) {
        var co = clamp(1 - d * 1.7, 0, 1);
        reelCaps[i].style.opacity = co.toFixed(3);
        reelCaps[i].style.transform = "translateY(" + (22 * (1 - co)).toFixed(1) + "px)";
      }
    }
    if (reelDots) for (var k = 0; k < reelDots.length; k++) reelDots[k].classList.toggle("on", k === active);
  }

  /* ---- horizontal seasons ---- */
  var hs, htrack;
  function applyH() {
    if (!hs || !htrack) return;
    var vw = window.innerWidth;
    var total = hs.offsetHeight - window.innerHeight;
    if (total <= 0) return;
    var top = hs.getBoundingClientRect().top;
    var p = clamp(-top / total, 0, 1);
    var max = htrack.scrollWidth - vw;
    htrack.style.transform = "translate3d(" + (-p * max).toFixed(1) + "px,0,0)";
  }

  /* ---- scroll progress bar ---- */
  var bar;
  function applyBar() {
    if (!bar) return;
    var h = document.documentElement;
    var max = h.scrollHeight - h.clientHeight;
    bar.style.transform = "scaleX(" + (max > 0 ? (h.scrollTop / max) : 0).toFixed(4) + ")";
  }

  var ticking = false;
  function frame() {
    if (!reduce) applyParallax();
    applyReel();
    applyH();
    applyBar();
    ticking = false;
  }
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    if (!ticking) { ticking = true; window.requestAnimationFrame(frame); }
  }

  /* ---- bidirectional fade for story media (in AND out) ---- */
  function initFade() {
    var fades = document.querySelectorAll("[data-fade]");
    if (!fades.length) return;
    if (!("IntersectionObserver" in window) || reduce) {
      fades.forEach(function (f) { f.classList.add("vis"); });
      return;
    }
    var fio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { e.target.classList.toggle("vis", e.isIntersecting); });
    }, { threshold: 0.22, rootMargin: "-4% 0px -4% 0px" });
    fades.forEach(function (f) { fio.observe(f); });
  }

  /* ---- scrollytelling: pinned bg crossfades as text steps arrive ---- */
  function initScrolly() {
    var sc = document.querySelector("[data-scrolly]");
    if (!sc) return;
    var bgs = sc.querySelectorAll(".sbg");
    var steps = sc.querySelectorAll(".step");
    function setActive(i) {
      for (var k = 0; k < bgs.length; k++) bgs[k].classList.toggle("on", k === i);
    }
    if (!("IntersectionObserver" in window)) { setActive(0); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(parseInt(e.target.getAttribute("data-i"), 10) || 0);
      });
    }, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
    steps.forEach(function (s) { io.observe(s); });
    setActive(0);
  }

  /* ---- intro loader: show splash, then reveal the page ---- */
  function initLoader() {
    var loader = document.getElementById("loader");
    if (!loader) { document.body.classList.remove("preload"); return; }
    requestAnimationFrame(function () { loader.classList.add("show"); }); // fade the logo in
    var finished = false;
    function finish() {
      if (finished) return; finished = true;
      loader.classList.add("done");
      document.body.classList.remove("preload");
      setTimeout(function () { if (loader && loader.parentNode) loader.parentNode.removeChild(loader); }, 900);
    }
    // fixed, pleasant duration — NOT tied to images finishing loading
    setTimeout(finish, 2300);
  }

  function init() {
    initLoader();
    initReveal();
    initFade();
    initScrolly();
    parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
    reel = document.querySelector("[data-reel]");
    if (reel) {
      reelBgs = reel.querySelectorAll(".reel-bg");
      reelCaps = reel.querySelectorAll(".reel-cap");
      reelDots = reel.querySelectorAll(".reel-dots i");
    }
    hs = document.querySelector("[data-hscroll]");
    if (hs) htrack = hs.querySelector(".htrack");
    bar = document.querySelector(".scrollbar i");

    if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", function () {
      parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
      frame();
    }, { passive: true });
    window.addEventListener("load", frame);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else { init(); }
})();
