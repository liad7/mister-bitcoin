<template>
  <section v-if="contacts" class="contact-index">
    <section class="search">
      <ContactFilter @filter="onSetFilterBy" />
      <RouterLink to="/contact/edit"><button class="btn"><i class="fa-solid fa-plus"></i> Create</button></RouterLink>
    </section>
      <ContactList
        :contacts="contacts"
        @remove="removeContact"
        @select="selectContact"
      />
    <ContactDetails v-if="currContact" :contact="currContact" />
  </section>
</template>

<script>
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
    await this.loadContacts();
    this.currContact = this.contacts[0];
  },
  methods: {
    async loadContacts(filterBy = { txt: "" }) {
      await this.$store.dispatch({ type: "loadContacts", filterBy });
    },
    async removeContact(contactId) {
      await this.$store.dispatch({ type: "removeContact", contactId });
      this.currContact = this.contacts[0];
    },
    selectContact(contact) {
      this.currContact = contact;
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
