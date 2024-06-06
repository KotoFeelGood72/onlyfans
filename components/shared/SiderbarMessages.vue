<template>
  <div class="siderbar_messages">
    <div class="siderbar_messages__head">
      <div class="siderbar_messages__title">
        <IconButton name="Поиск" iconName="solar:arrow-left-linear" iconSize="24" />
        <h2>Сообщения</h2>
      </div>
      <div class="sidebar_messages__actions">
        <IconButton name="Поиск" iconName="mingcute:search-line" iconSize="22" />
        <IconButton name="Больше" iconName="cil:plus" iconSize="22" />
      </div>
    </div>
    <div class="sidebar_messages__prehead">
      <p>СНАЧАЛА НОВЫЕ</p>
      <!-- <div class="sidebar_sortering__btn">
        <IconButton
          name="Больше"
          iconName="material-symbols:sort"
          iconSize="22"
          iconColor="gray"
          @click.stop="toggleIsMore"
        />
      </div> -->
      <MoreChatTooltipe />
    </div>
    <ul class="chat_filtered">
      <li v-for="(item, i) in sortering" :key="'sortering-item-' + i">
        {{ item }}
      </li>
      <li class="tab_edit_btn">
        <Icon name="mdi:pencil-outline" size="16" />
      </li>
    </ul>
    <div class="sidebar_messages__list">
      <ChatCard v-for="(item, i) in 3" :key="'chat-item-' + i" />
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "./../ui/IconButton.vue";
import ChatCard from "../card/ChatCard.vue";
import MoreChatTooltipe from "../tooltipe/MoreChatTooltipe.vue";
import { ref } from "vue";

const sortering = ref<any>(["Все", "Следующий"]);
const isMore = ref<boolean>(false);

const toggleIsMore = () => {
  isMore.value = !isMore.value;
};

const closeTooltip = () => {
  isMore.value = false;
};
</script>

<style scoped lang="scss">
.siderbar_messages {
  max-width: 395px;
  width: 100%;
  min-height: 100vh;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
}
.siderbar_messages__title {
  @include flex-start;
  gap: 10px;

  h2 {
    text-transform: uppercase;
    font-weight: 500;
  }
}

.siderbar_messages__head {
  @include flex-space;
  gap: 20px;
  border-bottom: 1px solid $light;
  padding: 10px 16px;
}

.sidebar_messages__actions {
  @include flex-end;
  gap: 10px;
}

.sidebar_messages__prehead {
  @include flex-space;
  gap: 20px;
  text-transform: uppercase;
  color: $gray;
  font-weight: 500;
  padding: 10px 16px;
}

.chat_filtered {
  @include flex-start;
  gap: 10px;
  padding: 10px 16px;
  li {
    @include flex-center;
    background-color: $light;
    padding: 5px 15px;
    border-radius: 30px;
    font-size: 14px;
    height: 32px;
    cursor: pointer;
    &:hover {
      background-color: $light-blue;
    }
  }
  font-weight: 300;
}

.tab_edit_btn {
  width: 32px;
  height: 32px;
  padding: 0 !important;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: rgba(0, 175, 240, 0.12);
    color: $blue;
  }
}

.sidebar_sortering__btn {
  position: relative;
}
</style>
