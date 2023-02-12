<template>
  <form class="contact-filter">
    <input type="text" @input="onFilter" v-model="filterBy.txt" placeholder="Search..." />
  </form>
</template>

<script>
export default {
  data() {
    return {
      filterBy: {},
    };
  },
  methods: {
    onFilter() {
      this.$emit("filter", this.filterBy);
    },
  },
};
</script>
