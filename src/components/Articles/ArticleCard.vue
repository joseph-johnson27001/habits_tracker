<template>
  <div class="article-card">
    <div class="article-thumbnail">
      <img :src="imageSrc" alt="Article Thumbnail" />
    </div>
    <div class="article-details">
      <h2 class="title">{{ title }}</h2>
      <p class="author">By {{ author }}</p>
      <p class="date">{{ datePublished }}</p>
      <p class="category">{{ category }}</p>
      <p class="description">{{ description }}</p>
      <div class="read-more-container">
        <button class="read-more-button" @click="readMore">Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    author: String,
    datePublished: String,
    category: String,
    imageSrc: String,
    description: String,
    articleLink: String,
  },
};
</script>

<style scoped>
.article-card {
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  align-items: center;
}

.article-thumbnail {
  flex: 1;
  max-width: 200px;
  padding: 16px;
}

.article-thumbnail img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.article-details {
  flex: 2;
  padding: 16px;
}

.title {
  font-size: 24px;
  margin: 0;
  font-weight: bold;
}

.author {
  font-style: italic;
  margin-top: 8px;
  font-size: 16px;
  color: #666;
}

.date {
  font-size: 14px;
  color: #999;
}

.category {
  font-weight: bold;
  margin-top: 8px;
  font-size: 18px;
}

.description {
  margin-top: 16px;
  font-size: 16px;
  color: #333;
}

.read-more-container {
  display: flex;
  justify-content: right;
}

.read-more-button {
  margin-top: 16px;
  background-color: #4169e1;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.read-more-button:hover {
  background-color: #0033a0;
}
</style>
