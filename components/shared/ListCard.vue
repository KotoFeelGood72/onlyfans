<template>
  <div class="payments">
    <Divider />
    <Alert iconName="mingcute:alert-line" type="danger">
      <template v-slot:title
        >Ваша карта была отклонена, <NuxtLink to="/">нажмите здесь</NuxtLink>, чтобы
        добавить кредитную карту в свой аккаунт</template
      >
    </Alert>
    <ul class="row-cards">
      <li>
        <div class="left__col">
          <img src="../../assets/img/mastercard.png" alt="" />
          <span>mastercard</span>
          <span> ···· ···· ···· 6994</span>
        </div>
        <div class="right_col">
          <span>Срок годности 08/25</span>
          <IconButton
            iconName="tabler:dots"
            iconSize="20"
            name="Больше"
            iconColor="gray"
            style="height: 20px"
          />
        </div>
      </li>
    </ul>
    <Divider />
    <p class="payments__quote">
      Мы полностью соблюдаем стандарты безопасности данных индустрии платежных карт.
    </p>
    <Alert iconName="ph:info-light" type="info">
      <template v-slot:title
        >Сборы в выписке по вашей кредитной карте будут отображаться как
        OnlyFans</template
      >
    </Alert>
    <CardPayments />
  </div>
</template>

<script setup lang="ts">
import Alert from "../card/Alert.vue";
import IconButton from "../ui/IconButton.vue";
import Divider from "../ui/Divider.vue";
import CardPayments from "../card/CardPayments.vue";
</script>

<style scoped lang="scss">
.row-cards {
  padding-bottom: 30px;
  li {
    padding: 0 16px;
    @include flex-space;
    gap: 20px;
    font-size: 14px;
    border-bottom: 1px solid $light;
    padding-bottom: 4px;
    &:hover {
      .left__col,
      .right_col {
        color: $black;
      }
    }
    img {
      max-width: 24px;
    }
  }
}

.left__col {
  @include flex-start;
  color: $gray;
  gap: 5px;
  transition: all 0.3s ease;
}

.right_col {
  @include flex-end;
  color: $gray;
  gap: 10px;
  transition: all 0.3s ease;
}

a {
  color: $blue;
}

.payments__quote {
  padding: 16px 16px 0 16px;
  line-height: 22px;
}
</style>
