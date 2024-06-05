<template>
  <ul>
    <li
      v-for="(item, i) in sortering"
      :key="'sortering-item-' + i"
      :class="{ active: activeIndex === i }"
      @click="handleClick(i, item)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps<{
  sortering: any[];
}>();

// Reactive state to keep track of the active item index
const activeIndex = ref<number | null>(0);

// Emit event and set active item
const emit = defineEmits<{
  (e: "click", item: any): void;
}>();

const handleClick = (index: number, item: any) => {
  activeIndex.value = index;
  emit("click", item);
};

onMounted(() => {
  if (props.sortering.length > 0) {
    emit("click", props.sortering[0]);
  }
});
</script>

<style scoped lang="scss">
ul {
  @include flex-start;
  flex-wrap: nowrap;
  gap: 5px;

  li {
    border-radius: 30px;
    padding: 6px 10px;
    font-size: 14px;
    color: $black;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: $light;
    &:hover,
    &.active {
      background-color: $light-blue;
    }
  }
}
</style>
