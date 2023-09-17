<template>
  <div>
    <!-- Loop through the habits and create a card for each -->
    <div v-for="(habit, index) in habits" :key="index" class="habit-card">
      <div class="habit-name">{{ habit.name }}</div>
      <!-- Add your graph or content here for each habit -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HabitsCards",
  props: {
    habits: Array, // Receive the list of habits as a prop
  },
};
</script>

<style scoped>
/* Add styles for your habit cards here */
.habit-card {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
}

.habit-name {
  font-weight: bold;
  font-size: 18px;
}
</style>
