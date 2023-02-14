<template>
  <header class="full main-layout">
    <div class="wrapper">
      <section>
        <Logo />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/stats">Stats</RouterLink>
        </nav>
      </section>
      <LoginSignup
        v-if="!user"
        :user="user"
        @login="onLogin"
        @signup="onSignup"
      />
      <button v-else @click="onLogout" class="btn">Logout</button>
    </div>
  </header>
</template>

<script>
import Logo from "./logo.vue";
import LoginSignup from "./login-signup.vue";
export default {
  methods: {
    async onLogin(credentials) {
      console.log("credentials:", credentials);
      this.$store.dispatch({ type: "login", credentials });
    },
    onSignup(credentials) {
      console.log("credentials:", credentials);
      this.$store.dispatch({ type: "signup", credentials });
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  components: {
    Logo,
    LoginSignup,
  },
};
</script>
