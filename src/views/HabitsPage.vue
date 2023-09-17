<template>
  <div class="habits-page">
    <div class="card" v-for="(habit, index) in habits" :key="index">
      <div class="heading-container">
        <h1>{{ habit.name }}</h1>
      </div>
      <!-- Pass the individual habit data to HabitCard component -->
      <p>{{ habit.value }}</p>
      <HabitCard :habit="habit" />
    </div>
  </div>
</template>

<script>
import HabitCard from "@/components/Habits/components/HabitCard.vue";

export default {
  components: {
    HabitCard,
  },
  data() {
    return {
      habits: [
        { name: "Meditating", value: "Meditating Graph Goes Here" },
        { name: "Working Out", value: "Working Out Graph Goes Here" },
        { name: "Reading", value: "Reading Graph Goes Here" },
      ],
    };
  },
};
</script>

<style>
.habits-page {
  padding: 10px;
}
.heading-container {
  border-bottom: 1px solid #ccc;
  padding: 5px;
}
</style>
