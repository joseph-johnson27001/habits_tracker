<template>
  <div class="completed-section">
    <h1>RECENTLY COMPLETED</h1>
    <ul class="completed-list">
      <li
        class="completed-item"
        v-for="(aim, index) in completedAims"
        :key="index"
      >
        <div class="completed-item-title">{{ aim.title }}</div>
        <div class="completed-item-description">{{ aim.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CompletedSection",
  data() {
    return {
      completedAims: [
        {
          title: "🏆 Completed Daily Aim",
          description: "You've completed your daily writing goal! 📝",
        },
        {
          title: "🎯 Completed Weekly Aim",
          description: "You completed your weekly fitness goal! 💪",
        },
        {
          title: "🥇 Completed Monthly Aim",
          description: "You've achieved your monthly reading target! 📚",
        },
      ],
    };
  },
};
</script>

<style scoped>
.completed-list {
  list-style-type: none;
  padding: 0;
}

.completed-item {
  padding: 15px 10px;
  border-bottom: 1px solid #ccc;
}

.completed-item:hover {
  background-color: #f2f2f2;
}

.completed-item-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.completed-item-description {
  font-size: 14px;
  color: #555;
}
</style>
