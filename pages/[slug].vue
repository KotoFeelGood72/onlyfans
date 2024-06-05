<template>
  <NuxtLayout>
    <div class="main">
      <div class="content">
        <ProfileHead :userOther="true">
          <template #default>
            <ul class="profile_info">
              <li>
                <Icon name="bytesize:video" size="20" />
                <span>2.6K</span>
              </li>
              <li>
                <Icon name="ph:heart" />
                <span>25.6K</span>
              </li>
              <li>
                <Icon name="solar:user-heart-outline" />
                <span>22.6M</span>
              </li>
            </ul>
          </template>
          <template #quote>
            <div class="profile__info" :class="{ full: isMoreBtn }">
              <div class="profile__description">
                🎥 ❤️‍🔥 tick tick boom, baby. I’m your new favorite pinup princess and
                deviant switch. I’ve got your spicy custom content and private video calls
                on deck. 🤫❣️
              </div>
              <div class="profile__happy">
                <Icon name="ion:gift" />
                <span
                  >https://www.amazon.com/hz/wishlist/ls/3CGR8UHUD7F4N?ref_=wl_share</span
                >
              </div>
            </div>
            <div class="profile_more" @click="isMoreBtn = !isMoreBtn">{{ isMore }}</div>
            <ul class="gallery_list">
              <li v-for="(item, i) in 4" :key="'gallery-item-' + i">
                <img
                  src="https://thumbs.onlyfans.com/media/files/thumbs/w150b/9/91/912c7eda974c8a8a64df0452dd07b081/300x300_6acd84caaa77d8043886584ee82be075.jpg?Tag=2&Expires=1748256425&Signature=HY5W375i5XRqJrfkfkelfU6o~HbgMGYu206kCW2GhrGU2iyrZ47-aBMDfe7~BWu~vZJZ0jyORgNETU~rLmgPVOiX0FKG9gcuyO4SvJLW-g5p8m0vEo~W-z17xFQnxfmp9R1ScguVLD0yD9Hp3eF4G7qbISlRTrzEtcYSSsyrUWC27ASNHt77GYCSBJYzvW~ten1xgT~YDnKtEOtrRWVNkjRhbX8Xod21oMazOOjDi2GV1Lf2GqX9n9lHWmNicsseQA-Nw-tMXbe8UZi6v3BR2o2Js8ITT0nVwtPkuGpXlA9Y0qDO7e3ACU7yCxVbmOF5cunOnFem1EQ~YsjgUNJZPw__&Key-Pair-Id=K2WKEE5OAFHPJ8"
                  alt=""
                />
                <p>Places</p>
              </li>
            </ul>
          </template>
        </ProfileHead>
        <Divider :border="false" />
        <SubscriptionCard @click="openModal('subscribe')" />
        <Divider />
        <Tabs :labels="['803 постов', '849 медиа', '1 Потоки']">
          <template #tab-0>
            <ListPost :posts="posts" title="Недавние" :is-compact-view="false" />
          </template>
          <template #tab-1>
            <ListPost :posts="posts" title="Недавние" :is-compact-view="true" />
          </template>
        </Tabs>
        <!-- <Tabs :labels="['Нет постов', 'Нет медиа']">
          <template #tab-0>
            <EmptyImage />
          </template>
          <template #tab-1>
            <EmptyImage />
          </template>
        </Tabs> -->
      </div>
      <SubscriptionSidebar />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import SidebarProfile from "~/components/shared/SidebarProfile.vue";
import ProfileHead from "~/components/head/ProfileHead.vue";
import EmptyImage from "~/components/empty/EmptyImage.vue";
import Tabs from "./../components/ui/Tabs.vue";
import SubscriptionCard from "~/components/card/SubscriptionCard.vue";
import Divider from "~/components/ui/Divider.vue";
import ListPost from "~/components/shared/ListPost.vue";
import SubscriptionSidebar from "~/components/shared/SubscriptionSidebar.vue";
import { useModalStore } from "~/store/useModalStore";

const isMoreBtn = ref<boolean>(false);
const { openModal } = useModalStore();

const isMore = computed(() => {
  if (isMoreBtn.value) {
    return "Свернуть информацию";
  } else {
    return "Больше информации";
  }
});

const posts = ref<any>([
  {
    img: "",
    isText: "2121",
    isQuiz: false,
    countImg: 1,
    isLock: true,
    isPrice: 20,
    date: "7 мая",
  },
  {
    img: "",
    isText: "2121",
    isQuiz: false,
    countImg: 1,
    isLock: true,
    isPrice: 20,
    date: "7 мая",
  },
  {
    img: "",
    isText: "",
    isQuiz: false,
    countImg: 1,
    isLock: false,
    isPrice: 20,
    date: "7 мая",
  },
  {
    img: "",
    isText: "",
    isQuiz: false,
    countImg: 1,
    isLock: false,
    isPrice: 20,
    date: "7 мая",
  },
  {
    img: "",
    isText: "",
    isQuiz: false,
    countImg: 1,
    isLock: false,
    isPrice: 20,
    date: "7 мая",
  },
  {
    img: "",
    isText: "",
    isQuiz: false,
    countImg: 1,
    isLock: false,
    isPrice: 20,
    date: "7 мая",
  },
  {
    img: "",
    isText: "",
    isQuiz: false,
    countImg: 1,
    isLock: false,
    isPrice: 20,
    date: "7 мая",
  },
]);
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
}
.content {
  min-width: 600px;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
  height: 100%;
  min-height: 100vh;
}

.profile_info {
  @include flex-start;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 500;
  gap: 10px;
  padding-top: 5px;
  li {
    @include flex-start;
    gap: 4px;
  }
}

.profile__description {
  line-height: 26px;
}
.profile__happy {
  font-size: 14px;
  color: $gray;
  @include flex-start;
  gap: 5px;
  padding: 6px 0;
}

.profile__info {
  max-height: 22px;
  overflow: hidden;
  &.full {
    max-height: 100%;
  }
}

.profile_more {
  margin-top: 10px;
  font-size: 14px;
  color: $blue;
  cursor: pointer;
  font-weight: 300;
  &:hover {
    text-decoration: underline;
  }
}

.gallery_list {
  @include flex-start;
  max-width: 100%;
  overflow-x: auto;
  gap: 10px;
  padding: 16px 0;
  margin-bottom: -25px;
  li {
    border-radius: 7px;
    overflow: hidden;
    max-width: 128px;
    max-height: 128px;
    position: relative;
    cursor: pointer;
    p {
      position: absolute;
      bottom: 10px;
      left: 16px;
      font-size: 14px;
      font-weight: 500;
      color: $white;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
