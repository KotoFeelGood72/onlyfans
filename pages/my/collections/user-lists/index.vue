<template>
  <div class="userList">
    <div class="content">
      <ContentHeader title="Коллекции" :search="true" :added="true" />
      <Tabs :labels="['СПИСКИ ПОЛЬЗОВАТЕЛЕЙ', 'ЗАКЛАДКИ']" margin="none">
        <template #tab-0>
          <SortHead title="Люди" />
          <ul class="list">
            <li class="list-item">
              <CardPeople />
            </li>
            <li class="list-item">
              <CardPeople :peopleCount="2" />
            </li>
            <li class="list-item">
              <CardPeople :peopleCount="3" />
            </li>
          </ul>
        </template>
        <template #tab-1> </template>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContentHeader from "~/components/ui/ContentHeader.vue";
import Tabs from "~/components/ui/Tabs.vue";
import SortHead from "~/components/ui/SortHead.vue";
import CardPeople from "~/components/card/CardPeople.vue";
</script>

<style scoped lang="scss">
.content {
  min-height: 100vh;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
  min-width: 360px;
}

.list-item {
  &:not(:last-child) {
    border-bottom: 1px solid $light;
  }
}
</style>
