<template>
  <div class="w-screen h-screen flex justify-center items-center p-10" id="app">
    <div
      class="w-full h-full shadow-lg relative overflow-hidden"
      id="cmd-background"
    >
      <!-- Container for Vertical Menu and Content -->
      <div class="flex h-full">
        <!-- Vertical Menu -->
        <ol class="menu text-black p-4">
          <li class="mb-4 cursor-pointer font-extrabold" @click="goToSlide(0)">
            Home
          </li>
          <li class="mb-4 cursor-pointer font-extrabold" @click="goToSlide(1)">
            Philosophy
          </li>
          <li class="mb-4 cursor-pointer font-extrabold" @click="goToSlide(2)">
            Projects
          </li>
          <li class="mb-4 cursor-pointer font-extrabold" @click="goToSlide(3)">
            Contact
          </li>
        </ol>

        <!-- Swiper Container -->
        <CustomSwiper
          ref="swiperRef"
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
          <CustomSwiperSlide>
            <section
              class="flex justify-between bg-black bg-opacity-70 text-#1F2937 p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed">
                <div class="flex justify-between items-center flex-col">
                  <h1 class="text-6xl leading-relaxed scrawl-font">
                    Hellow, I'm Cheru!
                  </h1>
                  <p class="text-2xl">
                    A Result-Oriented Web Developer building and managing
                    Websites and Web Applications that leads to the success of
                    the overall product
                  </p>
                  <a href="./#projects" class="btn btn--bg">Projects</a>
                </div>
              </div>
            </section>
          </CustomSwiperSlide>
          <CustomSwiperSlide>
            <section
              class="flex justify-between bg-black bg-opacity-70 text-#1F2937 p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed">
                <h1 class="text-6xl leading-relaxed scrawl-font">Who am i?</h1>
                <h3>Development Philosophy</h3>
              </div>
            </section>
          </CustomSwiperSlide>
          <CustomSwiperSlide>
            <section
              class="flex flex-col justify-start bg-black bg-opacity-70 text-#1F2937 p-10 m-10 h-[calc(100%-5rem)] border-thick"
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
          </CustomSwiperSlide>
          <CustomSwiperSlide>
            <section
              class="flex justify-between bg-black bg-opacity-70 text-#1F2937 p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed">
                <h1 class="text-6xl leading-relaxed scrawl-font">
                  Contact right now!
                </h1>
                <h3>Contact</h3>
              </div>
            </section>
          </CustomSwiperSlide>
        </CustomSwiper>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import useSwiper from "./swiper.js";

export default {
  setup() {
    const { swiperRef, goToSlide } = useSwiper();
    return {
      swiperRef,
      goToSlide,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");

.scrawl-font {
  font-family: "Permanent Marker", cursive;
}

#cmd-background {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #ffffff;
  border: black 5px solid;
}

.menu {
  min-width: 200px; /* Ensures menu has a minimum width */
}

.border-thick {
  border: 3px solid black; /* Thicker border */
  border-radius: 15px;
}

#app {
  background-color: #ffffff;
}

section {
  background: linear-gradient(
      to right,
      rgba(245, 245, 245, 0.8),
      rgba(245, 245, 245, 0.8)
    ),
    url("https://www.rammaheshwari.com/assets/svg/common-bg.svg");
  background-size: cover;
  background-position: center;
}

li {
  line-height: 2;
  --pad: max(20px, 4vmin);
  --fs-text: 15px;
  --c-bg: hsl(0, 0%, 5%);
  --c-text: hsl(0, 0%, 95%);
  --vw: 8.91px;
  --vh: 9.19px;
  --vmax: 9.19px;
  --vmin: 8.91px;
  font-weight: 600;
  font-size: var(--fs-text);
  font-feature-settings: "palt";
  text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  font-family: "Neue Montreal Mono";
  white-space: nowrap;
  list-style: none;
  box-sizing: inherit;
  user-select: inherit;
  -webkit-user-drag: inherit;
  -webkit-tap-highlight-color: inherit;
  backface-visibility: inherit;
  margin: 0;
  padding: 0;
  color: inherit;
  text-decoration: none;
  position: relative;
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);
}
</style>
style
