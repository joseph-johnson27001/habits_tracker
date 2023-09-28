<template>
  <div class="card">
    <h1>LEADERBOARD GRAPH</h1>
    <div class="graph-container">
      <canvas id="leaderboard-graph"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    this.renderLeaderboardGraph();
  },
  methods: {
    renderLeaderboardGraph() {
      const data = {
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
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            stepSize: 10,
            grid: {
              display: false,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      };

      const ctx = document.getElementById("leaderboard-graph").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: data,
        options: options,
      });
    },
  },
};
</script>
