<template>
  <div class="cash">
    <div class="cash__main">
      <div class="cash__head">
        <p>$0</p>
        <span>Кредиты на кошелек</span>
      </div>
      <div class="cash__body">
        <p class="cash__title">ДОБАВЛЯЙТЕ СРЕДСТВА НА СВОЙ КОШЕЛЕК</p>
        <ul class="cash_item__links">
          <li>10</li>
          <li>20</li>
          <li>50</li>
          <li>100</li>
        </ul>
        <div class="toggle-custom">
          <Toggle
            name="Сделать кошелек основным методом для ребиллей"
            :borderTop="false"
          />
        </div>
      </div>
      <div class="cash__bottom">
        <Toggle name="Автоподзарядка" :borderTop="false" :borderBottom="false" />
      </div>
    </div>
    <EmptyCash />
  </div>
</template>

<script setup lang="ts">
import Toggle from "../ui/Toggle.vue";
import EmptyCash from "../empty/EmptyCash.vue";
</script>

<style scoped lang="scss">
.cash {
  @include flex-start;
  flex-direction: column;
  gap: 16px;
  max-width: 368px;
}
.cash__main {
  border: 1px solid $light;
  border-radius: 5px;
}

.cash__head {
  //   @include flex-space;
  gap: 20px;
  padding: 16px;
  border-bottom: 1px solid $light;
  p {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  span {
    font-size: 19px;
  }
}

.cash__body {
  padding: 16px 16px 0 16px;
}

.cash__title {
  font-weight: 500;
  color: $gray;
  line-height: 24px;
  margin-bottom: 16px;
  max-width: 280px;
}

.cash_item__links {
  @include flex-start;
  gap: 10px;
  li {
    cursor: pointer;
    border: 1px solid $light;
    border-radius: 30px;
    transition: all 0.3s ease;
    font-size: 14px;
    color: $blue;
    padding: 8px 30px;
    font-weight: 500;
    &:hover {
      border-color: $blue;
      background-color: $ultra-light;
      color: $accent;
    }
  }
}

.toggle-custom {
  //   padding: 16px 0;
  padding-top: 10px;
  margin: 0 -16px;
}
</style>
