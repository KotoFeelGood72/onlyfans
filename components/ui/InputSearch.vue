<template>
  <div class="input_search">
    <input type="text" :placeholder="placeholder" v-model="localValue" />
    <Icon name="carbon:search" class="icon-search" size="20" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string;
    placeholder: string;
  }>(),
  {
    modelValue: "",
    placeholder: "Поиск сообщений",
  }
);
const emit = defineEmits(["update:modelValue"]);
const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});
</script>

<style scoped lang="scss">
.input_search {
  position: relative;
  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 1px solid $light;
    height: 48px;
    padding: 14px 44px 14px 16px;
    border-radius: 6px;
    width: 100%;
    font-weight: 400;
    font-size: 16px;
    color: $light;
    font-family: "Roboto";
    &::-webkit-input-placeholder {
      opacity: 0.7;
    }
  }
}

.icon-search {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  color: $black;
  opacity: 0.3;
}
</style>
