
import { gsap } from "gsap";
const onLeave = (origin: any, destination: any, direction: any) => {
  switch (destination.index) {
    case 0:
      gsap.to(".text_wr", { visibility: "hidden" });
      gsap.to(".page-two-container", { visibility: "hidden" });
      gsap.to(".maxius-logo",{color: "#222222"})
      gsap.to(".changeLang",{color: "#222222"})
      gsap.to("#fp-nav ul li a span ",{background: "#222222"})
      gsap.to(" .btn-toggle span ",{background: "#222"})
      gsap.from(".md-text", {
        autoAlpha: 0,
        y: -980,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".text-decs", {
        autoAlpha: 0,
        x: -280,
        duration: 1,
        ease: "power4.out",
        delay: 0.7,
      });
      gsap.from(".text-bottom", {
        autoAlpha: 0,
        x: -780,
        duration: 1.2,
        ease: "power4.out",
      });
   
      break;
    case 1:
      gsap.to(".changeLang",{color: "#fff"})
      gsap.to(" .btn-toggle span ",{background: "#fff"})
      gsap.to("#fp-nav ul li a span ",{background: "#fff"})
      gsap.to(".maxius-logo",{color: "#fff"})
      gsap.to(".md-text", { visibility: "hidden" });
      gsap.to(".text-decs", { visibility: "hidden" });
      // gsap.to(".title_first", { visibility: "hidden" });
      // gsap.to(".title_second", { visibility: "hidden" });
      // gsap.to(".title_third", { visibility: "hidden" });
      // gsap.to(".title_fourth", { visibility: "hidden" });
      gsap.to(".page-three-content", { visibility: "hidden" });
      break;
    case 2:
      gsap.to(".page-two-container", { visibility: "hidden",duration: 1,ease: "power4.out", });
      gsap.to(".changeLang",{color: "#fff"})
      gsap.to(" .btn-toggle span ",{background: "#fff"})
      gsap.to("#fp-nav ul li a span ",{background: "#fff"})
      gsap.to(".maxius-logo",{color: "#fff"})
      gsap.to(".text_wr", { visibility: "hidden" });
      // gsap.to(".fourth-title", { visibility: "hidden" });
      // gsap.to(".list-history", { visibility: "hidden" });
      gsap.to(".fourth-container", { visibility: "hidden",duration: 1,ease: "power4.out", delay:0.5});
      break;
    case 3:
      gsap.to(".page-three-content", { visibility: "hidden",duration: 1,ease: "power4.out",  });
      gsap.to(".changeLang",{color: "#222222"})
      gsap.to(" .btn-toggle span ",{background: "#222"})
      gsap.to("#fp-nav ul li a span ",{background: "#222222"})
      gsap.to(".maxius-logo",{color: "#222222"})
      // gsap.to(".title_first", { visibility: "hidden" });
      // gsap.to(".title_second", { visibility: "hidden" });
      // gsap.to(".title_third", { visibility: "hidden" });
      // gsap.to(".title_fourth", { visibility: "hidden" });
      // gsap.to(".fifth-name", { visibility: "hidden" });
      // gsap.to(".fifth-contact", { visibility: "hidden" });
      // gsap.to(".fifth-title", { visibility: "hidden" });
      gsap.to(".fifth-wrapper", { visibility: "hidden",duration: 1,ease: "power4.out",  });
      break;
    case 4:
      gsap.to(".fourth-container", { visibility: "hidden",duration: 1,ease: "power4.out",delay:.5 });
      gsap.to(".changeLang",{color: "#fff"})
      gsap.to(" .btn-toggle span ",{background: "#fff"})
      gsap.to("#fp-nav ul li a span ",{background: "#fff"})
      gsap.to(".maxius-logo",{color: "#fff"})
      // gsap.to(".fourth-title", { visibility: "hidden" });
      // gsap.to(".fifth-title", { visibility: "hidden" });
      // gsap.to(".list-history", { visibility: "hidden",duration: 1,ease: "power4.out",  });
  }
};
export default onLeave;
