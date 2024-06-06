<template>
  <div class="button" :class="[isColorSheme]">
    <Icon
      v-if="icon"
      :name="icon"
      :size="iconSize"
      class="button-icon"
      :class="{ static: iconStatic }"
    />
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string;
    icon?: string;
    iconSize?: string;
    iconStatic?: boolean;
    colorSheme?: "primary" | "secondary" | "default";
  }>(),
  {
    label: "Новый пост",
    colorSheme: "default",
    iconSize: "20",
    icon: "",
    iconStatic: false,
  }
);

const isColorSheme = computed(() => {
  switch (props.colorSheme) {
    case "primary":
      return "color-sheme-primary";
    case "secondary":
      return "color-sheme-secondary";
    default:
      return "color-sheme-default";
  }
});
</script>

<style scoped lang="scss">
.button {
  padding: 15px 25px;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  gap: 10px;
  transition: all 0.3s ease;

  &.color-sheme-primary {
    background-color: $blue;
    color: $white;
    &:hover {
      background-color: $accent;
    }
  }
  &.color-sheme-secondary {
    background-color: $white;
    color: $blue;
    border: 1px solid $light;
    &:hover {
      background-color: $ultra-light;
      border-color: $blue;
      color: $blue;
    }
  }
}

.button-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);

  &.static {
    position: static;
    transform: translateY(0);
  }
}
</style>
