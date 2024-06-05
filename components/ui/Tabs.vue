<template>
  <div>
    <div class="tabs">
      <div
        class="tab-link"
        v-for="(tab, index) in tabLabels"
        :key="index"
        @click="selectTab(index)"
        :class="{ active: activeTab === index }"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab-content" :class="{ 'margin-none': margin === 'none' }">
      <slot :name="'tab-' + activeTab"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, watch } from "vue";

// Определение пропсов для табов
const props = defineProps<{
  labels: string[];
  margin: string;
}>();

const activeTab = ref(0);

function selectTab(index: number) {
  activeTab.value = index;
}

// Следим за изменением пропсов
watch(
  () => props.labels,
  (newLabels) => {
    if (activeTab.value >= newLabels.length) {
      activeTab.value = 0;
    }
  }
);

const tabLabels = ref(props.labels);
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  border-bottom: 1px solid $light;
}
.tab-link {
  @include flex-center;
  flex-grow: 1;
  position: relative;
  cursor: pointer;
  height: 48px;
  padding: 10px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  transition: all 0.3s ease;
  color: $gray;
  &.active {
    color: $black;
  }
  &:hover {
    color: $blue;
    &:after {
      opacity: 1;
      visibility: visible;
    }
    &:before {
      background-color: $blue;
    }
  }
  &:before {
    position: absolute;
    bottom: -1px;
    left: 0;
    content: "";
    width: 100%;
    height: 2px;
    background-color: $black;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 98%;
    height: 80%;
    background-color: $ultra-light;
    border-radius: 5px;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  &.active {
    &:before {
      opacity: 1;
      visibility: visible;
    }
  }
}

.tab-content {
  padding: 20px;
  overflow: hidden;
  max-width: 600px;
  &.margin-none {
    padding: 0;
  }
}
</style>
