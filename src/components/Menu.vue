<template>
  <div class="header-menu">
    <div class="wrapper _zero-margin">
      <div class="wrapper-before">
        <nav v-on:click="menuHandler" class="header-menu__navigation">
          <ul>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/projects">Projects</router-link>
            </li>
            <li>
              <router-link to="/about">About Me</router-link>
            </li>
            <li>
              <router-link to="/technologies">Technologies</router-link>
            </li>
            <li>
              <router-link to="/contacts">Contacts</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="wrapper-after">
        <h5>Follow me</h5>
        <Socials />
        <p>2020 @ MMLST. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import gsap from "gsap";
import Socials from "@/components/Socials.vue";

@Component({
  components: {
    Socials,
  },
})
export default class Menu extends Vue {
  @Prop(Function) readonly menuHandler!: () => void;

  mounted() {
    const allPages = document.querySelectorAll(
      ".header-menu__navigation ul li"
    );

    let pageDelay = 0.15;

    allPages.forEach((page) => {
      gsap.from(page, { delay: pageDelay, duration: 0.5, opacity: 0, y: 15 });

      pageDelay += 0.15;
    });

    gsap.from(".header-menu h5", {
      delay: pageDelay,
      duration: 0.5,
      opacity: 0,
      y: 15,
    });

    pageDelay += 0.15;

    const allSocials = document.querySelectorAll(".header-menu .socials li");

    allSocials.forEach((social) => {
      gsap.from(social, { delay: pageDelay, duration: 0.5, opacity: 0, y: 15 });

      pageDelay += 0.15;
    });

    gsap.from(".header-menu p", {
      delay: pageDelay,
      duration: 0.5,
      opacity: 0,
      y: 15,
    });
  }
}
</script>

<style lang="scss" scoped>
.header-menu {
  padding-top: 32px;
  display: flex;
  align-items: center;
  z-index: 97;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background: #000000;

  @media screen and (max-width: 425px) {
    padding-top: 48px;
  }

  .header-menu__navigation {
    text-align: center;

    @media screen and (max-width: 1400px) {
      margin-bottom: 40px;
    }

    ul {
      li {
        a {
          padding: 15px;
          position: relative;
          display: block;

          font-family: "Poppins", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 46px;
          line-height: 60px;
          overflow: hidden;
          transition: $default-transition;

          @media screen and (max-width: 1400px) {
            padding: 8px;
            font-size: 30px;
            line-height: 46px;
          }

          &::before {
            z-index: -1;
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            height: 100%;
            width: 100%;
            background: #ffffff;
            transition: $default-transition;
          }

          &:hover {
            color: #000000;

            &::before {
              left: 0;
            }
          }
        }
      }
    }
  }

  .wrapper {
    height: 100%;
    overflow-y: auto;

    @media screen and (max-width: 992px) {
      flex-direction: column;
    }

    .wrapper-before {
      display: flex;
      justify-content: center;
      text-align: center;

      @media screen and (max-width: 992px) {
        align-items: center !important;
      }
    }

    .wrapper-after {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 12px;
        margin-top: 80px;
        color: #666666;
      }
    }
  }
}
</style>
