<template>
  <div class="leaderboard-page">
    <div>
      <LeaderboardGraph />
    </div>
    <div>
      <LeaderboardUserStats />
    </div>
  </div>
</template>

<script>
import LeaderboardGraph from "@/components/Leaderboard/LeaderboardGraph.vue";
import LeaderboardUserStats from "@/components/Leaderboard/LeaderboardUserStats.vue";

export default {
  components: {
    LeaderboardGraph,
    LeaderboardUserStats,
  },
};
</script>

<style>
.leaderboard-page {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
</style>
