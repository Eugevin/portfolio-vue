<template>
  <form :class="{ _blocked: validForm }" method="POST" class="contacts-form">
    <input
      required
      :class="{ _disabled: !userData.name.status }"
      v-model="userData.name.value"
      placeholder="Name"
      id="name"
      type="text"
    />
    <input
      required
      :class="{ _disabled: !userData.email.status }"
      v-model="userData.email.value"
      placeholder="Email"
      id="email"
      type="email"
    />
    <input
      required
      :class="{ _disabled: !userData.message.status }"
      v-model="userData.message.value"
      placeholder="Message"
      id="message"
      type="text"
    />
    <button @click.prevent="formValidation" type="submit">Submit</button>
    <div class="_blocked-content">
      <h2>Данные были успешно отправлены 👌</h2>
    </div>
  </form>
</template>

<script lang="ts">
import type { FormData } from "@/types";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  private validForm: boolean = false;
  private userData: FormData = {
    name: {
      value: "",
      status: true,
    },
    email: {
      value: "",
      status: true,
    },
    message: {
      value: "",
      status: true,
    },
  };

  private validateEmail(string: string): string | false {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(String(string).toLowerCase())) {
      this.userData.email.status = true;

      return string;
    }

    this.userData.email.status = false;

    return false;
  }

  private formValidation(): void {
    const url: string = "http://localhost:4000/feedback";

    const { name, message, email } = this.userData;

    if (message.value !== "" && message.value !== " ") {
      message.status = true;
    } else {
      message.status = false;
    }

    this.validateEmail(this.userData.email.value);

    if (name.status && email.status && message.status) {
      const data = [name.value, email.value, message.value];

      const sendData = fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      sendData.then((res) => res.json());
      sendData.then((data) => {
        if (data) {
          this.validForm = true;

          const audio = new Audio();
          audio.src = require("@/assets/sounds/success.mp3");
          audio.play();
        } else {
          this.userData.email.status = false;

          const audio = new Audio();
          audio.src = require("@/assets/sounds/error.mp3");
          audio.play();
        }
      });
      sendData.catch((err) => console.log(err));
    } else {
      const audio = new Audio();
      audio.src = require("@/assets/sounds/error.mp3");
      audio.play();
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-form {
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-areas:
    "name email null"
    "message message button";
  gap: 55px 30px;

  @media screen and (max-width: 1200px) {
    grid-template-areas:
      "name null"
      "email null"
      "message button";
    gap: 24px;
  }

  input {
    visibility: visible;
    opacity: 1;
    transition: $default-transition;

    &#name {
      grid-area: name;
    }

    &#email {
      grid-area: email;
    }

    &#message {
      grid-area: message;
    }

    &._disabled {
      color: #dc143c;
      border-bottom: 2px solid #dc143c;

      &::placeholder {
        color: #dc143c;
      }
    }
  }

  button[type="submit"] {
    grid-area: button;
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

      h2 {
        font-family: "Roboto", sans-serif;
      }
    }
  }
}
</style>
