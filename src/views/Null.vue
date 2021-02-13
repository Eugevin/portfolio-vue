<template>
  <Inner
    sup="The page you are looking is a myth."
    title="It seems you are lost"
    :main="true"
    :image="innerImage"
  />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Inner from "@/components/Inner.vue";

@Component({
  components: { Inner },
})
export default class Null extends Vue {
  private innerImage: string = require("@/assets/img/404.svg");
}
</script>

<style lang="scss" scoped>
.null {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
