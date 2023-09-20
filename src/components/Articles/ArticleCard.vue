<template>
  <div class="article-card">
    <div class="article-thumbnail">
      <img :src="imageSrc" alt="Article Thumbnail" />
    </div>
    <div class="article-details">
      <h2>{{ title }}</h2>
      <p class="author">By {{ author }}</p>
      <p class="date">{{ datePublished }}</p>
      <p class="category">{{ category }}</p>
      <p class="description">{{ description }}</p>
      <router-link :to="articleLink" class="read-more-link"
        >Read More</router-link
      >
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
/* Add your custom styles for the ArticleCard.vue here */
.article-card {
  display: flex;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.article-thumbnail img {
  width: 200px;
  height: 150px;
  object-fit: cover;
}

.article-details {
  padding: 10px;
}

h2 {
  font-size: 20px;
  margin: 0;
}

.author {
  font-style: italic;
}

.date {
  font-size: 14px;
  color: #555;
}

.category {
  font-weight: bold;
  margin-top: 5px;
}

.description {
  margin-top: 10px;
}

.read-more-link {
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
  color: #4169e1;
  font-weight: bold;
  transition: color 0.2s;
}

.read-more-link:hover {
  color: #0033a0;
}
</style>
