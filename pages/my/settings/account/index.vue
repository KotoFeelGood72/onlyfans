<template>
  <div class="profileSettings">
    <Divider :border="false" />
    <ListLinks
      label="Информация об учетной записи"
      :menu="[
        {
          name: 'Имя пользователя',
          subname: '@u406691674',
          link: '/my/settings/account/username',
        },
        {
          name: 'Электронная почта',
          subname: 'kotofeelgood@gmail.com',
          link: '/my/settings/account/email',
        },
        { name: 'Номер телефона', link: '/' },
      ]"
    />
    <Divider :border="false" />
    <ListLinks
      label=" Связанные счета"
      :menu="[
        { name: 'Твиттер', link: '/' },
        { name: 'Аккаунт', subname: 'kotofeelgood@gmail.com', link: '/' },
      ]"
    />
    <Divider :border="false" />
    <ListLinks
      label=" Связанные учетные записи"
      :menu="[{ name: 'Подключите другую учетную запись Onlyfans', link: '/' }]"
    />
    <Divider :border="false" />
    <ListLinks
      label=" Безопасность"
      :menu="[
        { name: 'Пароль', link: '/' },
        { name: 'Сеансы входа', link: '/' },
        { name: 'Двухэтапная проверка подлинности', link: '/' },
        { name: 'Вход без пароля', link: '/' },
      ]"
    />
    <Divider :border="false" />
    <ListLinks
      label=" Управление счетом"
      :menu="[{ name: 'Удалить учетную запись', link: '/' }]"
    />
  </div>
</template>

<script setup lang="ts">
import Divider from "~/components/ui/Divider.vue";
import ListLinks from "~/components/ui/ListLinks.vue";

definePageMeta({
  title: "Учетная запись",
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
