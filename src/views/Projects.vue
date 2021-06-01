<template>
  <div class="projects">
    <Inner
      :background="innerBg"
      sup="My every project"
      title="My projects"
      icon=""
    />
    <div v-for="project in projects" :key="project.id" class="wrapper">
      <div class="large-block">
        <Project
          :image="project.image"
          :title="project.title"
          :description="project.description"
          :link="project.link"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import store from "@/store";

import Inner from "@/components/Inner.vue";
import Project from "@/components/Project.vue";

@Component({
  components: {
    Project,
    Inner,
  },
})
export default class Projects extends Vue {
  private innerBg: string = require("@/assets/img/projects-bg.jpg");
  private projects = store.projects;
}
</script>

<style lang="scss" scoped>
.projects {
  .projects-row {
    margin-bottom: 80px;
    padding: 0 !important;
    display: grid !important;
    grid-template-columns: repeat(2, 1fr);
    gap: 100px;

    @media screen and (max-width: 768px) {
      gap: 50px;
    }

    @media screen and (max-width: 425px) {
      gap: 25px;
    }
  }
}
</style>
