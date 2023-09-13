<template>
  <div class="search-bar">
    <input type="text" class="search-input" placeholder="Search" />
    <button class="search-button">
      <i class="fa fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;
  transition: border-color 0.1s;
}

.search-input:focus {
  border-color: #6da9e4;
  outline: none;
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
}
</style>
