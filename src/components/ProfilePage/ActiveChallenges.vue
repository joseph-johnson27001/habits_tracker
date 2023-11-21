<template>
  <div class="active-challenges-section">
    <h1>ACTIVE CHALLENGES</h1>
    <ul>
      <li v-for="challenge in activeChallenges" :key="challenge.id">
        <router-link
          :to="{ name: 'ChallengeDetails', params: { id: challenge.id } }"
          class="challenge-link"
        >
          {{ challenge.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ActiveChallengesSection",
  data() {
    return {
      activeChallenges: [
        { id: 1, name: "30-Day Fitness Challenge" },
        { id: 2, name: "Meditation Marathon" },
        // Add more active challenges as needed
      ],
    };
  },
};
</script>

<style scoped>
.active-challenges-section {
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

.challenge-link {
  display: block;
  border-bottom: 1px solid #ccc;
  padding: 10px 0px;
  margin-bottom: 10px;
  text-decoration: none !important;
  transition: background-color 0.3s;
}

.challenge-link:hover {
  background-color: #f2f2f2;
}
</style>
