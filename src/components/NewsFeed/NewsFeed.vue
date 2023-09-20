<template>
  <div class="news-feed">
    <SearchBar />
    <div class="feed-item card" v-for="(item, index) in feedItems" :key="index">
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
      <div style="display: flex; justify-content: space-between">
        <div class="timestamp">{{ item.timestamp }}</div>
        <!-- Interaction Area -->

        <div class="button-row">
          <span class="comment-button">
            <i
              class="far fa-comment fa-lg clickable-icon"
              @click="toggleComments(item)"
            ></i>
            <span class="comment-count" @click="toggleComments(item)">{{
              item.comments.length
            }}</span>
          </span>
          <span @click="likePost(item)" class="like-button">
            <i class="far fa-thumbs-up fa-lg clickable-icon like-button"></i>
            <span class="like-count">{{ item.likes }}</span>
          </span>
        </div>
      </div>
      <!-- Display comments if commentsVisible is true -->
      <div v-if="item.commentsVisible" class="comments-section">
        <div
          class="comment"
          v-for="(comment, cIndex) in item.comments"
          :key="cIndex"
        >
          {{ comment }}
        </div>
      </div>
      <!-- <div class="interaction-area">
        <input
          v-model="newComment"
          @keyup.enter="addComment(item)"
          class="comment-input"
          placeholder="Add a comment..."
        />
      </div> -->
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
      newComment: "",
      feedItems: [
        {
          userName: "John Doe",
          userTitle: "Fitness Enthusiast",
          userImage: "https://picsum.photos/51/50",
          timestamp: "2 hours ago",
          content: "Achieved my fitness goal today! 💪🏋️‍♂️",
          likes: 10,
          comments: [
            "Great job, John!",
            "That's awesome! Keep it up!",
            "I'm inspired by your dedication!",
          ],
        },
        {
          userName: "Alice Smith",
          userTitle: "Yoga Lover",
          userImage: "https://picsum.photos/50/50",
          timestamp: "3 hours ago",
          content:
            "Completed the 30-day meditation challenge. Feeling zen! 🧘‍♀️✨",
          likes: 5,
          comments: [
            "Meditation is amazing, isn't it?",
            "You're an inspiration to us all!",
          ],
        },
        {
          userName: "Emily Johnson",
          userTitle: "Productivity Pro",
          userImage: "https://picsum.photos/49/50",
          timestamp: "4 hours ago",
          content:
            "Earned the 'Productivity Prodigy' badge for completing all my tasks on time. 🏆🚀 ",
          likes: 15,
          comments: [
            "Wow, that's impressive!",
            "You're a productivity superstar!",
          ],
        },
        {
          userName: "David Brown",
          userTitle: "Chef Extraordinaire",
          userImage: "https://picsum.photos/48/50",
          timestamp: "5 hours ago",
          content:
            "Received the 'Master Chef' trophy for trying a new recipe every day this month. 🏅👨‍🍳",
          likes: 8,
          comments: [
            "Your culinary skills are amazing!",
            "I want to taste your recipes!",
          ],
        },
        {
          userName: "Olivia White",
          userTitle: "Bookworm",
          userImage: "https://picsum.photos/47/50",
          timestamp: "6 hours ago",
          content:
            "Finished reading 10 books in a week. A new personal best! 📚🥇",
          likes: 12,
          comments: ["That's so impressive!", "What books did you read?"],
        },
        {
          userName: "Michael Green",
          userTitle: "Gratitude Practitioner",
          userImage: "https://picsum.photos/46/50",
          timestamp: "7 hours ago",
          content:
            "Completed the '30 Days of Gratitude' challenge. Feeling thankful for life's little joys. 🙏😊",
          likes: 6,
          comments: [
            "Gratitude is key to happiness!",
            "Keep spreading positivity!",
          ],
        },
        {
          userName: "Sophia Adams",
          userTitle: "Gamer Pro",
          userImage: "https://picsum.photos/45/50",
          timestamp: "8 hours ago",
          content: "Achieved a new high score in my favorite video game. 🎮🏆",
          likes: 20,
          comments: [
            "Gamer skills on point!",
            "I challenge you to beat my score!",
          ],
        },
        {
          userName: "Ethan Wilson",
          userTitle: "Nature Explorer",
          userImage: "https://picsum.photos/44/50",
          timestamp: "9 hours ago",
          content:
            "Visited a breathtaking natural wonder today. Nature is amazing! 🌄🌿",
          likes: 7,
          comments: [
            "Nature is the best stress reliever!",
            "Where did you go?",
          ],
        },
        {
          userName: "Liam Miller",
          userTitle: "Coder",
          userImage: "https://picsum.photos/46/50",
          timestamp: "10 hours ago",
          content: "Completed a 30-day coding challenge. 💻🚀",
          likes: 18,
          comments: ["Coding wizard!", "What projects did you work on?"],
        },
        {
          userName: "Ava Robinson",
          userTitle: "Photographer",
          userImage: "https://picsum.photos/47/50",
          timestamp: "11 hours ago",
          content:
            "Attended a virtual photography exhibition. Captured some stunning shots! 📷🌟",
          likes: 14,
          comments: [
            "Your photos are breathtaking!",
            "Share some of your work with us!",
          ],
        },
        {
          userName: "Noah Clark",
          userTitle: "Polyglot",
          userImage: "https://picsum.photos/48/50",
          timestamp: "12 hours ago",
          content:
            "Earned the 'Language Lover' badge for mastering a new language. 🌐🏅",
          likes: 9,
          comments: ["Multilingual genius!", "Teach me some phrases!"],
        },
        {
          userName: "Olivia Lewis",
          userTitle: "Adventurer",
          userImage: "https://picsum.photos/49/50",
          timestamp: "13 hours ago",
          content: "Hiked to the summit of Mount Adventure. What a view! ⛰️🌄",
          likes: 25,
          comments: ["Adventurer of the year!", "Tell us about your journey!"],
        },
        {
          userName: "Liam Parker",
          userTitle: "Coder",
          userImage: "https://picsum.photos/46/50",
          timestamp: "14 hours ago",
          content:
            "Completed a 30-day coding challenge. Feeling accomplished! 💻🚀",
          likes: 22,
          comments: ["Coding genius!", "What languages did you code in?"],
        },
        {
          userName: "Emma Turner",
          userTitle: "Book Lover",
          userImage: "https://picsum.photos/45/50",
          timestamp: "15 hours ago",
          content: "Started a new book series. Can't put it down! 📚❤️",
          likes: 11,
          comments: ["Bookworm alert!", "Tell us about the book!"],
        },
      ],
    };
  },
  methods: {
    likePost(item) {
      item.likes += 1;
    },
    showComments(item) {
      console.log(item);
    },
    toggleComments(item) {
      console.log(item);
      item.commentsVisible = !item.commentsVisible;
    },
    addComment(item) {
      if (this.newComment.trim() !== "") {
        item.comments.push(this.newComment);
        this.newComment = "";
      }
    },
  },
};
</script>

<style scoped>
.news-feed {
  overflow-y: auto;
}
.feed-item {
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
  color: #4169e1;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.1s;
}

.user-name:hover {
  transform: scale(1.1);
  color: #3156a6;
}

.timestamp {
  color: #888;
  margin-top: 5px;
  font-size: 14px;
  padding-bottom: 10px;
}

.content {
  margin-top: 10px;
  font-size: 16px;
}

.interaction-area {
  display: flex;
}

.interaction-container {
  display: flex;
  justify-content: space-between;
}

.button-row {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
}

.like-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.like-button i,
.comment-button i {
  margin-right: 2px;
}

.like-count,
.comment-count {
  font-size: 1rem;
  margin-left: 2px;
}

.comment-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.1s;
}

.comment-input:focus {
  border-color: #6da9e4;
  outline: none;
}
</style>
