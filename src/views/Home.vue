<template>
  <div class="home">
    <Inner
      :main="true"
      :slider="true"
      title="I'm a Frontend Developer based in Nijny Novgorod, Russia"
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
