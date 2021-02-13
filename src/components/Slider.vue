<template>
  <div class="inner-slider">
    <router-link to="/projects" class="inner-slider-content">
      <div
        :style="{ 'background-image': `url(${firstSlide})` }"
        :class="{ _active: currentSlide === 0 }"
        class="slider-content__item"
      ></div>
      <div
        :style="{ 'background-image': `url(${secondSlide})` }"
        :class="{ _active: currentSlide === 1 }"
        class="slider-content__item"
      ></div>
      <div
        :style="{ 'background-image': `url(${thirdSlide})` }"
        :class="{ _active: currentSlide === 2 }"
        class="slider-content__item"
      ></div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Slider extends Vue {
  private currentSlide: number = 0;

  private firstSlide: string = require("@/assets/img/about-inner-bg.jpg");
  private secondSlide: string = require("@/assets/img/contacts-bg.jpg");
  private thirdSlide: string = require("@/assets/img/technologies-bg.jpg");

  public changeSlides(): void {
    setInterval(() => {
      if (this.currentSlide < 2) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
    }, 3000);
  }

  mounted() {
    this.changeSlides();
  }
}
</script>

<style lang="scss" scoped>
.inner-slider {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .inner-slider-content {
    position: relative;
    height: 530px;
    width: 790px;

    .slider-content__item {
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: absolute;
      height: 100%;
      width: 100%;
      visibility: hidden;
      opacity: 0;
      transition: 3s ease;

      &._active {
        visibility: visible;
        opacity: 1;
      }
    }
  }
}
</style>
