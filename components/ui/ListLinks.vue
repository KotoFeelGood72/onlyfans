<template>
  <div class="list-links">
    <div class="label" v-if="label">{{ label }}</div>
    <nav>
      <NuxtLink v-for="(item, i) in menu" :key="'list-item-menu-' + i" :to="item.link">
        <div class="list_tile">
          <p>{{ item.name }}</p>
          <span v-if="item.subname">{{ item.subname }}</span>
        </div>
        <Icon name="ci:chevron-right" size="20" />
      </NuxtLink>
      <Checkboxes
        v-for="(item, i) in checkboxes"
        :key="'checkboxes-' + i"
        v-model="item.isChecked"
        >{{ item.name }}</Checkboxes
      >
    </nav>
  </div>
</template>

<script setup lang="ts">
import Checkboxes from "./Checkboxes.vue";
const props = defineProps<{
  label?: string;
  menu?: any[];
  checkboxes?: { name: string; isChecked: boolean }[];
}>();
</script>

<style scoped lang="scss">
.label {
  @include flex-start;
  font-weight: 500;
  min-height: 48px;
  padding: 10px 15px;
  border-bottom: 1px solid $light;
}

nav {
  a {
    @include flex-space;
    gap: 20px;
    padding: 10px 15px;
    min-height: 48px;
    border-bottom: 1px solid $light;
    position: relative;
    line-height: 26px;

    &.router-link-active {
      background-color: $ultra-light;
    }
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 98%;
      height: 78%;
      background-color: $ultra-light;
      border-radius: 5px;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      &:not(.router-link-active) {
        color: $blue;
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}

span {
  font-size: 12px;
  color: $gray;
  display: block;
  margin-top: -5px;
}
</style>
