<template>
  <div class="badges-section">
    <h1>BADGES</h1>
    <div class="badge-list">
      <div class="badge-item" v-for="(badge, index) in badges" :key="index">
        <span class="badge-icon">{{ badge.icon }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BadgesSection",
  data() {
    return {
      badges: [
        {
          name: "Badge 1",
          icon: "🏆",
        },
        {
          name: "Badge 2",
          icon: "🥇",
        },
        {
          name: "Badge 3",
          icon: "🎯",
        },
        {
          name: "Badge 4",
          icon: "🌟",
        },
        {
          name: "Badge 5",
          icon: "🏅",
        },
        {
          name: "Badge 6",
          icon: "🚀",
        },
        {
          name: "Badge 7",
          icon: "📚",
        },
        {
          name: "Badge 8",
          icon: "💪",
        },
        {
          name: "Badge 9",
          icon: "🌿",
        },
        {
          name: "Badge 10",
          icon: "🎉",
        },
        {
          name: "Badge 11",
          icon: "🧠",
        },
        {
          name: "Badge 12",
          icon: "🔥",
        },
        {
          name: "Badge 13",
          icon: "🎖️",
        },
        {
          name: "Badge 14",
          icon: "💡",
        },
        {
          name: "Badge 15",
          icon: "🌞",
        },
        {
          name: "Badge 16",
          icon: "🚀",
        },
      ],
    };
  },
};
</script>

<style scoped>
.badge-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.badge-item {
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.badge-item:hover {
  transform: scale(1.1);
}

.badge-icon {
  width: 80px;
  height: 80px;
  /* Add styling for badge icons here */
}
</style>
