<template>
  <div class="projects">
    <Inner
      :background="innerBg"
      sup="My every project"
      title="My projects"
      icon=""
    />
    <div class="wrapper">
      <div class="wrapper-before projects-row">
        <Project
          v-for="project in projects"
          :key="project.id"
          :kind="project.kind"
          :description="project.description"
          :img="project.img"
          :class-name="project.className"
        />
      </div>
      <div class="wrapper-after projects-description"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Inner from "@/components/Inner.vue";
import Project from "@/components/Project.vue";

type Projecto = {
  id: number;
  className: string;
  description: string;
  kind: string;
  img: string;
};

@Component({
  components: {
    Inner,
    Project,
  },
})
export default class Projects extends Vue {
  private innerBg: string = require("@/assets/img/projects-bg.jpg");

  protected projects: Projecto[] = [
    {
      id: 0,
      className: "small",
      description:
        "Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores",
      kind: "Photo",
      img: require("@/assets/img/about-inner-bg.jpg"),
    },
    {
      id: 1,
      className: "small",
      description:
        "Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores",
      kind: "Photo",
      img: require("@/assets/img/about-inner-bg.jpg"),
    },
    {
      id: 2,
      className: "medium",
      description:
        "Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores",
      kind: "Photo",
      img: require("@/assets/img/about-inner-bg.jpg"),
    },
    {
      id: 3,
      className: "big",
      description:
        "Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores Lorem ipsum dolores",
      kind: "Photo",
      img: require("@/assets/img/about-inner-bg.jpg"),
    },
  ];
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
  }

  .projects-description {
  }
}
</style>
