<template>
  <div class="modal-sort">
    <div class="modal_sort__top">ПЕРЕУПОРЯДОЧИТЬ КАТЕГОРИИ</div>
    <div class="modal_sort__body">
      <div class="modal_sort__item" v-for="(item, i) in list" :key="'sort-item-' + i">
        <p>{{ item }}</p>

        <div class="modal_sort__grab">
          <Icon name="ph:dots-six-bold" size="20" />
        </div>
      </div>
    </div>
    <div class="modal_sort__bottom">
      <button type="button" @click="closeModal('sortering')">Отмена</button>
      <button type="button" @click="closeModal('sortering')">Сохранить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const list = ref<string[]>(["Тэги", "Комментарии", "Упоминания", "Подписки", "Акции"]);
import { useModalStore } from "~/store/useModalStore";

const { closeModal } = useModalStore();
</script>

<style scoped lang="scss">
.modal-sort {
  background-color: $white;
  min-width: 500px;
  border-radius: 10px;
}

.modal_sort__top {
  padding: 14px 16px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid $light;
}

.modal_sort__body {
  padding-bottom: 60px;
}

.modal_sort__item {
  @include flex-space;
  padding: 14px 16px;
  font-weight: 500;
  &:not(:last-child) {
    border-bottom: 1px solid $light;
  }
}

.modal_sort__grab {
  cursor: grab;
}

.modal_sort__bottom {
  @include flex-end;
  gap: 10px;
  border-top: 1px solid $light;
  padding: 10px;
  button {
    padding: 10px 16px;
    border-radius: 30px;
    color: $blue;
    transition: all 0.3s ease;
    cursor: pointer;
    text-transform: uppercase;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 14px;
    &:hover {
      background-color: rgba(0, 145, 234, 0.06);
    }
  }
}
</style>
