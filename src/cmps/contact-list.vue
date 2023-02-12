<template>
  <section class="contact-list" >
  <ContactPreview v-for="contact in contacts" :key="contact._id" :contact="contact" @remove="removeContact"/>
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
  methods:{
    removeContact(contactId){
      this.$emit('remove',contactId)
    }
  },
  components: {
    ContactPreview,
  },
};
</script>
