<template>
  <div class="more_chat" v-if="props.isMore" ref="menu">
    <ItemRadio
      id="priority1"
      name="option"
      value="priority1"
      :modelValue="selectedOption"
      label="Приоритет 1"
      @update:modelValue="updateSelectedOption"
    />
    <ItemRadio
      id="priority2"
      name="option"
      value="priority2"
      :modelValue="selectedOption"
      label="Приоритет 2"
      @update:modelValue="updateSelectedOption"
    />
    <ItemRadio
      id="priority3"
      name="option"
      value="priority3"
      :modelValue="selectedOption"
      label="Приоритет 3"
      @update:modelValue="updateSelectedOption"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ItemRadio from "../ui/ItemRadio.vue";
import { onClickOutside } from "@vueuse/core";

interface Props {
  isMore: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (event: "update:isMore", value: boolean): void;
}>();

const selectedOption = ref<string>("priority1");
const menu = ref<HTMLElement | null>(null);

const updateSelectedOption = (value: string) => {
  selectedOption.value = value;
  emit("update:isMore", false);
};

const close = () => {
  emit("update:isMore", false);
  console.log("Good");
};

onClickOutside(menu, close);
</script>

<style scoped lang="scss">
.more_chat {
  position: absolute;
  top: calc(100%);
  left: calc(100%);
  background-color: $white;
  z-index: 99;
  border: 1px solid rgba(138, 150, 163, 0.25);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  min-width: 220px;
}
</style>
