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
      currContact: null,
    };
  },
  async created() {
    this.loadContacts();
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
    async loadContacts(filterBy = { txt: "" }) {
      this.$store.dispatch({ type: "loadContacts",filterBy });
    },
    async removeContact(contactId) {
      await this.$store.dispatch({ type: "removeContact", contactId });
    },
    onSetFilterBy(filterBy) {
      this.loadContacts(filterBy);
    },
  },
  computed: {
    contacts() {
      return this.$store.getters.contacts;
    },
  },
  components: {
    ContactList,
    ContactFilter,
    ContactDetails,
  },
};
</script>
