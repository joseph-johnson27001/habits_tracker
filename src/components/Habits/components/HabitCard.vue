<template>
  <div>
    <div v-for="(habit, index) in habits" :key="index" class="habit-card">
      <div class="habit-name">{{ habit.name }}</div>
      <HabitLineGraph :habitData="habit.chartData" />
    </div>
  </div>
</template>

<script>
import HabitLineGraph from "@/components/Habits/components/Graphs/HabitLineGraph.vue";

export default {
  name: "HabitsCards",
  props: {
    habits: Array,
  },
  components: {
    HabitLineGraph,
  },
};
</script>

<style scoped>
.habit-card {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.habit-name {
  font-weight: bold;
  font-size: 18px;
}
</style>
