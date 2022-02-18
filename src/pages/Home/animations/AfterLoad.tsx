import { gsap } from "gsap";

const afterLoad = (origin: any, destination: any, direction: any) => {

  switch (destination.index) {
    case 1:
      gsap.from(".page-two-container", {
        autoAlpha: 0,
      });
      gsap.from(".text_wr", {
        autoAlpha: 0,
        x: -880,
        duration: 1.5,
        ease: "power4.out",
        delay: .1
      });
      break;
    case 2:
      gsap.from(".title_first", {
        autoAlpha: 0,
        y: 420,
        duration: 0.7,
        ease: "power4.out",
      });
      gsap.from(".page-three-content", {
        autoAlpha: 0,
      });
      gsap.from(".title_second", {
        autoAlpha: 0,
        y: -420,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.3,
      });
      gsap.from(".title_third", {
        autoAlpha: 0,
        y: 420,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.6,
      });
      gsap.from(".title_fourth", {
        autoAlpha: 0,
        y: -420,
        duration: 0.7,
        ease: "power4.out",
        delay: 0.9,
      });
      break;
    case 3:
      gsap.from(".fourth-container", {
        autoAlpha: 0,
      });
      gsap.from(".fourth-title", {
        autoAlpha: 0,
        y: -220,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".list-history", {
        autoAlpha: 0,
        x: -420,
        duration: 1,
        ease: "power4.out",
        delay: 0.3,
      });
      break;
    case 4:
      gsap.from(".fifth-wrapper", {
        autoAlpha: 0,
      });
      gsap.from(".fifth-name", {
        autoAlpha: 0,
        y: 420,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".fifth-contact", {
        autoAlpha: 0,
        x: -220,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        delay: .2,
      });
      break;
  }
};
export default afterLoad;
