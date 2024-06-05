<template>
  <button type="button" :class="iconColor" v-tooltip.[positionName]="name">
    <Icon :name="iconName" :size="iconSize" />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    iconSize: string;
    iconName: string;
    iconColor: string;
    positionName: "top" | "bottom";
  }>(),
  {
    name: "",
    iconSize: "20",
    iconName: "solar:arrow-left-linear",
    iconColor: "black",
    positionName: "bottom",
  }
);
</script>

<style scoped lang="scss">
button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  @include flex-center;
  width: 36px;
  height: 36px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.3s ease;

  &.gray {
    color: $gray;
  }
  &.black {
    color: $black;
  }
  &:hover {
    background-color: $ultra-light;
    color: $blue;
  }
}
</style>
