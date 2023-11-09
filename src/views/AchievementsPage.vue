<template>
  <div>
    <div class="card">
      <h1>{{ headingText }}</h1>
    </div>
    <select
      v-model="selectedCategory"
      @change="filterAchievements"
      title="achievement-select"
    >
      <option v-for="option in selectOptions" :value="option" :key="option">
        {{ option }}
      </option>
    </select>

    <div class="achievement-list">
      <div
        v-for="(achievement, index) in filteredAchievements"
        :key="index"
        class="achievement-item card"
        :class="{ achieved: achievement.achieved }"
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
          achieved: true,
        },
        {
          area: "Health",
          icon: "🥇",
          title: "Gold Medalist",
          description: "You're the best of the best!",
          achieved: true,
        },
        {
          area: "Weightloss",
          icon: "💪",
          title: "Weightlifting Champion",
          description: "You've conquered the weights!",
          achieved: true,
        },
        {
          area: "Meditation",
          icon: "🧘",
          title: "Meditation Master",
          description: "You've achieved inner peace.",
          achieved: true,
        },
        {
          area: "Reading",
          icon: "📚",
          title: "Bookworm",
          description: "You've read a lot of books!",
          achieved: true,
        },
        {
          area: "Education",
          icon: "🎓",
          title: "Knowledge Seeker",
          description: "You've expanded your horizons!",
          achieved: true,
        },
        {
          area: "Coding",
          icon: "💻",
          title: "Coding Ninja",
          description: "You've mastered the code!",
          achieved: true,
        },
        {
          area: "Cooking",
          icon: "👩‍🍳",
          title: "Master Chef",
          description: "You've created delicious dishes!",
          achieved: true,
        },
        {
          area: "Travel",
          icon: "✈️",
          title: "Globe Trotter",
          description: "You've seen the world!",
          achieved: true,
        },
        {
          area: "Art",
          icon: "🎨",
          title: "Art Enthusiast",
          description: "You've created beautiful art!",
          achieved: true,
        },
        {
          area: "Fitness",
          icon: "🌟",
          title: "Marathon Runner",
          description: "You've completed a full marathon!",
          achieved: false,
        },
        {
          area: "Fitness",
          icon: "🌟",
          title: "Weightlifting Hero",
          description: "You've lifted twice your body weight!",
          achieved: false,
        },
        {
          area: "Health",
          icon: "🌟",
          title: "Healthy Habits",
          description: "You've maintained a healthy routine for a year!",
          achieved: false,
        },
        {
          area: "Health",
          icon: "🌟",
          title: "Yoga Master",
          description: "You've perfected all yoga poses!",
          achieved: false,
        },
        {
          area: "Weightloss",
          icon: "🌟",
          title: "Diet Champion",
          description: "You've achieved your target weight!",
          achieved: false,
        },
        {
          area: "Weightloss",
          icon: "🌟",
          title: "Calorie Crusher",
          description: "You've burned 5000 calories in one workout!",
          achieved: false,
        },
        {
          area: "Meditation",
          icon: "🌟",
          title: "Zen Master",
          description: "You've meditated for 100 hours!",
          achieved: false,
        },
        {
          area: "Meditation",
          icon: "🌟",
          title: "Mindfulness Guru",
          description: "You've achieved inner peace for 30 days!",
          achieved: false,
        },
        {
          area: "Reading",
          icon: "🌟",
          title: "Bookworm Extraordinaire",
          description: "You've read 100 books in a year!",
          achieved: false,
        },
        {
          area: "Reading",
          icon: "🌟",
          title: "Literature Lover",
          description: "You've read all the classics in one summer!",
          achieved: false,
        },
        {
          area: "Education",
          icon: "🌟",
          title: "Professor Prestige",
          description: "You've completed a Ph.D. with honors!",
          achieved: false,
        },
        {
          area: "Education",
          icon: "🌟",
          title: "History Buff",
          description: "You've aced every history exam with flying colors!",
          achieved: false,
        },
        {
          area: "Coding",
          icon: "🌟",
          title: "Coding Connoisseur",
          description: "You've built a popular app with millions of users!",
          achieved: false,
        },
        {
          area: "Coding",
          icon: "🌟",
          title: "Bug Buster",
          description: "You've fixed 1000 bugs in one week!",
          achieved: false,
        },
        {
          area: "Cooking",
          icon: "🌟",
          title: "Culinary Artist",
          description:
            "You've cooked a 5-course meal for a Michelin-starred chef!",
          achieved: false,
        },
        {
          area: "Cooking",
          icon: "🌟",
          title: "Baking Prodigy",
          description: "You've won a national baking competition!",
          achieved: false,
        },
        {
          area: "Travel",
          icon: "🌟",
          title: "Wanderlust Adventurer",
          description: "You've traveled to 50 countries in one year!",
          achieved: false,
        },
        {
          area: "Travel",
          icon: "🌟",
          title: "Local Explorer",
          description: "You've visited every hidden gem in your city!",
          achieved: false,
        },
        {
          area: "Art",
          icon: "🌟",
          title: "Masterpiece Creator",
          description: "You've had your artwork displayed in a famous gallery!",
          achieved: false,
        },
        {
          area: "Art",
          icon: "🌟",
          title: "Sculpting Prodigy",
          description: "You've sculpted a masterpiece out of marble!",
          achieved: false,
        },
      ],
    };
  },
  computed: {
    headingText() {
      if (this.selectedCategory === "All") {
        return `${this.$store.state.userName}'s Achievements`;
      } else {
        return `${this.$store.state.userName}'s ${this.selectedCategory} Achievements`;
      }
    },
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

<style scoped>
select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1em;
}

select:focus {
  border: 1px solid #6da9e4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
}

.achievement-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 992px) {
  .achievement-list {
    grid-template-columns: 1fr;
  }
}

.achievement-item {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
}

.achievement-icon {
  font-size: 36px;
  margin-right: 10px;
}

.achievement-title {
  font-size: 18px;
  font-weight: bold;
}

.achievement-description {
  font-size: 14px;
  color: #555;
}

.achievement-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}

.achievement-item:not(.achieved) {
  filter: grayscale(100%);
  pointer-events: none;
}
</style>
