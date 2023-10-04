<template>
  <div>
    <div class="card">
      <h1>Habit Name Here</h1>
    </div>
    <div class="habit-layout">
      <div class="card">
        <HabitLineGraph
          :habitData="habitData"
          yAxisLabel="Times Completed"
          xAxisLabel="Days of the Week"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HabitLineGraph from "@/components/Habit/components/Graphs/HabitLineGraph";

export default {
  components: {
    HabitLineGraph,
  },
  props: {
    habitId: {
      type: String,
    },
  },
  data() {
    return {
      habitData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        data: [3, 4, 5, 3, 6, 2, 7],
      },
    };
  },
};
</script>

<style scoped>
h1 {
  color: #4169e1;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.1s;
}
.habit-layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
}
</style>
