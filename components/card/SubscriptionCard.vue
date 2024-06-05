<template>
  <div class="sub_card">
    <div class="sub_card__title">ПОДПИСКА</div>
    <div class="sub_card__btn">
      <p>ПОДПИШИТЕСЬ</p>
      <p>БЕСПЛАТНО</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.sub_card {
  padding: 12px 16px 20px 16px;
}

.sub_card__title {
  font-weight: 500;
  color: $gray;
  padding-bottom: 12px;
}

.sub_card__btn {
  @include flex-space;
  background-color: $blue;
  border-radius: 30px;
  padding: 16px;
  font-size: 14px;
  color: $white;
  font-weight: 500;
  text-transform: uppercase;
  height: 48px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: $accent;
  }
}
</style>
