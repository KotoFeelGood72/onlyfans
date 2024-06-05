<template>
  <div class="tab_nav__w">
    <div class="tab_nav">
      <NuxtLink v-for="(item, i) in nav" :key="'tab-nav-item-' + i" :to="item.link">{{
        item.name
      }}</NuxtLink>
    </div>
    <div class="tab_edit_btn" @click="openModal('sortering')">
      <Icon name="mdi:pencil-outline" size="16" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useModalStore } from "~/store/useModalStore";
const props = withDefaults(
  defineProps<{
    nav: any;
  }>(),
  {
    nav: () => [],
  }
);

const { openModal } = useModalStore();
</script>

<style scoped lang="scss">
.tab_nav__w {
  padding: 16px 10px;
  @include flex-start;
  gap: 10px;
}
.tab_nav {
  @include flex-start;
  gap: 10px;
  a {
    @include flex-center;
    background-color: rgba(138, 150, 163, 0.12);
    border-radius: 25px;
    padding: 7px 15px;
    font-size: 14px;
    cursor: pointer;
    min-height: 32px;
    &.router-link-active {
      background-color: rgba(0, 175, 240, 0.25);
    }
  }
}

.tab_edit_btn {
  @include flex-center;
  background-color: rgba(138, 150, 163, 0.12);
  border-radius: 100%;
  width: 32px;
  height: 32px;
  cursor: pointer;
}
</style>
