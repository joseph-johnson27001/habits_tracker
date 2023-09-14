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

h1 {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 400;
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
}
</style>
