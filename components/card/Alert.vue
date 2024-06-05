<template>
  <div class="alert" :class="type">
    <div class="alert_icon" v-if="iconName">
      <Icon :name="iconName ? iconName : ''" size="22" />
    </div>
    <div class="alert__content">
      <p><slot name="title" /></p>
      <div class="alert__txt"><slot name="content" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const slots = defineSlots<{
  content: () => void;
  title: () => void;
}>();
const props = defineProps<{
  iconName?: string;
  type: "danger" | "success" | "info";
}>();
</script>

<style scoped lang="scss">
.alert {
  border-radius: 6px;
  padding: 10px 16px 10px 40px;
  margin: 16px;
  font-size: 16px;
  line-height: 24px;
  position: relative;
  overflow: hidden;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 24px;
    content: "";
  }
  &.danger {
    border: 1px solid rgba(255, 96, 96, 0.25);
    &:before {
      background-color: rgba(255, 96, 96, 0.144);
    }
    .alert_icon {
      position: absolute;
      top: 10px;
      left: 10px;
      color: #ff6060;
    }
  }
  &.info {
    border: 1px solid $ultra-light;
    &:before {
      background-color: rgba(0, 175, 240, 0.12);
    }
    .alert_icon {
      position: absolute;
      top: 10px;
      left: 10px;
      color: $blue;
    }
  }
}

.alert__txt {
  @include flex-start;
  flex-direction: column;
  align-items: flex-start;
}
</style>
