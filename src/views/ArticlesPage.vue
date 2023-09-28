<template>
  <div class="articles-page">
    <div class="card">
      <ul class="article-type-navigation">
        <li v-for="(category, index) in categories" :key="index">
          <a
            @click="selectCategory(category)"
            :class="{ active: selectedCategory === category }"
            >{{ category }}</a
          >
        </li>
      </ul>
    </div>

    <!-- Article Cards -->
    <div class="article-cards">
      <ArticleCard
        class="card"
        v-for="(article, index) in filteredArticles"
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
      ],
      selectedCategory: "All",
      articles: [
        {
          title: "How to Set and Achieve Your Goals",
          author: "John Doe",
          datePublished: "September 15, 2023",
          category: "Personal Development",
          imageSrc: "https://picsum.photos/150/150",
          description:
            "Unlock the secrets to setting and accomplishing your goals with precision. Dive into proven techniques and actionable strategies that will propel you towards success and fulfillment in every aspect of your life.",
          type: "Productivity",
        },
        {
          title: "The Art of Time Management",
          author: "Jane Smith",
          datePublished: "October 5, 2023",
          category: "Productivity",
          imageSrc: "https://picsum.photos/151/150",
          description:
            "In this article, discover the strategies and techniques for effective time management to achieve your goals and boost productivity.",
          type: "Productivity",
        },
        {
          title: "Mindfulness and Stress Reduction",
          author: "Alice Johnson",
          datePublished: "October 20, 2023",
          category: "Wellness",
          imageSrc: "https://picsum.photos/152/150",
          description:
            "Explore the benefits of mindfulness and learn how to reduce stress and improve your mental well-being through mindfulness practices.",
          type: "Wellness",
        },
        {
          title: "Mastering Technology Trends",
          author: "David Clark",
          datePublished: "November 10, 2023",
          category: "Technology",
          imageSrc: "https://picsum.photos/153/150",
          description:
            "Stay updated with the latest technology trends and innovations. Learn how to leverage technology for personal and professional growth.",
          type: "Technology",
        },
        {
          title: "Financial Planning 101",
          author: "Sarah Johnson",
          datePublished: "November 25, 2023",
          category: "Finance",
          imageSrc: "https://picsum.photos/154/150",
          description:
            "Discover the essentials of financial planning, from budgeting to investing. Take control of your finances and secure your future.",
          type: "Finance",
        },
        {
          title: "Achieving Fitness Goals",
          author: "Mike Anderson",
          datePublished: "December 5, 2023",
          category: "Fitness",
          imageSrc: "https://picsum.photos/155/150",
          description:
            "Get fit and stay healthy with expert advice on setting and achieving fitness goals. Transform your lifestyle with exercise and nutrition tips.",
          type: "Fitness",
        },
        {
          title: "The Art of Culinary Delights",
          author: "Emily Turner",
          datePublished: "December 20, 2023",
          category: "Cooking",
          imageSrc: "https://picsum.photos/156/150",
          description:
            "Explore the world of culinary delights and learn to cook like a pro. From gourmet recipes to kitchen techniques, elevate your cooking skills.",
          type: "Cooking",
        },

        // Add more articles here
      ],
    };
  },
  computed: {
    filteredArticles() {
      if (this.selectedCategory === "All") {
        return this.articles;
      } else {
        return this.articles.filter(
          (article) => article.type === this.selectedCategory
        );
      }
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
.article-type-navigation {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  flex-wrap: wrap;
}

.article-type-navigation li {
  margin: 0 10px;
  cursor: pointer;
  font-weight: bold;
}

.article-type-navigation a {
  color: #4169e1;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
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
</style>
