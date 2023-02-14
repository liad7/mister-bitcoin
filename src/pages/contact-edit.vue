<template>
<section>

  <form class="contact-edit" @submit.prevent="save">
    <input type="text" required v-model="contact.name" />
    <input type="text" required v-model="contact.email" />
    <input type="text" required v-model="contact.phone" />
    <button class="btn">Save</button>
  </form>
    <button @:click="this.$router.go(-1)" class="btn">Back</button>
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
    async save() {
      await this.$store.dispatch({
        type: "saveContact",
        contact: this.contact,
      });
      this.$router.go(-1);
    },
  },
};
</script>
