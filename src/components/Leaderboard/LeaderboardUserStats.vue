<template>
  <div class="card">
    <div class="user-stats">
      <div class="user-stat" v-for="(user, index) in users" :key="index">
        <h2>Name: {{ user.name }}</h2>
        <p>Rank: {{ user.rank }}{{ getRankSuffix(user.rank) }}</p>
        <p>Score: {{ user.score }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          name: "John Doe",
          rank: 1,
          score: 95,
        },
        {
          name: "Alice Smith",
          rank: 2,
          score: 92,
        },
        {
          name: "Emily Johnson",
          rank: 3,
          score: 88,
        },
        {
          name: "Michael Green",
          rank: 4,
          score: 86,
        },
      ],
    };
  },
  methods: {
    getRankSuffix(rank) {
      const suffixes = ["st", "nd", "rd"];
      const lastDigit = rank % 10;
      const secondLastDigit = (rank % 100) / 10;

      if (secondLastDigit === 1) {
        return "th";
      }

      if (lastDigit <= 3) {
        return suffixes[lastDigit - 1];
      }

      return "th";
    },
  },
};
</script>

<style scoped>
.user-stats {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.user-stat {
  flex: none;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 18px;
  margin: 0;
}

p {
  font-size: 16px;
  margin: 5px 0;
}
</style>
