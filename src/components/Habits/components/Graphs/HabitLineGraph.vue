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
      lineChartColor: this.generateRandomColor(),
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
                borderColor: this.lineChartColor,
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
    generateRandomColor() {
      // Generate random values for red, green, and blue
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);

      return `rgba(${red}, ${green}, ${blue}, 1)`;
    },
    generateGradientBackground() {
      const gradient = this.$refs.lineChart
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, `${this.lineChartColor.replace("1)", "0.8)")}`);
      gradient.addColorStop(
        0.5,
        `${this.lineChartColor.replace("1)", "0.3)")}`
      );
      gradient.addColorStop(1, `${this.lineChartColor.replace("1)", "0.1)")}`);
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
