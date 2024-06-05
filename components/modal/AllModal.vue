<template>
  <div
    class="modal"
    v-if="activeModalComponent"
    :class="['modal_postionY__' + positionY, 'modal_postionX__' + positionX]"
  >
    <div class="modal__bg" @click="[closeCurrentModal()]"></div>
    <div class="container">
      <div class="modal_main__w" :style="positions">
        <div class="modal_main">
          <component :is="activeModalComponent" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent } from "vue";
import { useModalStoreRefs, useModalStore } from "~/store/useModalStore";

const AsyncModalSortering = defineAsyncComponent(
  () => import("./modals/ModalSortering.vue")
);
const AsyncModalSub = defineAsyncComponent(() => import("./modals/ModalSubscribe.vue"));
const AsyncModalAddCart = defineAsyncComponent(() => import("./modals/ModalAddCart.vue"));
const AsyncModalUser = defineAsyncComponent(() => import("./modals/ModalUser.vue"));
const AsyncModalPay = defineAsyncComponent(() => import("./modals/ModalPay.vue"));
const AsyncModalQuizDays = defineAsyncComponent(
  () => import("./modals/ModalQuizDays.vue")
);
const AsyncModalVictoryDays = defineAsyncComponent(
  () => import("./modals/ModalVictoryDays.vue")
);
const AsyncModalFavorite = defineAsyncComponent(
  () => import("./modals/ModalFavorite.vue")
);

const props = withDefaults(
  defineProps<{
    positionY?: "center" | "right" | "left" | "top";
    positionX?: "center" | "right" | "left";
    positions?: string;
  }>(),
  {
    positionY: "center",
    positionX: "center",
    positions: "",
  }
);

const { modals } = useModalStoreRefs();
const { closeModal } = useModalStore();

type ModalKey = keyof typeof modals.value;

const activeModalName = computed(() => {
  for (const name in modals.value) {
    if (modals.value[name as ModalKey]) {
      return name as ModalKey;
    }
  }
  return null;
});

const activeModalComponent = computed(() => {
  for (const [key, isActive] of Object.entries(modals.value)) {
    if (isActive) {
      switch (key) {
        case "sortering":
          return AsyncModalSortering;
        case "subscribe":
          return AsyncModalSub;
        case "addCart":
          return AsyncModalAddCart;
        case "user":
          return AsyncModalUser;
        case "pay":
          return AsyncModalPay;
        case "favorite":
          return AsyncModalFavorite;
        case "quizDays":
          return AsyncModalQuizDays;
        case "victoryDays":
          return AsyncModalVictoryDays;
        default:
          return null;
      }
    }
  }
  return null;
});

const closeCurrentModal = () => {
  const modalName = activeModalName.value;
  if (modalName) {
    closeModal(modalName);
  }
};
</script>

<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 101;

  &.modal_postionY__center {
    @include flex-center;
  }
  &.modal_postionX__center {
    @include flex-center;
  }
  &.modal_postionX__left {
    .modal_main__w {
      justify-content: flex-start !important;
    }
  }
  &.modal_postionY__top {
    .modal_main__w {
      align-items: flex-start;
    }
  }
}
.modal__bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000065;
}

.modal_main__w {
  position: relative;
  width: 100%;
  height: 100%;
  @include flex-center;
  pointer-events: none;
}

.modal_main {
  pointer-events: all;
}

.container {
  height: 100%;
  width: 100%;
}

.user__modals {
  .modal_main__w {
    padding-top: 20px;
  }
}
</style>
