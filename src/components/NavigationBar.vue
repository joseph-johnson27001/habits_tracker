<template>
  <nav class="navigation-bar">
    <div class="navigation-container">
      <router-link to="/" class="nav-link"> Profile </router-link>
      <router-link to="/" class="nav-link"> Feed </router-link>
      <router-link to="/" class="nav-link"> Habits </router-link>
    </div>
    <!-- Add the Font Awesome icon here -->
    <div class="settings-icon">
      <i class="fas fa-cog"></i>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    isRouteActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.navigation-bar {
  display: flex;
  background-color: white;
  border-bottom: 1px solid #dff1ff;
  padding: 15px 0;
  justify-content: center;
}

.navigation-container {
  width: 1200px;
  display: flex;
  align-items: center;
}

.nav-link {
  color: #4169e1;
  text-decoration: none;
  margin: 0 35px;
  font-size: 18px;
  transition: color 0.3s;
  cursor: pointer;
}

.nav-link:hover {
  color: #0f212f;
}

.settings-icon {
  display: flex;
  align-items: center;
  margin-right: 30px;
}

.settings-icon i {
  font-size: 18px;
  color: #4169e1;
  cursor: pointer;
  transition: color 0.3s;
}

/* Add animation on hover */
.settings-icon i:hover {
  animation: spin 0.4s linear; /* Spin animation */
}

/* Define the spin animation */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}
</style>
