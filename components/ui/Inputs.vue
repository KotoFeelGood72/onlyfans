<template>
  <div class="input" :class="{ error: error, 'input-animated': isFocused || localValue }">
    <div class="input__w">
      <input
        :id="id"
        :type="type"
        v-model="localValue"
        :maxlength="max ? max : undefined"
        @focus="handleFocus"
        @blur="handleBlur"
        :disabled="disabled"
      />
      <label :for="id" :class="{ 'label-up': isFocused || localValue }">{{
        label
      }}</label>
    </div>
    <div class="input__bottom">
      <div class="input__description">{{ description }}</div>
      <div class="input__count" v-if="max">{{ localValue.length }}/{{ max }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    error?: boolean;
    id?: string;
    type?: "text" | "tel" | "email";
    description?: string;
    max?: number | undefined;
    disabled?: boolean;
  }>(),
  {
    modelValue: "",
    label: "",
    error: false,
    id: "default-id",
    type: "text",
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

<style lang="scss" scoped>
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
    color: $gray;
    pointer-events: none;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid $light;
    height: 48px;
    border-radius: 7px;
    outline: none;
    font-size: 16px;
    color: $gray;
    font-family: "Roboto";
    &:focus {
      border-color: $blue;
    }
    &:focus + label {
      color: $blue;
    }
  }
}

.input-animated {
  label {
    top: 0px;
    left: 10px;
    font-size: 12px;
    background-color: $white;
    padding: 1px 7px;
    border-radius: 10px;
  }
}

.input.error {
  input {
    border-color: rgb(221, 32, 32);
  }
}

.label-up {
  top: -20px;
  left: 0;
  font-size: 12px;
  color: $blue;
}

.input__bottom {
  @include flex-space;
  padding-top: 4px;
}

.input__count {
  font-size: 12px;
  color: $gray;
  padding-right: 10px;
  @include flex-end;
}

.input__description {
  font-size: 12px;
  color: $gray;
  padding-left: 10px;
}
</style>
