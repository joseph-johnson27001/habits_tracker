<template>
  <div class="profile-page">
    <ProfileHeader />
    <div class="profile-content">
      <div class="left-section">
        <div class="card">
          <AchievementsSection />
        </div>
        <div class="card">
          <RecentNewsSection />
        </div>
      </div>
      <div class="right-section">
        <div class="card">
          <BadgesSection />
        </div>
        <div class="card">
          <StatisticsSection />
        </div>
        <div class="card">
          <HabitsSection />
        </div>
        <div class="card">
          <CompletedSection />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfilePage/ProfileHeader.vue";
import AchievementsSection from "@/components/ProfilePage/AchievementsSection.vue";
import BadgesSection from "@/components/ProfilePage/BadgesSection.vue";
import CompletedSection from "@/components/ProfilePage/CompletedAims.vue";
import StatisticsSection from "@/components/ProfilePage/StatisticsSection.vue";
import HabitsSection from "@/components/ProfilePage/HabitStreaks.vue";
import RecentNewsSection from "@/components/ProfilePage/RecentNews.vue";

export default {
  name: "ProfilePage",
  components: {
    ProfileHeader,
    CompletedSection,
    AchievementsSection,
    BadgesSection,
    StatisticsSection,
    HabitsSection,
    RecentNewsSection,
  },
};
</script>

<style scoped>
.profile-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
}

@media (max-width: 992px) {
  .profile-content {
    grid-template-columns: 1fr;
  }
}
</style>
