<template>
  <div class="card">
    <h1>{{ event.title }}</h1>
    <div class="event-grid">
      <div class="description-section">
        <p class="description">{{ event.description }}</p>
        <p><strong>Date:</strong> {{ event.date }}</p>
      </div>

      <div class="awards-section">
        <h2>Awards</h2>
        <ul>
          <li v-for="award in event.awards" :key="award.name">
            <span class="award-icon">{{ award.icon }}</span> {{ award.name }}
          </li>
        </ul>
      </div>

      <div class="details-section">
        <h2>Details</h2>
        <p><strong>Location:</strong> {{ event.location }}</p>
        <p><strong>Time:</strong> {{ event.time }}</p>
        <p><strong>Organizer:</strong> {{ event.organizer }}</p>
      </div>

      <div class="activities-section">
        <h2>Activities</h2>
        <ul>
          <li v-for="activity in event.activities" :key="activity">
            {{ activity }}
          </li>
        </ul>
      </div>

      <div class="instructions-section">
        <h2>Special Instructions</h2>
        <p>{{ event.specialInstructions }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EventPage",
  data() {
    return {
      event: {
        title: "Fitness Expo",
        description: "Join our fitness expo for a day of fun and exercise!",
        date: "2023-11-15",
        awards: [
          { name: "Fitness Fanatic Badge", icon: "🏋️" },
          { name: "Health Enthusiast Title", icon: "💪" },
        ],
        location: "City Park",
        time: "10:00 AM - 5:00 PM",
        organizer: "Fitness Galaxy",
        activities: [
          "Group workout sessions",
          "Healthy cooking workshops",
          "Fitness challenges",
          "Yoga in the park",
        ],
        specialInstructions:
          "Please bring your own yoga mat. Wear comfortable workout attire.",
        // Add more details as needed
      },
    };
  },
};
</script>

<style scoped>
.event-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.description-section {
  grid-column: span 2;
}

.description {
  font-size: 18px;
  color: #333;
}

.awards-section,
.details-section,
.activities-section,
.instructions-section {
  margin-top: 20px;
}

.awards-section h2,
.details-section h2,
.activities-section h2,
.instructions-section h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.awards-section ul,
.details-section ul,
.activities-section ul {
  list-style-type: none;
  padding: 0;
}

.awards-section li,
.details-section li,
.activities-section li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.award-icon {
  margin-right: 5px;
}

@media (max-width: 992px) {
  .event-grid {
    display: block;
  }
}
</style>
