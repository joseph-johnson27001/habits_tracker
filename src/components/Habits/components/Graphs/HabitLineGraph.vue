<template>
  <div>
    <canvas ref="lineChart" height="400"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  data() {
    return {
      chart: null,
    };
  },
  props: {
    habitData: {
      type: Object,
      required: true,
    },
  },
  methods: {
    renderLineChart() {
      if (!this.chart) {
        this.chart = new Chart(this.$refs.lineChart, {
          type: "line",
          data: {
            labels: this.habitData.labels,
            datasets: [
              {
                label: "Habit Progress",
                borderColor: "rgba(75, 192, 192, 1)",
                fill: true,
                backgroundColor: this.generateGradientBackground(),
                data: this.habitData.data,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          },
        });
      } else {
        this.chart.data.labels = this.habitData.labels;
        this.chart.data.datasets[0].data = this.habitData.data;
        this.chart.update();
      }
    },
    generateGradientBackground() {
      const gradient = this.$refs.lineChart
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, "rgba(75, 192, 192, 0.5)");
      gradient.addColorStop(0.5, "rgba(75, 192, 192, 0.3)");
      gradient.addColorStop(1, "rgba(75, 192, 192, 0.1)");
      return gradient;
    },
  },
  mounted() {
    this.renderLineChart();
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  },
};
</script>

<style scoped>
/* Add any custom styles for the chart container here */
</style>
