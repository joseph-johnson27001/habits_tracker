<template>
  <div class="news-feed">
    <div class="feed-item" v-for="(item, index) in feedItems" :key="index">
      <div class="user-info">
        <img
          :src="item.userImage"
          alt="User Profile Image"
          class="user-image"
        />
        <span class="user-name">{{ item.userName }}</span>
      </div>
      <div class="timestamp">{{ item.timestamp }}</div>
      <div class="content">{{ item.content }}</div>
      <!-- You can add more details like comments, reactions, etc. here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsFeed",
  data() {
    return {
      feedItems: [
        {
          userName: "John Doe",
          userImage: "https://via.placeholder.com/50x50", // Placeholder image URL
          timestamp: "2 hours ago",
          content: "Just hit a major milestone today!",
        },
        {
          userName: "Alice Smith",
          userImage: "https://via.placeholder.com/50x50", // Placeholder image URL
          timestamp: "3 hours ago",
          content: "Celebrating a great achievement!",
        },
        // Add more feed items here
      ],
    };
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.news-feed {
  padding: 10px;
  border-right: 1px solid #ccc;
  height: 100%;
  overflow-y: auto;
}

.feed-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

.user-info {
  display: flex;
  align-items: center;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-name {
  font-weight: bold;
}

.timestamp {
  color: #888;
  margin-top: 5px;
}

.content {
  margin-top: 10px;
}

/* You can add more styles as needed */
</style>
