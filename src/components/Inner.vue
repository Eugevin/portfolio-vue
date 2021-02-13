<template>
  <div
    :class="{ '_zero-margin': main }"
    :style="{ backgroundImage: `url('${background}')` }"
    class="inner"
  >
    <div v-if="image" class="inner-main-image">
      <img :src="image" alt="inner main image" />
    </div>
    <Slider v-if="slider" />
    <div :class="{ '_zero-margin': main }" class="wrapper">
      <div class="wrapper-before">
        <object class="inner-image" :data="icon" type="image/svg+xml"></object>
      </div>
      <div class="wrapper-after">
        <p class="inner-sup">{{ sup }}</p>
        <h1 class="inner-title">{{ title }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Slider from "@/components/Slider.vue";

@Component({
  components: {
    Slider,
  },
})
export default class Inner extends Vue {
  @Prop({ type: Boolean, default: false }) readonly main!: boolean;
  @Prop({ type: Boolean, default: false }) readonly slider!: boolean;
  @Prop(String) readonly image!: string;
  @Prop(String) readonly background!: string;
  @Prop(String) readonly icon!: string;
  @Prop(String) readonly sup!: string;
  @Prop(String) readonly title!: string;
}
</script>

<style lang="scss" scoped>
.inner {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-attachment: fixed;
  margin-bottom: 100px;
  position: relative;
  width: 100%;
  min-height: 600px;
  height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
  }

  .inner-main-image {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner-image {
    height: 37px;
  }

  .wrapper {

    .wrapper-before {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .wrapper-after {
      .inner-sup {
        color: #ffffff;
      }

      .inner-title {
        margin-top: 0;
      }
    }
  }
}
</style>
