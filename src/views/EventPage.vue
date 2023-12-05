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
