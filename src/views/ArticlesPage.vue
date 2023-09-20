<template>
  <div class="articles-page">
    <!-- Search and Filters (you can add these later) -->
    <!-- <div class="search-and-filters">
      Search Bar
      Filters
    </div> -->

    <!-- Article Cards -->
    <div class="article-cards card">
      <!-- Sample Article Card -->
      <ArticleCard
        title="How to Set and Achieve Your Goals"
        author="John Doe"
        datePublished="September 15, 2023"
        category="Personal Development"
        imageSrc="/path/to/your-image.jpg"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur libero in purus consequat, id ultrices felis egestas."
      ></ArticleCard>

      <!-- You can repeat the above block for each article -->
    </div>

    <!-- <div class="pagination">
      Previous Page
      Page Numbers
      Next Page
    </div>-->
  </div>
</template>

<script>
import ArticleCard from "@/components/Articles/ArticleCard.vue";

export default {
  components: {
    ArticleCard,
  },
};
</script>

<style scoped>
/* Add your custom styles for the ArticlesPage.vue here */
</style>
