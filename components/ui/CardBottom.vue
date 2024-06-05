<template>
  <div class="card_bottom">
    <div class="card_action_buttons">
      <div class="card_action_btn">
        <Icon name="mdi:heart-outline" size="24" v-tooltip="'Поставить лайк'" />
      </div>
      <div class="card_action_btn" v-tooltip="'Комментарий'">
        <Icon name="iconamoon:comment" size="24" />
      </div>
      <div class="card_action_btn">
        <Icon name="ant-design:dollar-outlined" size="24" />
        <p>Отправить чаевые</p>
      </div>
    </div>
    <div class="favorite__btn" v-tooltip="'Добавить в избранное'">
      <Icon name="carbon:bookmark" size="22" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card_bottom {
  padding: 10px 16px 16px 16px;
}
.card_action_buttons {
  @include flex-start;
  gap: 15px;
  width: 100%;
}

.card_action_btn {
  @include flex-start;
  display: inline-flex;
  // flex-grow: 1;
  color: $gray;
  opacity: 0.4;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  p {
    padding-left: 10px;
    font-size: 14px;
  }
  &:hover {
    opacity: 1;
  }
}

.favorite__btn {
  color: $gray;
  opacity: 0.4;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    opacity: 1;
  }
}

.card_bottom {
  @include flex-space;
}
</style>
