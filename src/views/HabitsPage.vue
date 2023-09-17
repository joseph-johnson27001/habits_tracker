<template>
  <div class="habits-page">
    <div class="card">
      <div class="heading-container">
        <h1>Meditating</h1>
      </div>

      <HabitsCards />
    </div>
  </div>
</template>

<script>
import HabitsCards from "@/components/Habits/components/HabitsCards.vue";

export default {
  components: {
    HabitsCards,
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
