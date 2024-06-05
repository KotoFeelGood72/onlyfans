<template>
  <div class="card_gallery">
    <div class="video">
      <vue-plyr>
        <video controls playsinline>
          <source
            src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            type="video/mp4"
          />
        </video>
      </vue-plyr>
    </div>
    <div class="card_gallery_images">
      <CardGalleryImg
        v-for="(item, index) in 2"
        :key="'gallery-item-' + index"
        :src="item"
        class="card_gallery_item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardGalleryImg from "./CardGalleryImg.vue";

const props = defineProps<{
  videoSrc: string;
}>();

// Флаг для использования кастомного плеера
const useCustomPlayer = ref(true);
</script>

<style scoped lang="scss">
.card_gallery_images {
  display: flex;
  gap: 20px;
  padding: 16px;

  .card_gallery_item {
    flex-grow: 1;
  }
}

.video {
  width: 100%;
  height: 336px;

  video,
  .vue-core-video-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
