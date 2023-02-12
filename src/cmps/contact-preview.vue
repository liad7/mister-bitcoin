<template>
  <section class="contact-preview">
<img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="">
<section class="contact-info">
    <span>{{contact.name}}</span>
    <span>{{contact.email}}</span>
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