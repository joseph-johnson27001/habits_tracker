<template>
  <div class="habits-page">
    <transition :name="transitionName" mode="out-in">
      <div :key="currentIndex" class="card">
        <div class="arrow-button prev-button" @click="prevCard">
          <i class="fas fa-chevron-left clickable-icon"></i>
        </div>
        <div class="heading-container">
          <h1>{{ habits[currentIndex].name }}</h1>
        </div>
        <div class="habit-card-content">
          <HabitCard :habit="habits[currentIndex]" />
          <HabitLineGraph :habitData="habits[currentIndex].graphData" />
        </div>
        <div class="arrow-button next-button" @click="nextCard">
          <i class="fas fa-chevron-right clickable-icon"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import HabitCard from "@/components/Habits/components/HabitCard.vue";
import HabitLineGraph from "@/components/Habits/components/Graphs/HabitLineGraph.vue";

export default {
  components: {
    HabitCard,
    HabitLineGraph,
  },
  data() {
    return {
      habits: [
        {
          name: "Meditating",
          graphData: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            data: [10, 15, 12, 20, 18],
          },
        },
        {
          name: "Working Out",
          graphData: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            data: [5, 8, 10, 7, 12],
          },
        },
        {
          name: "Reading",
          graphData: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May"],
            data: [8, 12, 15, 10, 17],
          },
        },
      ],
      currentIndex: 0,
      direction: "next",
    };
  },
  computed: {
    transitionName() {
      return this.direction === "prev" ? "slide-fade-prev" : "slide-fade-next";
    },
  },
  methods: {
    nextCard() {
      this.direction = "next";
      if (this.currentIndex < this.habits.length - 1) {
        this.currentIndex++;
      }
    },
    prevCard() {
      this.direction = "prev";
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    },
  },
};
</script>

<style>
.card {
  position: relative;
}
.habits-page {
  padding: 10px;
}
.heading-container {
  padding: 5px;
}
.carousel-navigation {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.slide-fade-next-enter-active,
.slide-fade-prev-leave-active,
.slide-fade-prev-enter-active,
.slide-fade-next-leave-active {
  transition: transform 0.6s;
}
.slide-fade-next-enter,
.slide-fade-prev-leave-to {
  transform: translateX(150%);
}
.slide-fade-prev-enter,
.slide-fade-next-leave-to {
  transform: translateX(-150%);
}

.arrow-button {
  background-color: transparent;
  border: none;
  color: #4169e1;
  cursor: pointer;
  font-size: 24px;
  position: absolute;
  top: 50%;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}
</style>
