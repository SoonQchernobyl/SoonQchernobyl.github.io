import { createApp } from 'vue';
import App from './App.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCreative, Mousewheel, Pagination } from 'swiper/modules';
import 'swiper/css';

import { register } from 'swiper/element/bundle';
register();

// Create Vue application
const app = createApp(App);

// Register Swiper components globally if needed
app.component('CustomSwiper', Swiper);
app.component('CustomSwiperSlide', SwiperSlide);

// Provide Swiper modules globally if needed
app.provide('swiperModules', [EffectCreative, Mousewheel, Pagination]);

// Mount the app
app.mount('#app');
