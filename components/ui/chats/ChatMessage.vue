<template>
  <div class="message_w">
    <div class="sender_message">
      <AvatarCircle size="small" :online="true" />
    </div>
    <div class="message">
      <div class="media" v-if="!lock">
        <div class="video" v-if="video">
          <vue-plyr>
            <video controls playsinline>
              <source :src="video" type="video/mp4" />
            </video>
          </vue-plyr>
        </div>
        <div class="image" v-if="img">
          <img :src="img" alt="" />
        </div>
      </div>
      <ChatLock v-else price="20" type="img" />
      <div class="messages__text">
        {{ text }}
        <IconButton iconName="mage:dots" iconSize="15" />
      </div>
      <div class="send__time">12:33</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarCircle from "~/components/interface/AvatarCircle.vue";
import ChatLock from "../lock/ChatLock.vue";
import IconButton from "../IconButton.vue";
const props = withDefaults(
  defineProps<{
    text: string;
    img?: string;
    video?: string;
    lock: boolean;
  }>(),
  {
    text: "",
    img:
      "https://cdn2.onlyfans.com/files/9/92/92b8aa29b77d9121e9627a1770a4d86c/1200x1812_2cb929b444a7bab5371be5986983fcdb.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvOVwvOTJcLzkyYjhhYTI5Yjc3ZDkxMjFlOTYyN2ExNzcwYTRkODZjXC8xMjAweDE4MTJfMmNiOTI5YjQ0NGE3YmFiNTM3MWJlNTk4Njk4M2ZjZGIuanBnP1RhZz0yIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzE3MDE5NzY2fSwiSXBBZGRyZXNzIjp7IkFXUzpTb3VyY2VJcCI6IjQ2LjE0OS43NC4xNDVcLzMyIn19fV19&Signature=g4TO9Q0IwwgIEXsF2a8Os27b4SGrTjyUGo-XYnfQZx3LeQS1CZg5~T2FIa3pvA42lpnRyUGSavwLvMciBGkfc~IfflV4tN1lrPFTPYvS6F7CkUMPdey8Oo6FgWnVcKqLLF3jQ7r1X7nhnBffjo7k~f4l~uGM57pf7-Tv5GCa7dtunMYhASKCbF9lDO9-vdDygeztdwzlYadSaF3lC8YKdl4yKZiI96AYgwYdXoAeN~mKPHBW6ruyFc-hVlR5HkpxxLiAgsFi1K0NUTj2BX7ME1CwSgHYzutcx6UmtnjfqFip3cYCKSrilM2i9AEp8WyuSBDJLCRJI-WcKkiocMUNPQ__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD",
    video: "",
    lock: true,
  }
);
</script>

<style scoped lang="scss">
.message_w {
  @include flex-start;
  align-items: flex-end;
  padding: 17px 90px 17px 20px;
  gap: 10px;

  .messages__text {
    padding: 10px 12px;
    line-height: 24px;
  }
}

.message {
  background-color: rgba(138, 150, 163, 0.12);
  border-radius: 8px;
  position: relative;
  border-bottom-left-radius: 0px;

  button {
    position: absolute;
    bottom: 0;
    right: -40px;
  }
}

.media {
  .image {
    width: 100%;
    img {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
}

.video {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  overflow: hidden;
}

.send__time {
  position: absolute;
  top: calc(100% + 6px);
  font-size: 11px;
  color: $gray;
}
</style>
