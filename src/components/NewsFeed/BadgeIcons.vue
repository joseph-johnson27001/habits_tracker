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
        {
          iconClass: "feather-smile",
          path: "M5 14h2v2H5zm4 0h2v2H9zm4 0h2v2h-2zm4 0h2v2h-2zM6 8v4h12V8zm-6 6h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z",
        },
        {
          iconClass: "feather-sun",
          path: "M12 22s-1.86-3.06-4.05-7.48a9.96 9.96 0 0 1-1.88-5.52c.03-.66.09-1.32.17-1.99.19-1.46.43-2.94.74-4.42C6.26 2.95 6.63 2 7 2c.37 0 .74.95 1.01 2.67.31 1.48.56 2.96.74 4.42.08.67.15 1.34.17 2 .01.47.02.95.01 1.43a9.96 9.96 0 0 1-1.88 5.52C5.86 18.94 4 22 4 22h2s.73-3.18 2.07-7.92a9.86 9.86 0 0 1-1.07-4.18C7 8.36 8.36 7 10 7s3 1.36 3 3c0 .78-.29 1.5-.77 2.07.36.54.65 1.13.86 1.75.37 1.25.59 2.56.66 3.91z",
        },
        {
          iconClass: "feather-moon",
          path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
        },
        {
          iconClass: "feather-cloud",
          path: "M18 13c-.1 0-.19-.01-.29-.02C17.35 11.54 15.62 10 13.5 10c-1.89 0-3.56 1.08-4.5 2.75C7.06 12.9 5.59 12 4 12c-2.21 0-4 1.79-4 4s1.79 4 4 4h14c2.21 0 4-1.79 4-4s-1.79-4-4-4z",
        },
        {
          iconClass: "feather-cloud-rain",
          path: "M18 13c-.1 0-.19-.01-.29-.02C17.35 11.54 15.62 10 13.5 10c-1.89 0-3.56 1.08-4.5 2.75C7.06 12.9 5.59 12 4 12c-2.21 0-4 1.79-4 4s1.79 4 4 4h14c2.21 0 4-1.79 4-4s-1.79-4-4-4zM2 16h4v-2H2v2zm6 0h4v-2H8v2zm6 0h4v-2h-4v2z",
        },
        {
          iconClass: "feather-cloud-snow",
          path: "M18 13c-.1 0-.19-.01-.29-.02C17.35 11.54 15.62 10 13.5 10c-1.89 0-3.56 1.08-4.5 2.75C7.06 12.9 5.59 12 4 12c-2.21 0-4 1.79-4 4s1.79 4 4 4h14c2.21 0 4-1.79 4-4s-1.79-4-4-4zm0 6H2v2h16v-2z",
        },
      ],
    };
  },
};
</script>
