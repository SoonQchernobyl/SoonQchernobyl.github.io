<template>
  <div class="w-screen h-screen flex justify-center items-center p-10" id="app">
    <div
      class="w-full h-full shadow-lg relative overflow-hidden"
      id="cmd-background"
    >
      <!-- Container for Vertical Menu and Content -->
      <div class="flex h-full">
        <!-- Vertical Menu -->
        <ol class="menu text-black p-4 pt-8">
          <li @click="goToSlide(0)">
            <a class="group flex items-center py-3 active" href="#about"
              ><span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
              ></span
              ><span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                >About</span
              ></a
            >
          </li>

          <li @click="goToSlide(1)">
            <a class="group flex items-center py-3 active" href="#about"
              ><span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
              ></span
              ><span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                >Philosophy</span
              ></a
            >
          </li>

          <li @click="goToSlide(2)">
            <a class="group flex items-center py-3 active" href="#about"
              ><span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
              ></span
              ><span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                >Projects</span
              ></a
            >
          </li>

          <li @click="goToSlide(3)">
            <a class="group flex items-center py-3 active" href="#about"
              ><span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
              ></span
              ><span
                class="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
                >Contact</span
              ></a
            >
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
              <div class="flex justify-center leading-relaxed">
                <div class="flex justify-start items-center flex-col">
                  <h1 class="text-6xl text-white leading-relaxed scrawl-font">
                    Hellow, I'm Cheru!
                  </h1>
                  <p class="text-2xl text-white text-center">
                    A Result-Oriented Web Developer building and managing
                    Websites and Web Applications that leads to the success of
                    the overall product
                  </p>
                  <button class="btn mt-auto" @click="goToSlide(2)">
                    Projects
                  </button>
                </div>
              </div>
            </section>
          </CustomSwiperSlide>
          <CustomSwiperSlide>
            <section
              class="flex justify-between bg-slate-600 bg-opacity-70 text-#1F2937 p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed">
                <h1 class="text-6xl text-white leading-relaxed scrawl-font">Who am i?</h1>
                <p class="text-2xl text-white ">
                  Development Philosophy
                  </p>
              </div>
            </section>
          </CustomSwiperSlide>
          <CustomSwiperSlide>
            <section
              class="flex flex-col justify-start bg-black bg-opacity-70 text-#1F2937 p-10 m-10 h-[calc(100%-5rem)] border-thick"
            >
              <div class="leading-relaxed mb-10">
                <h1 class="text-6xl text-white leading-relaxed scrawl-font">I Made ...</h1>
                <p class="text-2xl text-white ">
                  Projects
                  </p>
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
                <h1 class="text-6xl text-white leading-relaxed scrawl-font">
                  Contact right now!
                </h1>
                <p class="text-2xl text-white ">
                  Contact
                  </p>
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

#app {
  background-color: #1f2229;
}

#cmd-background {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #1f2229;
  border: #60dbfa 2px solid;
}

.menu {
  min-width: 200px; /* Ensures menu has a minimum width */
}

.border-thick {
  border: 2px solid #60dbfa; /* Thicker border */
  border-radius: 15px;
}

section {
  background-color: #1f2229;
  background: linear-gradient(90deg, #1f2229, #60dbfa);
  background-size: 100% 20%;
  background-position: center;
  background-repeat: no-repeat;
  background-position: bottom right;
}

li {
  line-height: 2;
  --fs-text: 15px;
  font-weight: 600;
  font-size: var(--fs-text);
  font-family: "Neue Montreal Mono";
  box-sizing: inherit;
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.1, 0.4, 0.2, 1);
}

.btn {
  background: #1f2937;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  transition: transform 0.3s;
  padding: 0.5rem 4rem;
  font-size: 2rem;
}

.btn:hover {
  transform: translateY(-3px);
}
</style>
