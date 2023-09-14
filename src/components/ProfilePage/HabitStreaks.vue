<template>
  <div class="habits-section">
    <h1>HABIT STREAKS SECTION</h1>
    <div class="habit-list">
      <div
        class="habit-item"
        v-for="(habit, index) in habitStreaks"
        :key="index"
      >
        <div class="habit-title">{{ habit.title }}</div>
        <div class="habit-progress">
          <div
            class="habit-graph"
            v-for="(graph, graphIndex) in habit.graphs"
            :key="graphIndex"
          >
            <habit-donut-chart
              :data="graph.chartData"
              :options="graph.chartOptions"
            ></habit-donut-chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HabitDonutChart from "@/components/ProfilePage/components/HabitGraphs/HabitDonutChart.vue";

export default {
  name: "HabitsSection",
  components: {
    HabitDonutChart,
  },
  data() {
    return {
      habitStreaks: [
        {
          title: "Writing",
          graphs: [
            {
              chartData: {
                labels: ["Completed", "Remaining"],
                datasets: [
                  {
                    data: [50, 50],
                    backgroundColor: ["#36A2EB", "#FFCE56"],
                  },
                ],
              },
              chartOptions: {
                responsive: true,
              },
            },
          ],
        },
        {
          title: "Reading",
          graphs: [
            {
              chartData: {
                labels: ["Completed", "Remaining"],
                datasets: [
                  {
                    data: [80, 20],
                    backgroundColor: ["#4CAF50", "#FF5733"],
                  },
                ],
              },
              chartOptions: {
                responsive: true,
              },
            },
          ],
        },
        {
          title: "Meditating",
          graphs: [
            {
              chartData: {
                labels: ["Completed", "Remaining"],
                datasets: [
                  {
                    data: [25, 75],
                    backgroundColor: ["#FFCE56", "#FF5733"],
                  },
                ],
              },
              chartOptions: {
                responsive: true,
              },
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.habit-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 100px;
}

/* Add your other component-specific styles here */
</style>
