<template>
  <div class="news">
    <div class="news-feed">
      <NewsFeed />
    </div>
    <div class="social-stats" v-show="showSocialStats">
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
  data() {
    return {
      showSocialStats: true,
    };
  },
  mounted() {
    this.handleViewportChange();
    window.addEventListener("resize", this.handleViewportChange);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleViewportChange);
  },
  methods: {
    handleViewportChange() {
      this.showSocialStats = window.innerWidth > 992;
    },
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

@media (max-width: 992px) {
  .news {
    grid-template-columns: 1fr;
  }

  .social-stats {
    display: none;
  }
}
</style>
