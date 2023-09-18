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
  grid-template-columns: 2fr 1fr;
}

.social-stats {
  padding-left: 5px;
}
</style>
