<template>
  <div class="empty_cash">
    <p>ПОСЛЕДНИЕ ТРАНЗАКЦИИ</p>
    <div class="empty_cash__center">
      <Icon name="ph:bag-light" size="50" />
      <span>Платежи пока не произведены.</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.empty_cash {
  @include flex-center;
  flex-direction: column;
  padding: 11px 16px 13px;
  border: 1px solid $light;
  border-radius: 5px;
  align-items: flex-start;
  width: 100%;

  & > p {
    font-weight: 500;
    color: $gray;
    margin-bottom: 26px;
  }
}

.empty_cash__center {
  @include flex-center;
  flex-direction: column;
  color: $light;
  gap: 15px;
  font-weight: 500;
  font-size: 16px;
  width: 100%;
}
</style>
