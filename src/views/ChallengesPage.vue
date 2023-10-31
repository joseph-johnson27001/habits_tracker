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
            <li v-for="award in challenge.awards" :key="award.name">
              <span class="badge-icon">{{ award.icon }}</span> {{ award.name }}
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
            { name: "Fitness Guru Badge", icon: "🏆" },
            { name: "Health Champion Title", icon: "🥇" },
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
            { name: "Zen Master Badge", icon: "🎯" },
            { name: "Mindfulness Pro Title", icon: "🌟" },
          ],
        },
        {
          id: 3,
          title: "Healthy Eating Challenge",
          description:
            "Join our healthy eating challenge to develop good dietary habits and improve your well-being!",
          startDate: "2023-11-15",
          endDate: "2023-12-15",
          participants: 90,
          awards: [
            { name: "Nutrition Expert Badge", icon: "🥑" },
            { name: "Healthy Eater Title", icon: "🍏" },
          ],
        },
        {
          id: 4,
          title: "Yoga Journey Challenge",
          description:
            "Embark on a transformative yoga journey to enhance your flexibility and inner strength.",
          startDate: "2023-12-05",
          endDate: "2024-01-05",
          participants: 75,
          awards: [
            { name: "Yoga Master Badge", icon: "🧘" },
            { name: "Mind-Body Harmony Title", icon: "🕉️" },
          ],
        },
        {
          id: 5,
          title: "Reading Challenge",
          description:
            "Immerse yourself in the world of literature with our exciting reading challenge!",
          startDate: "2023-11-10",
          endDate: "2023-12-10",
          participants: 110,
          awards: [
            { name: "Bookworm Badge", icon: "📚" },
            { name: "Literary Guru Title", icon: "📖" },
          ],
        },
        {
          id: 6,
          title: "Mindful Walking Challenge",
          description:
            "Take mindful steps towards better health and mindfulness in our walking challenge!",
          startDate: "2023-11-20",
          endDate: "2023-12-20",
          participants: 95,
          awards: [
            { name: "Walking Enthusiast Badge", icon: "🚶" },
            { name: "Mindful Walker Title", icon: "🌳" },
          ],
        },
        {
          id: 7,
          title: "Daily Water Intake Challenge",
          description:
            "Stay hydrated and improve your health with our daily water intake challenge!",
          startDate: "2023-11-25",
          endDate: "2023-12-25",
          participants: 100,
          awards: [
            { name: "Hydration Hero Badge", icon: "💧" },
            { name: "Water Champion Title", icon: "🚰" },
          ],
        },
        {
          id: 8,
          title: "Creativity Boost Challenge",
          description:
            "Unleash your creativity with our engaging and inspiring creativity boost challenge!",
          startDate: "2023-12-15",
          endDate: "2024-01-15",
          participants: 80,
          awards: [
            { name: "Creative Thinker Badge", icon: "🎨" },
            { name: "Innovation Maestro Title", icon: "🖌️" },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 0px;
}
.challenges-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 992px) {
  .challenges-container {
    grid-template-columns: 1fr;
  }
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

.badge-icon {
  font-size: 20px;
}
</style>
