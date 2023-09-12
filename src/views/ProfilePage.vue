<template>
  <div class="profile-page">
    <ProfileHeader />
    <!-- <AchievementsSection />
    <BadgesSection />
    <StatisticsSection />
    <HabitStreaksSection />
    <CompletedHabitsSection />
    <TrackerSection /> -->
  </div>
</template>

<script>
import ProfileHeader from "@/components/ProfilePage/ProfileHeader.vue";
// import AchievementsSection from "./AchievementsSection.vue";
// import BadgesSection from "./BadgesSection.vue";
// import StatisticsSection from "./StatisticsSection.vue";
// import HabitStreaksSection from "./HabitStreaksSection.vue";
// import CompletedHabitsSection from "./CompletedHabitsSection.vue";
// import TrackerSection from "./TrackerSection.vue";

export default {
  name: "ProfilePage",
  components: {
    ProfileHeader,
    // AchievementsSection,
    // BadgesSection,
    // StatisticsSection,
    // HabitStreaksSection,
    // CompletedHabitsSection,
    // TrackerSection,
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
</style>
