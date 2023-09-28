<template>
  <div class="card">
    <div class="graph-container">
      <!-- Use a dynamic canvas id to differentiate between graphs -->
      <canvas :id="canvasId" height="400"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    canvasId: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.renderLeaderboardGraph();
  },
  methods: {
    renderLeaderboardGraph() {
      const { labels, datasets } = this.data;

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

      const ctx = document.getElementById(this.canvasId).getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: options,
      });
    },
  },
};
</script>
