<template>
  <NuxtLayout>
    <div class="content">
      <ContentHeader title="ПЛАТЕЖНЫЕ КАРТЫ" :payments="true" />
      <Tabs :labels="['Ваши карты', 'Платежи']" margin="none">
        <template #tab-0> <ListCard /></template>
        <template #tab-1> </template>
      </Tabs>
    </div>
    <SidebarBalans />
  </NuxtLayout>
</template>

<script setup lang="ts">
import ContentHeader from "~/components/ui/ContentHeader.vue";
import Tabs from "~/components/ui/Tabs.vue";
import SidebarBalans from "~/components/shared/SidebarBalans.vue";
import ListCard from "~/components/shared/ListCard.vue";
</script>

<style scoped lang="scss">
.content {
  border-left: 1px solid $light;
  border-right: 1px solid $light;
  min-height: 100vh;
  height: 100%;
}
</style>
