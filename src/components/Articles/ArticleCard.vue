<template>
  <div class="article-card" @click="navigateToArticle">
    <div class="article-thumbnail">
      <img :src="imageSrc" alt="Article Thumbnail" />
    </div>
    <div class="article-details">
      <h2 class="title">{{ title }}</h2>
      <p class="author">By {{ author }}</p>
      <p class="date">{{ datePublished }}</p>
      <p class="category">{{ category }}</p>
      <p class="description">{{ description }}</p>
      <!-- <div class="click-icon-container">
        <i class="fas fa-arrow-right clickable-icon"></i>
      </div> -->
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
  methods: {
    navigateToArticle() {
      console.log("HELLO");
    },
  },
};
</script>

<style scoped>
.article-card {
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.article-card:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
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
  border: 1px solid #ccc;
  border-radius: 8px;
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

.click-icon-container {
  text-align: right;
}
</style>
