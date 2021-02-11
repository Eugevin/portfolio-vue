<template>
  <div class="about">
    <Inner
      :background="innerBg"
      sup="About Me."
      title="We are a creative agency based in London"
    />
    <div class="wrapper">
      <div class="wrapper-before">
        <h2 data-aos="fade-up">Our Short Story</h2>
      </div>
      <div class="wrapper-after">
        <ul class="color-list">
          <li data-aos="fade-up" data-aos-delay="100">
            <span>2010</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              metus vitae tellus euismod hendrerit ut at magna. Mauris iaculis
              eleifend vehicula. Mauris volutpat urna iaculis sem sagittis, id
              accumsan lorem dignissim.
            </p>
          </li>
          <li data-aos="fade-up">
            <span>2010</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              metus vitae tellus euismod hendrerit ut at magna. Mauris iaculis
              eleifend vehicula. Mauris volutpat urna iaculis sem sagittis, id
              accumsan lorem dignissim.
            </p>
          </li>
          <li data-aos="fade-up">
            <span>2010</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              metus vitae tellus euismod hendrerit ut at magna. Mauris iaculis
              eleifend vehicula. Mauris volutpat urna iaculis sem sagittis, id
              accumsan lorem dignissim.
            </p>
          </li>
          <li data-aos="fade-up">
            <span>2010</span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non
              metus vitae tellus euismod hendrerit ut at magna. Mauris iaculis
              eleifend vehicula. Mauris volutpat urna iaculis sem sagittis, id
              accumsan lorem dignissim.
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <div data-aos="fade-up" class="large-block">
        <div class="large-block__inner"></div>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper-before">
        <h2 data-aos="fade-up">Our Services</h2>
      </div>
      <div class="wrapper-after">
        <p data-aos="fade-up" data-aos-delay="100">
          We combine design, technology and business strategy into a unified
          discipline powerful enough to propel companies forward.
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper-before">
        <h2 data-aos="fade-up">Why me</h2>
      </div>
      <div class="wrapper-after">
        <h5 data-aos="fade-up">Premium Quality</h5>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h5 data-aos="fade-up">Premium Quality</h5>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h5 data-aos="fade-up">Premium Quality</h5>
        <p data-aos="fade-up">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div class="wrapper">
      <div class="wrapper-before">
        <h2 data-aos="fade-up">My Clients</h2>
      </div>
      <div class="wrapper-after">
        <p data-aos="fade-up" data-aos-delay="100">
          Proudly served some of the most famous brands:
        </p>
        <div class="clients-grid">
          <a data-aos="fade-up" href="#" class="clients-grid__item">
            <img src="../assets/img/about-inner-bg.jpg" alt="client" />
          </a>
          <a
            data-aos="fade-up"
            data-aos-delay="100"
            href="#"
            class="clients-grid__item"
          >
            <img src="../assets/img/about-inner-bg.jpg" alt="client" />
          </a>
          <a data-aos="fade-up" href="#" class="clients-grid__item">
            <img src="../assets/img/about-inner-bg.jpg" alt="client" />
          </a>
          <a
            data-aos="fade-up"
            data-aos-delay="100"
            href="#"
            class="clients-grid__item"
          >
            <img src="../assets/img/about-inner-bg.jpg" alt="client" />
          </a>
          <a data-aos="fade-up" href="#" class="clients-grid__item">
            <img src="../assets/img/about-inner-bg.jpg" alt="client" />
          </a>
          <a
            data-aos="fade-up"
            data-aos-delay="100"
            href="#"
            class="clients-grid__item"
          >
            <img src="../assets/img/about-inner-bg.jpg" alt="client" />
          </a>
        </div>
        <h3>Whatever your needs, we’re looking forward to hearing from you</h3>
        <router-link to="/contacts">
          <button>Contact Us</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Inner from "@/components/Inner.vue";

@Component({
  components: {
    Inner,
  },
})
export default class About extends Vue {
  private innerBg: string = require("@/assets/img/about-inner-bg.jpg");
}
</script>

<style lang="scss" scoped>
.large-block {
  .large-block__inner {
    height: 100%;
    width: 100%;
    background: url("../assets/img/about-inner-bg.jpg") no-repeat fixed center /
      cover;
  }
}

.clients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  .clients-grid__item {
    height: 140px;
    border: 1px solid #141414;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: $default-transition;
    }

    &:hover {
      img {
        transform: scale(1.2) rotate(5deg);
      }
    }
  }

  & + h3 {
    text-align: center;
    margin-top: 70px;
  }

  & ~ a {
    text-align: center;
    display: block;
    margin: 0 auto;
  }
}
</style>
