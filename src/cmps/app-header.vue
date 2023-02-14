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
      <section class="login-signup">
        <button class="btn">login</button>
      </section>
    </div>
  </header>
</template>

<script>
import Logo from "./logo.vue";
export default {
  components: {
    Logo,
  },
};
</script>
