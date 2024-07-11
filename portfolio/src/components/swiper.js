
import { ref, inject, onMounted } from "vue";
import Swiper from "swiper";

export default function useSwiper() {
  const swiperRef = ref(null);
  const modules = inject("swiperModules");

  onMounted(() => {
    swiperRef.value = new Swiper(".mySwiper", {
      speed: 800,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, "-200%", -500],
        },
        next: {
          shadow: true,
          translate: [0, "200%", -500],
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      direction: "vertical",
      mousewheel: true,
      loop: true,
    });
  });

  const goToSlide = (slideIndex) => {
    if (swiperRef.value) {
      swiperRef.value.slideToLoop(slideIndex);
    }
  };

  return {
    modules,
    swiperRef,
    goToSlide,
  };
}