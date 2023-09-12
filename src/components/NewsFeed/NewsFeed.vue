<template>
  <div class="news-feed">
    <h1>FEED</h1>
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
          userImage: "https://picsum.photos/50/50",
          timestamp: "2 hours ago",
          content: "Achieved my fitness goal today! 💪🏋️‍♂️",
        },
        {
          userName: "Alice Smith",
          userImage: "https://picsum.photos/50/50",
          timestamp: "3 hours ago",
          content:
            "Completed the 30-day meditation challenge. Feeling zen! 🧘‍♀️✨",
        },
        {
          userName: "Emily Johnson",
          userImage: "https://picsum.photos/49/50",
          timestamp: "4 hours ago",
          content:
            "Earned the 'Productivity Prodigy' badge for completing all my tasks on time. 🏆🚀",
        },
        {
          userName: "David Brown",
          userImage: "https://picsum.photos/48/50",
          timestamp: "5 hours ago",
          content:
            "Received the 'Master Chef' trophy for trying a new recipe every day this month. 🏅👨‍🍳",
        },
        {
          userName: "Olivia White",
          userImage: "https://picsum.photos/47/50",
          timestamp: "6 hours ago",
          content:
            "Finished reading 10 books in a week. A new personal best! 📚🥇",
        },
        {
          userName: "Michael Green",
          userImage: "https://picsum.photos/46/50",
          timestamp: "7 hours ago",
          content:
            "Completed the '30 Days of Gratitude' challenge. Feeling thankful for life's little joys. 🙏😊",
        },
        {
          userName: "Sophia Adams",
          userImage: "https://picsum.photos/45/50",
          timestamp: "8 hours ago",
          content: "Achieved a new high score in my favorite video game. 🎮🏆",
        },
        {
          userName: "Ethan Wilson",
          userImage: "https://picsum.photos/44/50",
          timestamp: "9 hours ago",
          content:
            "Visited a breathtaking natural wonder today. Nature is amazing! 🌄🌿",
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
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid lightgrey;
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
