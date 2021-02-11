<template>
  <ul class="socials">
    <li class="socials-email"><a target="_blank" href="mailto:eugevin@outlook.com">Email</a></li>
    <li class="socials-telegram"><a target="_blank" href="https://t.me/eugevin">Telegram</a></li>
<!--    <li class="socials-whatsapp"><a target="_blank" href="#">WhatsApp</a></li>-->
<!--    <li class="socials-viber"><a target="_blank" href="#">Viber</a></li>-->
  </ul>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Socials extends Vue {}
</script>

<style lang="scss" scoped>
.socials {
  display: flex;

  a {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 30px;
    color: #a6a6a6;
    padding: 37px 37px 37px 0;
    transition: $default-transition;

    &:hover {
      color: #ffffff;
      text-shadow: #ffffff 1px 0 20px;
    }
  }
}
</style>
