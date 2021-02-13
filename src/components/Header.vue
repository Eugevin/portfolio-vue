<template>
  <header class="header">
    <a
      :class="{ _active: menuState }"
      @click.prevent="menuHandler"
      href="#"
      class="header-burger"
    >
      <span></span>
      <span></span>
      <span></span>
    </a>
    <transition name="fade">
      <Menu v-bind:menuHandler="menuHandler" v-if="menuState" />
    </transition>
    <div @click="whiteMode" class="header-white-mode">
      <span></span>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Menu from "@/components/Menu.vue";

@Component({
  components: {
    Menu,
  },
})
export default class Header extends Vue {
  @Prop(Function) readonly menuHandler!: () => void;
  @Prop(Boolean) readonly menuState!: boolean;
  @Prop(Function) readonly whiteMode!: () => void;
}
</script>

<style lang="scss" scoped>
.header {
  border-left: 1px solid #141414;
  z-index: 98;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100px;
  background: rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1400px) {
    width: 76px;
  }

  @media screen and (max-width: 425px) {
    border-left: none;
    border-bottom: 1px solid #141414;
    flex-direction: row-reverse;
    right: unset;
    left: 0;
    height: 48px;
    width: 100%;
  }

  .header-burger {
    position: relative;
    z-index: 98;
    padding: 37px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1400px) {
      padding: 30px;
    }

    @media screen and (max-width: 425px) {
      padding: 16px;
    }

    span {
      position: relative;
      display: block;
      height: 2px;
      width: 16px;
      background: #ffffff;
      margin-bottom: 5px;
      transition: $default-transition;

      &:first-child {
        width: 10px;
      }

      &:last-child {
        width: 10px;
        margin-bottom: 0;
      }
    }

    &:hover {
      span {
        width: 16px !important;
      }
    }

    &._active {
      span {
        width: 16px;

        &:first-child {
          transform: translateY(7px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:last-child {
          transform: translateY(-7px) rotate(-45deg);
        }
      }

      &:hover {
        span {
          &:first-child {
            transform: translateY(7px) rotate(135deg);
          }

          &:last-child {
            transform: translateY(-7px) rotate(-135deg);
          }
        }
      }
    }
  }

  .header-white-mode {
    visibility: hidden;
    cursor: pointer;
    padding: 37px;
    display: flex;

    span {
      display: block;
      border-radius: 100%;
      border: 2px solid #ffffff;
      height: 16px;
      width: 16px;
      transition: $default-transition;
    }

    &:hover {
      span {
        transform: rotate(45deg);
        border-radius: 0;
      }
    }
  }
}
</style>
