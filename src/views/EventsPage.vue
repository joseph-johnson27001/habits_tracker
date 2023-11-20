<template>
  <div v-show="!this.$store.state.isLoading">
    <div v-if="events.length" class="events-container">
      <div
        v-for="event in events"
        :key="event.id"
        class="card event-item"
        @click="showModal(event)"
      >
        <h1>{{ event.title }}</h1>
        <p>{{ event.description }}</p>
        <p>Date: {{ event.date }}</p>
        <div class="awards-container">
          <h3>Awards</h3>
          <ul>
            <li v-for="award in event.awards" :key="award.name">
              <span class="badge-icon">{{ award.icon }}</span> {{ award.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else>
      <p>No events available at the moment.</p>
    </div>

    <!-- Modal for displaying event details -->
    <div class="modal" v-if="showingModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>{{ selectedEvent.title }}</h2>
        <p>{{ selectedEvent.description }}</p>
        <p>Date: {{ selectedEvent.date }}</p>
        <div class="awards-container">
          <h3>Awards</h3>
          <ul>
            <li v-for="award in selectedEvent.awards" :key="award.name">
              <span class="badge-icon">{{ award.icon }}</span> {{ award.name }}
            </li>
          </ul>
          <button class="join-button">Join Event</button>
          <!-- This button will be linked to the join functionality in the future -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventsPage",
  data() {
    return {
      showingModal: false,
      selectedEvent: {},
      events: [
        {
          id: 1,
          title: "Fitness Expo",
          description: "Join our fitness expo for a day of fun and exercise!",
          date: "2023-11-15",
          awards: [
            { name: "Fitness Fanatic Badge", icon: "🏋️" },
            { name: "Health Enthusiast Title", icon: "💪" },
          ],
        },
        {
          id: 2,
          title: "Art and Creativity Fair",
          description:
            "Explore the world of art and creativity at our annual fair!",
          date: "2023-12-01",
          awards: [
            { name: "Creative Mind Badge", icon: "🎨" },
            { name: "Art Enthusiast Title", icon: "🖌️" },
          ],
        },
        {
          id: 3,
          title: "Tech Innovation Summit",
          description:
            "Join industry leaders and innovators at our tech summit!",
          date: "2023-12-15",
          awards: [
            { name: "Tech Guru Badge", icon: "💻" },
            { name: "Innovation Master Title", icon: "🚀" },
          ],
        },
        {
          id: 4,
          title: "Nature Photography Workshop",
          description:
            "Capture the beauty of nature in our photography workshop!",
          date: "2024-01-05",
          awards: [
            { name: "Photography Pro Badge", icon: "📷" },
            { name: "Nature Explorer Title", icon: "🌿" },
          ],
        },
        {
          id: 5,
          title: "Science and Discovery Day",
          description:
            "Embark on a journey of scientific exploration and discovery!",
          date: "2024-02-01",
          awards: [
            { name: "Science Whiz Badge", icon: "🔬" },
            { name: "Discovery Champion Title", icon: "🌌" },
          ],
        },
        {
          id: 6,
          title: "Culinary Delights Festival",
          description: "Savor the flavors at our culinary delights festival!",
          date: "2024-02-20",
          awards: [
            { name: "Culinary Maestro Badge", icon: "🍴" },
            { name: "Foodie Expert Title", icon: "👨‍🍳" },
          ],
        },
      ],
    };
  },
  methods: {
    showModal(event) {
      this.showingModal = true;
      this.selectedEvent = event;
    },
    closeModal() {
      this.showingModal = false;
      this.selectedEvent = {};
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
.events-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 992px) {
  .events-container {
    grid-template-columns: 1fr;
  }
}

.event-item {
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.event-item:hover {
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
