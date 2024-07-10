<template>
  <div class="w-screen h-screen bg-gray-500 flex justify-center items-center p-10">
    <div class="w-full h-full bg-black shadow-lg relative overflow-hidden">
      <!-- Vertical Menu -->
      <ol class="absolute top-10 left-10 z-10 text-white">
        <li class="mb-4">Home</li>
        <li class="mb-4">Development Philosophy</li>
        <li class="mb-4">Projects</li>
        <li class="mb-4">Contact</li>
      </ol>

      <swiper
        :effect="'creative'"
        :creativeEffect="{
          prev: {
            shadow: true,
            translate: [0, '-100%', -500],
          },
          next: {
            shadow: true,
            translate: [0, '100%', -500],
          },
        }"
        :modules="modules"
        :direction="'vertical'"
        :mousewheel="true"
        :loop="true"
        class="mySwiper w-full h-full"
      >
        <swiper-slide>
          <section class="flex justify-between bg-black text-white pr-80 pl-80 pt-60 items-start h-full">
            <div class="leading-relaxed">
              <h1 class="text-6xl leading-relaxed">개발자 양승규 입니다.</h1>
              <h3>Portfolio Page</h3>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide>
          <section class="flex justify-between bg-black text-white pr-80 pl-80 pt-60 items-start h-full">
            <div class="leading-relaxed">
              <h1 class="text-6xl leading-relaxed">Who am i?</h1>
              <h3>Development Philosophy</h3>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide>
          <section class="flex flex-col justify-start bg-black text-white pr-80 pl-80 pt-60 items-start h-full">
            <div class="leading-relaxed mb-20">
              <h1 class="text-6xl leading-relaxed">I Made ...</h1>
              <h3>Projects</h3>
            </div>
            <div class="grid grid-cols-2 gap-4 w-full">
              <div class="bg-gray-800 p-4 rounded border border-white">
                <h4 class="text-xl mb-2">Project 1</h4>
                <p>Description of Project 1</p>
                <a href="#" class="text-blue-400 hover:underline">Link to Project 1</a>
              </div>
              <div class="bg-gray-800 p-4 rounded border border-white">
                <h4 class="text-xl mb-2">Project 2</h4>
                <p>Description of Project 2</p>
                <a href="#" class="text-blue-400 hover:underline">Link to Project 2</a>
              </div>
              <div class="bg-gray-800 p-4 rounded border border-white">
                <h4 class="text-xl mb-2">Project 3</h4>
                <p>Description of Project 3</p>
                <a href="#" class="text-blue-400 hover:underline">Link to Project 3</a>
              </div>
              <div class="bg-gray-800 p-4 rounded border border-white">
                <h4 class="text-xl mb-2">Project 4</h4>
                <p>Description of Project 4</p>
                <a href="#" class="text-blue-400 hover:underline">Link to Project 4</a>
              </div>
            </div>
          </section>
        </swiper-slide>
        <swiper-slide>
          <section class="flex justify-between bg-black text-white pr-80 pl-80 pt-60 items-start h-full">
            <div class="leading-relaxed">
              <h1 class="text-6xl leading-relaxed">Contact right now!</h1>
              <h3>Contact</h3>
            </div>
          </section>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCreative, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/mousewheel';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCreative, Mousewheel],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}
</style>