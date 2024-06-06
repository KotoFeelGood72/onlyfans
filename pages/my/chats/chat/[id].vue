<template>
  <div class="main">
    <SiderbarMessages />
    <div class="chat__w">
      <ChatHead />
      <div class="chat_list__w">
        <div class="chat">
          <ChatMessage
            video="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4"
            img=""
            :lock="false"
            text="Youre DEFINITELY going to want to see the rest of this set so i'll just leave this right here 😘"
          />
          <ChatMessage
            :lock="false"
            text="Youre DEFINITELY going to want to see the rest of this set so i'll just leave this right here 😘"
          />
          <ChatMessage
            v-for="item in 2"
            :key="'chat-item-message-' + item"
            text="Youre DEFINITELY going to want to see the rest of this set so i'll just leave this right here 😘"
          />
          <ChatMessage
            img=""
            :lock="false"
            text="Youre DEFINITELY going to want to see the rest of this set so i'll just leave this right here 😘"
          />
        </div>
      </div>
      <ChatInput />
    </div>
  </div>
</template>

<script setup>
import SiderbarMessages from "./../../../components/shared/SiderbarMessages.vue";
import ChatHead from "~/components/ui/chats/ChatHead.vue";
import ChatInput from "~/components/ui/chats/ChatInput.vue";
import ChatMessage from "~/components/ui/chats/ChatMessage.vue";

useHead({
  title: "Учетная запись",
});
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  width: 100%;
}

.empty__chat {
  @include flex-center;
  flex-direction: column;
  min-height: 100vh;
  border-right: 1px solid $light;
  flex-grow: 1;
  padding: 30px;
  text-align: center;

  h3 {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 38px;
    font-weight: 500;
  }
}

.chat__w {
  border-right: 1px solid $light;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.chat_list__w {
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.chat {
  flex-grow: 1;
  overflow-y: auto;
  max-height: calc(100vh - 210px);

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: $light;
  }
}
</style>
