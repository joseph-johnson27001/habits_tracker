<template>
  <div class="news">
    <div class="news-feed">
      <NewsFeed />
    </div>
    <div class="social-stats">
      <SocialStats />
    </div>
  </div>
</template>

<script>
import NewsFeed from "@/components/NewsFeed/NewsFeed.vue";
import SocialStats from "@/components/NewsFeed/SocialStatistics.vue";

export default {
  name: "NewsPage",
  components: {
    NewsFeed,
    SocialStats,
  },
};
</script>

<style scoped>
.news {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.news-feed {
  padding: 10px;
}

.social-stats {
  padding: 10px;
}
</style>
