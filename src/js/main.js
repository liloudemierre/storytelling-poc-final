import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
// const tlMain = gsap.timeline({
//   scrollTrigger: {
//     trigger: "body",
//     start: "top top",
//     // end: "bottom+=150% top",
//     pin: true,
//     scrub: 5,
//     markers: false,
//   },
// });
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".oiseau",
    start: "top top",
    end: "bottom+=150% top",
    pin: true,
    scrub: 5,
    markers: false,
  },
});

tl.to(".oiseau-image", { x: "300%", y: "-200%", duration: 6, ease: "none" })
  .to(".crique-image", { y: "-85%", duration: 6, ease: "none" }, "+=5")
  .to(
    ".crique-text",
    {
      ease: "sine.inOut",
      opacity: "100",
      duration: 3,
    },
    "+=2"
  )
  .to(".crique-image", {
    scale: "20",
    x: "720%",
    duration: 7,
    delay: "10",
  })
  .to(".crique-text", { x: "1000%", duration: 7, delay: "-7" })
  .to(".oiseau", { opacity: "0" });

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".vacancier",
    start: "top top",
    end: "bottom+=150% top",
    pin: true,
    scrub: 5,
    markers: false,
  },
});

tl2
  .to(".vacancier-text", {
    ease: "sine.inOut",
    opacity: "100",
  })
  .to(".herbe-right", {
    x: "-70%",
    duration: "3",
  })
  .to(
    ".herbe-left",
    {
      x: "70%",
      duration: "3",
    },
    "-=3"
  )
  .to(
    ".vacancier-right",
    {
      x: "-70%",
      duration: "3",
    },
    "-=3"
  )

  .to(
    ".vacancier-left",
    {
      x: "70%",
      duration: "3",
    },
    "-=3"
  )
  .to(".vacancier-text", {
    duration: 2,
    ease: "sine.inOut",
    opacity: "0",
  })
  .to(".herbe-right, .vacancier-right", {
    x: "70%",
    duration: "1",
  })
  .to(
    ".herbe-left, .vacancier-left",
    {
      x: "-70%",
    },
    "-=1"
  );

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".chateau",
    start: "top top",
    end: "bottom+=150% top",
    pin: true,
    scrub: 5,
    markers: false,
  },
});

tl3
  .to(".chateau-text", { ease: "sine.inOut", opacity: "100" })
  .to(".chateau-image", { y: "-70%" });
tlMain.add(tl);
tlMain.add(tl2);
tlMain.add(tl3);
