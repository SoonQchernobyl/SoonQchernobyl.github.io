<template>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />
    <title>portfolio</title>
  </head>
  <body class="" style="">
    <noscript>
      <strong
        >We're sorry but portfolio doesn't work properly without JavaScript
        enabled. Please enable it to continue.</strong
      >
    </noscript>
    <header></header>
    <main></main>
    <section
      class="flex items-center justify-between bg-black text-white"
      style="height: 950px"
    >
      <div>
        <h3>"호기심으로"</h3>
        <h1>
          개발에 몰입하는 개발자 <br />
          양승규 입니다<span>.</span>
        </h1>
      </div>
    </section>
    <section
      class="flex items-center justify-center bg-white text-black"
      style="height: 950px"
    >
      <div>
        <h2>저는 <span>_ _ _ _</span> 를 잘해요<span>.</span></h2>
        <div>
          <div>
            <h3>ReactJS</h3>
            <p>
              Recoil을 이용하여 전역 상태관리를 할 수 있습니다 <br />
              함수형 컴포넌트 문법에 익숙합니다. <br />
              React hooks를 능숙하게 사용합니다. <br />
            </p>
          </div>
          <div>
            <h3>GIT</h3>
            <p>
              git을 사용하여 프로젝트 관리를 합니다. <br />
              git-flow에 대해 압니다. <br />
              GitKraken을 사용할 수 있습니다. <br />
            </p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="flex items-center justify-between bg-black text-white"
      style="height: 950px"
    >
      <div>
        <h2 class="">
          <span>_ _ _ _</span> 를 만들어 보았습니다<span>.</span>
        </h2>
        <div></div>
      </div>
    </section>
    <footer>
      <div>
        <div>
          <h3>여기로 연락 주세요<span>.</span></h3>
          <div>
            <p>
              <a href="mailto:yoosioff@gmail.com" class="e-mail" target="_blank"
                >soongq426@gmail.com</a
              >
            </p>
          </div>
        </div>
      </div>
    </footer>
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
<style scoped></style>
