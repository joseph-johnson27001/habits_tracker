<template>
  <div class="achievements-section">
    <div class="heading-area">
      <h1>ACHIEVEMENTS</h1>
      <router-link to="/achievements" class="nav-link">
        <i class="fas fa-angle-right view-more-link"></i>
      </router-link>
    </div>
    <div class="achievements-list">
      <!-- Loop through achievements and display them -->
      <div
        class="achievement-item"
        v-for="(achievement, index) in achievements"
        :key="index"
        @click="openModal(achievement)"
      >
        <div class="achievement-icon">{{ achievement.icon }}</div>
        <div class="achievement-details">
          <div class="achievement-title">{{ achievement.title }}</div>
          <div class="achievement-description">
            {{ achievement.description }}
          </div>
        </div>
      </div>
    </div>
    <achievement-modal
      :is-visible="isModalVisible"
      :selected-achievement="selectedAchievement"
      @close="closeModal"
    ></achievement-modal>
  </div>
</template>

<script>
import AchievementModal from "@/components/ProfilePage/components/AchievementsModal.vue";

export default {
  components: {
    AchievementModal,
  },
  name: "AchievementsSection",
  data() {
    return {
      userName: this.$store.state.userName,
      selectedAchievement: null,
      isModalVisible: false,
      achievements: [
        {
          icon: "🏆",
          title: "High Achiever",
          description: "You've achieved excellence in your field.",
          dateAchieved: "1st February 2023",
        },
        {
          icon: "🥇",
          title: "Gold Medalist",
          description: "You're the best of the best!",
          dateAchieved: "1st January 2023",
        },
        {
          icon: "🎯",
          title: "Sharpshooter",
          description: "You've hit all your targets.",
          dateAchieved: "1st December 2022",
        },
        {
          icon: "🌟",
          title: "Star Collector",
          description: "You've collected all the stars!",
          dateAchieved: "1st November 2022",
        },
        {
          icon: "🏅",
          title: "Top Performer",
          description: "You've consistently performed at the top level.",
          dateAchieved: "1st October 2022",
        },
        {
          icon: "🚀",
          title: "Rocket Scientist",
          description:
            "You've mastered rocket science and reached for the stars!",
          dateAchieved: "1st September 2022",
        },
      ],
    };
  },
  methods: {
    openModal(achievement) {
      this.selectedAchievement = achievement;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedAchievement = null;
    },
  },
};
</script>

<style scoped>
.achievements-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-row-gap: 10px;
}

.achievement-item {
  background-color: white;
  padding: 20px;
  border-right: 1px solid #ccc;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
}

.achievement-item:nth-child(3n) {
  border-right: none;
  padding-left: none;
}

.achievement-item:nth-child(3n) {
  border-right: none;
}

.achievement-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}

.achievement-icon {
  font-size: 36px;
  margin-right: 10px;
}

.achievement-title {
  font-size: 18px;
  font-weight: bold;
}

.achievement-description {
  font-size: 14px;
  color: #555;
}
</style>
