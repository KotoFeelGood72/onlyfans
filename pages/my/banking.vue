<template>
  <NuxtLayout>
    <div class="main">
      <div class="content">
        <ContentHeader title="Банковские" :banking="true" />
        <Alert iconName="mingcute:alert-line" type="danger">
          <template v-slot:title>Пожалуйста, заполните следующие поля:</template>
          <template v-slot:content
            ><div>- изображение аватара</div>
            <div>- изображение заголовка</div>
            <div>- обо мне информация</div></template
          >
        </Alert>
        <div class="banking__info">
          <div class="banking__bg">
            <img src="../../assets/img/default_header_image.png" alt="" />
            <div class="banking__upload"><Icon name="mdi-light:camera" size="25" /></div>
          </div>
          <div class="avatar__banking">
            <AvatarCircle size="large" />
          </div>
        </div>
        <div class="banking__action">
          <Textareas label="Био" :max="1000" id="profile-setting-bio" />
          <div class="banking__save">
            <Button
              label="Сохранить изменения"
              colorSheme="primary"
              style="padding: 10px 20px"
            />
          </div>
        </div>
      </div>
      <SidebarBank />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import SidebarBank from "~/components/shared/SidebarBank.vue";
import ContentHeader from "~/components/ui/ContentHeader.vue";
import AvatarCircle from "~/components/interface/AvatarCircle.vue";
import Textareas from "~/components/ui/Textareas.vue";
import Alert from "~/components/card/Alert.vue";
import Button from "~/components/ui/Button.vue";
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  gap: 30px;
}

.content {
  min-width: 600px;
  max-width: 600px;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
  min-height: 100vh;
  height: 100%;
}

.banking__bg {
  width: 100%;
  height: 180px;
  @include flex-center;
  position: relative;
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    opacity: 0.12;
    pointer-events: none;
    content: "";
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}

.banking__upload {
  color: $white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 22;
  cursor: pointer;
}

.avatar__banking {
  padding-left: 16px;
  margin-top: -40px;
  padding-bottom: 20px;
}

.banking__action {
  padding: 0 16px;
}
.banking__save {
  margin-top: 20px;
}
.banking__save {
  display: inline-flex;
  @include flex-end;
}
</style>
