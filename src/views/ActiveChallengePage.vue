<template>
  <div class="active-challenge-page">
    <div class="card">
      <h1>{{ challenge.name }}</h1>
      <p>{{ challenge.description }}</p>
      <p><strong>Duration:</strong> {{ challenge.duration }} days</p>

      <div class="progress-section">
        <h2>Your Progress</h2>
        <p><strong>Days Completed:</strong> {{ userProgress.daysCompleted }}</p>
      </div>
      <div class="participants-section">
        <h2>Participants</h2>
        <ul>
          <li
            v-for="participant in challenge.participants"
            :key="participant.id"
          >
            {{ participant.name }} - {{ participant.progress }} days completed
          </li>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="aims-section">
        <h1>Aims</h1>
        <ul>
          <li v-for="(aim, index) in challenge.aims" :key="index">{{ aim }}</li>
        </ul>
      </div>
      <div class="rewards-section">
        <h1>Rewards</h1>
        <ul>
          <li v-for="badge in challenge.badges" :key="badge.name">
            <span class="badge-icon">{{ badge.icon }}</span> {{ badge.name }}
          </li>
        </ul>
        <p>
          <strong>Experience Points:</strong>
          {{ userProgress.experiencePoints }}
        </p>
        <p><strong>Title:</strong> {{ userProgress.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveChallengePage",
  data() {
    return {
      challenge: {
        id: 1,
        name: "30-Day Fitness Challenge",
        description:
          "Embark on a transformative 30-day fitness journey to elevate your health and well-being!",
        aims: [
          "Commit to completing 30 consecutive days of invigorating fitness training.",
          "Engage in a minimum of 30 minutes of either cardiovascular exercise or strength training each day.",
          "Daily, update your exercise log with the number of minutes dedicated to each workout session.",
        ],
        duration: 30,
        badges: [
          { name: "Fitness Guru Badge", icon: "🏆" },
          { name: "Health Champion Title", icon: "💪" },
        ],
        participants: [
          { id: 1, name: "User1", progress: 15 },
          { id: 2, name: "User2", progress: 20 },
          // Add more participants as needed
        ],
      },
      userProgress: {
        daysCompleted: 10,
        experiencePoints: 150,
        title: "Fitness Enthusiast",
      },
    };
  },
};
</script>

<style scoped>
.active-challenge-page {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
/* Add your styling here */
</style>
