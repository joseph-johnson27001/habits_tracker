<template>
  <div class="card">
    <h1>{{ this.$store.state.activeChallenge }}</h1>
  </div>
</template>

<script>
export default {
  name: "ActiveChallenges",
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store.state.activeChallenge);
  },
};
</script>
