<template>
  <div class="post">
    <div class="post__head">
      <div class="post_head__left">
        <AvatarCircle size="medium" :online="true" />
        <div class="post__tile">
          <div class="post__name">
            Eriana 💋 #1 RATED LATINA
            <Icon name="material-symbols-light:verified-outline-rounded" size="20" />
          </div>
          <div class="post__uid">@eriana_blanco</div>
        </div>
      </div>
      <div class="post_head__right">
        <div class="post__date">{{ post.date }}</div>
        <div class="icon-more">
          <IconButton iconName="pepicons-pencil:dots-x" icon-size="25" name="Больше" />
        </div>
        <div class="post__sticky"><Icon name="solar:pin-bold" size="12" /></div>
      </div>
    </div>
    <div class="post__content">
      Letting you calll the shots today- two options to bring you nothing but pleasure,
      the choice is all yours 😉 (if i were you i'd pick option 2... just saying)
    </div>
    <!-- <PostGallery
      img="https://cdn2.onlyfans.com/files/1/1f/1f9aa70f7a131576258beb17de392a98/960x1280_a7f7fa5cbf48652d55f40598eeb7a8fe.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvMVwvMWZcLzFmOWFhNzBmN2ExMzE1NzYyNThiZWIxN2RlMzkyYTk4XC85NjB4MTI4MF9hN2Y3ZmE1Y2JmNDg2NTJkNTVmNDA1OThlZWI3YThmZS5qcGc~VGFnPTIiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTcyMzU1Mjh9LCJJcEFkZHJlc3MiOnsiQVdTOlNvdXJjZUlwIjoiNDYuMTQ5Ljc0LjE0NVwvMzIifX19XX0_&Signature=ZE1fClz739IxFiQgUJUoJtBh6vhQ-Hb40AR-lVCp-JGz~4RwUwWvb8yvxtWa~qAm1vt3gHofrP1GM3UEXUQkCbCj7oAvhNuqhuLgbtCQ91s49JeX3hE0Tp9p1RXV-EeivacQYHdg3ot6ICQB8PGaCXouH5NPkc5JFdzurot87AHqxzuScxnPGLaKDKzc7XCZXL7hvoIYbJYBaKs8kC5Cte0qlBB9kamBEIKKHKEAUfKb7onkdlzBj5SxbBBLmKDSsp9wuWkXmOKKU0eGK4T0R3J5R7tey15iYe62P9LszpSqrkMh30lH6cQzvmFBFCKq~TNTx9Ppiaq24jmDekC4kA__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD"
    /> -->
    <!-- <PostQuiz :initialOptions="pollData" /> -->
    <PostLock :img="1" :video="1" />
    <PostBottom />
  </div>
</template>

<script setup lang="ts">
import AvatarCircle from "~/components/interface/AvatarCircle.vue";
import IconButton from "~/components/ui/IconButton.vue";
import PostLock from "~/components/ui/lock/PostLock.vue";
import PostBottom from "~/components/ui/post/PostBottom.vue";
import PostQuiz from "~/components/ui/post/PostQuiz.vue";
import PostGallery from "~/components/ui/post/PostGallery.vue";
const props = defineProps<{
  post: any;
}>();

const pollData = [
  { text: "yes mami", votes: 59, percentage: (59 / 74) * 100 },
  { text: "call me daddy", votes: 15, percentage: (15 / 74) * 100 },
];
</script>

<style scoped lang="scss">
.post_head__left {
  @include flex-start;
  gap: 10px;
}

.post__head {
  @include flex-space;
  align-items: flex-start;
  margin-bottom: 20px;
}
.post_head__right {
  @include flex-end;
  position: relative;
  gap: 5px;
}

.post__sticky {
  position: absolute;
  right: 8px;
  top: calc(85%);
  color: $gray;
  opacity: 0.4;
}

.post__name {
  font-weight: 500;
  @include flex-start;
  margin-bottom: 5px;
  svg {
    margin-left: 3px;
  }
}

.post__uid,
.post__date {
  font-size: 14px;
  color: $gray;
}
.icon-more {
  @include flex-center;
  :deep(button) {
    height: 23px;
  }
}

.post {
  padding: 16px 0;
  position: relative;
  &:before {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% + 40px);
    border-bottom: 1px solid $light;
    content: "";
  }
}

.post__content {
  margin-bottom: 15px;
}
</style>
