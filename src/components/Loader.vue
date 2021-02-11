<template>
  <div class="loader">
    <div class="loader-component">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Loader extends Vue {}
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
  height: 100vh;
  width: 100%;
  background: #000000;

  .loader-component {
    display: flex;
    margin: 0 -10px;

    span {
      margin: 0 10px;
      display: block;
      height: 10px;
      width: 10px;
      border-radius: 100%;
      background: #ffffff;
      animation: pushUp 1.5s ease infinite;

      &:first-child {
        top: -10px;
        animation-delay: 0s;
      }

      &:nth-child(2) {
        left: -10px;
        animation-delay: 0.2s;
      }

      &:nth-child(3) {
        right: -20px;
        animation-delay: 0.4s;
      }

      &:last-child {
        top: 10px;
        animation-delay: 0.6s;
      }
    }

    @keyframes pushUp {
      0% {
        opacity: 0;
        box-shadow: 0 0 15px #000000;
      }
      50% {
        opacity: 1;
        box-shadow: 0 0 15px #ffffff;
      }
      100% {
        opacity: 0;
        box-shadow: 0 0 15px #000000;
      }
    }
  }
}
</style>
