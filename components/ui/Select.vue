<template>
  <div class="select-wrapper" :class="{ isOpen: isOpen }" ref="selectWrapper">
    <div class="select-label">{{ label }}</div>
    <div class="selected" @click="toggleDropdown">
      <span v-if="selectedItem">
        <svg-icon
          :name="selectedItem.icon"
          v-if="selectedItem.icon"
          class="country-icon"
        />
        {{ selectedItem.label }}
      </span>
      <span v-else>
        <svg-icon :name="defaultItem.icon" class="country-icon" />
        {{ defaultItem.label }}
      </span>
      <div class="arrow_expanded" :class="{ isOpen: isOpen }">
        <Icon name="heroicons:chevron-down" size="20" />
      </div>
    </div>
    <div v-if="isOpen" class="dropdown">
      <div
        v-for="item in items"
        :key="item.value"
        @click="selectItem(item)"
        class="dropdown-item"
      >
        <div class="dropdown_item__icon" v-if="item.icon">
          <svg-icon :name="item.icon" />
        </div>
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, watch, onMounted, onBeforeUnmount } from "vue";

const props = defineProps<{
  items?: any[];
  modelValue?: any;
  label?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const items = ref(props.items || []);
const defaultItem = { icon: "", label: "Select an option", value: "" };
const selectedItem = ref(props.modelValue || items.value[0] || defaultItem);
const selectWrapper = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item: { icon: string; value: string; label: string }) => {
  selectedItem.value = item;
  emit("update:modelValue", item);
  isOpen.value = false;
};

watch(
  () => props.modelValue,
  (newValue) => {
    selectedItem.value = newValue || items.value[0] || defaultItem;
  },
  { immediate: true }
);

watch(
  () => props.items,
  (newItems) => {
    items.value = newItems || [];
    if (!selectedItem.value || !items.value.includes(selectedItem.value)) {
      selectedItem.value = items.value[0] || defaultItem;
    }
  },
  { immediate: true }
);

const handleClickOutside = (event: MouseEvent) => {
  if (selectWrapper.value && !selectWrapper.value.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped lang="scss">
.select-wrapper {
  position: relative;
  border: 1px solid $light;
  border-radius: 6px;

  &.isOpen {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:hover {
    .arrow_expanded {
      color: $blue;
      background-color: $ultra-light;
    }
  }
}

.selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  cursor: pointer;
  height: 48px;

  span {
    display: flex;
    align-items: center;
  }
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  border: 1px solid $light;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: $white;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 16px;
  position: relative;
  cursor: pointer;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 97%;
    height: 97%;
    background-color: $ultra-light;
    opacity: 0;
    border-radius: 4px;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  &:hover {
    &:before {
      opacity: 1;
      visibility: visible;
    }
  }
}

.arrow_expanded {
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 100px;

  &.isOpen {
    transform: translateY(-50%) rotate(180deg);
  }
  &:hover {
    color: $blue;
    background-color: $ultra-light;
  }
}

.select-label {
  position: absolute;
  top: -6px;
  left: 15px;
  font-size: 12px;
  color: $gray;
  background-color: $white;
}

.country-icon {
  width: 18px;
  margin-right: 7px;
}

.dropdown_item__icon {
  width: 20px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
