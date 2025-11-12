import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

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
  .to(".crique-image", { y: "-80%", duration: 6, ease: "none" }, "+=5")
  .to(
    ".crique-text",
    {
      ease: "sine.inOut",
      opacity: "100",
      duration: 3,
    },
    "+=2"
  )
  .to(".crique-image", { scale: "20", x: "720%", duration: 7, delay: "10" })
  .to(".crique-text", { x: "1000%", duration: 7, delay: "-7" });
