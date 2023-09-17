<template>
  <div class="habits-page">
    <!-- Display the current habit card -->
    <div class="card">
      <div class="heading-container">
        <h1>{{ habits[currentIndex].name }}</h1>
      </div>
      <p>{{ habits[currentIndex].value }}</p>
      <HabitCard :habit="habits[currentIndex]" />
    </div>

    <!-- Add navigation buttons to move between cards -->
    <div class="carousel-navigation">
      <button @click="prevCard" :disabled="currentIndex === 0">Previous</button>
      <button @click="nextCard" :disabled="currentIndex === habits.length - 1">
        Next
      </button>
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
      currentIndex: 0, // Initialize with the first card
    };
  },
  methods: {
    nextCard() {
      // Move to the next card if not at the end
      if (this.currentIndex < this.habits.length - 1) {
        this.currentIndex++;
      }
    },
    prevCard() {
      // Move to the previous card if not at the beginning
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
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
.carousel-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}
</style>
