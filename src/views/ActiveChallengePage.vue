<template>
  <div class="active-challenge-page">
    <div class="card">
      <h1>{{ challenge.name }}</h1>
      <p>{{ challenge.description }}</p>
      <p><strong>Duration:</strong> {{ challenge.duration }} days</p>
      <p><strong>Aims:</strong></p>
      <ul>
        <li v-for="(aim, index) in challenge.aims" :key="index">{{ aim }}</li>
      </ul>
      <div class="badges-section">
        <h2>Badges</h2>
        <ul>
          <li v-for="badge in challenge.badges" :key="badge.name">
            <span class="badge-icon">{{ badge.icon }}</span> {{ badge.name }}
          </li>
        </ul>
      </div>
      <div class="progress-section">
        <h2>Your Progress</h2>
        <p><strong>Days Completed:</strong> {{ userProgress.daysCompleted }}</p>
        <p>
          <strong>Experience Points:</strong>
          {{ userProgress.experiencePoints }}
        </p>
        <p><strong>Title:</strong> {{ userProgress.title }}</p>
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
          "Join our 30-day fitness challenge to improve your health and fitness!",
        duration: 30,
        aims: [
          "Complete a daily workout routine",
          "Follow a healthy diet plan",
          "Stay hydrated throughout the challenge",
        ],
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
/* Add your styling here */
</style>
