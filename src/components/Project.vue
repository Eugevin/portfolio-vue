<template>
  <div
    :class="`_${className}`"
    :style="{ backgroundImage: `url('${img}')` }"
    class="project"
    data-aos="fade-up"
  >
    <h4 class="project-kind">{{ kind }}</h4>
    <span class="project-description">{{ description }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Project extends Vue {
  @Prop(String) readonly className: any;
  @Prop(String) readonly img: any;
  @Prop(String) readonly kind: any;
  @Prop(String) readonly description: any;
}
</script>

<style lang="scss" scoped>
.project {
  position: relative;
  background-size: cover;
  cursor: pointer;
  padding: 20px;
  display: flex;
  overflow: hidden;

  .project-kind {
    margin: 0;
    position: absolute;
    bottom: 20px;
    right: 20px;
  }

  .project-description {
    position: relative;
    visibility: hidden;
    text-align: center;
    margin: auto;
    padding: 0 20px;
    z-index: 2;
    opacity: 0;
    transition: $default-transition;
  }

  &._small {
    height: 360px;
  }

  &._medium {
    grid-column: 1 / span 2;
    height: 415px;
  }

  &._big {
    grid-column: 1 / span 2;
    height: 675px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: $default-transition;
  }

  &:hover {
    .project-description {
      visibility: visible;
      opacity: 1;
    }

    &::before {
      opacity: 1;
    }
  }
}
</style>
