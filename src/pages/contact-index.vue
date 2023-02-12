<template>
  <section v-if="contacts" class="contact-index">
    <ContactFilter @filter="onSetFilterBy" />
    <ContactList :contacts="contacts" @remove="removeContact" />
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import ContactList from "@/cmps/contact-list.vue";
import ContactFilter from "@/cmps/contact-filter.vue";

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
    };
  },
  created() {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      console.log("in");
      this.contacts = await contactService.query(this.filterBy);
    },
    async removeContact(contactId) {
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== contactId
      );
    },
    onSetFilterBy(filterBy) {
      console.log("filterBy:", filterBy);
      this.filterBy = filterBy;
      this.getContacts();
    },
  },
  components: {
    ContactList,
    ContactFilter,
  },
};
</script>
