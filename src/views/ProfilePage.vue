<template>
  <div class="profile-page">
    <ProfileHeader />
    <div class="statistics-area">
      <div class="card">
        <StatisticsSection />
      </div>
    </div>
    <div class="profile-content">
      <div class="left-section">
        <div class="card">
          <AchievementsSection />
        </div>
        <!-- Content for the left 2/3 section goes here -->
      </div>
      <div class="right-section">
        <div class="card">
          <BadgesSection />
        </div>
        <!-- Content for the right 1/3 section goes here -->
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfilePage/ProfileHeader.vue";
import AchievementsSection from "@/components/ProfilePage/AchievementsSection.vue";
import BadgesSection from "@/components/ProfilePage/BadgesSection.vue";
import StatisticsSection from "@/components/ProfilePage/StatisticsSection.vue";

export default {
  name: "ProfilePage",
  components: {
    ProfileHeader,
    AchievementsSection,
    BadgesSection,
    StatisticsSection,
  },
};
</script>

<style scoped>
.profile-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 20px;
  gap: 10px;
}

.statistics-area {
  margin: 20px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
