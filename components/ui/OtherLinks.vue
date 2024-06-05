<template>
  <div class="other__links">
    <NuxtLink to="/privacy">Privacy</NuxtLink>
    <NuxtLink to="/cookie-notice">Cookie Notice</NuxtLink>
    <NuxtLink to="/terms-of-service">Terms of Service</NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.other__links {
  margin-top: 20px;
  border-top: 1px solid $light;
  padding: 20px 0;
  color: $gray;
  @include flex-center;
  gap: 20px;
  a {
    opacity: 0.5;
    font-size: 12px;
    position: relative;
    &:hover {
      color: $blue;
    }
    &:not(:last-child) {
      &:before {
        position: absolute;
        top: 50%;
        right: -11px;
        transform: translateY(-50%);
        width: 3px;
        height: 3px;
        content: "";
        background-color: $gray;
      }
    }
  }
}
</style>
