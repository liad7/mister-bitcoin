<template>
  <section class="contact-list" v-for="contact in contacts" :key="contact._id">
  <ContactPreview :contact="contact"/>
  </section>
</template>

<script>
import ContactPreview from "@/cmps/contact-preview.vue";

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log(this.contacts);
  },
  components: {
    ContactPreview,
  },
};
</script>
