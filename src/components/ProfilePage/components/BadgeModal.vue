<template>
  <div class="badge-modal-overlay" v-if="isVisible" @click="closeModal">
    <div class="badge-modal">
      <div class="modal-content">
        <h2 class="badge-name">{{ selectedBadge.name }}</h2>
        <span class="badge-icon">🏆</span>
        <p class="badge-description">{{ selectedBadge.description }}</p>
        <p class="achieved-date">Achieved on: {{ selectedBadge.achievedOn }}</p>
        <button class="close-button" @click="closeModal">Close</button>
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

.badge-icon {
  width: 80px;
  height: 80px;
}

.modal-content {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}

.badge-name {
  font-size: 24px;
  margin-bottom: 10px;
}

.badge-icon {
  font-size: 40px;
}

.badge-description {
  margin-bottom: 15px;
}

.achieved-date {
  font-style: italic;
  color: #555; /* Example color */
  margin-bottom: 15px;
}

.close-button {
  padding: 10px;
  background-color: #3498db; /* Example background color */
  color: #fff; /* Example text color */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

/* Add more styles as needed */
</style>
