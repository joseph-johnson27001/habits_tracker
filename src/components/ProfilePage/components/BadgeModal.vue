<template>
  <div class="badge-modal-overlay" v-if="isVisible" @click="closeModal">
    <div class="badge-modal">
      <div class="modal-content">
        <h2>{{ selectedBadge.name }}</h2>
        <p>{{ selectedBadge.description }}</p>
        <p>Achieved on: {{ selectedBadge.achievedOn }}</p>
        <button @click="closeModal">Close</button>
      </div>
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
.badge-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.badge-modal {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 100%;
}

.modal-content {
  text-align: center;
}

/* Add more styles as needed */
</style>
