<template>
  <div class="sidebarSettings">
    <div class="sidebarSettings__head">
      <ContentHeader title="Настройки" />
    </div>
    <Divider :border="false" />
    <div class="sidebarSettings__menu">
      <div class="sidebarSettings__label">@u406691674</div>
      <nav>
        <NuxtLink
          v-for="(item, i) in settingsMenu"
          :key="'settings-item-menu-' + i"
          :to="item.link"
        >
          <p>{{ item.name }}</p>
          <Icon name="ci:chevron-right" size="20" />
        </NuxtLink>
      </nav>
    </div>
    <div class="sidebarSettings__display">
      <div class="sidebarSettings__label">Общие</div>
      <nav>
        <NuxtLink to="/my/settings/display">
          <p>Отображение</p>
          <Icon name="ci:chevron-right" size="20" />
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentHeader from "../ui/ContentHeader.vue";
import Divider from "../ui/Divider.vue";
const settingsMenu = ref<any>([
  { name: "Профиль", link: "/my/settings/profile" },
  { name: "Учётная запись", link: "/my/settings/account" },
  { name: "Конфиденциальность и безопасность", link: "/my/settings/security" },
  { name: "Уведомления", link: "/my/settings/notifications" },
]);
</script>

<style scoped lang="scss">
.sidebarSettings {
  flex-grow: 1;
  border-left: 1px solid $light;
  min-height: 100vh;
  max-width: 332px;
  position: sticky;
  top: 0;
}

.sidebarSettings__label {
  @include flex-start;
  font-weight: 500;
  min-height: 48px;
  padding: 10px 15px;
  border-bottom: 1px solid $light;
}

nav {
  a {
    @include flex-space;
    gap: 20px;
    padding: 10px 15px;
    min-height: 48px;
    border-bottom: 1px solid $light;
    position: relative;
    line-height: 26px;

    &.router-link-active {
      background-color: $ultra-light;
    }
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: "";
      width: 98%;
      height: 78%;
      background-color: $ultra-light;
      border-radius: 5px;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
    }
    &:hover {
      &:not(.router-link-active) {
        color: $blue;
        &:after {
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
}

.sidebarSettings__menu {
}
</style>
