<template>
  <div id="app">
    <NavigationBar />
    <div class="background">
      <div class="sidebar-section">
        <SidebarSection />
      </div>
      <div class="content-container">
        <router-view />
        <!-- This is where matched components will be rendered -->
      </div>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/Navigation/NavigationBar.vue";
import SidebarSection from "./components/Sidebar/Sidebar.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    SidebarSection,
  },
};
</script>

<style>
* {
  font-family: "Assistant", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

#app {
  font-family: "Roboto", sans-serif;
}

h1 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 400;
  color: #4169e1;
}

.background {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 15px;
}

.sidebar-section {
  margin-right: 50px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.content-container {
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #dff1ff;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-left: -40px;
  margin-right: 50px;
  margin-bottom: 10px;
  padding: 20px;
  max-height: calc(100vh - 110px);
  overflow-y: auto;
}

/* Hide scrollbar for Chrome, Safari, and Opera */
.content-container::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge, and Firefox */
.content-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

@media (max-width: 992px) {
  .background {
    flex-direction: column;
    align-items: center;
    padding-top: 5px;
    justify-content: start;
  }

  .sidebar-section {
    margin-bottom: 5px;
    width: 95%;
    margin-right: 0px;
  }

  .content-container {
    margin-left: 0px !important;
    margin-right: 0px !important;
    max-width: 1200px;
    width: 90%;
  }
}

.heading-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.clickable-icon,
.view-more-link {
  text-decoration: none;
  color: #3a59c0;
  transition: color 0.2, transform 0.3s linear;
  cursor: pointer;
}

.clickable-icon:hover,
.view-more-link:hover {
  transform: scale(1.1);
  color: #3a59c0;
}
</style>
