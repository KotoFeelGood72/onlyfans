<template>
  <div class="sortering__w" ref="menu">
    <IconButton
      :name="name ? name : 'Больше'"
      iconName="material-symbols:sort"
      iconSize="24"
      iconColor="gray"
      @click="toggleIsMore"
    />
    <div class="more_chat" v-if="internalIsMore">
      <template v-for="(group, groupIndex) in optionGroups" :key="groupIndex">
        <div class="option-group">
          <div class="divider" v-if="groupIndex != 0"></div>
          <ItemRadio
            v-for="(option, optionIndex) in group"
            :key="option.id"
            :id="option.id"
            :name="option.name"
            :value="option.value"
            :modelValue="selectedOptions[groupIndex]"
            :label="option.label"
            @update:modelValue="(value) => updateSelectedOption(value, groupIndex)"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import ItemRadio from "../ui/ItemRadio.vue";
import { onClickOutside } from "@vueuse/core";
import IconButton from "../ui/IconButton.vue";

const props = defineProps<{
  name?: string;
}>();

interface Option {
  id: string;
  name: string;
  value: string;
  label: string;
}

const defaultOptionGroups: Option[][] = [
  [
    { id: "pr1", name: "option", value: "priority1", label: "Недавние" },
    { id: "pr2", name: "option", value: "priority2", label: "Имя" },
    { id: "pr3", name: "option", value: "priority2", label: "Люди" },
    { id: "pr4", name: "option", value: "priority2", label: "Пользовательские" },
  ],
  [
    { id: "pr11", name: "other", value: "priority3", label: "По возрастанию" },
    { id: "pr22", name: "other", value: "priority4", label: "По убыванию" },
  ],
];

const optionGroups = ref<Option[][]>(defaultOptionGroups);
const selectedOptions = ref<string[]>(
  optionGroups.value.map((group) => group[0]?.value || "priority1")
);
const internalIsMore = ref(false);
const menu = ref<HTMLElement | null>(null);

const toggleIsMore = () => {
  internalIsMore.value = !internalIsMore.value;
  console.log("Good", internalIsMore.value);
};

const updateSelectedOption = (value: string, groupIndex: number) => {
  selectedOptions.value[groupIndex] = value;
  toggleIsMore();
};

const close = () => {
  internalIsMore.value = false;
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
  min-width: 256px;
  border-radius: 8px;
  padding: 10px 0;
}

.option-group {
  padding: 0 10px;
}

.divider {
  border-bottom: 1px solid $light;
  margin: 0 -16px 0 -16px;
}

.group-title {
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
}
.sortering__w {
  position: relative;
}
</style>
