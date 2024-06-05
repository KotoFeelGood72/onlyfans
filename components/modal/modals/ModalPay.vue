<template>
  <div class="pay" @click="closeDropdownIfClickedOutside">
    <div class="pay__head">
      <h2>ПОДТВЕРДИТЬ ПОКУПКУ ПОСЛЕ ПОКУПКИ</h2>
      <p>С вас будет снята плата$11.89</p>
      <span> $9.99 + $1.90 Germany VAT </span>
    </div>
    <div class="payment-method">
      <div class="custom-select-wrapper">
        <label
          class="payment__label"
          for="payment"
          :class="{ open: dropdownOpen, selected: selectedCardText }"
          >Способ оплаты</label
        >
        <div class="custom-select" ref="dropdown" :class="{ open: dropdownOpen }">
          <div class="selected-option" @click="toggleDropdown">
            <span>{{ selectedCardText }}</span>
            <div
              class="icon_dropdown"
              :class="{ 'arrow-up': dropdownOpen, 'arrow-down': !dropdownOpen }"
            >
              <IconButton
                iconName="carbon:chevron-down"
                icon-color="gray"
                icon-size="20"
                style="width: 30px; height: 30px"
              />
            </div>
          </div>
          <div v-if="dropdownOpen" class="options">
            <div
              v-for="card in cards"
              :key="card.id"
              class="option"
              @click="selectCard(card.id)"
            >
              <img
                src="../../../assets/img/mastercard.png"
                alt="card type"
                class="card-icon"
              />
              {{ card.type }} .... .... .... {{ card.last4 }}
            </div>
            <div class="option add-new" @click="addNewCard">
              <Icon name="flowbite:plus-outline" size="20" />
              <p>Добавить новую карту</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="payment__action">
      <div class="payment_button" @click="closeModal('pay')">Отмена</div>
      <div class="payment_button" @click="closeModal('pay')">Оплатить</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "~/components/ui/IconButton.vue";
import { useModalStore } from "~/store/useModalStore";

const dropdownOpen = ref(false);
const selectedCard = ref<string | null>(null);
const { openModal, closeModal } = useModalStore();

const cards = ref([
  { id: "6994", type: "mastercard", last4: "6994" },
  { id: "1234", type: "mastercard", last4: "1234" },
]);

const selectedCardText = computed(() => {
  const card = cards.value.find((c) => c.id === selectedCard.value);
  return card ? `${card.type} .... .... .... ${card.last4}` : "";
});

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const selectCard = (id: string) => {
  selectedCard.value = id;
  dropdownOpen.value = false;
};

const addNewCard = () => {
  dropdownOpen.value = false;
  openModal("addCart");
};

const dropdown = ref<HTMLElement | null>(null);

const closeDropdownIfClickedOutside = (event: MouseEvent) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    dropdownOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdownIfClickedOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", closeDropdownIfClickedOutside);
});
</script>

<style scoped lang="scss">
.pay {
  padding: 20px;
  background-color: $white;
  border-radius: 8px;
  max-width: 400px;
  margin: 0 auto;
  min-width: 500px;
}

.payment-method {
  margin: 20px 0 20px 0;
}

.custom-select-wrapper {
  position: relative;
  width: 100%;
}

label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: white;
  padding: 0 5px;
  color: #999;
  transition: 0.2s;
  pointer-events: none;
}

label.active {
  top: -10px;
  left: 10px;
  color: #333;
  font-size: 12px;
}

.custom-select {
  position: relative;
  width: 100%;
  border: 1px solid $light;
  border-radius: 6px;

  &.open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-color: $blue;
    .options {
      width: calc(100% + 2px);
      border-left: 1px solid $blue;
      border-right: 1px solid $blue;
      border-bottom: 1px solid $blue;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}

.selected-option {
  @include flex-space;
  padding: 8px 20px;
  cursor: pointer;
}

.arrow-up {
  transform: rotate(-180deg);
}

.options {
  position: absolute;
  top: 100%;
  left: -1px;
  width: 100%;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: white;
  z-index: 1000;
}

.option {
  @include flex-start;
  padding: 10px;
  cursor: pointer;
  &.selected {
    background-color: $blue;
    color: $white;
  }
  &:hover {
    background-color: $ultra-light;
  }
}

.add-new {
  @include flex-start;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  svg {
    color: $blue;
  }
}

.card-icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}

.pay__head {
  h2 {
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 500;
  }
  p {
    margin-bottom: 5px;
  }
  span {
    color: $gray;
  }
}

.payment__label {
  color: $gray;
  font-size: 16px;
  &.selected {
    font-size: 12px;
    color: $gray;
    transform: translateY(-38px);
    background-color: $white;
    padding: 5px;
    z-index: 22;
    font-weight: 400;
  }
  &.open {
    font-size: 12px;
    color: $blue;
    transform: translateY(-38px);
    background-color: $white;
    padding: 5px;
    z-index: 22;
    font-weight: 400;
  }
}

.payment__action {
  @include flex-end;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  color: $blue;
  & > div {
    border-radius: 30px;
    padding: 8px 10px;
    cursor: pointer;
    &:hover {
      color: $accent;
      background-color: $ultra-light;
    }
  }
}

.icon_dropdown {
  margin-right: -10px;
}
</style>
