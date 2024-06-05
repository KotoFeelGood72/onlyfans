<template>
  <NuxtLayout>
    <div class="main">
      <div class="content">
        <ProfileHead />
        <div class="border-block">
          <Tabs :labels="['Нет постов', 'Нет медиа']">
            <template #tab-0>
              <EmptyImage />
            </template>
            <template #tab-1>
              <EmptyImage />
            </template>
          </Tabs>
        </div>
      </div>
      <SidebarProfile />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import SidebarProfile from "~/components/shared/SidebarProfile.vue";
import ProfileHead from "~/components/head/ProfileHead.vue";
import EmptyImage from "~/components/empty/EmptyImage.vue";
import Tabs from "./../components/ui/Tabs.vue";
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
}
.content {
  min-width: 600px;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
  height: 100%;
  min-height: 100vh;
}

.border-block {
  border-top: 8px solid $marked;
}
</style>
