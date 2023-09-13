<template>
  <div class="sidebar">
    <!-- Sidebar content goes here -->
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/profile">Profile</router-link>
    <!-- Add more sidebar items as needed -->
  </div>
</template>

<script>
export default {
  name: "SidebarSection",
};
</script>

<style scoped>
.sidebar {
  background-color: white;
  color: #4169e1;
  padding: 20px;
}

.sidebar a {
  color: "#4169e1";
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
}

.sidebar a:hover {
  text-decoration: underline;
}
</style>
