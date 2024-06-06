<template>
  <div class="sort__block">
    <div class="sort__title">{{ title }}</div>
    <MoreChatTooltipe name="Сортировать" />
  </div>
</template>

<script setup lang="ts">
import MoreChatTooltipe from "../tooltipe/MoreChatTooltipe.vue";

const props = defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss">
.sort__block {
  @include flex-space;
  padding: 10px 16px 0 16px;

  .sort__title {
    font-weight: 500;
    text-transform: uppercase;
    color: $gray;
  }
}
</style>
