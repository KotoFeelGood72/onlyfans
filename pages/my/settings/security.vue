<template>
  <div class="profileSettings">
    <Divider :border="false" />
    <div class="item_head">Профиль</div>
    <Toggle name="Показать статус активности" />
    <Toggle name="Показать предложения по подписке" :border-top="false" />
  </div>
</template>

<script setup lang="ts">
import Divider from "~/components/ui/Divider.vue";
import Toggle from "~/components/ui/Toggle.vue";

definePageMeta({
  title: "КОНФИДЕНЦИАЛЬНОСТЬ И БЕЗОПАСНОСТЬ",
});
</script>

<style scoped lang="scss">
.profileSettings {
  padding-bottom: 60px;
  width: 100%;
  flex-grow: 1;
}

.item_head {
  height: 48px;
  padding: 16px;
  font-weight: 500;
}
</style>
