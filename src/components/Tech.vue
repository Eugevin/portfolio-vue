<template>
  <div class="tech">
    <div class="wrapper">
      <div class="wrapper-before">
        <div class="tech-description">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            class="tech-description__sup"
          >
            {{ tech.sup }}
          </p>
          <h3
            data-aos="fade-up"
            data-aos-delay="200"
            class="tech-description__title"
          >
            {{ tech.title }}
          </h3>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            class="tech-description__text"
          >
            {{ tech.description }}
          </p>
        </div>
      </div>
      <div class="wrapper-after">
        <img
          data-aos="fade-up"
          data-aos-delay="400"
          class="tech-image"
          v-bind:src="tech.image"
          alt="tech image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tech extends Vue {
  @Prop() tech: any;
}
</script>

<style lang="scss" scoped>
.tech {
  margin-bottom: 80px;

  .tech-image {
    width: 100%;
  }
}
</style>
