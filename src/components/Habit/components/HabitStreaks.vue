<template>
  <div class="habits-section">
    <div class="habit-list">
      <div
        class="habit-item"
        v-for="(habit, index) in habitStreaks"
        :key="index"
      >
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
import HabitDonutChart from "@/components/Habit/components/Graphs/HabitDonutGraph.vue";

export default {
  name: "HabitsSection",
  components: {
    HabitDonutChart,
  },
  data() {
    return {
      habitStreaks: [
        {
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
