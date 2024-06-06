<template>
  <div class="profileSettings">
    <div class="profileSettings__preview">
      <div class="profileSettings_preview__bg">
        <img
          src="https://thumbs.onlyfans.com/public/files/thumbs/w760/w/wz/wz7/wz7xdkimgylftirvrwuuvaoswv0rgbwp1677947577/304082340/header.jpg"
          alt=""
        />
      </div>
      <div class="profileSettings_preview__avatar">
        <AvatarCircle size="large" />
      </div>
    </div>
    <div class="profileSetting__form">
      <Inputs label="Пользователь" v-model="form.uid" :max="20" />
      <Inputs label="Отображаемое имя" v-model="form.name" :max="40" />
      <Textareas label="Био" v-model="form.bio" :max="1000" id="profile-setting-bio" />
      <Inputs label="Местоположение" v-model="form.geo" :max="64" />
      <Inputs label="URL-адрес веб-сайта" v-model="form.url" :max="100" />
      <Inputs label="Список желаний Amazon" v-model="form.amazon" :max="100" />
    </div>
    <Divider />
    <ListLinks
      label="Подписка"
      :menu="[{ name: 'Абонентская цена и пакеты', link: '/' }]"
    />
    <Divider :border="false" />
    <ListLinks
      label=" Дополнительная информация "
      :menu="[{ name: ' Счет Spotify ', link: '/' }]"
    />
    <Divider :border="false" />
    <ListLinks
      label=" Web3 "
      :menu="[
        { name: ' Аватар Web3 ', link: '/' },
        { name: ' NFT ', link: '/' },
      ]"
    />
    <Divider />
    <ListLinks
      label="Связанные настройки"
      :menu="[
        { name: 'Конфиденциальность и безопасность', link: '/my/settings/security' },
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import AvatarCircle from "~/components/interface/AvatarCircle.vue";
import Inputs from "~/components/ui/Inputs.vue";
import Textareas from "~/components/ui/Textareas.vue";
import Divider from "~/components/ui/Divider.vue";
import ListLinks from "~/components/ui/ListLinks.vue";

const form = ref<any>({
  uid: "",
  name: "",
  bio: "",
  geo: "",
  url: "",
  amazon: "",
});

definePageMeta({
  title: "Редактировать профиль",
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
