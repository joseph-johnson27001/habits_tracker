<template>
  <div class="settings-page" v-show="!this.$store.state.isLoading">
    <div class="card">
      <h1>SETTINGS</h1>
    </div>
    <div class="card">
      <div class="setting-area">
        <h1>Privacy Settings</h1>
        <div class="setting-option">
          <label for="profileVisibility">Profile Visibility:</label>
          <div class="switch-container">
            <input
              id="profileVisibility"
              type="checkbox"
              v-model="isPublicProfile"
              class="switch-input"
            />
            <label for="profileVisibility" class="switch-label"></label>
          </div>
        </div>
        <div class="setting-option">
          <label for="autoStatusUpdates">Automatic Status Updates:</label>
          <div class="switch-container">
            <input
              id="autoStatusUpdates"
              type="checkbox"
              v-model="isAutoStatusUpdates"
              class="switch-input"
            />
            <label for="autoStatusUpdates" class="switch-label"></label>
          </div>
        </div>
        <div class="setting-option">
          <label for="hideHabits">Hide Habits from Public:</label>
          <div class="switch-container">
            <input
              id="hideHabits"
              type="checkbox"
              v-model="isHidingHabits"
              class="switch-input"
            />
            <label for="hideHabits" class="switch-label"></label>
          </div>
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
          <div class="switch-container">
            <input
              id="promotionEmails"
              type="checkbox"
              v-model="receivePromotionEmails"
              class="switch-input"
            />
            <label for="promotionEmails" class="switch-label"></label>
          </div>
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

      <!-- Save Changes -->
      <div class="setting-area">
        <h1>Update Information</h1>
        <div class="setting-option">
          <button class="action-button" @click="submitFeedback">
            Save Changes
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
/* FORM STYLES */

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
select,
textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 15px;
}

input {
  width: auto;
}

input:focus,
select:focus,
textarea:focus {
  border: 1px solid #6da9e4;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  width: 100%;
  max-width: 300px;
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

.switch-input {
  display: none;
}

.switch-container {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch-label {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px; /* Adjust the border-radius for a rounder shape */
  background: #ccc;
  position: absolute;
  cursor: pointer;
}

.switch-input:checked + .switch-label {
  background: #3498db;
}

.switch-label:before {
  content: "";
  display: block;
  width: 16px; /* Adjust the width of the switch handle */
  height: 16px; /* Adjust the height of the switch handle */
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 2px; /* Adjust the top position of the switch handle */
  left: 2px; /* Adjust the left position of the switch handle */
  transition: 0.3s;
}

.switch-input:checked + .switch-label:before {
  transform: translateX(16px);
}
</style>
