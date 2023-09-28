<template>
  <div class="leaderboard-page">
    <div>
      <LeaderboardGraph
        v-for="(graphData, index) in graphDataArray"
        :key="index"
        :data="graphData"
        :canvasId="'leaderboard-graph-' + index"
      />
    </div>
    <div>
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
          labels: ["Player 1", "Player 2", "Player 3", "Player 4", "Player 5"],
          datasets: [
            {
              label: "Score",
              data: [85, 92, 78, 88, 95],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        {
          labels: ["Player A", "Player B", "Player C", "Player D", "Player E"],
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
          labels: ["Player X", "Player Y", "Player Z", "Player W", "Player V"],
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
</style>
