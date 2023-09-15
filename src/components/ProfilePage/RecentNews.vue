<template>
  <div class="recent-news-section">
    <h1>RECENT NEWS SECTION</h1>
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
      ],
    };
  },
};
</script>

<style scoped>
/* Add your styling for recent news section here */
.recent-news-section {
  /* Add styles for the section */
}

.recent-activity-list {
  list-style-type: none;
  padding: 0;
}

.recent-activity-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc; /* Add border */
  padding-bottom: 10px; /* Add some padding for spacing */
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
