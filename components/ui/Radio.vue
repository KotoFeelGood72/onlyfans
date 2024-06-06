<template>
  <div class="checkbox-confirm">
    <input
      type="checkbox"
      :id="id"
      v-model="checked"
      @change="updateValue"
      class="checkbox"
    />
    <label :for="id" class="checkbox-label">
      <slot
        >Отметьте здесь, чтобы подтвердить, что вам не менее 18 лет и возраст
        совершеннолетия по месту жительства</slot
      >
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch } from "vue";

const props = defineProps<{
  modelValue?: boolean;
  id?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const checked = ref(props.modelValue);

const updateValue = () => {
  emit("update:modelValue", checked.value);
};

watch(
  () => props.modelValue,
  (newValue) => {
    checked.value = newValue;
  }
);
</script>

<style scoped lang="scss">
.checkbox-confirm {
  @include flex-start;
  user-select: none;
}

.checkbox {
  display: none;
}

.checkbox + .checkbox-label {
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  color: $black;
  line-height: 24px;
}

.checkbox + .checkbox-label::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2px;
  width: 20px;
  height: 20px;
  border: 2px solid $light;
  border-radius: 100px;
  background-color: $white;
}

.checkbox:checked + .checkbox-label::before {
  content: "✔";
  @include flex-center;
  font-size: 12px;
  color: $white;
  background-color: $blue;
  border-color: $blue;
}
</style>
