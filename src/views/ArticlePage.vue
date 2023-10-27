<template>
  <div class="article-page card">
    <div class="article-header">
      <h1>{{ article.title }}</h1>
      <p>By {{ article.author }} | Published on {{ article.datePublished }}</p>
    </div>
    <div class="article-content">
      <img
        :src="article.imageSrc"
        alt="Article Image"
        style="max-width: 100%; height: auto"
      />
      <p>{{ article.description }}</p>
      <p v-for="(paragraph, index) in article.content" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: "The Power of Daily Habits",
        author: "Emily Johnson",
        datePublished: "November 2, 2023",
        imageSrc: "https://picsum.photos/1200/300",
        description:
          "Discover the life-changing impact of building positive daily habits. Learn how small changes to your routine can lead to greater productivity, happiness, and overall well-being.",
        content: [
          "Building daily habits is crucial for personal growth and development. These small actions performed consistently over time can lead to significant improvements in various areas of life.",
          "Whether it's establishing a morning exercise routine, practicing mindfulness, or dedicating time to learning new skills, the power of daily habits lies in their ability to create positive momentum.",
          "Research has shown that consistent habits can rewire the brain and make certain behaviors automatic, leading to increased efficiency and reduced decision fatigue. By focusing on positive daily habits, individuals can cultivate a more proactive and intentional approach to life.",
          "Incorporating new habits into daily life may require dedication and perseverance, but the long-term benefits are well worth the effort. As habits become ingrained, they contribute to a sense of accomplishment and self-mastery, fostering a more fulfilling and purposeful existence.",
          "Furthermore, studies have indicated that habits play a significant role in shaping one's identity and self-perception. By adopting habits aligned with personal values and aspirations, individuals can reinforce their sense of purpose and develop a stronger sense of self.",
          "To initiate the process of building positive daily habits, it's essential to start with manageable and realistic goals. Setting achievable targets and gradually increasing the complexity of habits can ensure sustainable progress and prevent burnout.",
          "Additionally, incorporating accountability measures, such as tracking progress and seeking support from peers, can enhance motivation and reinforce commitment to the established habits.",
          "In essence, the power of daily habits transcends mere routines; it empowers individuals to actively design their lives and steer them towards growth and fulfillment. By harnessing the potential of positive habits, one can pave the way for a more meaningful and purpose-driven existence.",
        ],
      },
    };
  },
};
</script>

<style scoped>
.article-page {
  margin: 0 auto;
  max-width: 1200px; /* Adjust the maximum width as needed */
}

.article-header {
  text-align: center;
  margin-bottom: 20px;
}

.article-content {
  line-height: 1.6;
}

.article-content img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
