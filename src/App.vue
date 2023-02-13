<script>
import AppHeader from "@/cmps/app-header.vue";
import AppFooter from "@/cmps/app-footer.vue";
export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="main-layout">
    <AppHeader />
    <main class="full main-layout">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

