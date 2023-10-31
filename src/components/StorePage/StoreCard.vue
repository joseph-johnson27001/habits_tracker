<template>
  <div class="store">
    <div class="items-container">
      <div
        v-for="item in storeItems"
        :key="item.id"
        :class="['store-item', { locked: item.locked }]"
        @click="handleItemClick(item)"
      >
        <div class="item-image">{{ item.icon }}</div>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <p v-if="!item.locked" class="unlocked-text">Unlocked</p>
        <p v-else class="locked-text">Locked</p>
      </div>
    </div>
    <!-- Modal for displaying item details -->
    <div class="modal" v-if="showingModal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close-icon" @click="closeModal">&times;</span>
        <h2>{{ selectedItem.name }}</h2>
        <p>{{ selectedItem.description }}</p>
        <button
          v-if="!selectedItem.locked"
          class="buy-button"
          :disabled="selectedItem.locked"
          @click="handleBuyClick(selectedItem)"
        >
          Buy Now
        </button>
        <div v-else>
          <p>This item is currently locked.</p>
          <p>{{ selectedItem.unlockCondition }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StorePage",
  data() {
    return {
      showingModal: false,
      selectedItem: null,
      storeItems: [
        {
          id: 1,
          name: "Habit Hero Hoodie",
          description:
            "Unleash the hero within you on your habit-building journey with our exclusive Habit Hero Hoodie!",
          icon: "👕",
          locked: false,
          unlockCondition: "This item is always available for new users!",
        },
        {
          id: 2,
          name: "Achievement T-Shirt",
          description:
            "Celebrate your achievements with this comfortable T-shirt!",
          icon: "👚",
          locked: true,
          unlockCondition: "Complete a specific number of challenges to unlock",
        },
        {
          id: 3,
          name: "Goal-Getter Mug",
          description:
            "Fuel your day with motivation using our Goal-Getter mug!",
          icon: "☕",
          locked: true,
          unlockCondition: "Achieve a certain number of goals to unlock",
        },
        {
          id: 4,
          name: "Success Notebook",
          description:
            "Plan your way to success with our handy Success notebook!",
          icon: "📓",
          locked: true,
          unlockCondition:
            "Complete a designated goal-setting challenge to unlock",
        },
        {
          id: 5,
          name: "Motivational Poster",
          description:
            "Inspire yourself daily with our motivational wall poster!",
          icon: "🖼️",
          locked: true,
          unlockCondition: "Reach a specific milestone to unlock",
        },
        {
          id: 6,
          name: "Healthy Recipe Book",
          description:
            "Explore delicious and healthy recipes with our curated recipe book!",
          icon: "📖",
          locked: true,
          unlockCondition: "Complete a nutrition-based challenge to unlock",
        },
        {
          id: 7,
          name: "Wellness Planner",
          description:
            "Stay on track with your wellness goals using our comprehensive planner!",
          icon: "📅",
          locked: true,
          unlockCondition: "Maintain a consistent wellness routine to unlock",
        },
        {
          id: 8,
          name: "Fitness Tracker",
          description:
            "Monitor your fitness progress with our advanced fitness tracking device!",
          icon: "⌚",
          locked: true,
          unlockCondition:
            "Complete a fitness challenge and meet specific targets to unlock",
        },
        {
          id: 9,
          name: "Mindfulness App Subscription",
          description:
            "Enhance your mindfulness journey with our premium app subscription!",
          icon: "📱",
          locked: true,
          unlockCondition: "Complete a meditation challenge to unlock",
        },
        {
          id: 10,
          name: "Stress Relief Candle",
          description:
            "Relax and unwind with our soothing stress relief candle!",
          icon: "🕯️",
          locked: true,
          unlockCondition: "Complete stress management challenges to unlock",
        },
        {
          id: 11,
          name: "Virtual Yoga Classes",
          description:
            "Join our exclusive virtual yoga classes for a rejuvenating experience!",
          icon: "🧘‍♂️",
          locked: true,
          unlockCondition:
            "Complete yoga challenges and earn specific titles to unlock",
        },
        {
          id: 12,
          name: "Habit-Tracker Journal",
          description:
            "Build and track your habits effectively with our Habit-Tracker Journal!",
          icon: "📔",
          locked: true,
          unlockCondition: "Establish a consistent habit streak to unlock",
        },
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      this.selectedItem = item;
      this.showingModal = true;
      console.log("HELLO");
      console.log(this.showingModal);
    },
    handleBuyClick(item) {
      if (!item.locked) {
        // Implement logic for the purchase functionality here
        alert(`You have purchased the ${item.name}!`);
      }
    },
    closeModal() {
      this.showingModal = false;
      this.selectedItem = null;
    },
  },
};
</script>

<style scoped>
.items-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}

.store-item {
  padding: 20px;
  margin: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.store-item:hover {
  background-color: #f2f2f2;
  transform: translateY(-2px);
  border: 1px solid #6da9e4;
}

.locked-text {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

.unlocked-text {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

.item-image {
  font-size: 48px;
  margin-bottom: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: relative;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
