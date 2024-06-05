<template>
  <div
    class="toggle_item"
    :class="{ 'border-top': borderTop, 'border-bottom': borderBottom }"
  >
    <p class="toggle_item__txt">{{ name }}</p>
    <label class="toggle_switch">
      <input
        type="checkbox"
        class="toggle_input"
        :checked="checked"
        @change="updateValue"
      />
      <span class="toggle_slider"></span>
    </label>
    <div class="toggle__quote" v-if="$slots.default"><slot /></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    checked: boolean;
    borderTop: boolean;
    borderBottom: boolean;
  }>(),
  {
    name: "Toggle item",
    checked: false,
    borderTop: true,
    borderBottom: true,
  }
);

const emit = defineEmits<{
  (e: "update:checked", value: boolean): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit("update:checked", target.checked);
};
</script>

<style scoped lang="scss">
.toggle_item {
  @include flex-space;
  min-height: 48px;
  padding: 16px;
  position: relative;
  flex-wrap: wrap;
  &:before,
  &:after {
    position: absolute;
    border-bottom: 1px solid $light;
    left: 0;
    width: 100%;
    content: "";
  }

  &:before {
    top: -1px;
    display: none;
  }
  &:after {
    bottom: 0;
    display: none;
  }
  &.border-top {
    &:before {
      display: block;
    }
  }
  &.border-bottom {
    &:after {
      display: block;
    }
  }
}

.toggle_item__txt {
  margin-right: 10px;
  max-width: 290px;
}

.toggle_switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 20px;
}

.toggle_switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle_slider {
  position: absolute;
  cursor: pointer;
  height: 16px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(138, 150, 163, 0.4);
  transition: 0.4s;
  border-radius: 34px;
}

.toggle_slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  border: 2px solid $gray;
}

input:checked + .toggle_slider {
  background-color: $light-blue;
}

input:checked + .toggle_slider:before {
  transform: translateX(14px) translateY(-50%);
  border-color: $blue;
  background-color: $blue;
}

.toggle__quote {
  width: 100%;
  font-size: 12px;
  color: $gray;
  padding-top: 10px;
}
</style>
