<template>
  <div class="project">
    <div class="project__image">
      <img :src="image" :alt="title" />
    </div>
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <a class="project__link" target="_blank" :href="link">Link to the site</a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class Project extends Vue {
  @Prop() private image: any;
  @Prop() private title: any;
  @Prop() private description: any;
  @Prop() private link: any;
}
</script>

<style lang="scss" scoped>
.project {
  .project__image {
    height: 415px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  
  .project__link {
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
