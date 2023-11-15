<template>
  <div class="badges-section">
    <div class="heading-area">
      <h1>BADGES</h1>
      <router-link to="/badges" class="nav-link">
        <i class="fas fa-angle-right view-more-link"></i>
      </router-link>
    </div>
    <div class="badge-list">
      <div
        class="badge-item"
        v-for="(badge, index) in badges"
        :key="index"
        @click="openModal(badge)"
      >
        <span class="badge-icon">{{ badge.icon }}</span>
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
  data() {
    return {
      userName: this.$store.state.userName,
      badges: [
        {
          name: "Fitness Enthusiast",
          icon: "🏆",
          achievedOn: "1st February 2023",
          description:
            "You're a fitness enthusiast! This badge was earned for maintaining a streak of 30 consecutive days of exercise.",
        },
        {
          name: "Champion",
          icon: "🥇",
          achievedOn: "2nd February 2023",
          description:
            "You're a true champion! This badge was earned for outstanding achievements.",
        },
        {
          name: "Sharpshooter",
          icon: "🎯",
          achievedOn: "3rd February 2023",
          description:
            "Precision and accuracy define you. This badge was earned for exceptional focus.",
        },
        {
          name: "Stellar Performer",
          icon: "🌟",
          achievedOn: "4th February 2023",
          description:
            "You shine like a star! This badge was earned for consistently stellar performances.",
        },
        {
          name: "Top Athlete",
          icon: "🏅",
          achievedOn: "5th February 2023",
          description:
            "Congratulations! You're a top athlete, earning this badge for exceptional sportsmanship.",
        },
        {
          name: "Rocket Scientist",
          icon: "🚀",
          achievedOn: "6th February 2023",
          description:
            "Your intelligence knows no bounds. This badge was earned for groundbreaking achievements.",
        },
        {
          name: "Bookworm",
          icon: "📚",
          achievedOn: "7th February 2023",
          description:
            "You're a true bookworm! This badge was earned for a commitment to lifelong learning.",
        },
        {
          name: "Strength and Power",
          icon: "💪",
          achievedOn: "8th February 2023",
          description:
            "Your strength and power are unmatched. This badge was earned for outstanding physical prowess.",
        },
        {
          name: "Nature Explorer",
          icon: "🌿",
          achievedOn: "9th February 2023",
          description:
            "You love exploring nature. This badge was earned for a deep connection with the outdoors.",
        },
        {
          name: "Celebration Master",
          icon: "🎉",
          achievedOn: "10th February 2023",
          description:
            "You know how to celebrate! This badge was earned for spreading joy and happiness.",
        },
        {
          name: "Mastermind",
          icon: "🧠",
          achievedOn: "11th February 2023",
          description:
            "Your intellect is unmatched. This badge was earned for solving complex problems with ease.",
        },
        {
          name: "Trailblazer",
          icon: "🔥",
          achievedOn: "12th February 2023",
          description:
            "You're a true trailblazer! This badge was earned for paving the way for others.",
        },
        {
          name: "Honorable Achiever",
          icon: "🎖️",
          achievedOn: "13th February 2023",
          description:
            "You've earned the highest honor. This badge was awarded for outstanding achievements.",
        },
        {
          name: "Illuminator",
          icon: "💡",
          achievedOn: "14th February 2023",
          description:
            "You bring light to every situation. This badge was earned for creativity and innovation.",
        },
        {
          name: "Sunshine Spreader",
          icon: "🌞",
          achievedOn: "15th February 2023",
          description:
            "You spread sunshine wherever you go. This badge was earned for a positive and cheerful attitude.",
        },
        {
          name: "Space Explorer",
          icon: "🚀",
          achievedOn: "16th February 2023",
          description:
            "You're an explorer of the cosmos. This badge was earned for an interest in space exploration.",
        },
        {
          name: "Global Citizen",
          icon: "🌍",
          achievedOn: "17th February 2023",
          description:
            "You're a true global citizen. This badge was earned for promoting global unity and understanding.",
        },
        {
          name: "Stargazer",
          icon: "🌌",
          achievedOn: "18th February 2023",
          description:
            "You're mesmerized by the stars. This badge was earned for a love of astronomy and stargazing.",
        },
        {
          name: "Ocean Explorer",
          icon: "🌊",
          achievedOn: "19th February 2023",
          description:
            "You explore the depths of the ocean. This badge was earned for a passion for marine life.",
        },
        {
          name: "Gamer Pro",
          icon: "🎮",
          achievedOn: "20th February 2023",
          description:
            "You're a gaming pro! This badge was earned for exceptional skills in the gaming world.",
        },
      ],
      isModalVisible: false,
      selectedBadge: null,
    };
  },
  methods: {
    openModal(badge) {
      this.selectedBadge = {
        ...badge,
        icon: badge.icon,
      };
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
.badge-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

.badge-item {
  text-align: center;
  cursor: pointer;
  transition: transform 0.2s;
}

.badge-item:hover {
  transform: scale(1.1);
}

.badge-icon {
  width: 80px;
  height: 80px;
}
</style>
