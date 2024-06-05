<template>
  <div class="chats_chead">
    <IconButton size="24" />
    <div class="chats_head__content">
      <div class="chats_head__title">
        Jaqueline ❤️‍🔥 #1 LATINA
        <span>
          <Icon name="material-symbols-light:verified-outline-rounded" size="20" />
        </span>
      </div>
      <div class="chats_head__actions">
        <div
          class="chat_head__online"
          :class="{ online: state === 'online', offline: state === 'offline' }"
        >
          Доступно сейчас
        </div>
        <div class="icon__actions" v-tooltip.bottom="'Списки'">
          <Icon name="ic:outline-star" size="15" />
        </div>
        <div class="icon__actions" v-tooltip.bottom="'Уведомления об отключении звука'">
          <Icon
            :name="volume ? 'ion:notifications-outline' : 'ion:notifications-off-outline'"
            size="13"
          />
        </div>
        <div class="icon__actions" v-tooltip.bottom="'No pinned messages'">
          <Icon name="codicon:pinned" size="14" />
        </div>
        <div class="icon__actions">
          <Icon name="solar:gallery-bold" size="14" />
          <span>Галлерея</span>
        </div>
        <div class="icon__actions">
          <Icon name="iconamoon:search" size="14" />
          <span>Найти</span>
        </div>
      </div>
    </div>
    <IconButton iconSize="24" iconName="mage:dots" iconColor="gray" name="Больше" />
  </div>
</template>

<script setup lang="ts">
import IconButton from "../IconButton.vue";

const props = withDefaults(
  defineProps<{
    state: "online" | "offline";
    volume: boolean;
  }>(),
  {
    state: "online",
  }
);
</script>

<style scoped lang="scss">
.chats_chead {
  @include flex-start;
  border-bottom: 1px solid $light;
  height: 57px;
}

.chats_head__actions {
  @include flex-start;

  & > div {
    border-right: 1px solid $light;
    padding-right: 10px;
    margin-right: 10px;
    @include flex-center;
    font-size: 11px;
    color: $gray;
  }
}

.chat_head__online {
  position: relative;
  padding-left: 15px;
  &:before {
    position: absolute;
    top: 50%;
    left: 0;
    width: 10px;
    height: 10px;
    content: "";
    border-radius: 100%;
    transform: translateY(-50%);
    border: 2px solid $white;
    box-shadow: 0 0 2px 0 #00000034;
  }
  &.online {
    &:before {
      background-color: rgb(53, 208, 99);
    }
  }
  &.offline {
  }
}

.icon__actions {
  @include flex-center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: $blue;
  }
}

.chats_head__title {
  margin-bottom: 3px;
}

.chats_head__content {
  flex-grow: 1;
}
</style>
