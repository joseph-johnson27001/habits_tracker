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
  height: 100vh;
}

.news-feed {
  padding: 10px;
  border-right: 1px solid #ccc;
  height: 100%;
  overflow-y: auto;
}

.social-stats {
  padding: 10px;
  height: 100%;
  overflow-y: auto;
}
</style>
