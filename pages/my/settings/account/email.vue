<template>
  <div class="edit-email">
    <Divider :border="false" />
    <div class="email-page">
      <Inputs
        v-model="email"
        label="Текущий адрес электронной почты"
        :disabled="true"
        description="Электронная почта kotofeelgood@gmail.com проверена"
      />
    </div>
    <div class="rebase-btn">
      <button type="button">ОБНОВИТЬ АДРЕС ЭЛЕКТРОННОЙ ПОЧТЫ</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "~/components/ui/Inputs.vue";
import Divider from "~/components/ui/Divider.vue";
const email = ref<string>("kotofeelgood@gmail.com");

definePageMeta({
  title: "Учетная запись",
});

const userName = ref<string>("");
</script>

<style scoped lang="scss">
.email-page {
  padding: 30px 16px 25px 16px;
  border-bottom: 1px solid $light;
}
.edit-email {
  padding-bottom: 60px;
}

.rebase-btn {
  padding: 12px 16px 11px;
  button {
    width: 100%;
    border-radius: 30px;
    border: 1px solid $light;
    padding: 5px 20px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    color: $blue;
    font-family: "Roboto";
    min-height: 36px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: $ultra-light;
      border-color: $blue;
    }
  }
}
</style>
