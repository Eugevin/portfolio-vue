<template>
  <div class="contacts">
    <Inner
      :icon="innerIcon"
      :background="contactsBg"
      sup="Contacts."
      title="Let’s Work Together"
    />
    <div class="wrapper">
      <div class="wrapper-before">
        <h2>Let’s work together and make something that matters.</h2>
      </div>
      <div class="wrapper-after">
        <h5>Address</h5>
        <p>Earth planet, Russia country, Nijny Novgorod city</p>
        <h5>Email</h5>
        <a href="mailto:eugevin@outlook.com">eugevin@outlook.com</a>
        <h5>Get in Touch</h5>
        <Form />
        <h5>Also contact me</h5>
        <Socials />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Inner from "@/components/Inner.vue";
import Socials from "@/components/Socials.vue";
import Form from "@/components/Form.vue";

@Component({
  components: {
    Form,
    Socials,
    Inner,
  },
})
export default class Contacts extends Vue {
  private innerIcon: string = require("@/assets/img/contacts-inner-icon.svg");
  private contactsBg: string = require("@/assets/img/contacts-bg.jpg");
}
</script>

<style lang="scss" scoped>
.contacts {
  margin-bottom: 80px;
}
</style>
