<template>
  <div :class="['empty-img', sizeClass]">
    <img src="https://static.onlyfans.com/theme/onlyfans/spa/img/empty-feed.svg" alt="" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    size: "small" | "normal" | "medium" | "large";
  }>(),
  {
    size: "medium",
  }
);

const sizeClass = computed(() => {
  return {
    "empty-img--small": props.size === "small",
    "empty-img--normal": props.size === "normal",
    "empty-img--medium": props.size === "medium",
    "empty-img--large": props.size === "large",
  };
});
</script>

<style scoped lang="scss">
.empty-img {
  margin: 0 auto;
  &--small {
    max-width: 200px;
  }

  &--normal {
    max-width: 300px;
  }
  &--medium {
    max-width: 450px;
  }

  &--large {
    max-width: 500px;
  }
}
</style>
