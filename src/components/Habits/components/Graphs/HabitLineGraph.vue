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
                label: "Progress",
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                data: this.habitData.data,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false, // Disable the legend
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

<style scoped></style>
