<template>
  <div class="w-screen h-screen flex justify-center items-center p-10" id="app">
    <div
      class="w-full h-full shadow-lg relative overflow-hidden"
      id="cmd-background"
    >
      <!-- Container for Vertical Menu and Content -->
      <div class="flex h-full">
        <!-- Vertical Menu -->
        <ol class="menu text-black p-4 pt-6">
          <li @click="goToSlide(0)">
            <a class="group flex items-center py-3 active" href="#about"
              ><span
                class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
              ></span
              ><span
                class="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
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
                class="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
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
                class="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
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
                class="nav-text text-base font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
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
                  <p class="text-2xl text-white text-center mt-7 ml-48 mr-48">
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
                <h1 class="text-6xl text-white leading-relaxed scrawl-font">
                  Who am i?
                </h1>
                <p class="text-2xl text-white">Development Philosophy</p>
              </div>
            </section>
          </CustomSwiperSlide>
          <CustomSwiperSlide>
            <section
              class="flex flex-col justify-start bg-black bg-opacity-70 text-#1F2937 p-6 m-6 h-[calc(100%-3rem)] border-thick"
            >
              <div class="leading-relaxed mb-4">
                <h1 class="text-4xl text-white leading-relaxed scrawl-font">
                  I Made ...
                </h1>
                <p class="text-xl text-white">Projects</p>
              </div>
              <div class="grid grid-cols-2 gap-4 w-full">
                <figure
                  v-for="(project, index) in projects"
                  :key="index"
                  class="bg-gray-800 rounded border border-white overflow-hidden relative group h-48"
                >
                  <div class="absolute inset-0 w-full h-full">
                    <img
                      :src="project.image"
                      :alt="project.title"
                      class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    />
                  </div>
                  <figcaption
                    class="absolute inset-0 p-3 bg-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-between"
                  >
                    <div>
                      <h4 class="text-lg mb-1 text-white">
                        {{ project.title }}
                      </h4>
                      <p class="text-sm text-gray-300">
                        {{ project.description }}
                      </p>
                    </div>
                    <div class="flex justify-between items-center">
                      <a
                        :href="project.link"
                        class="text-sm text-blue-400 hover:underline"
                        >View Project</a
                      >
                      <a
                        :href="project.github"
                        class="text-white hover:text-gray-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </a>
                    </div>
                  </figcaption>
                </figure>
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
                <p class="text-2xl text-white">Contact</p>
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

    const projects = [
      {
        title: "Project 1",
        description: "Description of Project 1",
        image: require("@/assets/images/portfolio.png"),
        link: "#project1",
        github: "https://github.com/yourusername/project1",
      },
      {
        title: "Project 2",
        description: "Description of Project 2",
        // image: require(""),
        link: "#project2",
        github: "https://github.com/yourusername/project2",
      },
      {
        title: "Project 3",
        description: "Description of Project 3",
        // image: require(""),
        link: "#project3",
        github: "https://github.com/yourusername/project3",
      },
      {
        title: "Project 4",
        description: "Description of Project 4",
        // image: require(""),
        link: "#project4",
        github: "https://github.com/yourusername/project4",
      },
    ];

    return {
      swiperRef,
      goToSlide,
      projects,
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
  overflow: hidden;
}

section {
  background-color: #1f2229;
  background: linear-gradient(180deg, #1f2229, rgb(96 165 250));
  background-size: 100% 2%;
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

.group:hover img {
  opacity: 0;
}

.group:hover figcaption {
  opacity: 1;
}

/* Ensure images cover the entire figure area */
figure {
  position: relative;
}

figure > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
