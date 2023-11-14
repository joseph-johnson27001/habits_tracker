<template>
  <div class="badge-modal" v-if="isVisible">
    <div class="modal-content">
      <h2>{{ selectedBadge.name }}</h2>
      <p>{{ selectedBadge.description }}</p>
      <p>Achieved on: {{ selectedBadge.achievedOn }}</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    selectedBadge: Object,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Style your modal as needed */
</style>
