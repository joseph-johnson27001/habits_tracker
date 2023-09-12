<template>
  <div class="news-feed">
    <SearchBar />
    <div class="feed-item" v-for="(item, index) in feedItems" :key="index">
      <div class="user-info">
        <img
          :src="item.userImage"
          alt="User Profile Image"
          class="user-image"
        />
        <div>
          <span class="user-name">{{ item.userName }}</span>
          <br />
          <span class="user-title">{{ item.userTitle }}</span>
        </div>
      </div>
      <div class="content">{{ item.content }}</div>
      <div class="timestamp">{{ item.timestamp }}</div>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/NewsFeed/SearchBar.vue";

export default {
  name: "NewsFeed",
  components: {
    SearchBar,
  },
  data() {
    return {
      feedItems: [
        {
          userName: "John Doe",
          userTitle: "Fitness Enthusiast",
          userImage: "https://picsum.photos/51/50",
          timestamp: "2 hours ago",
          content: "Achieved my fitness goal today! 💪🏋️‍♂️",
        },
        {
          userName: "Alice Smith",
          userTitle: "Yoga Lover",
          userImage: "https://picsum.photos/50/50",
          timestamp: "3 hours ago",
          content:
            "Completed the 30-day meditation challenge. Feeling zen! 🧘‍♀️✨",
        },
        {
          userName: "Emily Johnson",
          userTitle: "Productivity Pro",
          userImage: "https://picsum.photos/49/50",
          timestamp: "4 hours ago",
          content:
            "Earned the 'Productivity Prodigy' badge for completing all my tasks on time. 🏆🚀",
        },
        {
          userName: "David Brown",
          userTitle: "Chef Extraordinaire",
          userImage: "https://picsum.photos/48/50",
          timestamp: "5 hours ago",
          content:
            "Received the 'Master Chef' trophy for trying a new recipe every day this month. 🏅👨‍🍳",
        },
        {
          userName: "Olivia White",
          userTitle: "Bookworm",
          userImage: "https://picsum.photos/47/50",
          timestamp: "6 hours ago",
          content:
            "Finished reading 10 books in a week. A new personal best! 📚🥇",
        },
        {
          userName: "Michael Green",
          userTitle: "Gratitude Practitioner",
          userImage: "https://picsum.photos/46/50",
          timestamp: "7 hours ago",
          content:
            "Completed the '30 Days of Gratitude' challenge. Feeling thankful for life's little joys. 🙏😊",
        },
        {
          userName: "Sophia Adams",
          userTitle: "Gamer Pro",
          userImage: "https://picsum.photos/45/50",
          timestamp: "8 hours ago",
          content: "Achieved a new high score in my favorite video game. 🎮🏆",
        },
        {
          userName: "Ethan Wilson",
          userTitle: "Nature Explorer",
          userImage: "https://picsum.photos/44/50",
          timestamp: "9 hours ago",
          content:
            "Visited a breathtaking natural wonder today. Nature is amazing! 🌄🌿",
        },
        {
          userName: "Liam Miller",
          userTitle: "Coder",
          userImage: "https://picsum.photos/46/50",
          timestamp: "10 hours ago",
          content: "Completed a 30-day coding challenge. 💻🚀",
        },
        {
          userName: "Ava Robinson",
          userTitle: "Photographer",
          userImage: "https://picsum.photos/47/50",
          timestamp: "11 hours ago",
          content:
            "Attended a virtual photography exhibition. Captured some stunning shots! 📷🌟",
        },
        {
          userName: "Noah Clark",
          userTitle: "Polyglot",
          userImage: "https://picsum.photos/48/50",
          timestamp: "12 hours ago",
          content:
            "Earned the 'Language Lover' badge for mastering a new language. 🌐🏅",
        },
        {
          userName: "Olivia Lewis",
          userTitle: "Adventurer",
          userImage: "https://picsum.photos/49/50",
          timestamp: "13 hours ago",
          content: "Hiked to the summit of Mount Adventure. What a view! ⛰️🌄",
        },
        {
          userName: "Liam Parker",
          userTitle: "Coder",
          userImage: "https://picsum.photos/46/50",
          timestamp: "14 hours ago",
          content:
            "Completed a 30-day coding challenge. Feeling accomplished! 💻🚀",
        },
        {
          userName: "Emma Turner",
          userTitle: "Book Lover",
          userImage: "https://picsum.photos/45/50",
          timestamp: "15 hours ago",
          content: "Started a new book series. Can't put it down! 📚❤️",
        },
      ],
    };
  },
};
</script>

<style scoped>
.news-feed {
  padding: 10px;
  overflow-y: auto;
}

.feed-item {
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e0e0e0;
  background-color: #f2f2f2;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.feed-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}

.user-info {
  display: flex;
  align-items: center;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  border: 1px solid white;
}

.user-name {
  font-weight: bold;
  font-size: 18px;
}

.timestamp {
  color: #888;
  margin-top: 5px;
  font-size: 14px;
}

.content {
  margin-top: 10px;
  font-size: 16px;
}
</style>
