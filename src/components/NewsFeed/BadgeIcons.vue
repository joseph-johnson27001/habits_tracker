<!-- BadgeIcons.vue -->
<template>
  <div>
    <svg
      v-if="svgData[index]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      :class="`feather ${svgData[index].iconClass}`"
    >
      <path :d="svgData[index].path"></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BadgeIcons",
  props: {
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      svgData: [
        {
          iconClass: "feather-heart",
          path: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.39l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21l8.84-8.83a5.5 5.5 0 0 0 0-7.78z",
        },
        {
          iconClass: "feather-star",
          path: "M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z",
        },
        {
          iconClass: "feather-gift",
          path: "M5 15s1-9 8-9a4 4 0 0 1 0 8 4 4 0 0 1-1.5-3s-2-3-6-3",
        },
        // Add more SVG data objects as needed
      ],
    };
  },
};
</script>
