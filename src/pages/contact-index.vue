<template>
  <section v-if="contacts" class="contact-index">

  </section>
</template>

<script>
import { contactService } from "@/services/contact.service.js";
export default {
  data() {
    return {
      contacts: null,
    };
  },
  async created() {
    this.contacts = await contactService.query();
  },
};
</script>
