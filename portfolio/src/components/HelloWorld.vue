<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
      <div id="app" data-v-app="">
        <div class="hello">
          <h1>개발자 양승규 Portfolio</h1>
          <header></header>
          <main
            id="fullpage"
            class="fullpage-wrapper"
            style="
              height: 100%;
              position: relative;
              touch-action: none;
              transform: translate3d(0px, 0px, 0px);
              transition: all 700ms ease 0s;
            "
          >
            <section
              class="section about black fp-section fp-table"
              style="height: 919px"
            >
              <div class="fp-tableCell" style="height: 919px">
                <div class="title">
                  <h3 class="grow bold black-point">"호기심으로"</h3>
                  <h1 class="bold">
                    개발에 몰입하는 개발자 <br />
                    양승규 입니다<span class="black-point">.</span>
                  </h1>
                </div>
              </div>
            </section>
            <section
              class="section skills black fp-section fp-table"
              style="height: 919px"
            >
              <div class="fp-tableCell" style="height: 919px">
                <h2 class="skill-title bold">
                  저는 <span class="black-point">_ _ _ _</span> 를 잘해요<span
                    class="black-point"
                    >.</span
                  >
                </h2>
                <div class="skill">
                  <div class="value">
                    <h3 class="bold">ReactJS</h3>
                    <p class="explain normal">
                      Recoil을 이용하여 전역 상태관리를 할 수 있습니다 <br />
                      함수형 컴포넌트 문법에 익숙합니다. <br />
                      React hooks를 능숙하게 사용합니다. <br />
                    </p>
                  </div>
                  <div class="value">
                    <h3 class="bold">GIT</h3>
                    <p class="explain normal">
                      git을 사용하여 프로젝트 관리를 합니다. <br />
                      git-flow에 대해 압니다. <br />
                      GitKraken을 사용할 수 있습니다. <br />
                    </p>
                  </div>
                </div>
              </div>
            </section>
            <section
              class="section projects white fp-section fp-table"
              style="height: 919px"
            >
              <div class="fp-tableCell" style="height: 919px">
                <h2 class="project-title bold">
                  <span class="white-point">_ _ _ _</span> 를 만들어
                  보았습니다<span class="white-point">.</span>
                </h2>
                <div class="wrap">
                  <div class="box">
                    <div class="project">
                      <hr class="line" />
                      <div class="inline">
                        <span class="number medium text"> 01</span
                        ><a
                          href="https://github.com/themoment-team/official-gsm-front"
                          target="_blank"
                          ><img
                            class="code-link"
                            src="https://github.githubassets.com/favicons/favicon.png"
                            alt=""
                        /></a>
                      </div>
                      <a href="https://official.hellogsm.kr/" target="_blank"
                        ><p class="medium">Lotical</p>
                        <p class="normal">MMORPG LostArk's tool site</p></a
                      >
                    </div>
                    <div class="project">
                      <hr class="line" />
                      <div class="inline">
                        <span class="number medium text"> 02</span
                        ><a
                          href="https://github.com/themoment-team/hello-gsm-front"
                          target="_blank"
                          ><img
                            class="code-link"
                            src="https://github.githubassets.com/favicons/favicon.png"
                            alt=""
                        /></a>
                      </div>
                      <a href="https://hellogsm.kr/" target="_blank"
                        ><p class="medium">SPOTIMUSIC</p>
                        <p class="normal">Find Your Music In Spotify</p></a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer
              class="section black fp-section fp-table"
              style="height: 100px"
            >
              <div class="fp-tableCell" style="height: 0">
                <div class="contact">
                  <h3 class="medium">
                    여기로 연락 주세요<span class="black-point">.</span>
                  </h3>
                  <div class="icons">
                    <p class="normal">
                      <a
                        href="mailto:yoosioff@gmail.com"
                        class="e-mail"
                        target="_blank"
                        >yoosioff@gmail.com</a
                      >
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
      <!-- Code injected by live-server -->
    </body>
  </div>
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
