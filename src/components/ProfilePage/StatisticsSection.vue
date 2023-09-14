<template>
  <div class="statistics-section">
    <h1>STATISTICS</h1>
    <div class="statistics-summary">
      <div class="stat-item">
        <div class="stat-label">Total Completed Habits</div>
        <div class="stat-value">{{ totalCompletedHabits }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Longest Habit Streak</div>
        <div class="stat-value">{{ longestHabitStreak }} days</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Habits Completed Today</div>
        <div class="stat-value">{{ habitsCompletedToday }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Habits Completed This Week</div>
        <div class="stat-value">{{ habitsCompletedThisWeek }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Habits Completed This Month</div>
        <div class="stat-value">{{ habitsCompletedThisMonth }}</div>
      </div>
      <div class="stat-item">
        <div class="stat-label">Habits Completed This Year</div>
        <div class="stat-value">{{ habitsCompletedThisYear }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StatisticsSection",
  data() {
    return {
      totalCompletedHabits: 245,
      longestHabitStreak: 42,
      habitsCompletedToday: 5,
      habitsCompletedThisWeek: 32,
      habitsCompletedThisMonth: 78,
      habitsCompletedThisYear: 210,
    };
  },
};
</script>

<style scoped>
.stat-item {
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between; /* Align values to both ends */
  border-bottom: 1px solid #ccc;
  background-color: white;
}

.stat-label {
  font-weight: bold;
  font-size: 16px;
}

.stat-value {
  font-size: 18px;
  color: #333;
}
</style>
