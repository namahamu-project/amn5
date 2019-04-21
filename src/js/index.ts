import AOS from 'aos';
import 'lazysizes';
import MoveTo from 'moveto';
import '../scss/index.scss';

/* back to top */
const trigger = document.getElementsByClassName('back-to-top')[0];
const { documentElement, body } = document;
const calcScrollTop = () => {
  if (documentElement != null && documentElement.scrollTop > 0) {
    return documentElement.scrollTop;
  }
  if (body != null && body.scrollTop > 0) {
    return body.scrollTop;
  }
  return 0;
};

document.addEventListener('scroll', () => {
  const scrollTop = calcScrollTop();
  trigger.setAttribute('data-is-visible', (scrollTop > 100).toString());
});

/* moveto */
const moveTo = new MoveTo();
moveTo.registerTrigger(trigger);

const arrow = document.getElementsByClassName('about__arrow')[0];
const target = document.getElementsByClassName('book--sikaitenka')[0];
arrow.addEventListener('click', () => {
  moveTo.move(target);
});

/* aos */
AOS.init();
