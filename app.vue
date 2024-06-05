<template>
  <div class="main">
    <NuxtPage />
    <AllModal
      :position-x="isUserModal ? 'left' : 'center'"
      :position-y="isUserModal ? 'top' : 'center'"
      :class="isUserModal ? 'user__modals' : ''"
    />
    <!-- <AllModal
      :positions="isUserModal ? 'position: absolute; left: -26.8%; top: -21.3%' : ''"
    /> -->
  </div>
</template>

<script setup lang="ts">
import AllModal from "./components/modal/AllModal.vue";
import { useModalStoreRefs } from "./store/useModalStore";

const { modals } = useModalStoreRefs();

const isUserModal = computed(() => {
  if (modals.value.user) {
    return true;
  }
  return false;
});
</script>

<style lang="scss">
body {
  font-family: "Roboto", sans-serif;
}
</style>
