<template>
  <div>
    <div v-if="challenges.length" class="challenges-container">
      <div
        v-for="challenge in challenges"
        :key="challenge.id"
        class="card challenge-item"
      >
        <h1>{{ challenge.title }}</h1>
        <p>{{ challenge.description }}</p>
        <p>Start Date: {{ challenge.startDate }}</p>
        <p>End Date: {{ challenge.endDate }}</p>
        <p>Participants: {{ challenge.participants }}</p>
        <div class="awards-container">
          <h3>Awards</h3>
          <ul>
            <li v-for="award in challenge.awards" :key="award.id">
              {{ award.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No challenges available at the moment.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChallengesPage",
  data() {
    return {
      challenges: [
        {
          id: 1,
          title: "30-Day Fitness Challenge",
          description:
            "Join our 30-day fitness challenge to improve your health and fitness!",
          startDate: "2023-11-01",
          endDate: "2023-11-30",
          participants: 120,
          awards: [
            { id: 1, name: "Fitness Guru Badge" },
            { id: 2, name: "Health Champion Title" },
          ],
        },
        {
          id: 2,
          title: "Meditation Marathon",
          description:
            "Experience inner peace and mindfulness in our meditation marathon event.",
          startDate: "2023-12-01",
          endDate: "2023-12-31",
          participants: 85,
          awards: [
            { id: 3, name: "Zen Master Badge" },
            { id: 4, name: "Mindfulness Pro Title" },
          ],
        },
        // Add more dummy challenges as needed
      ],
    };
  },
};
</script>

<style scoped>
.challenges-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.challenge-item {
  margin-bottom: 20px;
}

.awards-container {
  margin-top: 20px;
}

.awards-container h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.awards-container ul {
  list-style-type: none;
  padding: 0;
}

.awards-container li {
  margin-bottom: 5px;
}
</style>
