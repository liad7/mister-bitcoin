<template>
  <section class="contact-list" v-for="contact in contacts" :key="contact._id">
    
  </section>
</template>

<script>
export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
};
</script>
