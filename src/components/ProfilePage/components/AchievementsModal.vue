<template>
  <div class="achievement-modal-overlay" v-if="isVisible" @click="closeModal">
    <div class="achievement-modal">
      <div class="modal-content">
        <h2 class="achievement-title">{{ selectedAchievement.title }}</h2>
        <span class="achievement-icon">{{ selectedAchievement.icon }}</span>
        <p class="achievement-description">
          {{ selectedAchievement.description }}
        </p>
        <p v-if="selectedAchievement.dateAchieved" class="achieved-date">
          Achieved: {{ selectedAchievement.dateAchieved }}
        </p>
        <p v-else style="color: red">
          You have not currently unlocked this achievement
        </p>
        <button class="close-button" @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: Boolean,
    selectedAchievement: Object,
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.achievement-modal-overlay {
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

.achievement-modal {
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

.achievement-icon {
  width: 80px;
  height: 80px;
}

.modal-content {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
}

.achievement-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.achievement-icon {
  font-size: 40px;
}

.achievement-description {
  margin-bottom: 15px;
}

.achieved-date {
  font-style: italic;
  color: #555;
  margin-bottom: 15px;
}

.close-button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

/* Add more styles as needed */
</style>
