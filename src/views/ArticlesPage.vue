<template>
  <div class="articles-page">
    <!-- Article Cards -->
    <div class="article-cards card">
      <ArticleCard
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
        :title="article.title"
        :author="article.author"
        :datePublished="article.datePublished"
        :category="article.category"
        :imageSrc="article.imgSrc"
        :description="article.description"
      />
    </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/Articles/ArticleCard.vue";

export default {
  components: {
    ArticleCard,
  },
  data() {
    return {
      articles: [
        {
          title: "How to Set and Achieve Your Goals",
          author: "John Doe",
          datePublished: "September 15, 2023",
          category: "Personal Development",
          imageSrc: "/path/to/your-image.jpg",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero in purus consequat, id ultrices felis egestas.",
        },
        // Add more articles here
      ],
    };
  },
};
</script>
