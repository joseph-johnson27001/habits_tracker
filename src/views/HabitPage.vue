<template>
  <div>
    <div class="top-heading">
      <div class="card" style="display: flex; align-items: center">
        <h1>{{ habitBasicInfo.name }}</h1>
      </div>
      <div class="card">
        <div class="heading-container">
          <HabitBadges />
        </div>
      </div>
      <div
        class="card"
        style="display: flex; align-items: center; justify-content: center"
      >
        <button class="modal-button" @click="showModal = true">Add Data</button>
      </div>
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <h1>Add New Data</h1>
          <form @submit.prevent="addNewData">
            <label for="label" style="margin-right: 2px">Label:</label>
            <input
              type="text"
              id="label"
              v-model="newLabel"
              required
            /><br /><br />
            <label for="data" style="margin-right: 2px">Data:</label>
            <input
              type="number"
              id="data"
              v-model="newData"
              required
            /><br /><br />
            <button type="submit" class="modal-button">Add Data</button>
          </form>
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
              </p>
              <span
                v-if="aim.completed"
                style="display: flex; align-items: center"
                >&#10003;</span
              >
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
      <HabitLineGraph :habitData="habitData" :key="habitDataKey" />
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
      showModal: false,
      newLabel: "",
      newData: null,
      habitDataKey: 0,
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
  methods: {
    addNewData() {
      if (this.newLabel && this.newData !== null) {
        this.habitData.labels.push(this.newLabel);
        this.habitData.data.push(this.newData);
        this.showModal = false;
        this.newLabel = "";
        this.newData = null;
        this.habitDataKey += 1; // Incrementing the key to force the component to reload
      }
    },
  },
};
</script>

<style scoped>
.top-heading {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.habit-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

h1 {
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

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 20%;
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

.modal-button {
  background-color: #4169e1;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
}
</style>
