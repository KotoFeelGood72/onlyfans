<template>
  <div class="banking_empty">
    <h2>НАЧНИТЕ ЗАРАБАТЫВАТЬ</h2>
    <p>
      Подтвердите свою учетную запись, чтобы настроить стоимость банковских операций и
      подписки.
    </p>
    <div class="bank__icon"><Icon name="prime:building-columns" size="50" /></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.banking_empty {
  border: 1px solid $light;
  border-radius: 5px;
  padding: 16px;
  margin-top: 20px;
  position: sticky;
  top: 20;
  right: 0;
}

h2 {
  color: $gray;
  margin: 5px 0 16px 0;
}
p {
  font-size: 14px;
  color: $gray;
}

.bank__icon {
  @include flex-center;
  color: $light;
  margin: 30px 0;
}
</style>
