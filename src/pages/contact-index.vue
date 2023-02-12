<template>
  <section v-if="contacts" class="contact-index">
    <ContactList :contacts="contacts" @remove="removeContact" />
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
  },
  methods: {
    removeContact(contactId) {
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== contactId
      );
    },
  },
  components: {
    ContactList,
  },
};
</script>
