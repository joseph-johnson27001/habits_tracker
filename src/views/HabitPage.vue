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
      <div style="display: flex; align-items: center; justify-content: center">
        <button class="modal-button" @click="showModal = true">Add Data</button>
      </div>

      <!-- MODAL -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <span class="close" @click="showModal = false">&times;</span>
          <h2 class="modal-heading">Add New Data</h2>
          <form @submit.prevent="addNewData">
            <div class="new-data">
              <div class="form-group">
                <label for="label" class="form-label">Label:</label>
                <input
                  type="text"
                  id="label"
                  v-model="newLabel"
                  required
                  class="form-input"
                />
              </div>
              <div class="form-group">
                <label for="data" class="form-label">Data:</label>
                <input
                  type="number"
                  id="data"
                  v-model="newData"
                  required
                  class="form-input"
                />
              </div>
            </div>
            <div style="display: flex; justify-content: end">
              <button type="submit" class="modal-button">Add Data</button>
            </div>
          </form>
          <h2 class="modal-heading">Previous Data</h2>
          <table class="data-table">
            <thead>
              <tr>
                <th>Label</th>
                <th>Data</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in habitData.labels" :key="index">
                <td>{{ data }}</td>
                <td>
                  <input
                    v-model="habitData.data[index]"
                    class="editable-input"
                  />
                </td>
                <td>
                  <button class="edit-button" @click="editData()">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
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
    editData() {
      this.habitDataKey += 1; // Incrementing the key to force the component to reload
      this.showModal = false;
    },
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
  margin: 2% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
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
  padding: 10px;
  width: 98%;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 15px;
}

.modal-heading {
  margin-bottom: 20px;
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

.data-table {
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.data-table td,
.data-table th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

.data-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.data-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #4169e1;
  color: white;
}

.new-data {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.editable-input {
  width: 80%;
  padding: 8px;
}

.edit-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
