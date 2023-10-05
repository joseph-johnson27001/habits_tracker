<template>
  <div class="habits-page">
    <div class="habit-tracker-container">
      <div
        class="card habit-tracker"
        v-for="(habit, index) in filteredHabits"
        :key="index"
        @click="navigateToHabitPage(habit)"
      >
        <div class="heading-area">
          <h1>{{ habit.name }}</h1>
        </div>
        <div v-for="(field, fieldIndex) in habit.fields" :key="fieldIndex">
          <p>{{ field.label }} {{ field.value }}</p>
        </div>
        <div class="progress-bar">
          <div
            class="progress-fill fill-animation"
            :style="'width: ' + habit.progress + '%'"
          ></div>
        </div>
      </div>
      <div class="card habit-tracker" id="add-habit-container">
        <div class="add-button">
          <h1>Add A New Habit</h1>
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
          completionPercentage: 60,
          dayStreak: {
            value: 3,
            label: "Days in a Row:",
          },
          totalDistance: {
            value: 12 + " km",
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
          completionPercentage: 20,
          dayStreak: {
            value: 7,
            label: "Days in a Row:",
          },
          totalMinutes: {
            value: 210,
            label: "Total Minutes:",
          },
          numberOfDaysUntilAchievements: {
            value: 3,
            label: "Number of Days Until Next Achievement:",
          },
          minutesToAchievements: {
            value: 90,
            label: "Minutes Until Next Achievement:",
          },
        },
        {
          name: "Reading",
          completionPercentage: 30,
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
          name: "Swimming",
          completionPercentage: 50,
          dayStreak: {
            value: 30,
            label: "Days in a Row:",
          },
          totalDistance: {
            value: 5 + " km",
            label: "Total Distance:",
          },
          numberOfDaysUntilAchievements: {
            value: 10,
            label: "Number of Days Until Next Achievement:",
          },
          distanceToAchievements: {
            value: 5,
            label: "Distance Until Next Achievement:",
          },
        },
        {
          name: "Yoga",
          completionPercentage: 90,
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
          progress: habit.completionPercentage,
        };
      });
    },
  },
  methods: {
    updateHabitInfo(habit) {
      const selectedHabitData = {
        name: habit.name,
      };
      habit.fields.forEach((field) => {
        selectedHabitData[field.label] = field.value;
      });
      this.$store.state.selectedHabitData = selectedHabitData;
    },
    navigateToHabitPage(habit) {
      const name = habit.name;
      this.updateHabitInfo(habit);
      this.$router.push({ name: "habit", params: { name } });
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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

#add-habit-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.progress-bar {
  height: 10px;
  background-color: #ddd;
  margin-top: 10px;
}

.progress-fill {
  height: 100%;
  background-color: #4caf50;
}

.fill-animation {
  animation: fill 2s ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes fill {
  from {
    width: 0;
  }
}
</style>
