<template>
  <div class="habits-section">
    <h1>CURRENT TOP STREAK</h1>
    <div class="habit-list">
      <div
        class="habit-item"
        v-for="(habit, index) in habitStreaks"
        :key="index"
      >
        <div class="habit-title">
          <h1>{{ habit.title }}</h1>
        </div>
        <div class="habit-progress">
          <div
            class="habit-graph"
            v-for="(graph, graphIndex) in habit.graphs"
            :key="graphIndex"
          >
            <habit-donut-chart
              :data="graph.chartData"
              :options="graph.chartOptions"
              class="donut-graph"
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
          title: "30 Days of Meditating",
          graphs: [
            {
              chartData: {
                labels: ["Completed", "Remaining"],
                datasets: [
                  {
                    data: [24, 6],
                    backgroundColor: ["rgb(54, 162, 235)", "rgb(255, 99, 132)"],
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
  display: flex;
  justify-content: center;
}

.habit-title {
  display: flex;
  justify-content: center;
  margin-bottom: -25px;
}

.donut-graph {
  max-height: 200px;
  max-width: 200px;
}

/* Add your other component-specific styles here */
</style>
