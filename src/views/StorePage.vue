<template>
  <div v-if="!this.$store.state.isLoading">
    <StoreCard />
  </div>
</template>

<script>
import StoreCard from "@/components/StorePage/StoreCard.vue";

export default {
  components: {
    StoreCard,
  },
};
</script>
