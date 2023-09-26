<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-input"
      placeholder="Search"
      @input="searchUsers"
      v-model="searchText"
    />
    <div v-if="searchResults.length > 0" class="search-results">
      <div
        v-for="result in searchResults"
        :key="result.id"
        class="search-result"
      >
        <img
          :src="result.userImage"
          alt="User Profile Image"
          class="search-result-image"
        />
        {{ result.userName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
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
      ],
      searchText: "",
      searchResults: [], // Define searchResults here within the data function
    };
  },
  methods: {
    searchUsers() {
      const searchTerm = this.searchText.toLowerCase();
      this.searchResults = this.feedItems.filter((item) =>
        item.userName.toLowerCase().includes(searchTerm)
      );
    },
  },
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.1s;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.search-input:focus {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #6da9e4;
  outline: none;
}
.search-results {
  position: absolute;
  top: 132px;
  width: 50rem;
  max-height: 150px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;
}

.search-result {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
}

.search-result-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.search-button {
  background-color: #4169e1;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.1s;
  border: 1px solid #ccc;
}

.search-button:hover {
  background-color: #3156a6;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
