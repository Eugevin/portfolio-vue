<template>
  <div :style="{ backgroundImage: `url('${background}')` }" class="inner">
    <div class="wrapper">
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
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Inner",
  props: {
    background: {
      required: false,
    },
    icon: String,
    sup: String,
    title: String,
  },
})
export default class Inner extends Vue {}
</script>

<style lang="scss" scoped>
.inner {
  background: #000 no-repeat fixed center / cover;
  margin-bottom: 100px;
  position: relative;
  width: 100%;
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

  .inner-image {
    height: 37px;
  }

  .wrapper {
    position: absolute;
    bottom: 0;
    left: 0;

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
