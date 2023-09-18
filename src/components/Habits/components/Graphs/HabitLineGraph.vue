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
    yAxisLabel: {
      type: String,
      required: true,
    },
    xAxisLabel: {
      type: String,
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
                label: this.yAxisLabel,
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
            scales: {
              x: {
                title: {
                  display: true,
                  text: this.xAxisLabel, // Set x-axis label
                },
              },
              y: {
                title: {
                  display: true,
                  text: this.yAxisLabel, // Set y-axis label
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
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      return `rgba(${red}, ${green}, ${blue}, 1)`;
    },
    generateGradientBackground() {
      const gradient = this.$refs.lineChart
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, `${this.lineChartColor.replace("1)", "0.5)")}`);
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
