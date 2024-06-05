<template>
  <div class="profileSettings">
    <Divider :border="false" />
    <ListLinks
      label="Предпочтения"
      :menu="[
        { name: 'Push-уведомления', link: '/my/settings/notifications/webpush' },
        { name: 'Уведомления электронной почты', link: '/' },
        { name: 'Уведомления на сайте', link: '/my/settings/notifications/site' },
        { name: 'Уведомления о тосте', link: '/my/settings/notifications/toast' },
      ]"
    />
    <Divider :border="false" />
    <ListLinks
      label=" Прочее"
      :menu="[{ name: 'Телеграм-бот', link: '/my/settings/notifications/telegram' }]"
    />
  </div>
</template>

<script setup lang="ts">
import Divider from "~/components/ui/Divider.vue";
import ListLinks from "~/components/ui/ListLinks.vue";

definePageMeta({
  title: "Уведомления",
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
