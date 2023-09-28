<template>
  <div class="card">
    <h1>LEADERBOARD GRAPH</h1>
    <div class="graph-container">
      <!-- Simulated graph here (you can use a chart library like Chart.js) -->
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
              display: false, // Hide Y-axis gridlines
            },
          },
          x: {
            grid: {
              display: false, // Hide X-axis gridlines
            },
          },
        },
        plugins: {
          legend: {
            display: false, // Hide the legend (square at the top)
          },
        },
      };

      // Create a chart using a chart library (e.g., Chart.js)
      const ctx = document.getElementById("leaderboard-graph").getContext("2d");
      new Chart(ctx, {
        type: "bar", // You can choose the type of chart (bar, line, pie, etc.)
        data: data,
        options: options,
      });
    },
  },
};
</script>
