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
