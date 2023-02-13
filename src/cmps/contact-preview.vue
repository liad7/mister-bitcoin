<template>
  <section class="contact-preview" @click="onSelectContact">
    <img
      src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
      alt=""
    />
    <section class="contact-info">
      <span class="contact-name">{{ contact.name }}</span>
      <span>{{ contact.email }}</span>
      <button @click.stop="onRemoveContact" class="btn remove-btn">X</button>
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
  methods: {
    onRemoveContact() {
      this.$emit("remove", this.contact._id);
    },
    onSelectContact() {
      this.$emit("select", this.contact);
    },
  },
};
</script>