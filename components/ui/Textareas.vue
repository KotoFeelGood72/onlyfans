<template>
  <div
    class="input"
    :class="{
      error: error,
      'input-animated': isFocused || localValue,
      'border-none': !border,
    }"
  >
    <div class="input__w">
      <textarea
        :id="id"
        v-model="localValue"
        :maxlength="max"
        @focus="handleFocus"
        @blur="handleBlur"
        @input="autoResize"
        :rows="rows"
      ></textarea>
      <label :for="id" :class="{ 'label-up': isFocused || localValue }">{{
        label
      }}</label>
    </div>
    <div class="input__bottom">
      <div class="input__description">{{ description }}</div>
      <div class="input__count">{{ localValue.length }}/{{ max }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label: string;
    error: boolean;
    id: string;
    description: string;
    max: number;
    rows: number;
    border: boolean;
  }>(),
  {
    modelValue: "",
    label: "",
    error: false,
    id: "default-id",
    description: "",
    max: 0,
    rows: 2,
    border: true,
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
  if (!localValue.value) {
    isFocused.value = false;
  }
};

const autoResize = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
};

onMounted(() => {
  const textarea = document.getElementById(props.id) as HTMLTextAreaElement;
  if (textarea) {
    textarea.style.height = textarea.scrollHeight + "px";
  }
});

watch(localValue, () => {
  const textarea = document.getElementById(props.id) as HTMLTextAreaElement;
  if (textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
});
</script>

<style lang="scss" scoped>
.input__w {
  position: relative;
}

.input {
  position: relative;
  textarea {
    border: none !important;
  }
  label {
    position: absolute;
    top: 10px;
    left: 10px;
    transition: all 0.2s ease;
    color: $gray;
    pointer-events: none;
  }
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid $light;
    border-radius: 7px;
    outline: none;
    font-size: 16px;
    color: $gray;
    font-family: "Roboto";
    resize: none;
    overflow: hidden;
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
    top: -7px;
    left: 10px;
    font-size: 12px;
    background-color: $white;
    padding: 1px 7px;
    border-radius: 10px;
  }
}

.input.error {
  textarea {
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
  display: flex;
  justify-content: space-between;
  padding-top: 4px;
}

.input__count {
  font-size: 12px;
  color: $gray;
  padding-right: 10px;
  @include flex-end;
}
</style>
