import 'lazysizes';
import MoveTo from 'moveto';
import '../scss/index.scss';

const trigger = document.getElementsByClassName('back-to-top')[0];
const target = document.documentElement || document.body;
const calcScrollTop = () => target.scrollTop || 0;

document.addEventListener('scroll', () => {
  const scrollTop = calcScrollTop();
  trigger.setAttribute('data-is-visible', (scrollTop > 100).toString());
});

const moveTo = new MoveTo();
moveTo.registerTrigger(trigger);
