// core version + navigation, pagination modules:
import Swiper, { Autoplay } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { gsap } from 'gsap';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Autoplay],
  slidesPerView: 'auto',
  speed: 2000,
  autoplay: {
    delay: 0
  },
  loop: true,
  spaceBetween: 10,
  direction: "vertical",
  autoHeight: true,

});

function customvh() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
customvh();

window.addEventListener('resize', customvh);

const jsHover = document.querySelectorAll('.js-hover-img');
jsHover.forEach((el) => {
  var height = el.querySelector('img').clientHeight;
  const container = el.querySelector('.js-hover-img-container')
  container.dataset.height = height;
  el.style.height = height;
  
  el.addEventListener('mouseenter', () => {
    gsap.to(container, {
      height: container.dataset.height - 100,
      duration: .3
    })
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(container, {
      height: container.dataset.height,
      duration: .3
    })
  });

});


