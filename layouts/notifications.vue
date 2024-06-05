<template>
  <NuxtLayout>
    <div class="main">
      <slot />
      <SidebarPopular />
    </div>
  </NuxtLayout>
</template>

<script setup>
import SidebarPopular from "~/components/shared/SidebarPopular.vue";
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  gap: 30px;
}
</style>
