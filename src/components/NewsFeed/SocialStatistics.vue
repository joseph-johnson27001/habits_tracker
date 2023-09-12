<template>
  <div class="social-stats">
    <!-- Leaderboard -->
    <div class="leaderboard">
      <h3>Monthly Leaderboard</h3>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
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

    <!-- Upcoming Events -->
    <div class="upcoming-events">
      <h3>Upcoming Events</h3>
      <ul>
        <li v-for="(event, index) in upcomingEvents" :key="index">
          {{ event.name }} - {{ event.date }}
        </li>
      </ul>
    </div>

    <!-- Challenges -->
    <div class="challenges">
      <h3>Challenges</h3>
      <div
        class="challenge-item"
        v-for="(challenge, index) in challenges"
        :key="index"
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
  </div>
</template>

<script>
export default {
  name: "SocialStats",
  data() {
    return {
      leaderboard: [
        { name: "Achiever123", score: 100 },
        { name: "FitnessFreak", score: 85 },
        { name: "ZenMaster", score: 72 },
        { name: "CulinaryArtist", score: 95 },
        { name: "BookWorm", score: 78 },
        { name: "GamerPro", score: 88 },
        { name: "NatureExplorer", score: 70 },
        { name: "MindfulMeditator", score: 91 },
        { name: "AdventureSeeker", score: 75 },
        { name: "CreativeArtist", score: 89 },
      ],
      upcomingEvents: [
        { name: "Fitness Challenge: 'Run to the Sky'", date: "2023-10-15" },
        { name: "Meditation Retreat: 'Zen Bliss Weekend'", date: "2023-11-20" },
        { name: "Cooking Workshop: 'Gourmet Delights'", date: "2023-12-05" },
        { name: "Book Club Meeting: 'Literary Escape'", date: "2024-01-10" },
        { name: "Gaming Tournament: 'Epic Showdown'", date: "2024-02-15" },
        { name: "Nature Hike: 'Wilderness Adventure'", date: "2024-03-20" },
        { name: "Yoga Retreat: 'Serenity in Nature'", date: "2024-04-25" },
        {
          name: "Mindfulness Workshop: 'Inner Peace Journey'",
          date: "2024-05-30",
        },
        { name: "Art Exhibition: 'Creative Expressions'", date: "2024-06-15" },
        {
          name: "Adventure Expedition: 'Quest for the Unknown'",
          date: "2024-07-20",
        },
      ],
      challenges: [
        {
          name: "Daily Workout",
          description: "Exercise daily",
          progress: 15,
          target: 30,
        },
        {
          name: "Weekly Reading",
          description: "Read a book every week",
          progress: 2,
          target: 4,
        },
        {
          name: "Monthly Meditation",
          description: "Meditate regularly",
          progress: 12,
          target: 30,
        },
        {
          name: "Weekly Cooking Challenge",
          description: "Try a new recipe every week",
          progress: 2,
          target: 4,
        },
        {
          name: "Gaming Marathon",
          description: "Play video games for 24 hours",
          progress: 0,
          target: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add component-specific styles here */
.social-stats {
  background-color: #f8f8f8;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Leaderboard Styles */
.leaderboard {
  margin-bottom: 20px;
  cursor: pointer;
}

.leaderboard h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.leaderboard table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
  background-color: #f2f2f2;
}

.leaderboard tr:hover {
  background-color: #dcdcdc;
}

/* Upcoming Events Styles */
.upcoming-events h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.upcoming-events ul {
  list-style: none;
  padding: 0;
}

.upcoming-events li {
  margin-bottom: 10px;
  font-size: 16px;
}

/* Challenges Styles */
.challenges h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.challenge-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
</style>
