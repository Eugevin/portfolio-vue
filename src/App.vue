<template>
  <div :class="{ white: whiteMode }" id="app">
    <transition name="fade">
      <Loader v-if="!loaded" />
    </transition>
    <Cursor />
    <Header
      :white-mode="changeWhiteMode"
      :menuState="activeMenu"
      :menuHandler="changeMenuState"
    />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Header from "@/components/Header.vue";
import Loader from "@/components/Loader.vue";

@Component({
  components: {
    Header,
    Loader,
  },
})
export default class App extends Vue {
  private whiteMode: boolean = false;
  private activeMenu: boolean = false;
  private loaded: boolean = false;

  public changeMenuState(): void {
    this.activeMenu = !this.activeMenu;

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);
  }

  public changeWhiteMode() {
    setTimeout(() => {
      this.whiteMode = !this.whiteMode;
    });

    const app = document.querySelector("#app") as HTMLDivElement;
    app.style.transition = ".3s ease";
  }

  mounted() {
    this.loaded = true;
  }
}
</script>

<style lang="scss">
// DEFAULTS

body {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;

  input,
  button {
    outline: none;
    background: none;
    border: none;
  }

  input {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: #a6a6a6;
    padding: 5px 0;
    opacity: 0.5;
    border-bottom: 2px solid #666666;
    transition: $default-transition;

    &._err {
      border-bottom: 2px solid darkred;
    }

    &::placeholder {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 30px;
      color: #a6a6a6;
      transition: $default-transition;
    }

    &:focus {
      color: #ffffff;
      opacity: 1;
      border-bottom: 2px solid #ffffff;

      &::placeholder {
        color: #ffffff;
      }
    }

    &:valid {
      color: #ffffff;
      border-bottom: 2px solid #ffffff;
      opacity: 1;
    }
  }

  button {
    cursor: pointer;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
    position: relative;
    transition: $default-transition;
    overflow: hidden;

    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      top: calc(100% - 2px);
      left: 0;
      height: 100%;
      width: 100%;
      background: #ffffff;
      transition: $default-transition;
    }

    &:hover {
      color: #000000;

      &::before {
        top: 0;
        box-shadow: 0 0 15px #ffffff;
      }
    }
  }

  ul {
    margin: 0;
    list-style: none;
    padding-left: 0;
  }

  .color-list {
    li {
      margin-bottom: 30px;

      span {
        position: relative;
        padding-left: 23px;
        font-weight: 600;
        font-size: 18px;
        line-height: 30px;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -7px;
          transform: translateY(-50%);
          height: 16px;
          width: 16px;
          border-radius: 100%;
          background: #212121;
          transition: $default-transition;
        }
      }

      &:hover {
        span {
          &::before {
            background: #ffffff;
            box-shadow: 0 0 15px #ffffff;
          }
        }
      }
    }
  }

  .large-block {
    padding: 100px 0;
    height: 415px;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    @media screen and (max-width: 1400px) {
      padding: 0 76px !important;
    }

    @media screen and (max-width: 768px) {
      padding: 0 16px !important;
    }
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 46px;
    line-height: 60px;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 60px;

    @media screen and (max-width: 1400px) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 46px;

    @media screen and (max-width: 1400px) {
      font-size: 18px;
      line-height: 30px;
    }

    @media screen and (max-width: 768px) {
      font-size: 14px;
      line-height: 26px;
    }
  }

  h4 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
  }

  h5 {
    margin-top: 50px;
    margin-bottom: 16px;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;

    @media screen and (max-width: 1400px) {
      font-size: 14px;
      line-height: 26px;
    }

    &:first-child {
      margin-top: 0;
    }
  }

  h6 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 26px;
  }

  p {
    margin-top: 0;
    margin-bottom: 16px;
    color: #a6a6a6;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
  }

  @media (max-width: 1400px) {
    h2 {
      font-size: 24px;
      line-height: 36px;
    }
  }
}

// MAIN

main {
  overflow: hidden;
  position: relative;
  z-index: 1;
}

#app {
  overflow: hidden;
  position: relative;
  min-height: 100vh;
  background: #000000;

  * {
    box-sizing: border-box;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 43%;
    background: rgba(20, 20, 20, 0.9);

    @media screen and (max-width: 768px) {
      content: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: calc(43% + 100px);
    height: 100%;
    width: 57%;
    border-left: 1px solid #141414;

    @media (max-width: 1400px) {
      left: calc(43% + 76px);
    }

    @media screen and (max-width: 768px) {
      content: none;
    }
  }

  .wrapper {
    margin-bottom: 80px;
    width: 100%;
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .wrapper-before {
      padding-right: 100px;
      flex: 0 0 43%;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      @media screen and (max-width: 1400px) {
        padding: 0 76px;
      }

      @media screen and (max-width: 768px) {
        padding: 0 16px;
      }

      h2 {
        margin: 0;

        @media screen and (max-width: 768px) {
          margin-bottom: 40px;
        }
      }
    }

    .wrapper-after {
      padding-left: 100px;
      position: relative;
      flex: 0 0 57%;

      @media screen and (max-width: 1400px) {
        padding: 0 76px;
      }

      @media screen and (max-width: 768px) {
        padding: 0 16px;
      }

      p {
        a {
          color: #ffffff;

          &:hover {
            text-decoration: underline;
          }
        }

        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 22px;
        }
      }

      ul {
        span {
          display: inline-block;
          margin-bottom: 10px;

          @media screen and (max-width: 768px) {
            font-size: 14px;
            line-height: 26px;
          }
        }
      }
    }

    > * {
      padding: 0 100px;
    }
  }
}

// FADES

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
