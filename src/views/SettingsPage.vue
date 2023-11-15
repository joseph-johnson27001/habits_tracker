<template>
  <div class="settings-page" v-show="!this.$store.state.isLoading">
    <div class="card">
      <div class="heading-area">
        <h1>SETTINGS</h1>
      </div>

      <!-- Privacy Settings -->
      <div class="setting-area">
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
      </div>

      <!-- Notification Preferences -->
      <div class="setting-area">
        <h2>Notification Preferences</h2>
        <div class="setting-option">
          <label for="emailNotifications">Email Notifications</label>
          <select id="emailNotifications" v-model="emailNotifications">
            <option value="all">All</option>
            <option value="important">Important Updates</option>
            <option value="none">None</option>
          </select>
        </div>
        <div class="setting-option">
          <label for="pushNotifications">Push Notifications</label>
          <select id="pushNotifications" v-model="pushNotifications">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
      </div>

      <!-- Account Management -->
      <div class="setting-area">
        <h2>Account Management</h2>
        <button class="action-button" @click="deactivateAccount">
          Deactivate Account
        </button>
        <button class="action-button" @click="deleteAccount">
          Delete Account
        </button>
      </div>

      <!-- Export Data -->
      <div class="setting-area">
        <h2>Export Data</h2>
        <button class="action-button" @click="exportData">Export Data</button>
      </div>

      <!-- Password Management -->
      <div class="setting-area">
        <h2>Password Management</h2>
        <button class="action-button" @click="changePassword">
          Change Password
        </button>
        <button class="action-button" @click="resetPassword">
          Reset Password
        </button>
      </div>

      <!-- Email Preferences -->
      <div class="setting-area">
        <h2>Email Preferences</h2>
        <!-- Add email preferences as needed -->
      </div>

      <!-- Feedback and Help -->
      <div class="setting-area">
        <h2>Feedback and Help</h2>
        <!-- Add feedback and help options as needed -->
      </div>
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
      emailNotifications: "all",
      pushNotifications: "on",
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

.setting-area {
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
}

.setting-option {
  margin-bottom: 15px;
}

.action-button {
  width: 100%;
  max-width: 300px;
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
