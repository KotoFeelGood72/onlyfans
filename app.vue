<template>
  <div class="main">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AllModal
      :position-x="isUserModal ? 'left' : 'center'"
      :position-y="isUserModal ? 'top' : 'center'"
      :class="isUserModal ? 'user__modals' : ''"
    />
  </div>
</template>

<script setup lang="ts">
import AllModal from "./components/modal/AllModal.vue";
import { useModalStoreRefs } from "./store/useModalStore";
import { useRoute } from "vue-router";

const { modals } = useModalStoreRefs();
const route = useRoute();

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

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.childmain {
  @include flex-start;
  align-items: flex-start;
  gap: 30px;
}
</style>
