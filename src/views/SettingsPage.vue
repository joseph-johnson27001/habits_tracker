<template>
  <div class="settings-page" v-show="!this.$store.state.isLoading">
    <div class="card">
      <div class="heading-area">
        <h1>SETTINGS</h1>
      </div>

      <!-- Privacy Settings -->
      <h2>Privacy Settings</h2>
      <div class="setting-option">
        <label for="profileVisibility">Profile Visibility</label>
        <select id="profileVisibility" v-model="profileVisibility">
          <option value="public">Public</option>
          <option value="private">Private</option>
          <option value="friends">Friends Only</option>
        </select>
      </div>
      <div class="setting-option">
        <label for="autoStatusUpdates">Automatic Status Updates</label>
        <input
          id="autoStatusUpdates"
          type="checkbox"
          v-model="isAutoStatusUpdates"
        />
      </div>
      <div class="setting-option">
        <label for="hideHabits">Hide Habits from Public</label>
        <input id="hideHabits" type="checkbox" v-model="isHidingHabits" />
      </div>

      <!-- Notification Preferences -->
      <h2>Notification Preferences</h2>
      <!-- Add more notification preferences as needed -->

      <!-- Account Management -->
      <h2>Account Management</h2>
      <button class="action-button" @click="deactivateAccount">
        Deactivate Account
      </button>
      <button class="action-button" @click="deleteAccount">
        Delete Account
      </button>

      <!-- Export Data -->
      <h2>Export Data</h2>
      <button class="action-button" @click="exportData">Export Data</button>

      <!-- Password Management -->
      <h2>Password Management</h2>
      <button class="action-button" @click="changePassword">
        Change Password
      </button>
      <button class="action-button" @click="resetPassword">
        Reset Password
      </button>

      <!-- Email Preferences -->
      <h2>Email Preferences</h2>
      <!-- Add email preferences as needed -->

      <!-- Feedback and Help -->
      <h2>Feedback and Help</h2>
      <!-- Add feedback and help options as needed -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileVisibility: "public",
      isAutoStatusUpdates: true,
      isHidingHabits: false,
    };
  },
  methods: {
    deactivateAccount() {
      // Implement account deactivation logic
    },
    deleteAccount() {
      // Implement account deletion logic
    },
    exportData() {
      // Implement data export logic
    },
    changePassword() {
      // Implement password change logic
    },
    resetPassword() {
      // Implement password reset logic
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  margin-bottom: 10px;
}

.setting-option {
  margin-bottom: 15px;
}

.action-button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;
}

.action-button:hover {
  background-color: #297fb8;
}
</style>
