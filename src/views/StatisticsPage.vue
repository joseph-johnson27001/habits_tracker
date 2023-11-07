<template>
  <div class="card">
    <h1>Overall</h1>
    <p>Habit with Longest Streak: {{ overall.longestStreakHabit }}</p>
    <p>Total Time Spent on All Habits: {{ overall.totalTimeSpentAllHabits }}</p>
    <p>Total Habit Completions: {{ overall.totalHabitCompletions }}</p>
    <p>Overall Average Performance: {{ overall.overallAveragePerformance }}</p>
    <p>Overall Custom Metric: {{ overall.overallCustomMetric }}</p>
    <p>Overall Goal Progress: {{ overall.overallGoalProgress }}</p>
    <div v-for="(habit, index) in habits" :key="index" class="habit-statistics">
      <h1>{{ habit.name }}</h1>
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
        },
        // Add more habits as needed
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
h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.statistic {
  margin-bottom: 5px;
}

.habit-statistics {
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

/* Add more custom styles as needed */
</style>
