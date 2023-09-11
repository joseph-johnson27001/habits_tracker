<template>
  <div class="profile-header">
    <div class="user-info">
      <h2 class="user-name">Joe Johnson</h2>
      <p class="user-title">Web Developer</p>
    </div>
    <div class="profile-picture">
      <img src="@/assets/images/joe-taj.jpg" alt="Profile Picture" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileHeader",
};
</script>

<style scoped>
.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #dff1ff;
  border-radius: 0px 0px 5px 5px;
}

.user-info {
  font-size: 18px;
  margin-left: 20px;
}

.user-name,
.user-title {
  color: #0f212f;
  font-weight: 300;
}

.profile-picture img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
</style>
