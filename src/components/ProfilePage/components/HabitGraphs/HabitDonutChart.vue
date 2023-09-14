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
        options: this.options,
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
