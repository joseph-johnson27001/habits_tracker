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
        },
        {
          name: "Badge 2",
          icon: "🥇",
        },
        {
          name: "Badge 3",
          icon: "🎯",
        },
        {
          name: "Badge 4",
          icon: "🌟",
        },
        {
          name: "Badge 5",
          icon: "🏅",
        },
        {
          name: "Badge 6",
          icon: "🚀",
        },
        {
          name: "Badge 7",
          icon: "📚",
        },
        {
          name: "Badge 8",
          icon: "💪",
        },
        {
          name: "Badge 9",
          icon: "🌿",
        },
        {
          name: "Badge 10",
          icon: "🎉",
        },
        {
          name: "Badge 11",
          icon: "🧠",
        },
        {
          name: "Badge 12",
          icon: "🔥",
        },
        {
          name: "Badge 13",
          icon: "🎖️",
        },
        {
          name: "Badge 14",
          icon: "💡",
        },
        {
          name: "Badge 15",
          icon: "🌞",
        },
        {
          name: "Badge 16",
          icon: "🚀",
        },
        {
          name: "Badge 16",
          icon: "🚀",
          completed: false,
        },
        {
          name: "Badge 17",
          icon: "🌍",
        },
        {
          name: "Badge 18",
          icon: "🌌",
        },
        {
          name: "Badge 19",
          icon: "🌊",
        },
        {
          name: "Badge 20",
          icon: "🎮",
        },
      ],
      isModalVisible: false,
      selectedBadge: null,
    };
  },
  methods: {
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
