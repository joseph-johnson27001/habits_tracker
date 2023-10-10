<template>
  <div>
    <div class="top-heading">
      <div class="card" style="display: flex; align-items: center">
        <h1>{{ habitBasicInfo.name.toUpperCase() }}</h1>
      </div>
      <div class="card">
        <div class="heading-container">
          <HabitBadges />
        </div>
      </div>
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
            style="display: flex; justify-content: space-between"
          >
            <p>
              <strong>{{ field.label }}</strong>
            </p>
            <p>{{ field.value }}</p>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="heading-container">
          <h1>Achievements</h1>
          <div class="achievement-content">
            <div
              v-for="(aim, aimIndex) in aimsAndAchievements"
              :key="aimIndex"
              :style="{
                color: aim.completed ? '#228B22' : '#888',
                'font-weight': aim.completed ? 'bold' : 'normal',
              }"
              class="achievements-item"
            >
              <p>
                {{ aim.text }}
                <span v-if="aim.completed">&#10003;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <h1>Stats</h1>
        <HabitsSection />
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
import HabitBadges from "@/components/Habit/components/HabitBadges";
import HabitsSection from "@/components/Habit/components/HabitStreaks";

export default {
  components: {
    HabitLineGraph,
    HabitBadges,
    HabitsSection,
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
      aimsAndAchievements: [
        { text: "COMPLETED FIRST DAY", completed: true },
        { text: "7 DAYS IN A ROW!", completed: true },
        { text: "30 day streak!", completed: false },
        { text: "100 day streak!", completed: false },
      ],
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
.top-heading {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}
.habit-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

h1 {
  color: #4169e1;
  font-size: 18px;
}

.graph-heading-container {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.graph-heading-container h1 {
  padding-bottom: 0px;
}

.achievement-content,
.basic-info-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.achievements-item,
.basic-info-item {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  background-color: white;
}
</style>
