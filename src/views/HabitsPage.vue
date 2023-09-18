<template>
  <div class="habits-page">
    <div class="habit-tracker-container">
      <div
        v-for="(habit, index) in habits"
        :key="index"
        class="card habit-tracker"
      >
        <h1>{{ habit.name }}</h1>
        <p>Days Tracked: {{ habit.daysTracked }}</p>
      </div>
      <div class="card habit-tracker">
        <h1>Add A New Habit</h1>
        <div class="add-button">
          <i
            class="fas fa-plus-circle fa-xl clickable-icon"
            @click="addHabit"
          ></i>
        </div>
      </div>
    </div>

    <transition :name="transitionName" mode="out-in">
      <div :key="currentIndex" class="card">
        <div class="arrow-button prev-button" @click="prevCard">
          <i class="fas fa-chevron-left clickable-icon"></i>
        </div>
        <div class="heading-container">
          <h1>{{ habits[currentIndex].name }}</h1>
        </div>
        <div class="habit-card-content">
          <HabitLineGraph
            :habitData="habits[currentIndex].graphData"
            :yAxisLabel="habits[currentIndex].yAxisLabel"
            :xAxisLabel="habits[currentIndex].xAxisLabel"
          />
        </div>
        <div class="arrow-button next-button" @click="nextCard">
          <i class="fas fa-chevron-right clickable-icon"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import HabitLineGraph from "@/components/Habits/components/Graphs/HabitLineGraph.vue";

export default {
  components: {
    HabitLineGraph,
  },
  data() {
    return {
      habits: [
        {
          name: "Meditating",
          graphData: {
            labels: ["1st", "2nd", "3rd", "4th", "5th"],
            data: [10, 15, 12, 20, 18],
          },
          daysTracked: 25,
          yAxisLabel: "Minutes",
          xAxisLabel: "Date",
        },
        {
          name: "Working Out",
          graphData: {
            labels: ["1st", "2nd", "3rd", "4th", "5th"],
            data: [5, 8, 10, 7, 12],
          },
          daysTracked: 20,
          yAxisLabel: "Repetitions",
          xAxisLabel: "Date",
        },
        {
          name: "Reading",
          graphData: {
            labels: ["1st", "2nd", "3rd", "4th", "5th"],
            data: [8, 12, 15, 10, 17],
          },
          daysTracked: 30,
          yAxisLabel: "Pages",
          xAxisLabel: "Date",
        },
        {
          name: "Fasting",
          graphData: {
            labels: ["1st", "2nd", "3rd", "4th", "5th"],
            data: [5, 10, 8, 15, 12],
          },
          daysTracked: 10,
          yAxisLabel: "Hours",
          xAxisLabel: "Date",
        },
        {
          name: "Coding",
          graphData: {
            labels: ["1st", "2nd", "3rd", "4th", "5th"],
            data: [12, 18, 20, 25, 30],
          },
          daysTracked: 20,
          yAxisLabel: "Minutes",
          xAxisLabel: "Date",
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
      this.currentIndex = (this.currentIndex + 1) % this.habits.length;
    },
    prevCard() {
      this.direction = "prev";
      this.currentIndex =
        (this.currentIndex - 1 + this.habits.length) % this.habits.length;
    },
    addHabit() {
      this.habits.push({
        name: "New Habit",
        graphData: {
          labels: [],
          data: [],
        },
        daysTracked: 0,
      });
    },
  },
};
</script>

<style scoped>
h1 {
  color: #4169e1;
}
.card {
  position: relative;
}
.habits-page {
  padding: 10px;
}
.habit-tracker-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
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
  transition: transform 0.6s, opacity 0.2s;
}
.slide-fade-next-enter,
.slide-fade-prev-leave-to {
  /* transform: translateX(-150%); */
  opacity: 0;
}
.slide-fade-prev-enter,
.slide-fade-next-leave-to {
  /* transform: translateX(150%); */
  opacity: 0;
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

.add-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%; /* Create a circular shape */
  color: white; /* Icon color */
  font-size: 24px; /* Icon size */
  cursor: pointer;
  margin: 0 auto; /* Center the button horizontally */
}

.add-button i {
  margin: 0;
  padding: 0;
  color: #4169e1;
}
</style>
