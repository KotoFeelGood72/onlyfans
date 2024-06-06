<template>
  <div class="content">
    <ContentHeader title="Главная" :back="false" :other="true" />
    <FormTrigger />
    <PostNotificationCard />
    <div class="post-list">
      <TapeCard
        v-for="item in 12"
        :key="'post-item-tape-' + item"
        :link="'onlyfans-' + item"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import TapeCard from "../card/TapeCard.vue";
import FormTrigger from "../ui/FormTrigger.vue";
import ContentHeader from "../ui/ContentHeader.vue";
import PostNotificationCard from "../card/PostNotificationCard.vue";
</script>

<style scoped lang="scss">
.content {
  max-width: 600px;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
}
</style>
