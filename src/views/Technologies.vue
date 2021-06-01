<template>
  <div class="technologies">
    <Inner
      v-bind:background="techBg"
      v-bind:icon="innerIcon"
      sup="What techs i use in everyday job"
      title="Technologies"
    />
    <Tech v-bind:key="tech.id" v-for="tech in techs" v-bind:tech="tech" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Tech from "@/components/Tech.vue";
import Inner from "@/components/Inner.vue";

@Component({
  components: {
    Inner,
    Tech,
  },
})
export default class Technologies extends Vue {
  private innerIcon: string = require("@/assets/img/technologies-inner-icon.svg");
  private techBg: string = require("@/assets/img/technologies-bg.jpg");

  public techs: object[] = [
    {
      id: 0,
      sup: "HTML5, CSS3, VANILLA JS (ES 2020), TYPESCRIPT",
      title: "A really cool stuff for your website",
      description: `
          Every site in the web use HTML and CSS for build basic layout and his decor equally.
          This two things are most important things of every website.
          To create and control user interaction uses JavaScript - it's powerful programming language of the web.
          In my current projects i use ES 2020 JavaScript standart with TypeScript on board.
          `,
      image: require("@/assets/img/whales.jpg"),
    },
    {
      id: 1,
      sup: "VUE.JS",
      title: "What frontend frameworks i use",
      description: `
          In front-end development, I use VueJS.
          For state management i prefer default Vuex.
          VueJS transform your site to fully web-application and give your users more capabilities (like Single Page Application without page reload, download your site as application on main screen of user's device and others)
          Also i have experience with Vuetify and other VueJS libraries.
          `,
      image: require("@/assets/img/vue-js.jpg"),
    },
    {
      id: 2,
      sup: "NODE.JS AND EXPRESS FRAMEWORK",
      title:
        "I also provide assistance with deploying the project to the backend",
      description: `
          I provide assistance with setting up and running projects in both vanilla JavaScript and frameworks.
          I will be happy to help you in choosing a hosting or server hardware for your project.
          I usually use CentOs or Ubuntu (more often) systems for my backend work.
          As an http server, I use Nginx with Node.js proxying, which will allow me to quickly start the server.
          Setting up a free ssl certificate, redirecting and linking your domain.
          Favorite backend framework - Express.js
          `,
      image: require("@/assets/img/node-js.png"),
    },
    {
      id: 3,
      sup: "JOB TOOLS",
      title: "I use the most advanced tools during all my development",
      description: `
          I use WebStorm as my primary IDE on my main machine. I work with Figma, Photoshop, Sketch.
          All my project created with webpack, this tool help me create truly fast, secure and user friendly websites!
          `,
      image: require("@/assets/img/webstorm.png"),
    },
  ];
}
</script>

<style lang="scss" scoped></style>