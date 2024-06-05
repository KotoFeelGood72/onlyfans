<template>
  <NuxtLink :to="link" class="nav_item__link">
    <div class="nav_icon">
      <Icon :name="icon ? icon : ''" size="22" />
    </div>
    <div class="nav_item__content">
      <p>{{ name }}</p>
      <span>{{ subname }}</span>
    </div>
    <div class="nav_icon__expanded" v-if="expanded">
      <Icon name="fluent:chevron-down-24-filled" size="22" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  name?: string;
  link?: string;
  icon?: string;
  subname?: string;
  expanded?: boolean;
}>();
</script>

<style scoped lang="scss">
.nav_item__link {
  margin-left: -7px;
  @include flex-start;
  gap: 10px;
  color: $black;
  padding: 6px 10px;
  border-radius: 30px;
  cursor: pointer;
  width: 100%;
  position: relative;
  &:hover {
    background-color: $ultra-light;
    color: $blue;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }

  span {
    color: $gray;
    font-weight: 400;
    font-size: 14px;
  }
}

.nav_icon__expanded {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
}
</style>
