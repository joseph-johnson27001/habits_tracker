<!-- BadgeIcons.vue -->
<template>
  <div>
    <!-- NEED TO UPDATE THE SVG DATA ARRAY - DIFFERENT OBJECTS IN THERE WITH NAME VALUES. IF svgData.name === headphones then show that svg, etc -->
    <!-- THE BADGE SHOULD HAVE A NAME WHICH APPEARS ON HOVER (BADGE FOR COMPLETING A MARATHON - EARNED 24/5/2022 ETC) -->
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 64 64"
      enable-background="new 0 0 64 64"
      xml:space="preserve"
    >
      <g>
        <path
          fill="#394240"
          d="M57,40v0.002h-1V30c0.553,0,1-0.447,1-1v-4C57,11.193,45.807,0,32,0S7,11.193,7,25v4c0,0.553,0.447,1,1,1   v10H7c-3.866,0-7,3.134-7,7v10.002c0,3.865,3.134,7,7,7V64h5c2.211,0,4-1.789,4-4V44c0-1.479-0.809-2.754-2-3.445V30   c0.553,0,1-0.447,1-1v-4c0-9.389,7.611-17,17-17s17,7.611,17,17v4c0,0.553,0.447,1,1,1v10.555c-1.191,0.693-2,1.968-2,3.447v16   c0,2.211,1.789,4,4,4h5c3.866,0,7-3.135,7-7V47C64,43.134,60.866,40,57,40z M2,57.002V47c0-2.419,1.719-4.436,4-4.899v19.8   C3.718,61.437,2,59.42,2,57.002z M7,62.002C6.997,62.002,6.993,62,6.99,62H7V62.002z M14,60c0,1.104-0.896,2-2,2H8V42h4   c1.104,0,2,0.896,2,2V60z M12,40h-2V30h2V40z M32,6c-10.493,0-19,8.506-19,19v3H9v-3C9,12.297,19.298,2,32,2s23,10.297,23,23v3h-4   v-3C51,14.506,42.493,6,32,6z M52,30h2v10.002h-2V30z M52,62.002c-1.104,0-2-0.896-2-2v-16c0-1.105,0.896-2,2-2h4v20H52z    M62,57.002c0,2.418-1.719,4.435-4,4.898v-19.8c2.282,0.464,4,2.481,4,4.899V57.002z"
        />
        <polygon fill="#45AAB8" points="7,62.002 6.99,62 7,62  " />
        <path
          fill="#F76D57"
          d="M32,6c-10.493,0-19,8.506-19,19v3H9v-3C9,12.297,19.298,2,32,2s23,10.297,23,23v3h-4v-3   C51,14.506,42.493,6,32,6z"
        />
        <g>
          <rect x="10" y="30" fill="#B4CCB9" width="2" height="10" />
          <rect x="52" y="30" fill="#B4CCB9" width="2" height="10.002" />
        </g>
        <g>
          <path
            fill="#45AAB8"
            d="M2,47v10.002c0,2.418,1.718,4.435,4,4.898v-19.8C3.719,42.564,2,44.581,2,47z"
          />
          <path
            fill="#45AAB8"
            d="M12,42H8v20h4c1.104,0,2-0.896,2-2V44C14,42.896,13.104,42,12,42z"
          />
          <path
            fill="#45AAB8"
            d="M50,44.002v16c0,1.104,0.896,2,2,2h4v-20h-4C50.896,42.002,50,42.896,50,44.002z"
          />
          <path
            fill="#45AAB8"
            d="M58,42.101v19.8c2.281-0.464,4-2.48,4-4.898V47C62,44.582,60.282,42.564,58,42.101z"
          />
        </g>
        <g opacity="0.2">
          <path
            d="M2,47v10.002c0,2.418,1.718,4.435,4,4.898v-19.8C3.719,42.564,2,44.581,2,47z"
          />
          <path
            d="M58,42.101v19.8c2.281-0.464,4-2.48,4-4.898V47C62,44.582,60.282,42.564,58,42.101z"
          />
        </g>
      </g>
    </svg>
    <!-- <svg
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
    </svg> -->
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
        {
          iconClass: "feather-umbrella",
          path: "M12 2v12m0 0l-4-4m4 4l4-4M6 18h12a6 6 0 0 0-12 0z",
        },
        {
          iconClass: "feather-wifi",
          path: "M12 21a9 9 0 0 0 0-18c-1.51 0-2.95 0.36-4.23 1L12 10l4.23-8A9 9 0 0 0 12 21zm0-16a7 7 0 0 0 0 14c1.22 0 2.41-0.31 3.45-0.88L12 12l-3.45 6.12A7 7 0 0 0 12 5z",
        },
        {
          iconClass: "feather-flag",
          path: "M4 2l19 9-19 9z",
        },
      ],
    };
  },
};
</script>
