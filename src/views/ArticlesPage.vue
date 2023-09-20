<template>
  <div class="articles-page">
    <div class="card">
      <!-- Navigation for Article Types -->
      <ul class="article-type-navigation">
        <li v-for="(category, index) in categories" :key="index">
          <a :href="`#${category.toLowerCase()}`">{{ category }}</a>
        </li>
      </ul>
    </div>

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
      categories: [
        "All",
        "Personal Development",
        "Productivity",
        "Wellness",
        "Technology",
        "Finance",
        "Fitness",
        "Cooking",
        "Travel",
        "Education",
        "Entertainment",
      ],
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
          imageSrc: "https://picsum.photos/151/150",
          description:
            "In this article, discover the strategies and techniques for effective time management to achieve your goals and boost productivity.",
        },
        {
          title: "Mindfulness and Stress Reduction",
          author: "Alice Johnson",
          datePublished: "October 20, 2023",
          category: "Wellness",
          imageSrc: "https://picsum.photos/152/150",
          description:
            "Explore the benefits of mindfulness and learn how to reduce stress and improve your mental well-being through mindfulness practices.",
        },

        // Add more articles here
      ],
    };
  },
};
</script>

<style scoped>
.article-type-navigation {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  flex-wrap: wrap;
}

.article-type-navigation li {
  margin: 0 10px;
  text-decoration: ;
}

.article-type-navigation a {
  text-decoration: none;
  color: #4169e1;
  font-weight: bold;
  transition: color 0.2s;
}

.article-type-navigation a:hover {
  color: #0033a0;
}

/* Styles for Article Cards */

.article-thumbnail img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.article-details {
  padding: 10px;
  flex-grow: 1; /* To expand the details section */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  font-size: 20px;
  margin: 0;
  color: #333; /* Title color */
}

.author {
  font-style: italic;
  color: #555; /* Author color */
}

.date {
  font-size: 14px;
  color: #777; /* Date color */
}

.category {
  font-weight: bold;
  margin-top: 5px;
  color: #4169e1; /* Category color */
}

.description {
  margin-top: 10px;
  color: #444; /* Description color */
  flex-grow: 1; /* Allow description to grow */
}

.read-more-container {
  display: flex;
  justify-content: flex-end;
}

.read-more-button {
  background-color: #4169e1; /* Button background color */
  color: white; /* Button text color */
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.read-more-button:hover {
  background-color: #0033a0; /* Hover background color */
}
</style>
