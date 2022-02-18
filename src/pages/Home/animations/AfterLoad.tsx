import { gsap } from 'gsap';

const elAlpha = (listEle: string[]) => {
  listEle.map((item: string) =>
    gsap.from(item, {
      autoAlpha: 0,
    })
  );
};

const afterLoad = (origin: any, destination: any, direction: any) => {
  switch (destination.index) {
    case 0:
      gsap.from('.introduce-content', {
        autoAlpha: 0,
        y: -980,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.from('.introduce-logo', {
        autoAlpha: 0,
        x: -780,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.from('.introduce-linkconnect', {
        autoAlpha: 0,
        x: 780,
        duration: 1,
        ease: 'power4.out',
        delay: 0.25,
      });
      gsap.from('.introduce-company', {
        autoAlpha: 0,
        x: -780,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5,
      });
      break;
    case 1:
      gsap.from('.item-slide', {
        autoAlpha: 0,
      });
      gsap.from('.item-slide img', {
        autoAlpha: 0,
        x: 880,
        duration: 1.5,
        ease: 'power4.out',
      });
      break;
    case 2:
      elAlpha(['.service-list']);
      gsap.from('.item-1', {
        autoAlpha: 0,
        y: -420,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.from('.item-2', {
        autoAlpha: 0,
        y: -420,
        duration: 1,
        ease: 'power4.out',
        delay: 0.1,
      });
      gsap.from('.item-3', {
        autoAlpha: 0,
        y: -420,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2,
      });
      gsap.from('.item-4', {
        autoAlpha: 0,
        y: -420,
        duration: 1,
        ease: 'power4.out',
        delay: 0.3,
      });
      break;
    case 3:
      elAlpha(['.history-container']);
      gsap.from('.history-tit', {
        autoAlpha: 0,
        y: -220,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.from('.history-content', {
        autoAlpha: 0,
        x: -420,
        duration: 1,
        ease: 'power4.out',
        delay: 0.3,
      });
      break;
    case 4:
      elAlpha(['.connect-content']);
      gsap.from('.connect-name', {
        autoAlpha: 0,
        y: 420,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
      });
      gsap.from('.connect-sub', {
        autoAlpha: 0,
        x: -220,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2,
      });
      gsap.from('.connect-area', {
        autoAlpha: 0,
        x: 420,
        duration: 1,
        ease: 'power4.out',
        delay: 0.2,
      });
      break;
  }
};
export default afterLoad;
