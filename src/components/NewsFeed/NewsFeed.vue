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
      <div class="timestamp-container">
        <div class="timestamp">{{ item.timestamp }}</div>
        <!-- Interaction Area -->
        <div class="button-row">
          <span class="comment-button" @click="toggleComments(item)">
            <i class="far fa-comment fa-lg clickable-icon"></i>
            <span class="comment-count">{{ item.comments.length }}</span>
          </span>
          <span @click="likePost(item)" class="like-button">
            <i class="far fa-thumbs-up fa-lg clickable-icon like-button"></i>
            <span class="like-count">{{ item.likes }}</span>
          </span>
        </div>
      </div>
      <div v-if="item.commentsVisible" class="comments-section">
        <div
          class="comment"
          v-for="(comment, cIndex) in item.comments"
          :key="cIndex"
        >
          <div class="comment-header">
            <img
              :src="item.userImage"
              alt="Commenter's Profile Image"
              class="commenter-image"
            />
            <div class="timestamp-container">
              <span class="commenter commenter-name">{{
                comment.commenter
              }}</span>
              <span class="comment-date">{{ comment.timestamp }}</span>
            </div>
          </div>
          <div class="comment-text">{{ comment.text }}</div>
        </div>
        <div class="interaction-area">
          <input
            v-model="item.newComment.text"
            @keyup.enter="addComment(item)"
            class="comment-input"
            placeholder="Add a comment..."
          />
        </div>
      </div>
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
          content: "Achieved my fitness goal today! 💪🏋️‍♂️ ",
          likes: 10,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Great job, John!",
              commenter: "Alice Smith",
              timestamp: "1 hour ago",
            },
            {
              text: "That's awesome! Keep it up!",
              commenter: "Emily Johnson",
              timestamp: "55 minutes ago",
            },
            {
              text: "I'm inspired by your dedication!",
              commenter: "David Brown",
              timestamp: "30 minutes ago",
            },
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
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Meditation is amazing, isn't it?",
              commenter: "John Doe",
              timestamp: "2 hours ago",
            },
            {
              text: "You're an inspiration to us all!",
              commenter: "Emily Johnson",
              timestamp: "Just now",
            },
          ],
        },
        {
          userName: "Emily Johnson",
          userTitle: "Productivity Pro",
          userImage: "https://picsum.photos/59/50",
          timestamp: "4 hours ago",
          content:
            "Earned the 'Productivity Prodigy' badge for completing all my tasks on time. 🏆🚀",
          likes: 15,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Wow, that's impressive!",
              commenter: "John Doe",
              timestamp: "3 hours ago",
            },
            {
              text: "You're a productivity superstar!",
              commenter: "Alice Smith",
              timestamp: "2 hours ago",
            },
          ],
        },
        {
          userName: "Michael Green",
          userTitle: "Gratitude Practitioner",
          userImage: "https://picsum.photos/56/50",
          timestamp: "7 hours ago",
          content:
            "Completed the '30 Days of Gratitude' challenge. Feeling thankful for life's little joys. 🙏😊",
          likes: 6,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Gratitude is key to happiness!",
              commenter: "Sophia Adams",
              timestamp: "6 hours ago",
            },
            {
              text: "Keep spreading positivity!",
              commenter: "Liam Miller",
              timestamp: "5 hours ago",
            },
          ],
        },
        {
          userName: "Sophia Adams",
          userTitle: "Gamer Pro",
          userImage: "https://picsum.photos/65/50",
          timestamp: "8 hours ago",
          content: "Achieved a new high score in my favorite video game. 🎮🏆",
          likes: 20,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Gamer skills on point!",
              commenter: "Ethan Wilson",
              timestamp: "7 hours ago",
            },
            {
              text: "I challenge you to beat my score!",
              commenter: "Liam Miller",
              timestamp: "6 hours ago",
            },
          ],
        },
        {
          userName: "Ethan Wilson",
          userTitle: "Nature Explorer",
          userImage: "https://picsum.photos/64/50",
          timestamp: "9 hours ago",
          content:
            "Visited a breathtaking natural wonder today. Nature is amazing! 🌄🌿",
          likes: 7,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Nature is the best stress reliever!",
              commenter: "Ava Robinson",
              timestamp: "8 hours ago",
            },
            {
              text: "Where did you go?",
              commenter: "Olivia Lewis",
              timestamp: "7 hours ago",
            },
          ],
        },
        {
          userName: "Liam Miller",
          userTitle: "Coder",
          userImage: "https://picsum.photos/66/50",
          timestamp: "10 hours ago",
          content: "Completed a 30-day coding challenge. 💻🚀",
          likes: 18,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Coding wizard!",
              commenter: "Ava Robinson",
              timestamp: "9 hours ago",
            },
            {
              text: "What projects did you work on?",
              commenter: "Noah Clark",
              timestamp: "8 hours ago",
            },
          ],
        },
        {
          userName: "Ava Robinson",
          userTitle: "Photographer",
          userImage: "https://picsum.photos/67/50",
          timestamp: "11 hours ago",
          content:
            "Attended a virtual photography exhibition. Captured some stunning shots! 📷🌟",
          likes: 14,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Your photos are breathtaking!",
              commenter: "Olivia Lewis",
              timestamp: "10 hours ago",
            },
            {
              text: "Share some of your work with us!",
              commenter: "Noah Clark",
              timestamp: "9 hours ago",
            },
          ],
        },
        {
          userName: "Noah Clark",
          userTitle: "Polyglot",
          userImage: "https://picsum.photos/68/50",
          timestamp: "12 hours ago",
          content:
            "Earned the 'Language Lover' badge for mastering a new language. 🌐🏅",
          likes: 9,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Multilingual genius!",
              commenter: "Ethan Wilson",
              timestamp: "11 hours ago",
            },
            {
              text: "Teach me some phrases!",
              commenter: "Liam Miller",
              timestamp: "10 hours ago",
            },
          ],
        },
        {
          userName: "Olivia Lewis",
          userTitle: "Adventurer",
          userImage: "https://picsum.photos/69/50",
          timestamp: "13 hours ago",
          content: "Hiked to the summit of Mount Adventure. What a view! ⛰️🌄",
          likes: 25,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Adventurer of the year!",
              commenter: "Sophia Adams",
              timestamp: "12 hours ago",
            },
            {
              text: "Tell us about your journey!",
              commenter: "Liam Parker",
              timestamp: "11 hours ago",
            },
          ],
        },
        {
          userName: "Liam Parker",
          userTitle: "Coder",
          userImage: "https://picsum.photos/66/50",
          timestamp: "14 hours ago",
          content:
            "Completed a 30-day coding challenge. Feeling accomplished! 💻🚀",
          likes: 22,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Coding genius!",
              commenter: "Ava Robinson",
              timestamp: "13 hours ago",
            },
            {
              text: "What languages did you code in?",
              commenter: "Noah Clark",
              timestamp: "12 hours ago",
            },
          ],
        },
        {
          userName: "Emma Turner",
          userTitle: "Book Lover",
          userImage: "https://picsum.photos/65/50",
          timestamp: "15 hours ago",
          content: "Started a new book series. Can't put it down! 📚❤️",
          likes: 11,
          commentsVisible: false,
          newComment: {
            text: "",
            commenter: "Joe Johnson",
            timestamp: "Just now",
          },
          comments: [
            {
              text: "Bookworm alert!",
              commenter: "Olivia Lewis",
              timestamp: "14 hours ago",
            },
            {
              text: "Tell us about the book!",
              commenter: "Liam Parker",
              timestamp: "13 hours ago",
            },
          ],
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
      item.commentsVisible = !item.commentsVisible;
    },

    addComment(item) {
      if (item.newComment.text.trim() !== "") {
        item.comments.push(item.newComment);
        item.newComment = {
          text: "",
          commenter: "Joe Johnson",
          timestamp: "Just now",
        };
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
  padding-bottom: 10px;
  border: 1px solid #ccc;
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
  border: 1px solid #ccc;
}

.user-name {
  color: #4169e1;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.1s;
}

.commenter-name {
  color: #4169e1;
  cursor: pointer;
  transition: color 0.1s;
}

.commenter-name:hover {
  color: #3156a6;
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

.comment-button {
  cursor: pointer;
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

.comment {
  padding: 10px;
  background-color: #ecf6ff;
  margin-bottom: 6px;
  border-radius: 4px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid #ccc;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.timestamp-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.commenter-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #ccc;
}

.commenter {
  color: #4169e1;
}

.comment-date {
  color: #888;
}

.comment-text {
  font-size: 16px;
}
.comment-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: box-shadow 0.1s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.comment-input:focus {
  border: 1px solid #6da9e4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;
}
</style>
