<template>
  <div class="add_cart">
    <div class="add_cart__head">
      <div class="add_cart__title">Добавить карточку</div>
    </div>
    <div class="add_cart__body">
      <div class="add_cartBody__title">Платежные сведения</div>
      <div class="add_cartBody__description">
        Мы полностью соблюдаем стандарты безопасности данных индустрии платежных карт.
      </div>
      <div class="add_cart__form">
        <div class="form-row">
          <Select :items="countries" v-model="selectedCountry" label="Страна" />
          <Select :items="countries" v-model="selectedCountry" label="Страна" />
        </div>
        <div class="form-row">
          <Inputs label="Адрес" />
        </div>
        <div class="form-row">
          <Inputs label="Город" />
          <Inputs label="Почтовый индекс" />
        </div>
        <div class="add_cartBody__title">СВЕДЕНИЯ О КАРТЕ</div>
        <div class="form-row">
          <Inputs label="Электронная почта" />
          <Inputs label="Имя на карточке" />
        </div>
        <div class="form-row">
          <InputCardMask label="Номер карты" v-model="card" />
        </div>
        <div class="form-row">
          <Inputs label="Истечение" />
          <Inputs label="CVC" />
        </div>
        <Radio v-model="agreement" id="agreement" class="agreement" />
        <div class="card__credit">
          <div class="card_credit__icon">
            <Icon
              name="mdi:information-variant-circle-outline"
              size="25"
              class="icon-alert"
            />
          </div>
          <div class="card_credit__content">
            OnlyFans сделает единовременную плату в размере $0.10 при добавлении вашей
            платежной карты. Сборы в выписке по кредитной карте будут отображаться как
            «OnlyFans».
          </div>
        </div>
        <CardPayments />
        <span class="payment__info"
          >Fenix International Limited, 9th Floor, 107 Cheapside, London, EC2V 6DN Fenix
          Internet LLC, 1000 N.West Street, Suite 1200, Wilmington, Delaware, 19801
          USA</span
        >
      </div>
    </div>
    <div class="add_cart_bottom">
      <div class="add_cart_btn" @click="changeModal">Отмена</div>
      <div class="add_cart_btn">Отправить</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Select from "~/components/ui/Select.vue";
import Inputs from "~/components/ui/Inputs.vue";
import InputCardMask from "~/components/ui/InputCardMask.vue";
import Radio from "~/components/ui/Radio.vue";
import CardPayments from "~/components/card/CardPayments.vue";
import { useModalStore } from "~/store/useModalStore";

const card = ref<any>("");
const agreement = ref<boolean>(false);

const { closeModal, openModal } = useModalStore();

function changeModal() {
  closeModal("addCart");
  // openModal("subscribe");
}

const countries = ref<any>([
  { icon: "Africa", value: "AF", label: "Африка" },
  { icon: "Argentina", value: "AR", label: "Аргентина" },
  { icon: "Armenia", value: "AM", label: "Армения" },
  { icon: "Australia", value: "AU", label: "Австралия" },
  { icon: "Austria", value: "AT", label: "Австрия" },
  { icon: "Belarus", value: "BY", label: "Беларусь" },
  { icon: "Belgium", value: "BE", label: "Бельгия" },
  { icon: "Bolivia", value: "BO", label: "Боливия" },
  { icon: "Brazil", value: "BR", label: "Бразилия" },
  { icon: "Bulgaria", value: "BG", label: "Болгария" },
  { icon: "Cambodia", value: "KH", label: "Камбоджа" },
  { icon: "Cameroon", value: "CM", label: "Камерун" },
  { icon: "Canada", value: "CA", label: "Канада" },
  { icon: "Chile", value: "CL", label: "Чили" },
  { icon: "China", value: "CN", label: "Китай" },
  { icon: "Colombia", value: "CO", label: "Колумбия" },
  { icon: "Cuba", value: "CU", label: "Куба" },
  { icon: "Curaçao", value: "CW", label: "Кюрасао" },
  { icon: "Cyprus", value: "CY", label: "Кипр" },
  { icon: "Czech", value: "CZ", label: "Чехия" },
  { icon: "Grenadines", value: "GD", label: "Гренада" },
  { icon: "Guinea", value: "GN", label: "Гвинея" },
  { icon: "Korea", value: "KR", label: "Южная Корея" },
  { icon: "Philippines", value: "PH", label: "Филиппины" },
  { icon: "Poland", value: "PL", label: "Польша" },
  { icon: "Portugal", value: "PT", label: "Португалия" },
  { icon: "Romania", value: "RO", label: "Румыния" },
  { icon: "Russian", value: "RU", label: "Россия" },
  { icon: "Serbia", value: "RS", label: "Сербия" },
  { icon: "Singapore", value: "SG", label: "Сингапур" },
  { icon: "Slovakia", value: "SK", label: "Словакия" },
  { icon: "Slovenia", value: "SI", label: "Словения" },
  { icon: "Spain", value: "ES", label: "Испания" },
  { icon: "Thailand", value: "TH", label: "Таиланд" },
  { icon: "Turkey", value: "TR", label: "Турция" },
  { icon: "UAE", value: "AE", label: "ОАЭ" },
  { icon: "Uganda", value: "UG", label: "Уганда" },
  { icon: "UK", value: "GB", label: "Великобритания" },
  { icon: "Ukraine", value: "UA", label: "Украина" },
  { icon: "Uruguay", value: "UY", label: "Уругвай" },
  { icon: "USA", value: "US", label: "США" },
]);

const selectedCountry = ref(null);
</script>

<style scoped lang="scss">
.add_cart {
  background-color: $white;
  max-width: 500px;
  border-radius: 7px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.add_cartBody__description {
  margin-bottom: 30px;
  line-height: 24px;
}
.add_cart__body {
  padding: 20px;
}

.add_cart__title {
  padding: 14px 16px;
  border-bottom: 1px solid $light;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
}

.add_cartBody__title {
  color: $gray;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 16px;
}

.form-row {
  @include flex-space;
  margin-bottom: 20px;
  gap: 15px;
  :deep(.select-wrapper) {
    width: 100%;
  }
  :deep(.input) {
    width: 100%;
  }
}

.agreement {
  margin-bottom: 50px;
}

.card__credit {
  border: 1px solid $light-blue;
  padding: 16px 16px 16px 50px;
  border-radius: 7px;
  position: relative;
  line-height: 24px;
  margin-bottom: 20px;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 100%;
    content: "";
    background-color: $ultra-light;
  }
}

.card_credit__icon {
  position: absolute;
  top: 10px;
  left: 10px;
  color: $blue;
}

.payment__info {
  font-size: 12px;
  font-weight: 300;
  color: $gray;
  max-width: 450px;
  margin: 10px auto 0 auto;
  text-align: center;
  @include flex-center;
  line-height: 20px;
}

.add_cart_bottom {
  @include flex-end;
  gap: 5px;
  border-top: 1px solid $light;
  padding: 10px 0;
  div {
    border-radius: 30px;
    color: $blue;
    text-transform: uppercase;
    font-weight: 500;
    padding: 8px 13px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    &:hover {
      background-color: $ultra-light;
    }
  }
}

.add_cart__form {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-height: calc(100vh - 300px);
  overflow-y: auto;
  padding: 10px 0;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
}
</style>
