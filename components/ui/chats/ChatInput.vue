<template>
  <div class="chat_send">
    <div class="chat_send__quote">
      <span>Пожалуйста, добавьте подсказку к этому сообщению, чтобы отправить его</span>
      <Icon
        name="mdi:information-variant-circle-outline"
        v-tooltip="
          'В настоящее время пользователь не принимает сообщения от бесплатных подписчиков без прилегаемой подсказки'
        "
      />
    </div>
    <div class="chat_send__input">
      <textarea
        v-model="message"
        placeholder="Введите сообщение"
        @input="autoResize"
      ></textarea>
    </div>
    <div class="chat_send__bottom">
      <div class="chat_send__action">
        <IconButton
          name="Добавить медиа"
          iconColor="gray"
          iconName="solar:gallery-bold"
          positionName="top"
        />
        <IconButton
          name="Сообщение с подсказками отображаются в верхней части папки «Входящие» получателя"
          iconColor="gray"
          iconName="ant-design:dollar-outlined"
          positionName="top"
        />
        <IconButton
          name="Добавить GIF"
          iconColor="gray"
          iconName="ant-design:dollar-outlined"
          positionName="top"
        />
      </div>
      <div class="chat_send__btn">
        <button type="button">Отправить</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconButton from "../IconButton.vue";

const message = ref("");

const autoResize = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  textarea.style.height = "auto";
  textarea.style.height = `${textarea.scrollHeight}px`;
};
</script>

<style scoped lang="scss">
.chat_send {
  padding-bottom: 20px;
}
.chat_send__input {
  border-top: 1px solid $light;
}
.chat_send__quote {
  background-color: rgba(0, 175, 240, 0.12);
  color: $blue;
  @include flex-start;
  gap: 10px;
  font-size: 14px;
  padding: 5px 10px;

  svg {
    color: $gray;
    cursor: pointer;
  }
}
.chat_send__input textarea {
  padding: 10px 16px 0px 16px;
  width: 100%;
  min-height: 48px;
  resize: none;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
}

.chat_send__bottom {
  @include flex-space;
  padding: 0px 10px;
}

.chat_send__action {
  @include flex-start;
}

.chat_send__btn {
  button {
    background-color: $blue;
    text-transform: uppercase;
    font-weight: 500;
    color: $white;
    font-size: 14px;
    font-family: "Roboto";
    padding: 10px 16px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: $accent;
    }
  }
}
</style>
