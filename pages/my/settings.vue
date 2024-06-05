<template>
  <NuxtLayout>
    <div class="main">
      <SiderbarProfileSettings />
      <div class="content">
        <div class="content_head">
          <h2>{{ route.meta.title }}</h2>
          <div class="content_save" v-if="route.meta.title === 'Редактировать профиль'">
            <button type="button">Сохранить</button>
          </div>
        </div>
        <NuxtPage />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import SiderbarProfileSettings from "~/components/shared/SiderbarProfileSettings.vue";
import { useRoute } from "vue-router";

const route = useRoute();

useHead({
  title: route.meta.title ? route.meta.title : "",
});
</script>

<style lang="scss" scoped>
.content_head {
  @include flex-space;
  height: 55px;
  padding: 16px;
  position: sticky;
  top: 0;
  background-color: $white;
  z-index: 22;
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid $light;
    content: "";
  }
  h2 {
    text-transform: uppercase;
    font-size: 19px;
    font-weight: 500;
  }
}

.content_save {
  button {
    background-color: $blue;
    color: $white;
    border-radius: 30px;
    padding: 8px 16px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    font-family: "Roboto";
    cursor: pointer;
  }
}
.main {
  @include flex-start;
  align-items: flex-start;
  // gap: 30px;
  width: 100%;
}
.content {
  // min-width: 600px;
  flex-grow: 1;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
  height: 100%;
  min-height: 100vh;
}

.border-block {
  border-top: 8px solid $marked;
}
</style>
