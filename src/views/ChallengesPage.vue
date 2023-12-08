<template>
  <div v-show="!this.$store.state.isLoading">
    <div v-if="challenges.length" class="challenges-container">
      <div
        v-for="challenge in challenges"
        :key="challenge.id"
        class="card challenge-item"
        @click="showModal(challenge)"
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

    <!-- Modal for displaying challenge details -->
    <div class="modal" v-if="showingModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>{{ selectedChallenge.title }}</h2>
        <p>{{ selectedChallenge.description }}</p>
        <p>Start Date: {{ selectedChallenge.startDate }}</p>
        <p>End Date: {{ selectedChallenge.endDate }}</p>
        <p>Participants: {{ selectedChallenge.participants }}</p>
        <div class="awards-container">
          <h3>Awards</h3>
          <ul>
            <li v-for="award in selectedChallenge.awards" :key="award.name">
              <span class="badge-icon">{{ award.icon }}</span> {{ award.name }}
            </li>
          </ul>
          <button
            class="join-button"
            @click="navigateToChallenge(selectedChallenge.id)"
          >
            Join Challenge
          </button>
          <!-- This button will be linked to the join functionality in the future -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChallengesPage",
  data() {
    return {
      showingModal: false,
      selectedChallenge: {},
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
  methods: {
    showModal(challenge) {
      this.showingModal = true;
      this.selectedChallenge = challenge;
    },
    closeModal() {
      this.showingModal = false;
      this.selectedChallenge = {};
    },
    navigateToChallenge(id) {
      this.$router.push("active-challenge/" + id);
    },
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

.challenge-item {
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.challenge-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
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

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
}

.join-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.join-button:hover {
  background-color: #3151b7;
}
</style>
