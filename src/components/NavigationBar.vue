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
  background-color: black;
  padding: 10px 0;
  justify-content: center;
}

.navigation-container {
  width: 1250px;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  transition: color 0.3s;
  cursor: pointer;
}
</style>
