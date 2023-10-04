<template>
  <div>
    <div class="card">
      <h1>Habit Name Here</h1>
    </div>
    <div class="habit-layout">
      <div class="card">
        <div class="heading-container">
          <h1>Heading</h1>
        </div>
      </div>
      <div class="card">
        <div class="heading-container">
          <h1>Heading</h1>
        </div>
      </div>
    </div>
    <div class="card">
      <HabitLineGraph :habitData="habitData" />
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
        labels: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
        data: [30, 40, 50, 30, 60, 20, 70, 50, 70, 50, 20, 10, 40, 50],
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
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}
</style>
