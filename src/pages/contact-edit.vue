<template>
  <section class="contact-edit">{{contact}}</section>
</template>

<script>
import { contactService } from "@/services/contact.service.js";

export default {
  data() {
    return {
      contact: contactService.getEmptyContact(),
    };
  },
  created() {
    const { contactId } = this.$route.params;
    if (!contactId) return;
    this.contact = await contactService.get(contactId);
  },
};
</script>
