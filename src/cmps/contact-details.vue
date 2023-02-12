<template>
  <section class="contact-details">
    <img
      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      alt=""
    />
    <section class="contact-info">
      <span class="contact-name">{{ contact.name }}</span>
      <span>{{ contact.email }}</span>
      <span>{{ contact.phone }}</span>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>
