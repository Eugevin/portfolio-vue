<template>
  <form method="POST" class="contacts-form">
    <input
      v-model="userData.name"
      required
      placeholder="Name"
      id="name"
      type="text"
    />
    <input
      v-model="userData.email"
      required
      placeholder="Email"
      id="email"
      type="email"
    />
    <input
      v-model="userData.message"
      required
      placeholder="Message"
      id="message"
      type="text"
    />
    <button @click.prevent="formValidation" type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Form extends Vue {
  private userData: { name: string; email: string; message: string } = {
    name: "",
    email: "",
    message: "",
  };
}

// formValidation() {
//   const url = "http://localhost:4000/feedback";
//
//   const userName = validateName(this.userData.name);
//   const userEmail = validateEmail(this.userData.email);
//   const userMessage = validateMessage(this.userData.message);
//
//   function validateName(string: string) {
//     if (string != "") {
//       return string;
//     }
//   }
//
//   function validateEmail(string: string) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//
//     if (re.test(String(string).toLowerCase())) {
//       return string;
//     }
//   }
//
//   function validateMessage(string: string) {
//     if (string.length > 0) {
//       return string;
//     }
//
//     throw new Error("String not founded");
//   }
//
//   const data = [userName, userEmail, userMessage];
//
//   const server = fetch(url, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//
//   server.then((res) => res.json());
//   server.then((data) => console.log(data));
// },
</script>

<style lang="scss" scoped>
.contacts-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 55px 30px;

  input {
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
  }
}
</style>
