import { gsap } from 'gsap';
const elHidden = (listEle: string[]) => {
  listEle.map((item: string) =>
    gsap.set(item, {
      visibility: 'hidden',
    })
  );
};
const elDot = document.getElementById('fp-nav');
const elBtnToggle = document.getElementById('btn-toggle');
const elChangeLang = document.getElementById('changeLang');
const changeColor = () => {
  elDot?.classList.add('changeColor');
  elBtnToggle?.classList.add('changeColor');
  elChangeLang?.classList.add('changeColor');
};
const changeColor02 = () => {
  elDot?.classList.remove('changeColor');
  elBtnToggle?.classList.remove('changeColor');
  elChangeLang?.classList.remove('changeColor');
};

const onLeave = (origin: any, destination: any, direction: any) => {
  switch (destination.index) {
    case 0:
      elHidden(['.item-slide', '.service-list', '.history-container', '.connect-content']);
      changeColor02();
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
      changeColor02();
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
      changeColor02();
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
      changeColor();
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
      changeColor02();
      break;
  }
};
export default onLeave;
