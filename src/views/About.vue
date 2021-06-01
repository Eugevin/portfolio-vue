<template>
  <div class="about">
    <Inner
      :background="innerBg"
      sup="About Me."
      title="In total, I've been doing front-end development for over 4 years!"
    />
    <div class="wrapper">
      <div class="wrapper-before">
        <h2>Short programming story</h2>
      </div>
      <div class="wrapper-after">
        <ul class="color-list">
          <li>
            <span>2012 -- First steps 😎</span>
            <p>
              I am 13 years old. I play minecraft. I see a hype of servers on it
              and start, without understanding everything that is happening
              around, create my own servers and connect the client-server
              architecture on the CMS DLE and the launcher of this game, which
              is written in Java. Too many complexities in the intricacies of
              the frontend and backend (then I didn't know what it was yet) and
              I just repeat everything in foreign video tutorials. Later I
              realized that with my knowledge you can make a little money and I
              started unpacking clients of other minecraft servers and packing
              various cheats in them for sale to real people. Thug life in my
              13...
            </p>
          </li>
          <li>
            <span>2017 -- Frontend or no way! 🤡</span>
            <p>
              After a long break in programming, I go to university for
              Information Security and fall in love with C++. The university
              program in this language is very easy for me and I begin to study
              the possibilities of my development in its field. I understand
              that in this language in my country you will not go far but i
              continue to look for options: in my opinion, Python and JavaScript
              is awesome! I choose JavaScript and start learning HTML and CSS
              for coding interfaces.
            </p>
          </li>
          <li>
            <span>2018 -- F**k off, society 😢</span>
            <p>
              I still don’t come close to JavaScript, but I already know HTML
              and CSS very well in order to make money and live away from my
              parents. One fine moment I quit my managerial position at work and
              on the same day I fly to an unfamiliar city, in which I have never
              been before. I was tired of almost everything in the world except
              for what I was really in love with - and that was Frontend. It was
              enough for me for two months (thanks to terrible overtime for 13
              hours a day, seven days a week on freelance) and I return back by
              the same plane.
            </p>
          </li>
          <li>
            <span>2019 - NOWADAYS -- I'm in love with the... JS! 💻</span>
            <p>
              In 2019 I thoroughly studied
              <a target="_blank" href="https://javascript.info/"
                >learn.javascript</a
              >. I spent a year on vanilla and Typescript, occasionally using
              some kind of libraries, and then I started learning React.js and
              taking larger orders. I managed to work for a year in the office
              as a Front-end Developer and still grow in my career. I use React
              at work, Vue.js at home. At the moment I take orders for both
              React and Vue.js, but I prefer the second one.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <div class="large-block">
        <div class="large-block__inner"></div>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper-before">
        <h2>My Services</h2>
      </div>
      <div class="wrapper-after">
        <p>
          Programming in JavaScript, creating user interfaces, clean websites in
          HTML5, CSS3 and Vanilla JS, creating SPA, creating and maintaining
          high-load Frontend Applications, creating SPA cross-platform
          applications for desktops and mobile devices
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper-before">
        <h2>Why Me</h2>
      </div>
      <div class="wrapper-after">
        <h5>Huge experience</h5>
        <p>
          I have worked on a large number of commercial projects for both
          private and public companies. I have been and am engaged in support of
          old and development of new projects
        </p>
        <h5>High Quality</h5>
        <p>
          Most of my clients are happy to work with me, because I try to adapt
          to each of them so that our communication is as productive as possible
        </p>
        <h5>Fast response</h5>
        <p>
          I quickly respond to messages from my clients and help with questions
          on the future development of their projects
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper-before">
        <h2>My Clients</h2>
      </div>
      <div class="wrapper-after">
        <p>Some projects I've worked on:</p>
        <div class="clients-grid">
          <a
            v-for="client in clients"
            :key="client.id"
            :title="client.title"
            :href="client.link"
            target="_blank"
            class="clients-grid__item"
          >
            <img :src="client.image" alt="client" />
          </a>
        </div>
        <h3>All you need, all you want - just write!</h3>
        <router-link to="/contacts">
          <button>Contact Us</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Inner from "@/components/Inner.vue";
import store from "@/store";

@Component({
  components: {
    Inner,
  },
})
export default class About extends Vue {
  private innerBg = require("@/assets/img/about-inner-bg.jpg");
  private clients = store.projects;
}
</script>

<style lang="scss" scoped>
.large-block {
  .large-block__inner {
    height: 100%;
    width: 100%;
    background: url("../assets/img/code.png") no-repeat fixed center / cover;
  }

  @media screen and (max-width: 768px) {
    height: 200px;
    padding: 0;
  }
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .clients-grid__item {
    height: 140px;
    border: 1px solid #141414;
    overflow: hidden;

    @media screen and (max-width: 1400px) {
      height: 100px;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: $default-transition;
    }

    &:hover {
      img {
        transform: scale(1.2);
      }
    }
  }

  & + h3 {
    text-align: center;
    margin-top: 70px;
  }

  & ~ a {
    text-align: center;
    display: block;
    margin: 0 auto;
  }
}
</style>
