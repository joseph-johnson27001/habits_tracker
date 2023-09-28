<template>
  <div class="card">
    <div class="heading-container">
      <h1>{{ title }}</h1>
    </div>
    <div class="graph-container">
      <canvas :id="canvasId" height="300"></canvas>
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
    title: {
      type: String, // Add a title prop
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

<style scoped>
h1 {
  color: #4169e1;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.1s;
}
.heading-container {
  padding: 5px;
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
}
</style>
