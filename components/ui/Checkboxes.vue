<template>
  <div class="checkbox-container" @click="toggleChecked">
    <input type="checkbox" v-model="localChecked" class="checkbox-input" />
    <span class="checkbox-custom" :class="{ checked: localChecked }">
      <svg
        v-if="localChecked"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path fill="#ffffff" d="M9 16.2l-4.2-4.2-1.4 1.4 5.6 5.6 12-12-1.4-1.4z" />
      </svg>
    </span>
    <span class="checkbox-label" v-if="$slots.default"><slot></slot></span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  modelValue: Boolean,
});

const emit = defineEmits(["update:modelValue"]);

const localChecked = ref(props.modelValue);

watch(
  () => props.modelValue,
  (newValue) => {
    localChecked.value = newValue;
  }
);

const toggleChecked = () => {
  localChecked.value = !localChecked.value;
  emit("update:modelValue", localChecked.value);
};
</script>

<style scoped lang="scss">
.checkbox-container {
  @include flex-start;
  padding: 16px;
  height: 48px;
  border-bottom: 1px solid $light;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid $light;
  background-color: transparent;
  transition: background-color 0.2s, border-color 0.2s;
}

.checkbox-custom.checked {
  background-color: $blue;
  border-color: $blue;
}

.checkbox-label {
  margin-left: 12px;
}
</style>
