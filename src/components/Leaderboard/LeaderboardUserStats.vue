<template>
  <div class="card">
    <h1>MONTHLY LEADERBOARD</h1>
    <div class="user-stats">
      <div>
        <div
          class="leaderboard-card"
          v-for="(user, index) in users"
          :key="index"
        >
          <img :src="user.imageURL" alt="User Avatar" class="user-image" />
          <div class="user-container">
            <div class="user-heading">
              <router-link to="/profile" style="text-decoration: none">
                <span class="user-name" @click="viewProfile(user)"
                  >{{ user.name }}
                </span>
              </router-link>
              <span class="user-title"
                >{{ user.rank }}{{ getRankSuffix(user.rank) }}</span
              >
            </div>
            <p>Score: {{ user.score }}</p>
          </div>
        </div>
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
          imageURL: "",
        },
        {
          name: "Alice Smith",
          rank: 2,
          score: 92,
          imageURL: "",
        },
        {
          name: "Emily Johnson",
          rank: 3,
          score: 88,
          imageURL: "",
        },
        {
          name: "Michael Green",
          rank: 4,
          score: 86,
          imageURL: "",
        },
        {
          name: "Sarah Brown",
          rank: 5,
          score: 84,
          imageURL: "",
        },
        {
          name: "David Miller",
          rank: 6,
          score: 82,
          imageURL: "",
        },
        {
          name: "Linda Wilson",
          rank: 7,
          score: 80,
          imageURL: "",
        },
        {
          name: "Robert Harris",
          rank: 8,
          score: 78,
          imageURL: "",
        },
        {
          name: "Olivia Turner",
          rank: 9,
          score: 76,
          imageURL: "",
        },
        {
          name: "Daniel Clark",
          rank: 10,
          score: 74,
          imageURL: "",
        },
      ],
    };
  },
  mounted() {
    this.loadImages();
  },
  methods: {
    viewProfile(item) {
      this.$store.state.selectedUserName = item.name;
      this.$store.state.selectedUserTitle = "Productivity Pro";
      this.$store.state.selectedUser = true;
    },
    generateImageUrl(width, height) {
      return `https://picsum.photos/${width}/${height}`;
    },
    async loadImages() {
      this.$store.state.isLoading = true;
      const promises = this.users.map(async (user) => {
        const width = 50 + Math.floor(Math.random() * 20);
        const height = 50 + Math.floor(Math.random() * 20);
        const imageUrl = this.generateImageUrl(width, height);

        const imagePromise = new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => resolve(imageUrl);
          img.onerror = () => reject(new Error("Image loading error"));
          img.src = imageUrl;
        });

        try {
          user.imageURL = await imagePromise;
        } catch (error) {
          console.error(error);
        }
      });

      await Promise.all(promises);
      this.$store.state.isLoading = false;
    },
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
  gap: 10px;
}

p {
  font-size: 16px;
  margin: 5px 0;
}

.leaderboard-card {
  padding: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.user-image {
  width: 50px;
  height: 50px;
  margin-right: 15px;
  border-radius: 4px;
  border: 1px solid #6da9e4;
}

.user-container {
  width: 100%;
  border-bottom: 1px solid #ccc;
}

.user-name {
  color: #4169e1;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
  transition: color 0.1s;
}

.user-heading {
  display: flex;
  justify-content: space-between;
}

.user-name:hover {
  color: #3a59c0;
}
</style>
