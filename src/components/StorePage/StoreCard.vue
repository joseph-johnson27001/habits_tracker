<template>
  <div class="store">
    <div class="items-container">
      <div
        v-for="item in storeItems"
        :key="item.id"
        class="store-item"
        :class="{ locked: item.locked }"
        @click="handleItemClick(item)"
      >
        <div class="item-image">{{ item.icon }}</div>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <p v-if="item.locked" class="locked-text">Locked</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StorePage",
  data() {
    return {
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
        // Add more store items with corresponding data and unlock conditions
      ],
    };
  },
  methods: {
    handleItemClick(item) {
      if (item.locked) {
        // Provide feedback to the user about the unlock condition
        alert(`This item is locked. ${item.unlockCondition}`);
      } else {
        // Implement logic for purchasing the item or displaying more details
        // This will be linked to your actual store functionality in the future
        // For now, you can provide a message or simulate a purchase process
        alert(`You have purchased: ${item.name}`);
      }
    },
  },
};
</script>

<style scoped>
/* Your existing styles */

.store {
  /* Your store container styles */
}

.items-container {
  /* Styles for the container holding store items */
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
}

.store-item:hover {
  /* Hover styles for each store item card */
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.locked-text {
  /* Styles for the locked text on locked items */
  color: red;
  font-weight: bold;
  margin-top: 10px;
}

.item-image {
  /* Styles for the item image or icon */
  font-size: 48px;
  margin-bottom: 10px;
}
</style>
