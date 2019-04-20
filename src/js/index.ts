import AOS from 'aos';
import 'lazysizes';
import MoveTo from 'moveto';
import '../scss/index.scss';

/* back to top */
const trigger = document.getElementsByClassName('back-to-top')[0];
const target = document.documentElement || document.body;
const calcScrollTop = () => target.scrollTop || 0;

document.addEventListener('scroll', () => {
  const scrollTop = calcScrollTop();
  trigger.setAttribute('data-is-visible', (scrollTop > 100).toString());
});

/* moveto */
const moveTo = new MoveTo();
moveTo.registerTrigger(trigger);

/* aos */
AOS.init();
