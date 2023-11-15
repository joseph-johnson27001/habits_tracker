<!-- AchievementModal.vue -->
<template>
  <div class="achievement-modal-overlay" v-if="isVisible" @click="closeModal">
    <div class="achievement-modal">
      <div class="modal-content">
        <h2 class="achievement-title">{{ selectedAchievement.title }}</h2>
        <span class="achievement-icon">{{ selectedAchievement.icon }}</span>
        <p class="achievement-description">
          {{ selectedAchievement.description }}
        </p>
        <p class="achieved-date">
          Achieved: {{ selectedAchievement.achieved }}
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
/* Add your modal styles here */
</style>
