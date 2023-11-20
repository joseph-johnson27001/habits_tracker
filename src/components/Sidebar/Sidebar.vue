<template>
  <div class="sidebar">
    <div class="item-container">
      <router-link to="/" class="sidebar-item">
        <i class="fas fa-list fa-lg"></i>
      </router-link>
      <router-link to="/habits" class="sidebar-item">
        <i class="fas fa-chart-line fa-lg"></i>
      </router-link>
      <router-link to="/challenges" class="sidebar-item">
        <i class="fas fa-flag-checkered fa-lg"></i>
      </router-link>
      <router-link to="/leaderboard" class="sidebar-item">
        <i class="fas fa-trophy fa-lg"></i>
      </router-link>
      <router-link to="/events" class="sidebar-item">
        <i class="far fa-calendar-alt fa-lg" style="margin-left: 2px"></i>
      </router-link>
      <router-link to="/articles" class="sidebar-item">
        <i class="fas fa-newspaper fa-lg" style="margin-left: 1px"></i>
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
  border: 1px solid #ccc;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  height: 86vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  transition: transform 0.6s linear;
}

.sidebar-item .settings-icon:hover {
  transform: rotate(90deg);
}

.sidebar-item:hover {
  transform: scale(1.1);
  color: #3a59c0;
}

@media (min-width: 991px) {
  .fa-flag-checkered {
    margin-left: 2px !important;
  }
}

@media (max-width: 992px) {
  .sidebar {
    flex-direction: row;
    height: 20px;
    justify-content: space-around;
  }

  .sidebar-item {
    margin-bottom: 0;
    margin-right: 20px;
  }

  .sidebar-item.settings {
    margin-top: 0;
    margin-left: auto;
    margin-right: 0;
  }

  .item-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
}
</style>
