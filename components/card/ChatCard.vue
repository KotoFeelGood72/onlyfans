<template>
  <NuxtLink to="/my/chats/chat/11">
    <div class="chat_card">
      <AvatarCircle :online="true" size="medium" />
      <div class="chat_card__content">
        <div class="chat_card__title">
          <div class="chat_card__wrap">
            <span class="chat_card__nickname"> Jaqueline ❤️‍🔥 #1 LATINA </span>
            <span>
              <Icon name="material-symbols-light:verified-outline-rounded" size="20" />
            </span>
            <span class="gray"> @jackyromero </span>
          </div>
          <div class="chat_card__remove" v-tooltip="'Очистить сообщения'">
            <Icon name="iconamoon:close-light" size="20" />
          </div>
        </div>
        <div class="card_lastmessage__w">
          <div class="chat_card__lastmessage">
            <span class="icon-preview"
              ><Icon
                v-if="type != 'text'"
                :name="type === 'video' ? 'system-uicons:video' : 'solar:gallery-bold'"
              />
              <span class="dots"> · </span></span
            >
            Youre DEFINITELY going to want to see the rest of this set so i'll just leave
            this right here 😘
          </div>
          <div class="chat_card__time">4.52</div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import AvatarCircle from "../interface/AvatarCircle.vue";

const props = defineProps<{
  type?: "video" | "img" | "text";
}>();
</script>

<style scoped lang="scss">
.chat_card {
  @include flex-start;
  gap: 10px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  border-bottom: 1px solid $light;
  &:hover {
    background-color: $ultra-light;
  }
}

.chat_card__title {
  position: relative;
  font-weight: 500;
  margin-bottom: 5px;

  span:not(.chat_card__nickname) {
    color: $gray;
    font-weight: 400;
    svg {
      color: $black;
    }
  }
}

.chat_card__nickname {
  display: block;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-right: 20px;
}

.chat_card__wrap {
  @include flex-start;
  padding-right: 30px;

  .gray {
    display: block;
    max-width: 80px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.chat_card__remove {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  color: $gray;
}

.chat_card__lastmessage {
  display: block;
  max-width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.card_lastmessage__w {
  @include flex-space;

  font-size: 14px;
  font-weight: 400;
  .chat_card__time {
    color: $gray;
  }
}

.dots {
  font-size: 18px;
  font-weight: 500;
}
</style>
