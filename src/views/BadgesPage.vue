<template>
  <div>
    <select
      v-model="selectedCategory"
      @change="filterBadges"
      title="badge-select"
    >
      <option v-for="option in selectOptions" :value="option" :key="option">
        {{ option }}
      </option>
    </select>

    <div class="badge-list">
      <div
        v-for="(badge, index) in filteredBadges"
        :key="index"
        class="badge-item card"
        @click="openModal(badge)"
      >
        <div class="badge-icon">{{ badge.icon }}</div>
        <div class="badge-details">
          <div class="badge-name">{{ badge.name }}</div>
          <div class="badge-description">{{ badge.description }}</div>
        </div>
      </div>
    </div>
    <badge-modal
      :is-visible="isModalVisible"
      :selected-badge="selectedBadge"
      @close="closeModal"
    ></badge-modal>
  </div>
</template>

<script>
import BadgeModal from "@/components/ProfilePage/components/BadgeModal.vue";
export default {
  components: {
    BadgeModal,
  },
  name: "BadgesPage",
  data() {
    return {
      userName: this.$store.state.userName,
      badges: [
        {
          name: "Fitness Guru",
          icon: "🏆",
          description: "Earned for completing 30 days of exercise in a row.",
          achievedOn: "1st February 2023",
          habitType: "Fitness",
        },
        {
          name: "Gold Medalist",
          icon: "🥇",
          description: "Earned for exceptional achievements in your field.",
          achievedOn: "15th March 2023",
          habitType: "Professional",
        },
        {
          name: "Burning Passion",
          icon: "💪",
          description:
            "Earned for conquering the weights and reaching new heights.",
          achievedOn: "10th April 2023",
          habitType: "Fitness",
        },
        {
          name: "Mindful Moments",
          icon: "🧘",
          description: "Earned for achieving inner peace through meditation.",
          achievedOn: "5th May 2023",
          habitType: "Meditation",
        },
        {
          name: "Bookworm",
          icon: "📚",
          description: "Earned for reading a substantial number of books.",
          achievedOn: "20th June 2023",
          habitType: "Reading",
        },
        {
          name: "Knowledge Seeker",
          icon: "🎓",
          description: "Earned for expanding your horizons through education.",
          achievedOn: "12th July 2023",
          habitType: "Education",
        },
        {
          name: "Coding Ninja",
          icon: "💻",
          description: "Earned for mastering the art of coding.",
          achievedOn: "8th August 2023",
          habitType: "Coding",
        },
        {
          name: "Culinary Artist",
          icon: "👩‍🍳",
          description: "Earned for creating delicious and artistic dishes.",
          achievedOn: "3rd September 2023",
          habitType: "Cooking",
        },
        {
          name: "Wanderlust Adventurer",
          icon: "✈️",
          description: "Earned for exploring and traveling the world.",
          achievedOn: "25th September 2023",
          habitType: "Travel",
        },
        {
          name: "Art Enthusiast",
          icon: "🎨",
          description: "Earned for creating and appreciating beautiful art.",
          achievedOn: "18th October 2023",
          habitType: "Art",
        },
      ],
      selectedCategory: "All",
      selectedBadge: null,
      isModalVisible: false,
    };
  },

  computed: {
    headingText() {
      if (this.selectedCategory === "All") {
        return `${this.$store.state.userName}'s Badges`;
      } else {
        return `${this.$store.state.userName}'s ${this.selectedCategory} Badges`;
      }
    },
    selectOptions() {
      const habitTypes = new Set(this.badges.map((badge) => badge.habitType));
      return ["All", ...habitTypes];
    },
    filteredBadges() {
      if (this.selectedCategory === "All") {
        return this.badges;
      } else {
        return this.badges.filter(
          (badge) => badge.habitType === this.selectedCategory
        );
      }
    },
  },
  methods: {
    filterBadges() {
      this.filteredBadges;
    },
    openModal(badge) {
      this.selectedBadge = badge;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedBadge = null;
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

.badge-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

@media (max-width: 992px) {
  .badge-list {
    grid-template-columns: 1fr;
  }
}

.badge-item {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer !important;
}

.badge-icon {
  font-size: 36px;
  margin-right: 10px;
}

.badge-details {
  flex: 1;
}

.badge-name {
  font-size: 18px;
  font-weight: bold;
}

.badge-description {
  font-size: 14px;
  color: #555;
}

.badge-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}
</style>
