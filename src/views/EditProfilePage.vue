<template>
  <div class="card">
    <h1>EDIT PROFILE</h1>

    <!-- Edit First and Last Name -->
    <div class="form-group">
      <label for="fullName">Name</label>
      <input type="text" id="fullName" v-model="fullName" />
    </div>

    <!-- Edit User Title -->
    <div class="form-group">
      <label for="userTitle">User Title</label>
      <select id="userTitle" v-model="userTitle">
        <!-- Options for achievements go here -->
        <option>{{ userTitle }}</option>
        <option v-for="title in titlesArray" :key="title">{{ title }}</option>
      </select>
    </div>

    <!-- Edit Badges Display Preference -->
    <div class="form-group">
      <label for="displayBadges">Display Badges</label>
      <select id="displayBadges" v-model="displayBadges" multiple>
        <!-- Options for achievements go here -->
      </select>
    </div>

    <!-- Edit Latest Achievements -->
    <div class="form-group">
      <label for="latestAchievements">Latest Achievements</label>
      <select id="latestAchievements" v-model="selectedAchievements" multiple>
        <!-- Options for achievements go here -->
      </select>
    </div>

    <!-- Edit Main Habit -->
    <div class="form-group">
      <label for="mainHabit">Main Habit</label>
      <select id="mainHabit" v-model="selectedMainHabit">
        <!-- Options for habits go here -->
      </select>
    </div>

    <!-- Save Button -->
    <router-link to="/profile" style="text-decoration: none">
      <button @click="saveChanges">Save Changes</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      userTitle: "",
      displayBadges: false,
      selectedAchievements: [],
      selectedMainHabit: "",
      titlesArray: [
        "Productivity Pro",
        "Fitness Enthusiast",
        "Nature Explorer",
        "Coding Expert",
      ],
      achievementOptions: [],
      habitArray: [],
    };
  },
  mounted() {
    this.fullName = this.$store.state.userName;
    this.userTitle = this.$store.state.userTitle;
  },
  methods: {
    saveChanges() {
      this.$store.state.userName = this.fullName;
      this.$store.state.userTitle = this.userTitle;
      // Implement logic to save changes
      // You can access the updated data from this.firstName, this.lastName, etc.
    },
  },
};
</script>

<style scoped>
.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select {
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px 10px 10px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input:focus,
select:focus {
  border: 1px solid #6da9e4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #297fb8;
}
</style>
