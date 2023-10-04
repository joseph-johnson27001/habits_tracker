<template>
  <div>
    <div class="heading-container">
      <h1>Habit:</h1>
    </div>
    <div class="graph-container">
      <canvas ref="lineChart" height="400"></canvas>
    </div>
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
    yAxisLabel: {
      type: String,
      // required: true,
    },
    xAxisLabel: {
      type: String,
      // required: true,
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
                label: this.yAxisLabel,
                borderColor: this.lineChartColor,
                fill: true,
                backgroundColor: this.generateGradientBackground(),
                data: this.habitData.data,
                tension: 0.1,
                pointRadius: 0,
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
            scales: {
              x: {
                title: {
                  display: true,
                  text: this.xAxisLabel,
                },
                grid: {
                  display: false,
                },
              },
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: this.yAxisLabel,
                },
                grid: {
                  display: false,
                },
              },
            },
          },
        });
      } else {
        this.chart.data.labels = this.habitData.labels;
        this.chart.data.datasets[0].data = this.habitData.data;
        this.chart.options.scales.x.title.text = this.xAxisLabel; // Update x-axis label
        this.chart.options.scales.y.title.text = this.yAxisLabel; // Update y-axis label
        this.chart.update();
      }
    },
    generateRandomColor() {
      const possibleColors = [
        "rgb(255, 99, 132, 1)",
        "rgb(255, 159, 64, 1)",
        "rgb(255, 205, 86, 1)",
        "rgb(75, 192, 192, 1)",
        "rgb(54, 162, 235, 1)",
        "rgb(153, 102, 255, 1)",
      ];
      const randomIndex = Math.floor(Math.random() * possibleColors.length);
      const selectedColor = possibleColors[randomIndex];
      return selectedColor;
    },
    generateGradientBackground() {
      const gradient = this.$refs.lineChart
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, `${this.lineChartColor.replace("1)", "0.2)")}`);
      gradient.addColorStop(
        0.5,
        `${this.lineChartColor.replace("1)", "0.1)")}`
      );
      gradient.addColorStop(1, `${this.lineChartColor.replace("1)", "0")}`);
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
