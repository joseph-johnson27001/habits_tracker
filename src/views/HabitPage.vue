<template>
  <div>
    <div class="card">
      <h1>{{ habitBasicInfo.name }}</h1>
    </div>
    <div class="habit-layout">
      <div class="card">
        <div class="heading-container">
          <h1>Basic Info</h1>
        </div>
        <div class="basic-info-content">
          <div
            class="basic-info-item"
            v-for="(field, fieldIndex) in filteredHabitData.fields"
            :key="fieldIndex"
          >
            <strong>{{ field.label }}</strong> {{ field.value }}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="heading-container">
          <h1>Heading</h1>
        </div>
      </div>
    </div>
    <div class="card">
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
      filteredHabitData: {},
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
  mounted() {
    console.log(this.habitBasicInfo);

    // Create a copy of the habitBasicInfo
    this.filteredHabitData = { ...this.habitBasicInfo };

    // Check if the fields array exists and has more than one item
    if (
      this.filteredHabitData.fields &&
      this.filteredHabitData.fields.length > 1
    ) {
      // Remove the first item from the fields array
      this.filteredHabitData.fields.shift();
      console.log(this.filteredHabitData);
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

.habit-layout {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

.heading-container {
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
  padding-bottom: 10px;
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
