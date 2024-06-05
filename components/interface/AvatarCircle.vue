<template>
  <div class="avatar">
    <div
      class="avatar-circle"
      :class="[{ online: online }, size, { 'hover-active': hover }]"
    >
      <div class="border" v-if="hover"></div>
      <img :src="avatar" alt="" :style="customStyle" />
    </div>
    <div class="avatar__content" v-if="label && txt">
      <p>{{ label }}</p>
      <span>{{ txt }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    avatar?: string;
    label?: string;
    txt?: string;
    customStyle?: string;
    online?: boolean;
    size?: "small" | "medium" | "large";
    hover?: boolean;
  }>(),
  {
    online: false,
    avatar:
      "https://thumbs.onlyfans.com/public/files/thumbs/c144/2/2s/2sl/2sljza9rxg1eyepyuj0fuv7lsizvvxsx1711369674/ACg8ocJmM5QgaIn5vsnC5xu8zfwLArSOCvdTqslhhYq83nM3-s96-c.jpg",
    label: "",
    txt: "",
    size: "small",
  }
);
</script>

<style scoped lang="scss">
.avatar-circle {
  width: 36px;
  height: 36px;
  @include flex-center;
  position: relative;

  &.small {
    width: 36px;
    height: 36px;
    &.online {
      &:before {
        width: 12px;
        height: 12px;
        bottom: 6px;
        right: 6px;
        position: absolute;
        content: "";
        background-color: #35d063;
        border-radius: 100%;
        border: 2px solid $white;
      }
    }
  }
  &.medium {
    width: 48px;
    height: 48px;
    &.online {
      &:before {
        width: 12px;
        height: 12px;
        bottom: 2px;
        right: 2px;
        position: absolute;
        content: "";
        background-color: #35d063;
        border-radius: 100%;
        border: 2px solid $white;
      }
    }
  }
  &.large {
    width: 96px;
    height: 96px;
    &.online {
      &:before {
        width: 17px;
        height: 17px;
        bottom: 6px;
        right: 6px;
        position: absolute;
        content: "";
        background-color: #35d063;
        border-radius: 100%;
        border: 2px solid $white;
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100px;
  }
}

.avatar {
  @include flex-start;
  gap: 15px;
  p {
    font-size: 16px;
  }
  span {
    font-size: 14px;
    color: $gray;
  }
}

.border {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 105%;
  height: 105%;
  border: 2px solid $accent;
  border-radius: 100px;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 6px rgba(0, 145, 234, 0.06);
}
.hover-active {
  &:hover {
    .border {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
