<template>
  <div class="profile-header">
    <div class="user-info">
      <h2>Joe Johnson</h2>
      <p>Web Developer</p>
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
  background-color: #f0f0f0;
}

.user-info {
  font-size: 18px;
  margin-left: 20px;
}

.profile-picture img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
