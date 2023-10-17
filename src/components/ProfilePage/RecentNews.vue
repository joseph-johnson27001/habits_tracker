<template>
  <div class="recent-news-section">
    <div class="heading-area">
      <h1>RECENT NEWS</h1>
      <i class="fas fa-angle-right view-more-link"></i>
    </div>
    <ul class="recent-activity-list">
      <!-- Loop through recent activities -->
      <li
        class="recent-activity-item"
        v-for="(activity, index) in recentActivities"
        :key="index"
      >
        <div class="activity-icon">
          {{ activity.icon }}
        </div>
        <div class="activity-details">
          <p>
            <span class="user-name">{{ $store.state.userName }}</span>
            {{ activity.message }}
          </p>
          <p class="activity-timestamp">{{ activity.timestamp }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecentNewsSection",
  data() {
    return {
      recentActivities: [
        {
          icon: "🎉",
          message: "just gained the productivity badge.",
          timestamp: "2 hours ago",
        },
        {
          icon: "💪",
          message: "completed 10 tasks today.",
          timestamp: "Yesterday",
        },
        {
          icon: "🏆",
          message: "achieved a new high score in the challenges.",
          timestamp: "3 days ago",
        },
        {
          icon: "📚",
          message: "read 5 chapters of a book.",
          timestamp: "4 days ago",
        },
        {
          icon: "🎂",
          message: "celebrated a birthday!",
          timestamp: "1 week ago",
        },
        {
          icon: "🥇",
          message: "won first place in a competition.",
          timestamp: "2 weeks ago",
        },
        {
          icon: "🚀",
          message: "launched a new project successfully.",
          timestamp: "1 month ago",
        },
        {
          icon: "🎵",
          message: "attended a live music concert.",
          timestamp: "2 months ago",
        },
      ],
    };
  },
};
</script>

<style scoped>
.recent-activity-list {
  list-style-type: none;
  padding: 0;
}

.recent-activity-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
}

.recent-activity-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}

.activity-icon {
  font-size: 24px;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
}

.activity-timestamp {
  color: #999;
}
</style>
