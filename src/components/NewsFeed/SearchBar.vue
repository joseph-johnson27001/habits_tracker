<template>
  <div class="search-bar">
    <input
      type="text"
      class="search-input"
      placeholder="Search"
      @input="searchUsers"
      v-model="searchText"
      @focus="showSearchResults"
      @blur="hideSearchResults"
    />
    <div
      v-if="searchResults.length > 0 && showResults && searchText.length > 0"
      class="search-results"
    >
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
        <div class="search-result-info">
          <div class="search-result-name">{{ result.userName }}</div>
          <div class="search-result-title">{{ result.userTitle }}</div>
        </div>
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
        },
        {
          userName: "Alice Smith",
          userTitle: "Yoga Lover",
          userImage: "https://picsum.photos/50/50",
        },
        {
          userName: "Emily Johnson",
          userTitle: "Productivity Pro",
          userImage: "https://picsum.photos/59/50",
        },
        {
          userName: "Michael Green",
          userTitle: "Gratitude Practitioner",
          userImage: "https://picsum.photos/56/50",
        },
        {
          userName: "Sarah Brown",
          userTitle: "Nature Explorer",
          userImage: "https://picsum.photos/52/50",
        },
        {
          userName: "David Miller",
          userTitle: "Tech Enthusiast",
          userImage: "https://picsum.photos/53/50",
        },
        {
          userName: "Linda Wilson",
          userTitle: "Foodie",
          userImage: "https://picsum.photos/54/50",
        },
        {
          userName: "Robert Harris",
          userTitle: "Bookworm",
          userImage: "https://picsum.photos/55/50",
        },
        {
          userName: "Olivia Turner",
          userTitle: "Traveler",
          userImage: "https://picsum.photos/57/50",
        },
        {
          userName: "Daniel Clark",
          userTitle: "Photographer",
          userImage: "https://picsum.photos/58/50",
        },
        {
          userName: "Sophia Adams",
          userTitle: "Artist",
          userImage: "https://picsum.photos/60/50",
        },
        {
          userName: "Liam Miller",
          userTitle: "Musician",
          userImage: "https://picsum.photos/61/50",
        },
        {
          userName: "Ella Davis",
          userTitle: "Fashionista",
          userImage: "https://picsum.photos/62/50",
        },
        {
          userName: "Matthew White",
          userTitle: "Gamer",
          userImage: "https://picsum.photos/63/50",
        },
        {
          userName: "Ava Martinez",
          userTitle: "Animal Lover",
          userImage: "https://picsum.photos/64/50",
        },
        {
          userName: "Jackson Lee",
          userTitle: "Adventurer",
          userImage: "https://picsum.photos/65/50",
        },
      ],
      showResults: false,
      searchText: "",
      searchResults: [],
    };
  },
  methods: {
    searchUsers() {
      const searchTerm = this.searchText.toLowerCase();
      this.searchResults = this.feedItems.filter((item) =>
        item.userName.toLowerCase().includes(searchTerm)
      );
    },
    showSearchResults() {
      this.showResults = true;
    },
    hideSearchResults() {
      this.showResults = false;
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

.search-result:hover {
  background-color: #f2f2f2;
}

.search-result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.search-result-name {
  color: #4169e1;
  font-weight: 400;
}

.search-result-title {
  font-size: 14px;
  color: #666;
}

.search-result-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid #ccc;
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

/* Hide scrollbar on search items */
.search-results::-webkit-scrollbar {
  width: 0.5em;
}

.search-results::-webkit-scrollbar-thumb {
  background-color: white;
}

.search-results::-webkit-scrollbar-thumb:hover {
  background-color: white;
}
</style>
