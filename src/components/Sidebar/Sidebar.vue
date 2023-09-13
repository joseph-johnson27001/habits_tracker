<template>
  <div class="sidebar">
    <!-- Sidebar content goes here -->
    <router-link to="/" class="sidebar-item">
      <i class="fas fa-list fa-lg"></i>
    </router-link>
    <router-link to="/habits" class="sidebar-item">
      <i class="fas fa-chart-line fa-lg"></i>
    </router-link>
    <router-link to="/articles" class="sidebar-item">
      <i class="fas fa-newspaper fa-lg"></i>
    </router-link>
    <!-- Move the settings icon to the bottom -->
    <router-link to="/settings" class="sidebar-item settings">
      <i class="fas fa-cog fa-lg"></i>
    </router-link>
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
  padding: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-item {
  color: #4169e1;
  text-decoration: none;
  display: block;
  margin-bottom: 35px;
  padding: 5px;
}

.sidebar-item i {
  margin: auto;
}

.sidebar-item.settings {
  margin-top: auto;
}
</style>
