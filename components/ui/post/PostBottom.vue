<template>
  <div class="post_bottom">
    <div class="post_bottom__left">
      <IconButton
        iconName="ph:heart-light"
        iconSize="25"
        name="Нравится"
        iconColor="gray"
      />
      <IconButton
        iconName="basil:comment-outline"
        iconSize="25"
        name="Комментарий"
        iconColor="gray"
      />
      <div class="post__btn">
        <Icon name="ph:currency-circle-dollar-light" size="22" />
        <span>ОТПРАВИТЬ ЧАЕВЫЕ</span>
      </div>
    </div>
    <div class="post_bottom__right">
      <IconButton iconName="bi:bookmark" iconSize="18" iconColor="gray" />
    </div>
    <div class="post_bottom__full">
      <div class="post_bottom__like"><span>195</span> Любит</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "../IconButton.vue";
</script>

<style scoped lang="scss">
.post_bottom {
  @include flex-space;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 8px;
}

.post_bottom__full {
  width: 100%;
}

.post_bottom__left {
  @include flex-start;
  gap: 2px;
  margin-left: -7px;
}

.post__btn {
  cursor: pointer;
  @include flex-start;
  font-weight: 500;
  font-size: 14px;
  color: $gray;
  gap: 4px;
  border-radius: 30px;
  padding: 5px 10px;
  transition: all 0.3s ease;
  &:hover {
    background-color: $ultra-light;
    color: $accent;
  }
}

.post_bottom__like {
  font-size: 14px;
  color: $black;
}
</style>
