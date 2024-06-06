<template>
  <div
    class="input"
    :class="{ error: error, 'input-animated': isFocused || localValue.length > 0 }"
  >
    <div class="input__w">
      <MaskInput
        v-model="localValue"
        :mask="'#### #### #### ####'"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="disabled"
      />
      <label :for="id" :class="{ 'label-up': isFocused || localValue.length > 0 }">{{
        label
      }}</label>
    </div>
    <div class="input__bottom">
      <div class="input__description">{{ description }}</div>
      <div class="input__count" v-if="max">
        {{ localValue.replace(/\s/g, "").length }}/{{ max }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { MaskInput } from "vue-3-mask";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    error?: boolean;
    id?: string;
    description?: string;
    max?: number | undefined;
    disabled?: boolean;
  }>(),
  {
    modelValue: "",
    label: "",
    error: false,
    id: "default-id",
    description: "",
    max: 0,
    disabled: false,
  }
);

const emit = defineEmits(["update:modelValue"]);

const localValue = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue", newValue),
});

const isFocused = ref(false);

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
</script>

<style scoped lang="scss">
.input__w {
  position: relative;
}

.input {
  position: relative;
  label {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    color: #999;
    pointer-events: none;
    background-color: white;
    padding: 0 5px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    height: 48px;
    border-radius: 7px;
    outline: none;
    font-size: 16px;
    color: #333;
    &:focus {
      border-color: #007bff;
    }
    &:focus + label {
      color: #007bff;
    }
  }
}

.input-animated {
  label {
    top: 0;
    left: 10px;
    font-size: 12px;
    background-color: white;
    padding: 0 5px;
    border-radius: 3px;
  }
}

.input.error {
  input {
    border-color: rgb(221, 32, 32);
  }
}

.label-up {
  top: 0;
  left: 10px;
  font-size: 12px;
  color: #007bff;
  background-color: white;
  padding: 0 5px;
  border-radius: 3px;
}

.input__bottom {
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
}

.input__count {
  font-size: 12px;
  color: #999;
  padding-right: 10px;
  display: flex;
  align-items: flex-end;
}

.input__description {
  font-size: 12px;
  color: #999;
  padding-left: 10px;
}
</style>
