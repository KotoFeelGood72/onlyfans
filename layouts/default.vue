<template>
  <div class="layout">
    <div class="container">
      <div class="layout_main">
        <SidebarMenu />
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarMenu from "./../components/shared/SidebarMenu.vue";
</script>

<style lang="scss" scoped>
.container {
  max-width: 1312px;
  margin: 0 auto;
}

.layout_main {
  display: flex;
  gap: 30px;
}
</style>
