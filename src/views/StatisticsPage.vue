<template>
  <div>
    <div class="habit-statistics card">
      <h1>Overall</h1>
      <p>Habit with Longest Streak: {{ overall.longestStreakHabit }}</p>
      <p>
        Total Time Spent on All Habits: {{ overall.totalTimeSpentAllHabits }}
      </p>
      <p>Total Habit Completions: {{ overall.totalHabitCompletions }}</p>
      <p>
        Overall Average Performance: {{ overall.overallAveragePerformance }}
      </p>
      <p>Overall Custom Metric: {{ overall.overallCustomMetric }}</p>
      <p>Overall Goal Progress: {{ overall.overallGoalProgress }}</p>
    </div>
    <div class="statistics-layout">
      <div
        v-for="(habit, index) in habits"
        :key="index"
        class="habit-statistics card"
      >
        <div>
          <div class="habit-heading-container">
            <h1>{{ habit.name }}</h1>
            <span>{{ habit.icon }}</span>
          </div>
        </div>
        <p>Total Time Spent: {{ habit.totalTimeSpent }}</p>
        <p>Completion Count: {{ habit.completionCount }}</p>
        <p>Longest Streak: {{ habit.longestStreak }}</p>
        <p>Current Streak: {{ habit.currentStreak }}</p>
        <p>Average Performance: {{ habit.averagePerformance }}</p>
        <p>Custom Metric: {{ habit.customMetric }}</p>
        <p>Goal Progress: {{ habit.goalProgress }}</p>
        <!-- Add more statistics as needed -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habits: [
        {
          name: "Running",
          totalTimeSpent: "20 hours",
          completionCount: 50,
          longestStreak: "30 days",
          currentStreak: "5 days",
          averagePerformance: "5 times per week",
          customMetric: "Distance Covered",
          goalProgress: "80%",
          icon: "🏆",
        },
        {
          name: "Reading",
          totalTimeSpent: "40 hours",
          completionCount: 80,
          longestStreak: "50 days",
          currentStreak: "15 days",
          averagePerformance: "3 times per week",
          customMetric: "Books Completed",
          goalProgress: "60%",
          icon: "🥇",
        },
        {
          name: "Meditation",
          totalTimeSpent: "10 hours",
          completionCount: 30,
          longestStreak: "20 days",
          currentStreak: "8 days",
          averagePerformance: "2 times per week",
          customMetric: "Minutes Meditated",
          goalProgress: "40%",
          icon: "🎯",
        },
        {
          name: "Coding",
          totalTimeSpent: "60 hours",
          completionCount: 100,
          longestStreak: "70 days",
          currentStreak: "20 days",
          averagePerformance: "4 times per week",
          customMetric: "Projects Completed",
          goalProgress: "90%",
          icon: "🌟",
        },
        {
          name: "Gardening",
          totalTimeSpent: "15 hours",
          completionCount: 40,
          longestStreak: "25 days",
          currentStreak: "10 days",
          averagePerformance: "3 times per week",
          customMetric: "Plants Grown",
          goalProgress: "70%",
          icon: "🏅",
        },
        {
          name: "Cooking",
          totalTimeSpent: "30 hours",
          completionCount: 60,
          longestStreak: "40 days",
          currentStreak: "12 days",
          averagePerformance: "2 times per week",
          customMetric: "New Recipes Tried",
          goalProgress: "50%",
          icon: "🍳",
        },
      ],
      overall: {
        longestStreakHabit: "Running (77 days)",
        totalTimeSpentAllHabits: "70 hours",
        totalHabitCompletions: 160,
        overallAveragePerformance: "3 times per week",
        overallCustomMetric: "Combined Metric",
        overallGoalProgress: "60%",
      },
    };
  },
};
</script>

<style scoped>
.statistics-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
}

@media (max-width: 992px) {
  .statistics-layout {
    grid-template-columns: 1fr;
  }
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.habit-heading-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.habit-heading-container i {
  font-size: 24px;
}
</style>
