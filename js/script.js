const tl = gsap.timeline();

tl.from(".row-2", {
  y: -500,
  duration: 1,
  ease: "power4.out",
  stagger: 0.2,
});
tl.from(".line", {
  width: 0,
  duration: 1,
  stagger: 0.2,
});
tl.from(
  "h2",
  {
    y: 100,
    duration: 0.5,
    stagger: 0.2,
  },
  "-=1.7"
);
tl.from(
  ".box",
  {
    scale: 0,
    duration: 0.5,
    stagger: 0.2,
  },
  "-=0.5"
);
