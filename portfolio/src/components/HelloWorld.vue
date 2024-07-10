<template>
  <div
    class="w-screen h-screen bg-indigo-900 flex justify-center items-center p-10"
  >
    <div
      class="w-full h-full bg-black shadow-lg relative overflow-hidden cmd-background"
    >
      <!-- Container for Vertical Menu and Content -->
      <div class="flex h-full">
        <!-- Vertical Menu -->
        <ol class="menu text-white p-4">
          <li class="mb-4">Home</li>
          <li class="mb-4">Development Philosophy</li>
          <li class="mb-4">Projects</li>
          <li class="mb-4">Contact</li>
        </ol>

        <!-- Swiper Container -->
        <swiper
          :speed="800"
          :effect="'creative'"
          :creativeEffect="{
            prev: {
              shadow: true,
              translate: [0, '-200%', -500],
            },
            next: {
              shadow: true,
              translate: [0, '200%', -500],
            },
          }"
          :pagination="{
            el: '.swiper-pagination',
            clickable: true,
          }"
          :modules="modules"
          :direction="'vertical'"
          :mousewheel="true"
          :loop="true"
          class="mySwiper w-full h-full"
        >
          <swiper-slide>
            <section
              class="flex justify-between bg-black bg-opacity-70 text-white p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed">
                <h1 class="text-6xl leading-relaxed scrawl-font">
                  개발자 양승규 입니다.
                </h1>
                <h3>Home</h3>
              </div>
            </section>
          </swiper-slide>
          <swiper-slide>
            <section
              class="flex justify-between bg-black bg-opacity-70 text-white p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed">
                <h1 class="text-6xl leading-relaxed scrawl-font">Who am i?</h1>
                <h3>Development Philosophy</h3>
              </div>
            </section>
          </swiper-slide>
          <swiper-slide>
            <section
              class="flex flex-col justify-start bg-black bg-opacity-70 text-white p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed mb-10">
                <h1 class="text-6xl leading-relaxed scrawl-font">I Made ...</h1>
                <h3>Projects</h3>
              </div>
              <div class="grid grid-cols-2 gap-4 w-full">
                <div class="bg-gray-800 p-4 rounded border border-white">
                  <h4 class="text-xl mb-2">Project 1</h4>
                  <p>Description of Project 1</p>
                  <a href="#" class="text-blue-400 hover:underline"
                    >Link to Project 1</a
                  >
                </div>
                <div class="bg-gray-800 p-4 rounded border border-white">
                  <h4 class="text-xl mb-2">Project 2</h4>
                  <p>Description of Project 2</p>
                  <a href="#" class="text-blue-400 hover:underline"
                    >Link to Project 2</a
                  >
                </div>
                <div class="bg-gray-800 p-4 rounded border border-white">
                  <h4 class="text-xl mb-2">Project 3</h4>
                  <p>Description of Project 3</p>
                  <a href="#" class="text-blue-400 hover:underline"
                    >Link to Project 3</a
                  >
                </div>
                <div class="bg-gray-800 p-4 rounded border border-white">
                  <h4 class="text-xl mb-2">Project 4</h4>
                  <p>Description of Project 4</p>
                  <a href="#" class="text-blue-400 hover:underline"
                    >Link to Project 4</a
                  >
                </div>
              </div>
            </section>
          </swiper-slide>
          <swiper-slide>
            <section
              class="flex justify-between bg-black bg-opacity-70 text-white p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed">
                <h1 class="text-6xl leading-relaxed scrawl-font">
                  Contact right now!
                </h1>
                <h3>Contact</h3>
              </div>
            </section>
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCreative, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCreative, Mousewheel, Pagination],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

.swiper {
  width: 150%;
  height: 100%;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.scrawl-font {
  font-family: "Permanent Marker", cursive;
}

.cmd-background {
  position: relative;
  /* background-image: url("https://www.shutterstock.com/shutterstock/videos/8617789/thumb/1.jpg ");  */
  background-size: cover;
  background-repeat: no-repeat;
}

.menu {
  min-width: 200px; /* Ensures menu has a minimum width */
}

.border-thick {
  border: 5px solid #533d7a; /* Thicker border */
}

.swiper-pagination {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.swiper-pagination-bullet {
  opacity: 0;
}

.swiper-pagination-bullet-active {
  opacity: 1;
}
</style>
