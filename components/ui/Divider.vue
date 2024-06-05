<template>
  <div :class="['divider', { border: border }]"></div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    border: boolean;
  }>(),
  {
    border: true,
  }
);
</script>

<style scoped lang="scss">
.divider {
  height: 8px;
  width: 100%;
  background-color: $marked;
  &.border {
    border-top: 1px solid $light;
  }
}
</style>
