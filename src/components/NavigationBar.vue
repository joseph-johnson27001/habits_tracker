<template>
  <nav class="navigation-bar">
    <div class="navigation-container">
      <router-link to="/" class="nav-link"> Profile </router-link>
      <router-link to="/" class="nav-link"> Feed </router-link>
      <router-link to="/" class="nav-link"> Habits </router-link>
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
}

.nav-link {
  color: #4169e1;
  text-decoration: none;
  margin: 0 25px;
  transition: color 0.3s;
  cursor: pointer;
}
</style>
