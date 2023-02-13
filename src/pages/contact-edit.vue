<template>
  <section class="contact-edit">
    <input type="text" v-model="contact.name" />
    <input type="text" v-model="contact.email" />
    <input type="text" v-model="contact.phone" />
    <button @:click="goBack" class="btn">Back</button>
  </section>
</template>

<script>
import { contactService } from "@/services/contact.service.js";

export default {
  data() {
    return {
      contact: contactService.getEmptyContact(),
    };
  },
  async created() {
    const { contactId } = this.$route.params;
    if (!contactId) return;
    this.contact = await contactService.get(contactId);
  },
  methods: {
    async goBack() {
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contact,
      });
      this.$router.go(-1);
    },
  },
};
</script>
