<template>
  <div class="sidebar">
    <div>
      <router-link to="/" class="sidebar-item">
        <i class="fas fa-list fa-lg"></i>
      </router-link>
      <router-link to="/habits" class="sidebar-item">
        <i class="fas fa-chart-line fa-lg"></i>
      </router-link>
      <router-link to="/articles" class="sidebar-item">
        <i class="fas fa-newspaper fa-lg"></i>
      </router-link>
      <router-link to="/store" class="sidebar-item">
        <i class="fas fa-shopping-cart fa-lg"></i>
      </router-link>
    </div>
    <router-link to="/settings" class="sidebar-item settings">
      <i class="fas fa-cog fa-lg settings-icon"></i>
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
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar-item {
  color: #4169e1;
  text-decoration: none;
  display: block;
  margin-bottom: 35px;
}

.sidebar-item i {
  margin: auto;
}

.sidebar-item.settings {
  margin-top: auto;
  margin-bottom: 0px;
}

.sidebar-item {
  color: #4169e1;
  text-decoration: none;
  display: block;
  margin-bottom: 35px;
  transition: color 0.2, transform 0.3s linear;
}

.sidebar-item i {
  margin: auto;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.4s linear;
}

/* Add animation on hover */
.sidebar-item .settings-icon:hover {
  transform: rotate(90deg);
}

.sidebar-item:hover {
  transform: scale(1.1);
  color: green;
}
</style>
