<template>
  <div class="usersTemplate">
    <ContentHeader />
    <Tabs :labels="['ПОЛЬЗОВАТЕЛИ', 'ПОСТЫ']" margin="none">
      <template #tab-0>
        <SortHead title="Default" />
      </template>
      <template #tab-1> </template>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import ContentHeader from "~/components/ui/ContentHeader.vue";
import Tabs from "~/components/ui/Tabs.vue";
</script>

<style scoped lang="scss"></style>
