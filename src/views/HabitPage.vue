<template>
  <div class="card">
    <h1>{{ habitId }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    habitId: {
      type: String,
      required: true,
    },
  },
};
</script>
