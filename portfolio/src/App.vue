<template>
  <HelloWorld msg="개발자 양승규 Portfolio" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="css">
@import "./assets/styles/main.css";
</style>
