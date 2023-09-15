<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default {
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = this.$refs.myChart;
      new Chart(ctx, {
        type: "doughnut",
        data: this.data,
        options: {
          plugins: {
            legend: {
              display: true,
              position: "none",
            },
            title: {
              display: true,
              text: this.options.title,
              fontSize: 16,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                const dataset = data.datasets[0];
                const total = dataset.data.reduce(
                  (previousValue, currentValue) => previousValue + currentValue
                );
                const currentValue = dataset.data[tooltipItem.index];
                const percentage = ((currentValue / total) * 100).toFixed(2);
                return `${dataset.label}: ${currentValue} (${percentage}%)`;
              },
            },
          },
        },
      });
    },
  },
  props: {
    data: Object,
    options: Object,
  },
};
</script>

<style scoped></style>
