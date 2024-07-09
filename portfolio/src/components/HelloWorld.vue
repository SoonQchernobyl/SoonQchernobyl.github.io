<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>portfolio</title>
  </head>
  <body class="">
    <div
      class="w-screen h-screen bg-gray-500 flex justify-center items-center p-10"
    >
      <div class="w-full h-full bg-black shadow-lg">
        <div class="w-full h-full border-2 border-white flex">
          <ol class="relative flex flex-wrap flex-col">
            <li class="absolute text-white top-10"><div>Column 1</div></li>
            <li class="absolute text-white top-20"><div>Column 2</div></li>
            <li class="absolute text-white top-30"><div>Column 3</div></li>
            <li class="absolute text-white top-40"><div>Column 4</div></li>
          </ol>
        </div>
      </div>
    </div>

    <main class="">
      <section
        class="flex justify-between bg-black text-white pr-80 pl-80 pt-60 items-start"
        style="height: 950px"
      >
        <div class="leading-relaxed">
          <h1 class="text-6xl leading-relaxed">개발자 양승규 입니다.</h1>
          <h3>Portfolio Page</h3>
        </div>
      </section>
      <section
        class="flex justify-between bg-white text-black pr-80 pl-80 pt-60 items-start"
        style="height: 950px"
      >
        <div class="leading-relaxed">
          <h1 class="text-6xl leading-relaxed">Who am i?</h1>
          <h3>Concept page</h3>
        </div>
      </section>
      <section
        class="flex justify-between bg-black text-white pr-80 pl-80 pt-60 items-start"
        style="height: 950px"
      >
        <div class="leading-relaxed">
          <h1 class="text-6xl leading-relaxed">I Made ...</h1>
          <h3>Project Page</h3>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  max-width: 100%;
}
body {
  overflow-x: hidden;
}
</style>
