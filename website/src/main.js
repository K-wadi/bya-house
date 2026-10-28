import "./style.css";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
if ("scrollRestoration" in history) history.scrollRestoration = "manual";

const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);

document.querySelectorAll('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
  const target = document.querySelector(a.getAttribute("href"));
  if (!target) return;
  e.preventDefault();
  lenis.scrollTo(target, { offset: 0 });
}));

// ---- the scrubbed film: scroll through #story maps to film time ----
const bgVideo = document.getElementById("bgv");
const story = document.getElementById("story");
const STATIC_HERO = matchMedia("(prefers-reduced-motion: reduce)");
let seekBusy = false, pendingTime = null, lastVideoT = -1;
function requestSeek(t) {
  if (!bgVideo.duration) return;
  if (Math.abs(t - lastVideoT) < 0.008) return;
  if (seekBusy) { pendingTime = t; return; }
  seekBusy = true; lastVideoT = t; bgVideo.currentTime = t;
}
bgVideo.addEventListener("seeked", () => {
  seekBusy = false;
  if (pendingTime !== null) { const t = pendingTime; pendingTime = null; requestSeek(t); }
});
bgVideo.addEventListener("error", () => { seekBusy = false; pendingTime = null; document.body.classList.add("video-failed"); });
function scrubVideo() {
  const p = gsap.utils.clamp(0, 1, window.scrollY / Math.max(1, story.offsetHeight - innerHeight));
  requestSeek(p * (bgVideo.duration - 0.05));
}
async function initVideo() {
  if (STATIC_HERO.matches) return;
  try {
    const res = await fetch("film.mp4");
    if (!res.ok) throw new Error(res.status);
    bgVideo.src = URL.createObjectURL(await res.blob());
    bgVideo.load();
    bgVideo.addEventListener("loadedmetadata", () => { scrubVideo(); document.body.classList.add("video-ready"); }, { once: true });
    lenis.on("scroll", scrubVideo);
    addEventListener("scroll", scrubVideo, { passive: true });   // touch scrolling is native, not Lenis
  } catch { document.body.classList.add("video-failed"); }
}
initVideo();

import("./atmosphere.js").then(({ initAtmosphere }) => initAtmosphere({ lenis }));

// ---- after the story, the film dims behind the sections ----
gsap.to(".stage-dim", { opacity: 0.82, ease: "none",
  scrollTrigger: { trigger: "#story", start: "bottom 90%", end: "bottom 30%", scrub: true } });

// ---- beat copy and section reveals ----
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
if (!REDUCED) {
  gsap.utils.toArray(".beat__inner").forEach((el, i) => {
    if (i === 0) return;
    gsap.from(el, { autoAlpha: 0, y: 40, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" } });
  });
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.from(el, { autoAlpha: 0, y: 32, duration: 1, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true } });
  });
}

// ---- 3D tilt on material cards, desktop only ----
if (matchMedia("(hover: hover) and (min-width: 769px)").matches && !REDUCED) {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });
}

// ---- shop: category filter ----
const filters = document.querySelectorAll("[data-filter]");
filters.forEach((b) => b.addEventListener("click", () => {
  filters.forEach((f) => f.setAttribute("aria-pressed", String(f === b)));
  document.querySelectorAll(".collection").forEach((c) => {
    c.hidden = b.dataset.filter !== "all" && c.dataset.cat !== b.dataset.filter;
  });
  ScrollTrigger.refresh();
}));

// ---- bag: placeholder until checkout is connected ----
let bag = 0;
const bagCount = document.querySelector(".bag__count");
const toast = document.querySelector(".toast");
let toastTimer;
document.querySelectorAll("[data-buy]").forEach((b) => b.addEventListener("click", () => {
  bag++;
  bagCount.textContent = bag;
  toast.textContent = `${b.dataset.buy} is in your bag. Checkout opens at launch.`;
  toast.classList.add("is-on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-on"), 3200);
}));

// ---- newsletter: JS-only success state (contact details are placeholders) ----
const form = document.querySelector(".join");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  form.classList.add("is-done");
  form.querySelector(".join__done").focus();
});

document.querySelector(".year").textContent = new Date().getFullYear();

if (import.meta.env.DEV) { window.__lenis = lenis; window.__ST = ScrollTrigger; window.__bgv = bgVideo; }
