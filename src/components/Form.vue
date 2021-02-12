<template>
  <form :class="{ _blocked: formBlocked }" method="POST" class="contacts-form">
    <input v-model="userData.name" placeholder="Name" id="name" type="text" />
    <input
      v-model="userData.email"
      placeholder="Email"
      id="email"
      type="email"
    />
    <input
      v-model="userData.message"
      placeholder="Message"
      id="message"
      type="text"
    />
    <button @click.prevent="formValidation" type="submit">Submit</button>
    <div class="_blocked-content">
      <h2>Данные были успешно отправлены ❤</h2>
    </div>
  </form>
</template>

<script lang="ts">
import type { FormData } from "@/types";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  private formBlocked: boolean = false;
  private userData: FormData = {
    name: "",
    email: "",
    message: "",
  };

  private formValidation(): void {
    const url: string = "http://localhost:4000/feedback";

    const { name, message } = this.userData;
    const email = validateEmail(this.userData.email);

    function validateEmail(string: string): string | false {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (re.test(String(string).toLowerCase())) {
        return string;
      }

      return false;
    }

    const data = [name, email, message];

    if (email !== false && message !== "" && message !== " ") {
      const sendData = fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      sendData.then((res) => res.json());
      sendData.then((data) =>
        data ? (this.formBlocked = true) : (this.formBlocked = false)
      );
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-form {
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 55px 30px;

  input {
    visibility: visible;
    opacity: 1;
    transition: $default-transition;

    &#name {
    }

    &#message {
      grid-row: 2;
      grid-column: 1 / span 2;
    }
  }

  button[type="submit"] {
    grid-row: 2;
    width: 85px;
    visibility: visible;
    opacity: 1;
    transition: $default-transition;
  }

  ._blocked-content {
    color: #141414;
    background: #ffffff;
    position: absolute;
    top: 100%;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    opacity: 0;
    transition: $default-transition;
    transition-delay: 0.3s;
  }

  &._blocked {
    input,
    button {
      opacity: 0;
      visibility: hidden;
    }

    ._blocked-content {
      top: 0;
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
