<template>
  <div class="null">
    <img id="err" src="../assets/img/404.svg" alt="404 error" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Null extends Vue {}
</script>

<style lang="scss" scoped>
.null {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
