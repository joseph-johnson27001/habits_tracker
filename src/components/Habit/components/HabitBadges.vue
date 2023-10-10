<template>
  <div class="badges-section">
    <div class="badge-list">
      <div class="badge-item" v-for="(badge, index) in badges" :key="index">
        <span :class="['badge-icon', badge.completed ? '' : 'gray-badge']">{{
          badge.icon
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HabitBadges",
  data() {
    return {
      userName: this.$store.state.userName,
      badges: [
        {
          name: "Badge 1",
          icon: "🏆",
          completed: true,
        },
        {
          name: "Badge 2",
          icon: "🥇",
          completed: true,
        },
        {
          name: "Badge 3",
          icon: "🎯",
          completed: true,
        },
        {
          name: "Badge 4",
          icon: "🌟",
          completed: true,
        },
        {
          name: "Badge 5",
          icon: "🏅",
          completed: true,
        },
        {
          name: "Badge 6",
          icon: "🚀",
          completed: true,
        },
        {
          name: "Badge 7",
          icon: "📚",
          completed: true,
        },
        {
          name: "Badge 8",
          icon: "💪",
          completed: false,
        },
        {
          name: "Badge 9",
          icon: "🌿",
          completed: false,
        },
        {
          name: "Badge 10",
          icon: "🎉",
          completed: false,
        },
        {
          name: "Badge 11",
          icon: "🧠",
          completed: false,
        },
        {
          name: "Badge 12",
          icon: "🔥",
          completed: false,
        },
        {
          name: "Badge 13",
          icon: "🎖️",
          completed: false,
        },
        {
          name: "Badge 14",
          icon: "💡",
          completed: false,
        },
        {
          name: "Badge 15",
          icon: "🌞",
          completed: false,
        },
        {
          name: "Badge 16",
          icon: "🚀",
          completed: false,
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
}

.gray-badge {
  filter: grayscale(100%); /* Apply grayscale filter to "gray out" the icon */
}
</style>
