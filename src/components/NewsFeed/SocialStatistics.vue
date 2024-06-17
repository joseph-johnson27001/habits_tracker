<template>
  <div class="social-stats">
    <!-- Challenges Section-->
    <div class="challenges card">
      <div class="heading-area">
        <h1>ACTIVE CHALLENGES</h1>
        <router-link to="/challenges" class="nav-link">
          <i class="fas fa-angle-right view-more-link"></i>
        </router-link>
      </div>
      <div
        class="challenge-item"
        v-for="(challenge, index) in challenges"
        :key="index"
        @click="updateActiveChallenge(challenge)"
      >
        <div class="challenge-info">
          <h4>{{ challenge.name }}</h4>
          <p>{{ challenge.description }}</p>
        </div>
        <div class="challenge-progress">
          <p>{{ challenge.progress }} / {{ challenge.target }}</p>
        </div>
      </div>
    </div>

    <!-- Leaderboard Section -->
    <div class="leaderboard card">
      <div class="heading-area">
        <h1>LEADERBOARD</h1>
        <router-link to="/leaderboard" class="nav-link">
          <i class="fas fa-angle-right view-more-link"></i>
        </router-link>
      </div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in leaderboard" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Upcoming Events Section-->
    <div class="upcoming-events card">
      <div class="heading-area">
        <h1>UPCOMING EVENTS</h1>
        <router-link to="/events">
          <i class="fas fa-angle-right view-more-link"></i>
        </router-link>
      </div>
      <ul>
        <li v-for="(event, index) in upcomingEvents" :key="index">
          <router-link to="/event" class="event-info">
            <div>
              <h4>{{ event.name }}</h4>
              <p>Date: {{ event.date }}</p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Recent Articles -->
    <div class="recent-articles card">
      <div class="heading-area">
        <h1>RECENT ARTICLES</h1>
        <router-link to="/articles" class="nav-link">
          <i class="fas fa-angle-right view-more-link"></i>
        </router-link>
      </div>
      <div
        class="article-item"
        v-for="(article, index) in recentArticles"
        :key="index"
        @click="viewArticle()"
      >
        <h4>{{ article.title }}</h4>
        <p>{{ article.summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialStats",
  data() {
    return {
      leaderboard: [
        { name: "Achiever123", score: 100 },
        { name: "CulinaryArtist", score: 95 },
        { name: "MindfulMeditator", score: 91 },
        { name: "CreativeArtist", score: 89 },
        { name: "GamerPro", score: 88 },
        { name: "FitnessFreak", score: 85 },
        { name: "BookWorm", score: 78 },
        { name: "AdventureSeeker", score: 75 },
        { name: "ZenMaster", score: 72 },
        { name: "NatureExplorer", score: 70 },
      ],
      upcomingEvents: [
        { name: "Fitness Challenge: 'Run to the Sky'", date: "2023-10-15" },
        { name: "Meditation Retreat: 'Zen Bliss Weekend'", date: "2023-11-20" },
        { name: "Cooking Workshop: 'Gourmet Delights'", date: "2023-12-05" },
        { name: "Book Club Meeting: 'Literary Escape'", date: "2024-01-10" },
        { name: "Gaming Tournament: 'Epic Showdown'", date: "2024-02-15" },
        { name: "Nature Hike: 'Wilderness Adventure'", date: "2024-03-20" },
      ],
      recentArticles: [
        {
          title: "How to Achieve Your Goals",
          summary: "Tips and tricks for setting and achieving your goals.",
        },
        {
          title: "Healthy Habits for a Better Life",
          summary: "Discover habits that can improve your overall well-being.",
        },
        {
          title: "Exploring Nature's Wonders",
          summary: "Adventures in the great outdoors and the beauty of nature.",
        },
        {
          title: "The Art of Mindfulness",
          summary:
            "Learn how to practice mindfulness and reduce stress in your daily life.",
        },
      ],
      challenges: [
        {
          name: "Daily Workout",
          description: "Exercise daily",
          progress: 15,
          target: 30,
          id: 1,
        },
        {
          name: "Weekly Reading",
          description: "Read a book every week",
          progress: 2,
          target: 4,
          id: 2,
        },
        {
          name: "Monthly Meditation",
          description: "Meditate regularly",
          progress: 12,
          target: 30,
          id: 3,
        },
        {
          name: "Weekly Cooking Challenge",
          description: "Try a new recipe every week",
          progress: 2,
          target: 4,
          id: 4,
        },
        {
          name: "Gaming Marathon",
          description: "Play video games for 24 hours",
          progress: 0,
          target: 1,
          id: 5,
        },
      ],
    };
  },
  methods: {
    viewArticle() {
      this.$router.push("/article");
    },
    updateActiveChallenge(challenge) {
      this.$store.state.activeChallenge = challenge.name;
      this.$router.push("active-challenge/" + challenge.id);
    },
  },
};
</script>

<style scoped>
.leaderboard table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.leaderboard th,
.leaderboard td {
  padding: 12px 16px;
  text-align: left;
}

.leaderboard th {
  background-color: #4169e1;
  color: #fff;
}

.leaderboard tr:nth-child(even) {
  background-color: white;
}
.leaderboard tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.leaderboard tr {
  transition: background-color 0.3s;
}
.leaderboard tr:hover {
  background-color: #f2f2f2;
}

.upcoming-events ul {
  list-style: none;
  padding: 0;
  margin-top: 0px;
}

.upcoming-events li {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #ffffff;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
}

.upcoming-events li:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}

.event-info {
  text-decoration: none;
}

.event-info h4 {
  font-size: 16px;
  margin: 0;
  color: black !important;
}

.event-info p {
  font-size: 14px;
  color: #888 !important;
  margin: 5px 0;
}

.challenge-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;
}

.challenge-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}

.challenge-item h4 {
  font-size: 16px;
  margin: 0;
}

.challenge-item p {
  font-size: 14px;
  margin: 5px 0;
}

.challenge-progress {
  font-size: 16px;
  font-weight: bold;
  color: #4169e1;
}

.article-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.article-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
}

.article-item h4 {
  font-size: 16px;
  margin: 0;
}

.article-item p {
  font-size: 14px;
  margin: 5px 0;
}
</style>
