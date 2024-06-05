<template>
  <div class="card_gallery_img">
    <div class="card__other" v-tooltip="'Больше'">
      <Icon name="mage:dots" size="25" />
    </div>
    <img
      class="card_gallery_img__bg"
      src="https://thumbs.onlyfans.com/public/files/thumbs/w480/k/ks/ksb/ksb2c5j1targoxva1ri8xc2qeaysbdaj1711423923/234133462/header.jpg"
      alt=""
    />
    <div class="card_gallery_avatar">
      <img
        src="https://thumbs.onlyfans.com/public/files/thumbs/c144/y/ym/ymb/ymbtesgscxvfseauppfyge9cnthktgci1714705424/234133462/avatar.jpg"
        alt=""
      />
      <div class="card_gallery__avatar__state"></div>
    </div>
    <div class="card_galleryImg__content">
      <p>Leo</p>
      <span>@bluntbarbie</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card_gallery_img {
  position: relative;
  z-index: 2;
  @include flex-start;
  padding: 20px 10px;
  border-radius: 8px;
  overflow: hidden;
}

.card_gallery_img__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  z-index: -1;
}

.card_gallery_avatar {
  width: 92px;
  height: 92px;
  position: relative;
  z-index: 2;
  img {
    border: 3px solid $white;
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card_galleryImg__content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: $white;
  padding: 15px 20px 15px 120px;
  background-color: rgba(0, 0, 0, 0.25);
  p {
    font-size: 19px;
    font-weight: 500;
  }
  span {
    font-size: 14px;
    font-weight: 500;
  }
}

.card__other {
  position: absolute;
  top: 10px;
  right: 10px;
  color: $white;
  cursor: pointer;
}
</style>
