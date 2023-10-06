<template>
  <div>
    <div class="card">
      <h1>{{ habitBasicInfo.name.toUpperCase() }}</h1>
    </div>
    <div class="habit-layout">
      <div class="card">
        <div class="heading-container">
          <h1>Overview</h1>
        </div>
        <div class="basic-info-content">
          <div
            class="basic-info-item"
            v-for="(field, fieldIndex) in filteredFields"
            :key="fieldIndex"
          >
            <strong>{{ field.label }}</strong> {{ field.value }}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="heading-container">
          <h1>Aims</h1>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="graph-heading-container heading-container">
        <h1>Progress</h1>
      </div>
      <HabitLineGraph :habitData="habitData" />
    </div>
  </div>
</template>

<script>
import HabitLineGraph from "@/components/Habit/components/Graphs/HabitLineGraph";

export default {
  components: {
    HabitLineGraph,
  },
  props: {
    habitId: {
      type: String,
    },
  },
  data() {
    return {
      habitBasicInfo: this.$store.state.selectedHabitData,
      habitData: {
        labels: [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun",
        ],
        data: [30, 40, 50, 30, 60, 20, 70, 50, 70, 50, 20, 10, 40, 50],
      },
    };
  },
  computed: {
    filteredFields() {
      return this.habitBasicInfo.fields.filter((field) => field.label);
    },
  },
};
</script>

<style scoped>
.habit-layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

.heading-container h1 {
  font-size: 18px;
  color: #4169e1;
  padding-bottom: 5px;
}

.graph-heading-container {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.graph-heading-container h1 {
  padding-bottom: 0px;
}

.basic-info-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.basic-info-item {
  display: flex;
  justify-content: space-between;
}

.basic-info-item strong {
  font-weight: bold;
  margin-right: 10px;
}
</style>
