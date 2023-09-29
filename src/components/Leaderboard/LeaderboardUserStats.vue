<template>
  <div class="card">
    <h1>MONTHLY LEADERBOARD</h1>
    <div class="user-stats">
      <div class="user-stat" v-for="(user, index) in users" :key="index">
        <img :src="user.imageURL" alt="User Avatar" />
        <h2>{{ user.name }}</h2>
        <p>{{ user.rank }}{{ getRankSuffix(user.rank) }}</p>
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
          imageURL: "https://picsum.photos/50/50?random=1",
        },
        {
          name: "Alice Smith",
          rank: 2,
          score: 92,
          imageURL: "https://picsum.photos/50/50?random=2",
        },
        {
          name: "Emily Johnson",
          rank: 3,
          score: 88,
          imageURL: "https://picsum.photos/50/50?random=3",
        },
        {
          name: "Michael Green",
          rank: 4,
          score: 86,
          imageURL: "https://picsum.photos/50/50?random=4",
        },
        {
          name: "Sarah Brown",
          rank: 5,
          score: 84,
          imageURL: "https://picsum.photos/50/50?random=5",
        },
        {
          name: "David Miller",
          rank: 6,
          score: 82,
          imageURL: "https://picsum.photos/50/50?random=6",
        },
        {
          name: "Linda Wilson",
          rank: 7,
          score: 80,
          imageURL: "https://picsum.photos/50/50?random=7",
        },
        {
          name: "Robert Harris",
          rank: 8,
          score: 78,
          imageURL: "https://picsum.photos/50/50?random=8",
        },
        {
          name: "Olivia Turner",
          rank: 9,
          score: 76,
          imageURL: "https://picsum.photos/50/50?random=9",
        },
        {
          name: "Daniel Clark",
          rank: 10,
          score: 74,
          imageURL: "https://picsum.photos/50/50?random=10",
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
