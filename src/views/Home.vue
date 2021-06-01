<template>
  <div class="home">
    <Inner
      :main="true"
      :background="require('@/assets/img/home-bg.gif')"
      title="I'm a Frontend Developer from mother Russia 🐼"
      sup="Eugene Vinokurov"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Inner from "@/components/Inner.vue";

@Component({
  components: { Inner },
})
export default class Home extends Vue {}
</script>
