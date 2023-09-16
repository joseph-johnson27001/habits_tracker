<template>
  <div class="achievements-section">
    <div class="heading-area">
      <h1>ACHIEVEMENTS</h1>
      <i class="fas fa-angle-right view-more-link"></i>
    </div>
    <div class="achievements-list">
      <!-- Loop through achievements and display them -->
      <div
        class="achievement-item"
        v-for="(achievement, index) in achievements"
        :key="index"
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
  </div>
</template>

<script>
export default {
  name: "AchievementsSection",
  data() {
    return {
      userName: this.$store.state.userName,
      achievements: [
        {
          icon: "🏆",
          title: "High Achiever",
          description: "You've achieved excellence in your field.",
        },
        {
          icon: "🥇",
          title: "Gold Medalist",
          description: "You're the best of the best!",
        },
        {
          icon: "🎯",
          title: "Sharpshooter",
          description: "You've hit all your targets.",
        },
        {
          icon: "🌟",
          title: "Star Collector",
          description: "You've collected all the stars!",
        },
        {
          icon: "🏅",
          title: "Top Performer",
          description: "You've consistently performed at the top level.",
        },
        {
          icon: "🚀",
          title: "Rocket Scientist",
          description:
            "You've mastered rocket science and reached for the stars!",
        },
      ],
    };
  },
};
</script>

<style>
.achievements-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
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
