<template>
  <div class="main">
    <ListTape />
    <SidebarPopular />
  </div>
</template>

<script setup>
import ListTape from "~/components/shared/ListTape.vue";
import SidebarPopular from "~/components/shared/SidebarPopular.vue";
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  gap: 30px;
}
</style>
