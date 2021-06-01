<template>
  <div
    :class="{ '_zero-margin': main }"
    :style="{ backgroundImage: `url('${background}')` }"
    class="inner"
  >
    <div v-if="image" class="inner-main-image">
      <img :src="image" alt="inner main image" />
    </div>
    <div :class="{ '_zero-margin': main }" class="wrapper">
      <div class="wrapper-before">
        <object
          v-if="icon"
          class="inner-image"
          :data="icon"
          type="image/svg+xml"
        ></object>
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

@Component
export default class Inner extends Vue {
  @Prop({ type: Boolean, default: false }) readonly main!: boolean;
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
  min-height: 400px;
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
    margin-bottom: 66px !important;
    position: absolute;
    bottom: 0;
    left: 0;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    .wrapper-before {
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 768px) {
        align-items: flex-start !important;
        margin-bottom: 60px;
      }
    }

    .wrapper-after {
      .inner-sup {
        font-size: 16px;
        line-height: 30px;
        color: #ffffff;

        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 22px;
        }
      }

      .inner-title {
        margin: 0;
        font-size: 30px;
        line-height: 46px;

        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
  }
}
</style>