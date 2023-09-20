<template>
  <div class="articles-page">
    <!-- Article Cards -->
    <div class="article-cards">
      <ArticleCard
        class="card"
        v-for="(article, index) in articles"
        :key="index"
        :article="article"
        :title="article.title"
        :author="article.author"
        :datePublished="article.datePublished"
        :category="article.category"
        :imageSrc="article.imageSrc"
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
          imageSrc: "https://picsum.photos/150/150",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero in purus consequat, id ultrices felis egestas.",
        },
        {
          title: "The Art of Time Management",
          author: "Jane Smith",
          datePublished: "October 5, 2023",
          category: "Productivity",
          imageSrc: "https://picsum.photos/200/150",
          description:
            "In this article, discover the strategies and techniques for effective time management to achieve your goals and boost productivity.",
        },
        {
          title: "Mindfulness and Stress Reduction",
          author: "Alice Johnson",
          datePublished: "October 20, 2023",
          category: "Wellness",
          imageSrc: "https://picsum.photos/220/150",
          description:
            "Explore the benefits of mindfulness and learn how to reduce stress and improve your mental well-being through mindfulness practices.",
        },

        // Add more articles here
      ],
    };
  },
};
</script>
