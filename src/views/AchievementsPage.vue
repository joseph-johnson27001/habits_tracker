<template>
  <div class="card">
    <h1>ACHIEVEMENTS</h1>
    <select v-model="selectedCategory" @change="filterAchievements">
      <option v-for="option in selectOptions" :value="option" :key="option">
        {{ option }}
      </option>
    </select>

    <div class="achievement-list">
      <div
        v-for="(achievement, index) in filteredAchievements"
        :key="index"
        class="achievement-item"
      >
        <div class="achievement-icon">{{ achievement.icon }}</div>
        <div class="achievement-details">
          <div class="achievement-title">{{ achievement.title }}</div>
          <div class="achievement-description">
            {{ achievement.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AchievementsPage",
  data() {
    return {
      selectedCategory: "All",
      achievements: [
        {
          area: "Fitness",
          icon: "🏆",
          title: "High Achiever",
          description: "You've achieved excellence in your field.",
        },
        {
          area: "Health",
          icon: "🥇",
          title: "Gold Medalist",
          description: "You're the best of the best!",
        },
        {
          area: "Weightloss",
          icon: "💪",
          title: "Weightlifting Champion",
          description: "You've conquered the weights!",
        },
        {
          area: "Meditation",
          icon: "🧘",
          title: "Meditation Master",
          description: "You've achieved inner peace.",
        },
        {
          area: "Reading",
          icon: "📚",
          title: "Bookworm",
          description: "You've read a lot of books!",
        },
        {
          area: "Education",
          icon: "🎓",
          title: "Knowledge Seeker",
          description: "You've expanded your horizons!",
        },
        {
          area: "Coding",
          icon: "💻",
          title: "Coding Ninja",
          description: "You've mastered the code!",
        },
        {
          area: "Cooking",
          icon: "👩‍🍳",
          title: "Master Chef",
          description: "You've created delicious dishes!",
        },
        {
          area: "Travel",
          icon: "✈️",
          title: "Globe Trotter",
          description: "You've seen the world!",
        },
        {
          area: "Art",
          icon: "🎨",
          title: "Art Enthusiast",
          description: "You've created beautiful art!",
        },
        // Add more achievements with different areas
      ],
    };
  },
  computed: {
    selectOptions() {
      const areas = new Set(this.achievements.map((item) => item.area));
      return ["All", ...areas];
    },
    filteredAchievements() {
      if (this.selectedCategory === "All") {
        return this.achievements;
      } else {
        return this.achievements.filter(
          (achievement) => achievement.area === this.selectedCategory
        );
      }
    },
  },
  methods: {
    filterAchievements() {
      this.filteredAchievements;
    },
  },
};
</script>

<style>
/* your existing CSS styles for the achievements page */
</style>
