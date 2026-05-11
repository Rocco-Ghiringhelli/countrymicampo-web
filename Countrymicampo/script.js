const heroParallax = document.getElementById("hero-parallax");

if (heroParallax) {
  const updateParallax = () => {
    const offset = Math.min(window.scrollY * 0.14, 56);
    heroParallax.style.transform = `scale(1.08) translateY(${offset}px)`;
  };

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}
