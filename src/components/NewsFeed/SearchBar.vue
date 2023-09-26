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

.search-result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.search-result-name {
  font-weight: bold;
  font-size: 16px;
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
