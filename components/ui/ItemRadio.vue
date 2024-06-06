<template>
  <div class="radio-container">
    <input
      type="radio"
      :id="id"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="updateValue"
      class="radio-input"
    />
    <label :for="id" class="radio-label">
      <span class="custom-radio"></span>
      {{ label }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

const props = defineProps<{
  id?: string;
  name?: string;
  value?: string;
  modelValue?: string;
  label?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isChecked = computed(() => props.modelValue === props.value);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    emit("update:modelValue", target.value);
  }
};
</script>

<style scoped lang="scss">
.radio-container {
  display: flex;
  align-items: center;
  padding: 12px;
}

.radio-input {
  display: none;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.custom-radio {
  width: 20px;
  height: 20px;
  border: 2px solid $light;
  border-radius: 50%;
  position: relative;
  margin-right: 8px;
  transition: background-color 0.3s;
}

.radio-input:checked + .radio-label .custom-radio {
  border-color: $blue;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 11px;
    height: 11px;
    background-color: $blue;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
}

label {
  font-size: 16px;
  color: $black;
  font-weight: 400;
  text-transform: none;
}
</style>
