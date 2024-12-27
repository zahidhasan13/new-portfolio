const tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

tl.from(".row-2", {
  y: -500,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
});
tl.from(".line", {
  width: 0,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
});
tl.from(
  ".header h2",
  {
    y: 100,
    duration: 0.5,
    ease: "power4.out",
    stagger: 0.2,
  },
  "-=1.7"
);
tl.from(
  ".box",
  {
    scale: 0,
    duration: 0.5,
    ease: "power4.out",
    stagger: 0.2,
  },
  "-=0.5"
);

const innerCursor = document.querySelector(".custom-cursor--inner");
const outerCursor = document.querySelector(".custom-cursor--outer");

document.addEventListener("mousemove", (event) => {
  const { clientX: x, clientY: y } = event;

  gsap.to(innerCursor, {
    x,
    y,
    duration: 0.1,
  });
  gsap.to(outerCursor, {
    x,
    y,
    duration: 0.2,
    delay: 0.05,
  });
});

// Add hover effect
document.querySelectorAll("a, button").forEach((element) => {
  element.addEventListener("mouseenter", () => {
    gsap.to(outerCursor, {
      scale: 1.5,
      duration: 0.3,
    });
  });
  element.addEventListener("mouseleave", () => {
    gsap.to(outerCursor, {
      scale: 1,
      duration: 0.3,
    });
  });
});

// Marque
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-400%)",
      repeat: -1,
      duration: 6,
      ease: "none",
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      repeat: -1,
      duration: 6,
      ease: "none",
    });
  }
});

// Projects Section
