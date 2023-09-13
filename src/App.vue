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
}

#app {
  font-family: "Roboto", sans-serif;
}

.background {
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  min-height: 100vh;
}

.sidebar-section {
  margin-top: 5vh;
  margin-right: 100px;
}

.content-container {
  max-width: 1200px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #dff1ff;
  border-right: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-radius: 8px;
  margin-left: -50px;
  margin-right: 100px;
}
</style>
