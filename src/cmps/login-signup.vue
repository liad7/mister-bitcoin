<template>
    <button @click="toggleSignup" class="btn toggle-btn">
      {{ isSignup ? "Signup" : "Login" }}
    </button>
    <form v-if="isSignup" @submit.prevent="onLogin" class="login-form">
      <input placeholder="name..." required />
      <input placeholder="password..." required />
      <button class="btn">Enter</button>
    </form>
    <form v-if="!isSignup" class="signup-form" @submit.prevent="onSignup">
      <input placeholder="fullname..." required />
      <input v-model="credentials.username" placeholder="name" required />
      <input v-model="credentials.password" placeholder="password" required />
      <button class="btn">Enter</button>
    </form>
</template>
<script>
import { userService } from "@/services/user.service.js";

export default {
  props: ["user"],
  emits: ["signup", "login"],
  data() {
    return {
      credentials: {},
      isSignup: false,
      userSelected: null,
    };
  },
  async created() {
    this.credentials = userService.getEmptyCredentials();
    this.isSignup = this.user ? true : false;
  },
  methods: {
    clearState() {
      this.credentials = userService.getEmptyCredentials();
      this.isSignup = false;
    },
    onLogin() {
      // if (!this.credentials.username) return;
      this.$emit("login", this.credentials);
      this.clearState();
    },
    onSignup() {
      this.$emit("signup", this.credentials);
      this.clearState();
    },
    toggleSignup() {
      console.log("is:");
      this.isSignup = !this.isSignup;
    },
  },
  components: {},
};
</script>