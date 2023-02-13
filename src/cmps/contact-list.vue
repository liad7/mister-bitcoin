<template>
  <section class="contact-list" >
  <ContactPreview v-for="contact in contacts" :key="contact._id" :contact="contact" @remove="$emit('remove',$event)" @select="$emit('select',$event)"/>
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
  components: {
    ContactPreview,
  },
};
</script>
