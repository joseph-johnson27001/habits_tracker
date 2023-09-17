<template>
  <div>
    <div v-for="(habit, index) in habits" :key="index" class="habit-card">
      <div class="habit-name">{{ habit.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HabitsCards",
  props: {
    habits: Array,
  },
};
</script>

<style scoped>
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
