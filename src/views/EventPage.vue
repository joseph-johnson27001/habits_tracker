<template>
  <div class="card">
    <h1>{{ event.title }}</h1>
    <p>{{ event.description }}</p>
    <p><strong>Date:</strong> {{ event.date }}</p>

    <h2>Awards</h2>
    <ul>
      <li v-for="award in event.awards" :key="award.name">
        <span class="award-icon">{{ award.icon }}</span> {{ award.name }}
      </li>
    </ul>

    <h2>Details</h2>
    <p><strong>Location:</strong> {{ event.location }}</p>
    <p><strong>Time:</strong> {{ event.time }}</p>
    <p><strong>Organizer:</strong> {{ event.organizer }}</p>

    <h2>Activities</h2>
    <ul>
      <li v-for="activity in event.activities" :key="activity">
        {{ activity }}
      </li>
    </ul>

    <h2>Special Instructions</h2>
    <p>{{ event.specialInstructions }}</p>
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
.award-icon {
  margin-right: 5px;
}
</style>
