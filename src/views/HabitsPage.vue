<template>
  <div class="habits-page">
    <div class="habit-tracker-container">
      <div
        class="card habit-tracker"
        v-for="(habit, index) in filteredHabits"
        :key="index"
      >
        <h1>{{ habit.name }}</h1>
        <div v-for="(field, fieldIndex) in habit.fields" :key="fieldIndex">
          <p>{{ field.label }} {{ field.value }}</p>
        </div>
      </div>
      <div class="card habit-tracker">
        <h1>Add A New Habit</h1>
        <div class="add-button">
          <i
            class="fas fa-plus-circle fa-xl clickable-icon"
            @click="addHabit"
          ></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habits: [
        {
          name: "Running",
          dayStreak: {
            value: 3,
            label: "Days in a Row:",
          },
          totalDistance: {
            value: 12,
            label: "Total Distance:",
          },
          numberOfDaysUntilAchievements: {
            value: 2,
            label: "Number of Days Until Next Achievement:",
          },
          distanceToAchievements: {
            value: 38,
            label: "Distance Until Next Achievement:",
          },
        },
        {
          name: "Meditating",
          dayStreak: {
            value: 7,
            label: "Days in a Row:",
          },
          totalMinutes: {
            value: 210,
            label: "Total Minutes:",
          },
          daysStreak: {
            value: 3,
            label: "Days in a Row:",
          },
          numberOfDaysUntilAchievements: {
            value: 3,
            label: "Number of Days Until Next Achievement:",
          },
          minutesToAchievements: {
            value: 90,
            label: "Miuntes Until Next Achievement:",
          },
        },
        {
          name: "Reading",
          dayStreak: {
            value: 14,
            label: "Days in a Row:",
          },
          totalMinutes: {
            value: 420,
            label: "Total Minutes:",
          },
          numberOfDaysUntilAchievements: {
            value: 5,
            label: "Number of Days Until Next Achievement:",
          },
          minutesToAchievements: {
            value: 60,
            label: "Minutes Until Next Achievement:",
          },
        },
        {
          name: "Gardening",
          dayStreak: {
            value: 30,
            label: "Days in a Row:",
          },
          totalDistance: {
            value: 0,
            label: "Total Distance:",
          },
          numberOfDaysUntilAchievements: {
            value: 10,
            label: "Number of Days Until Next Achievement:",
          },
          distanceToAchievements: {
            value: 200,
            label: "Distance Until Next Achievement:",
          },
        },
        {
          name: "Yoga",
          dayStreak: {
            value: 5,
            label: "Days in a Row:",
          },
          totalMinutes: {
            value: 150,
            label: "Total Minutes:",
          },
          numberOfDaysUntilAchievements: {
            value: 2,
            label: "Number of Days Until Next Achievement:",
          },
          minutesToAchievements: {
            value: 30,
            label: "Minutes Until Next Achievement:",
          },
        },
      ],
    };
  },
  computed: {
    filteredHabits() {
      return this.habits.map((habit) => {
        const fields = Object.keys(habit).filter((field) => field !== "name");
        return {
          name: habit.name,
          fields: fields.map((field) => habit[field]),
        };
      });
    },
  },
  methods: {
    addHabit() {
      this.habits.push({
        name: "New Habit",
        graphData: {
          labels: [],
          data: [],
        },
        daysTracked: 0,
      });
    },
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

.card {
  position: relative;
}

.habit-tracker {
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}
.habit-tracker:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}
.habit-tracker-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin: 0 auto;
}

.add-button i {
  margin: 0;
  padding: 0;
  color: #4169e1;
}
</style>
