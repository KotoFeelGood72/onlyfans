<template>
  <div class="post_lock">
    <div class="icon-lock">
      <Icon :name="isHovered ? 'bx:lock-open-alt' : 'bx:lock-alt'" size="65" />
    </div>
    <div class="post__unlock">
      <ul class="post_info">
        <li>
          <div class="post_info__icon">
            <Icon name="material-symbols-light:image-outline" size="17" />
          </div>
          <span>1</span>
        </li>
        <li>
          <div class="post_info__icon"><Icon name="basil:video-outline" size="17" /></div>
          <span>1</span>
        </li>
        <li>
          <div class="post_info__icon">
            <Icon name="ph:chart-bar-horizontal-light" size="16" />
          </div>
        </li>
      </ul>
      <Button
        label="Подпишитесь, чтобы увидеть сообщения пользователей"
        color-sheme="primary"
        style="padding: 10px"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
        @click="openModal('pay')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../Button.vue";
import { useModalStore } from "~/store/useModalStore";

const { openModal } = useModalStore();

const isHovered = ref<boolean>(false);

const props = defineProps<{
  img?: number;
  video?: number;
  quiz?: boolean;
}>();
</script>

<style scoped lang="scss">
.post_lock {
  min-height: 338px;
  background-image: url("../../../assets/img/lock.png");
  background-position: center center;
  background-size: cover;
  position: relative;
  @include flex-end;
  flex-direction: column;
  padding: 15px;
  margin: 0 -20px;
}

.icon-lock {
  font-size: 24px;
  margin-bottom: 10px;
}

.post__unlock {
  width: 100%;
  border: 1px solid $light;
  padding: 45px 15px 15px 15px;
  border-radius: 7px;
  position: relative;
}

.icon-lock {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $light;
  opacity: 0.4;
}

.post_info {
  @include flex-start;
  gap: 10px;
  position: absolute;
  top: 10px;
  li {
    @include flex-start;
    font-size: 12px;
    color: $gray;
    font-weight: 500;
  }
}
</style>
