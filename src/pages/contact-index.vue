<template>
  <section v-if="contacts" class="contact-index">
    <section>
      <ContactFilter @filter="onSetFilterBy" />
      <ContactList :contacts="contacts" @remove="removeContact" />
    </section>
    <ContactDetails v-if="currContact" :contact="currContact" />
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
import ContactList from "@/cmps/contact-list.vue";
import ContactFilter from "@/cmps/contact-filter.vue";
import ContactDetails from "@/cmps/contact-details.vue";

export default {
  data() {
    return {
      contacts: null,
      filterBy: {},
      currContact: null,
    };
  },
  created() {
    this.getContacts();
  },
  async updated() {
    const { contactId } = this.$route.params;
    if (!contactId) {
      this.currContact = null;
    } else if (contactId !== this.currContact?._id) {
      this.currContact = await contactService.get(contactId);
    }
  },
  methods: {
    async getContacts() {
      this.contacts = await contactService.query(this.filterBy);
    },
    async removeContact(contactId) {
      await contactService.remove(contactId);
      this.contacts = this.contacts.filter(
        (contact) => contact._id !== contactId
      );
    },
    onSetFilterBy(filterBy) {
      this.filterBy = filterBy;
      this.getContacts();
    },
  },
  components: {
    ContactList,
    ContactFilter,
    ContactDetails,
  },
};
</script>
