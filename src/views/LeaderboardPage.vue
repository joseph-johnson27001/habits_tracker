<template>
  <div class="leaderboard-page">
    <div>
      <LeaderboardGraph
        v-for="(graphData, index) in graphDataArray"
        :key="index"
        :data="graphData"
        :canvasId="'leaderboard-graph-' + index"
        :title="graphData.graphTitle"
      />
    </div>
    <div class="leaderboard-stats">
      <LeaderboardUserStats />
    </div>
  </div>
</template>

<script>
import LeaderboardGraph from "@/components/Leaderboard/LeaderboardGraph.vue";
import LeaderboardUserStats from "@/components/Leaderboard/LeaderboardUserStats.vue";

export default {
  components: {
    LeaderboardGraph,
    LeaderboardUserStats,
  },
  data() {
    return {
      graphDataArray: [
        {
          graphTitle: "Meditating",
          labels: [
            "John Doe",
            "Alice Smith",
            "Emily Johnson",
            "Michael Green",
            "Sarah Brown",
            "Sophia Adams",
            "Liam Miller",
            "Ella Davis",
            "Matthew White",
            "Ava Martinez",
          ],
          datasets: [
            {
              label: "Score",
              data: [85, 92, 78, 88, 95, 70, 88, 75, 92, 81],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        {
          graphTitle: "Running",
          labels: [
            "David Miller",
            "Linda Wilson",
            "Robert Harris",
            "Olivia Turner",
            "Daniel Clark",
          ],
          datasets: [
            {
              label: "Score",
              data: [70, 88, 75, 92, 81],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        {
          graphTitle: "Fasting",
          labels: [
            "Sophia Adams",
            "Liam Miller",
            "Ella Davis",
            "Matthew White",
            "Ava Martinez",
          ],
          datasets: [
            {
              label: "Score",
              data: [78, 89, 92, 87, 94],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.leaderboard-page {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}

@media (max-width: 992px) {
  .leaderboard-page {
    grid-template-columns: 1fr;
  }
  .leaderboard-stats {
    display: none;
  }
}
</style>
