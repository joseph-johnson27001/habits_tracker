<template>
  <div class="article-page card">
    <div class="article-header">
      <h1>{{ article.title }}</h1>
      <p>By {{ article.author }} | Published on {{ article.datePublished }}</p>
    </div>
    <div class="article-content">
      <img :src="article.imageSrc" alt="Article Image" />
      <p>{{ article.description }}</p>
      <p v-for="(paragraph, index) in article.content" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "Sample Article Title",
        author: "John Doe",
        datePublished: "October 27, 2023",
        imageSrc: "https://picsum.photos/500/300",
        description: "Sample article description goes here.",
        content: [
          "Paragraph 1 of the article goes here.",
          "Paragraph 2 of the article goes here.",
          "Paragraph 3 of the article goes here.",
          // Add more paragraphs as needed
        ],
      },
    };
  },
};
</script>

<style scoped>
.article-page {
  margin: 0 auto;
}

.article-header {
  text-align: center;
  margin-bottom: 20px;
}

.article-content {
  line-height: 1.6;
}

.article-content img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
