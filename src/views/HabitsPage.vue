<template>
  <div class="habits-page">
    <!-- Display the current habit card with slide animation -->
    <transition :name="transitionName" mode="out-in">
      <div :key="currentIndex" class="card">
        <div class="heading-container">
          <h1>{{ habits[currentIndex].name }}</h1>
        </div>
        <div class="habit-card-content">
          <p>{{ habits[currentIndex].value }}</p>
          <HabitCard :habit="habits[currentIndex]" />
        </div>
      </div>
    </transition>

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
      direction: "next", // Initialize animation direction
    };
  },
  computed: {
    transitionName() {
      return this.direction === "prev" ? "slide-fade-prev" : "slide-fade-next";
    },
  },
  methods: {
    nextCard() {
      // Set animation direction to "next"
      this.direction = "next";

      // Move to the next card if not at the end
      if (this.currentIndex < this.habits.length - 1) {
        this.currentIndex++;
      }
    },
    prevCard() {
      // Set animation direction to "prev"
      this.direction = "prev";

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
.card {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.86s, opacity 0.5s;
}
.slide-fade-next-enter-active,
.slide-fade-prev-leave-active,
.slide-fade-prev-enter-active,
.slide-fade-next-leave-active {
  transition: transform 0.5s, opacity 0.5s;
}
.slide-fade-next-enter,
.slide-fade-prev-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-prev-enter,
.slide-fade-next-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
