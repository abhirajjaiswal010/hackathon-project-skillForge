// Dynamic Navigation
document.getElementById("nav-home").addEventListener("click", () => {
  document.querySelector("#hero").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("nav-features").addEventListener("click", () => {
  document.querySelector("#features").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("nav-how-it-works").addEventListener("click", () => {
  document.querySelector("#how-it-works").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("nav-testimonials").addEventListener("click", () => {
  document.querySelector("#testimonials").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("nav-about").addEventListener("click", () => {
  document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
});

// Button Clicks
document.getElementById("hero_btn").addEventListener("click", () => {
  document.querySelector("#signup").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("cta").addEventListener("click", () => {
  document.querySelector("#signup").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("nav-login-btn").addEventListener("click", () => {
  document.querySelector("#signup").scrollIntoView({ behavior: "smooth" });
});
