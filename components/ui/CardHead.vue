<template>
  <div class="card_head">
    <NuxtLink :to="link">
      <AvatarCircle
        label="OnlyFans"
        txt="@onlyfans"
        avatar="https://thumbs.onlyfans.com/public/files/thumbs/c50/m/mk/mka/mkamcrf6rjmcwo0jj4zoavhmalzohe5a1640180203/avatar.jpg"
        size="medium"
      />
    </NuxtLink>
    <div class="card__info">
      <span class="card__date">{{ date }}</span>
      <div class="card_other__btn" v-tooltip="'Больше'">
        <Icon name="tabler:dots" size="20" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarCircle from "../interface/AvatarCircle.vue";

const props = withDefaults(
  defineProps<{
    date: string;
    link: string;
  }>(),
  {
    date: " 13 часов назад ",
    link: "/",
  }
);
</script>

<style scoped lang="scss">
.card_head {
  @include flex-space;
  align-items: flex-start;
  padding: 16px;
}

.card__date {
  font-size: 14px;
  color: $gray;
}

.card__info {
  @include flex-end;
  gap: 15px;
  color: $gray;
}

.card_other__btn {
  cursor: pointer;
}
</style>
