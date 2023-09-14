<template>
  <div class="profile-page">
    <ProfileHeader />
    <div class="top-area">
      <div class="card">
        <HabitsSection />
      </div>
    </div>
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
          <CompletedSection />
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
  margin: 20px;
  gap: 10px;
}

.top-area {
  margin: 20px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.card:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}
</style>
