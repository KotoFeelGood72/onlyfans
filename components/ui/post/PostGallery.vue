<template>
  <div class="post-gallery">
    <div class="post-video" v-if="video">
      <vue-plyr>
        <video controls playsinline>
          <source :src="video" type="video/mp4" />
        </video>
      </vue-plyr>
    </div>
    <div class="post-img" v-if="img">
      <img :src="img" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  img?: string;
  video?: string;
}>();
</script>

<style scoped lang="scss">
.post-gallery {
  margin: 0 -20px;
}

.post-img {
  width: 100%;
  height: auto;
  img {
    width: 100%;
    object-fit: cover;
  }
}
</style>
