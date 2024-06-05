<template>
  <div class="profileSettings">
    <Divider :border="false" />
    <ListLinks
      label="Связанные с вами и вашими сообщениями"
      :checkboxes="[
        { name: 'Новый комментарий', isChecked: true },
        { name: 'Новые лайки', isChecked: true },
        { name: 'Новый подписчик', isChecked: true },
        { name: 'Новая подписка из пробной версии', isChecked: true },
      ]"
    />
    <Divider :border="false" />
    <ListLinks
      label="Подписки и последующие"
      :checkboxes="[
        { name: 'Скидки от пользователей, за которых я следовал', isChecked: true },
        { name: 'Новый поток', isChecked: true },
        { name: 'Предстоящие напоминания о потоке', isChecked: true },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import Divider from "~/components/ui/Divider.vue";
import ListLinks from "~/components/ui/ListLinks.vue";
import Toggle from "~/components/ui/Toggle.vue";

definePageMeta({
  title: "Уведомления на сайте",
});
</script>

<style scoped lang="scss">
.profileSettings {
  padding-bottom: 60px;
  width: 100%;
  flex-grow: 1;
}

.profileSettings_preview__bg {
  width: 100%;
  height: 180px;
  margin-bottom: -50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.profileSettings_preview__avatar {
  border: 2px solid $white;
  border-radius: 100%;
  display: inline-flex;
  margin-left: 20px;
  box-shadow: 0 0 20px 0 #00000013;
}

.profileSetting__form {
  padding: 20px 16px;
  @include flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  &:deep(div) {
    width: 100%;
  }
}

:deep(textarea)::-webkit-scrollbar {
  width: 0;
}

/* ie 10+ */
:deep(textarea) {
  -ms-overflow-style: none;
}

/* фф (свойство больше не работает, других способов тоже нет)*/
:deep(textarea) {
  overflow: -moz-scrollbars-none;
}
</style>
