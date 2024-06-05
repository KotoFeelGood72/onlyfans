<template>
  <NuxtLayout name="notifications">
    <div class="content">
      <ContentHeader :back="true" :settings="true" title="УВЕДОМЛЕНИЯ" />
      <TabNavigation :nav="nav" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import TabNavigation from "~/components/ui/TabNavigation.vue";
import ContentHeader from "~/components/ui/ContentHeader.vue";
const nav = ref<any>([
  { name: "Все", link: "/my/notifications" },
  { name: "Тэги", link: "/my/notifications/tags" },
  { name: "Комментарии", link: "/my/notifications/commented" },
  { name: "Упоминания", link: "/my/notifications/mentioned" },
  { name: "Подписки", link: "/my/notifications/subscribed" },
  { name: "Акции", link: "/my/notifications/message" },
]);
</script>

<style lang="scss" scoped>
.content {
  min-width: 600px;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
  min-height: 100vh;
  height: 100%;
}
</style>
