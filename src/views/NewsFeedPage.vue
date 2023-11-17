<template>
  <div class="news" v-show="!this.$store.state.isLoading">
    <div class="switch-container">
      <label class="switch">
        <input type="checkbox" v-model="showSocialStats" />
        <span class="slider"></span>
      </label>
      <span>{{
        showSocialStats ? "Show Social Stats" : "Show News Feed"
      }}</span>
    </div>
    <div class="news-feed" v-show="!this.showSocialStats">
      <NewsFeed />
    </div>
    <div class="social-stats" v-shpw="this.socialStats">
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
      showSwitch: true,
      showSocialStats: false,
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
    // handleViewportChange() {
    //   this.showSocialStats = window.innerWidth > 992;
    // },
    toggleSocialStats() {
      this.showSocialStats.style.display = "block";
      this.NewsFeed.style.display = "none";
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

@media (min-width: 993px) {
  .news-feed {
    display: block;
  }
  .switch-container {
    display: none;
  }
}

@media (max-width: 992px) {
  .news {
    grid-template-columns: 1fr;
  }
  .switch-container {
    display: block;
  }
}
</style>
