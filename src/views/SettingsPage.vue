<template>
  <div class="settings-page" v-show="!this.$store.state.isLoading">
    <div class="card">
      <h1>SETTINGS</h1>
    </div>
    <div class="card">
      <!-- Privacy Settings -->
      <div class="setting-area">
        <h1>Privacy Settings</h1>
        <div class="setting-option">
          <label for="profileVisibility">Profile Visibility: </label>
          <select id="profileVisibility" v-model="profileVisibility">
            <option value="public">Public</option>
            <option value="private">Private</option>
            <option value="friends">Friends Only</option>
          </select>
        </div>
        <div class="setting-option">
          <label for="autoStatusUpdates">Automatic Status Updates: </label>
          <input
            id="autoStatusUpdates"
            type="checkbox"
            v-model="isAutoStatusUpdates"
          />
        </div>
        <div class="setting-option">
          <label for="hideHabits">Hide Habits from Public: </label>
          <input id="hideHabits" type="checkbox" v-model="isHidingHabits" />
        </div>
      </div>

      <!-- Notification Preferences -->
      <div class="setting-area">
        <h1>Notification Preferences</h1>
        <div class="setting-option">
          <label for="emailNotifications">Email Notifications: </label>
          <select id="emailNotifications" v-model="emailNotifications">
            <option value="all">All</option>
            <option value="important">Important Updates</option>
            <option value="none">None</option>
          </select>
        </div>
        <div class="setting-option">
          <label for="pushNotifications">Push Notifications: </label>
          <select id="pushNotifications" v-model="pushNotifications">
            <option value="on">On</option>
            <option value="off">Off</option>
          </select>
        </div>
      </div>

      <!-- Account Management -->
      <div class="setting-area">
        <h1>Account Management</h1>
        <button class="action-button" @click="deactivateAccount">
          Deactivate Account
        </button>
        <button class="action-button" @click="deleteAccount">
          Delete Account
        </button>
      </div>

      <!-- Export Data -->
      <div class="setting-area">
        <h1>Export Data</h1>
        <button class="action-button" @click="exportData">Export Data</button>
      </div>

      <!-- Password Management -->
      <div class="setting-area">
        <h1>Password Management</h1>
        <button class="action-button" @click="changePassword">
          Change Password
        </button>
        <button class="action-button" @click="resetPassword">
          Reset Password
        </button>
      </div>

      <!-- Email Management -->
      <div class="setting-area">
        <h1>Email Preferences</h1>
        <div class="setting-option">
          <label for="newsletterFrequency">Newsletter Frequency: </label>
          <select id="newsletterFrequency" v-model="newsletterFrequency">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="never">Never</option>
          </select>
        </div>
        <div class="setting-option">
          <label for="promotionEmails">Receive Promotion Emails</label>
          <input
            id="promotionEmails"
            type="checkbox"
            v-model="receivePromotionEmails"
          />
        </div>
      </div>

      <!-- Feedback and Help -->
      <div class="setting-area">
        <h1>Feedback and Help</h1>
        <div class="setting-option" style="display: flex; align-items: center">
          <label for="provideFeedback">Provide Feedback: </label>
          <textarea id="provideFeedback" v-model="userFeedback"></textarea>
        </div>
        <div class="setting-option">
          <button class="action-button" @click="submitFeedback">
            Submit Feedback
          </button>
        </div>
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
      pushNotifications: "On",
      newsletterFrequency: "daily",
      receivePromotionEmails: true,
      userFeedback: "",
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
    submitFeedback() {
      // Implement feedback submission logic
    },
  },
};
</script>

<style scoped>
h1 {
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
  margin: 0px 2px;
}

.action-button:hover {
  background-color: #297fb8;
}

input {
  width: auto;
}
</style>
