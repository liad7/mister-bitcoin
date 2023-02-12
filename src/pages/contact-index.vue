<template>
  <section v-if="contacts" class="contact-index">
    <ContactList :contacts="contacts"/>
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import ContactList from "@/cmps/contact-list.vue";

export default {
  data() {
    return {
      contacts: null,
    };
  },
  async created() {
    this.contacts = await contactService.query();
    console.log('this.contacts:', this.contacts);
  },
  components: {
    ContactList,
  },
};
</script>
