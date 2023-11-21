<template>
  <div class="active-challenges-section">
    <h1>ACTIVE CHALLENGES</h1>
    <ul>
      <li v-for="challenge in activeChallenges" :key="challenge.id">
        <router-link
          :to="'/active-challenge/' + challenge.id"
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
        { id: 3, name: "Healthy Eating Challenge" },
        { id: 4, name: "Yoga Journey Challenge" },
        { id: 5, name: "Reading Challenge" },
        { id: 6, name: "Mindful Walking Challenge" },
        { id: 7, name: "Daily Water Intake Challenge" },
        { id: 8, name: "Creativity Boost Challenge" },
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
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.challenge-link:hover {
  background-color: #f2f2f2;
}
</style>
