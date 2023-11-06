<template>
  <div class="habits-page" v-show="!this.$store.state.isLoading">
    <div class="habit-tracker-container">
      <div
        class="card habit-tracker"
        v-for="(habit, index) in filteredHabits"
        :key="index"
        @click="navigateToHabitPage(habit)"
      >
        <div class="heading-container">
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
      <div
        class="card habit-tracker"
        id="add-habit-container"
        @click="addHabitModal()"
      >
        <div class="add-button">
          <h1>Add A New Habit</h1>
        </div>
      </div>
    </div>
    <!-- MODAL AREA -->
    <div class="modal card" v-show="showModal">
      <div class="modal-content">
        <span class="close" @click="closeModal">&times;</span>
        <h1>Add a New Habit</h1>
        <div class="form-group">
          <label for="habitName">Habit Name:</label>
          <input
            type="text"
            id="habitName"
            v-model="habitName"
            class="form-input"
          />
        </div>
        <div style="display: flex; justify-content: center; margin-top: 20px">
          <button class="modal-button" @click="saveHabit">Save Habit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      habitName: "",
      showModal: false,
      habits: [
        {
          name: "Running",
          completionPercentage: 60,
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
            label: "Days Until Next Achievement:",
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
            label: "Days Until Next Achievement:",
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
            label: "Days Until Next Achievement:",
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
            value: 5,
            label: "Total Distance:",
          },
          numberOfDaysUntilAchievements: {
            value: 10,
            label: "Days Until Next Achievement:",
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
            label: "Days Until Next Achievement:",
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
    addHabitModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    saveHabit() {
      this.habitName = "";
      this.showModal = false;
    },
    updateHabitInfo(habit) {
      this.$store.state.selectedHabitData = habit;
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

@media (min-width: 768px) {
  .habit-tracker-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .habit-tracker-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
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

.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 5% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 8px;
  position: relative;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  font-size: 16px;
  margin-bottom: 5px;
}

.form-input {
  padding: 10px 0px 10px 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 15px;
}

.form-input:focus {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #6da9e4;
  outline: none;
}

.modal-button {
  background-color: #4169e1;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
</style>
