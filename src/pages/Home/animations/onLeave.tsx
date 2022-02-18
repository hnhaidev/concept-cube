import { gsap } from 'gsap';
const elHidden = (listEle: string[]) => {
  listEle.map((item: string) =>
    gsap.set(item, {
      visibility: 'hidden',
    })
  );
};

const onLeave = (origin: any, destination: any, direction: any) => {
  switch (destination.index) {
    case 0:
      elHidden(['.item-slide', '.service-list', '.history-container', '.connect-content']);

      break;
    case 1:
      elHidden([
        '.introduce-content',
        '.introduce-logo',
        '.page-three-content',
        '.introduce-company',
        '.service-list',
        '.history-container',
        '.connect-content',
      ]);
      break;
    case 2:
      elHidden([
        '.introduce-content',
        '.introduce-logo',
        '.page-three-content',
        '.introduce-company',
        '.item-slide',
        '.history-container',
        '.connect-content',
      ]);
      break;
    case 3:
      elHidden([
        '.introduce-content',
        '.introduce-logo',
        '.page-three-content',
        '.introduce-company',
        '.item-slide',
        '.service-list',
        '.connect-content',
      ]);
      break;
    case 4:
      elHidden([
        '.introduce-content',
        '.introduce-logo',
        '.page-three-content',
        '.introduce-company',
        '.item-slide',
        '.service-list',
        '.history-container',
      ]);
      break;
  }
};
export default onLeave;
