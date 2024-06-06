<template>
  <div class="card">
    <CardHead :link="link" />
    <div class="card__description">
      Step into the future of content creation as
      <a href="#">@aliciawaldner</a> introduces Sora, the groundbreaking text-to-video AI
      software 💻 <a href="#">onlyfans.com/aliciawaldner</a>
      <a href="#">onlyfans.com/oftv</a>
    </div>
    <CardGallery video-src="https://youtu.be/RCmjd4b2OAw?si=P8KYq6J7zxMCQgL-" />
    <CardBottom />
    <div class="count">172 любит</div>
  </div>
</template>

<script setup lang="ts">
import CardHead from "../ui/CardHead.vue";
import CardGallery from "../ui/CardGallery.vue";
import CardBottom from "../ui/CardBottom.vue";

const props = defineProps<{
  link?: string;
}>();
</script>

<style scoped lang="scss">
.card {
  border-bottom: 1px solid $light;
}
.card__description {
  color: $black;
  padding: 0 16px 16px 16px;
  font-size: 16px;
  color: $black;
  line-height: 24px;
  a {
    color: $blue;
  }
}

.count {
  padding: 0 16px 16px 16px;
  font-size: 14px;
}
</style>
