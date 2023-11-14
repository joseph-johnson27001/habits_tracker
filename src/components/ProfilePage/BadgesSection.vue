<template>
  <div class="badges-section">
    <div class="heading-area">
      <h1>BADGES</h1>
      <i class="fas fa-angle-right view-more-link"></i>
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
          name: "Badge 1",
          icon: "🏆",
          achievedOn: "1st February 2023",
        },
        {
          name: "Badge 2",
          icon: "🥇",
          achievedOn: "2nd February 2023",
        },
        {
          name: "Badge 3",
          icon: "🎯",
          achievedOn: "3rd February 2023",
        },
        {
          name: "Badge 4",
          icon: "🌟",
          achievedOn: "4th February 2023",
        },
        {
          name: "Badge 5",
          icon: "🏅",
          achievedOn: "5th February 2023",
        },
        {
          name: "Badge 6",
          icon: "🚀",
          achievedOn: "6th February 2023",
        },
        {
          name: "Badge 7",
          icon: "📚",
          achievedOn: "7th February 2023",
        },
        {
          name: "Badge 8",
          icon: "💪",
          achievedOn: "8th February 2023",
        },
        {
          name: "Badge 9",
          icon: "🌿",
          achievedOn: "9th February 2023",
        },
        {
          name: "Badge 10",
          icon: "🎉",
          achievedOn: "10th February 2023",
        },
        {
          name: "Badge 11",
          icon: "🧠",
          achievedOn: "11th February 2023",
        },
        {
          name: "Badge 12",
          icon: "🔥",
          achievedOn: "12th February 2023",
        },
        {
          name: "Badge 13",
          icon: "🎖️",
          achievedOn: "13th February 2023",
        },
        {
          name: "Badge 14",
          icon: "💡",
          achievedOn: "14th February 2023",
        },
        {
          name: "Badge 15",
          icon: "🌞",
          achievedOn: "15th February 2023",
        },
        {
          name: "Badge 16",
          icon: "🚀",
          achievedOn: "16th February 2023",
        },
        {
          name: "Badge 16",
          icon: "🚀",
          completed: false,
          achievedOn: "17th February 2023",
        },
        {
          name: "Badge 17",
          icon: "🌍",
          achievedOn: "18th February 2023",
        },
        {
          name: "Badge 18",
          icon: "🌌",
          achievedOn: "19th February 2023",
        },
        {
          name: "Badge 19",
          icon: "🌊",
          achievedOn: "20th February 2023",
        },
        {
          name: "Badge 20",
          icon: "🎮",
          achievedOn: "21st February 2023",
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
