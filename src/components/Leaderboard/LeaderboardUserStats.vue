<template>
  <div class="card">
    <div class="user-stats">
      <div class="user-stat">
        <h2>Username: JohnDoe</h2>
        <p>Rank: 1st</p>
        <p>Score: 95</p>
        <!-- Add more user stats as needed -->
      </div>
      <!-- Add more user cards for different users -->
    </div>
  </div>
</template>

<script>
export default {
  // Simulated data (replace with actual data)
  data() {
    return {
      users: [
        {
          username: "JohnDoe",
          rank: 1,
          score: 95,
        },
        {
          username: "AliceSmith",
          rank: 2,
          score: 92,
        },
        // Add more user data as needed
      ],
    };
  },
};
</script>
