<template>
  <div class="card">
    <h1>{{ habitName }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    habitName: {
      type: String,
      required: true,
    },
  },
  // ...
};
</script>
