<template>
  <div
    class="profileHead"
    :style="{
      backgroundImage: `url(${profileBg})`,
    }"
  >
    <div class="profileHead__top">
      <div class="profileHead_top__title">
        <div class="profileHead__back">
          <Icon name="solar:arrow-left-linear" size="23" />
        </div>
        <div class="profileHead_title__column">
          <h2>KotoFeel Good</h2>
          <div class="profileHead__info" v-if="$slots.default">
            <slot name="default" />
          </div>
        </div>
      </div>
      <div class="profileHead__other" v-tooltip.bottom="'Больше'">
        <Icon name="ph:dots-three-outline-vertical-fill" size="18" />
      </div>
    </div>
    <div class="profileHead__medium" :class="{ 'content-isNotEmpty': $slots.default }">
      <AvatarCircle size="large" />
      <div class="profileHead__action">
        <Button
          v-if="!userOther"
          color-sheme="secondary"
          label="Редактировать профиль"
          icon="ion:settings-outline"
          icon-size="22"
          :icon-static="true"
          style="height: 48px"
          @click="nextProfile()"
        />
        <div class="small-btn" v-tooltip="'Отправить подсказку'" v-if="userOther">
          <Button
            color-sheme="secondary"
            label=""
            icon="ph:currency-circle-dollar-light"
            icon-size="25"
            :icon-static="true"
            style="height: 48px"
          />
        </div>
        <div class="small-btn" v-tooltip="'Сообщение'" v-if="userOther">
          <Button
            color-sheme="secondary"
            label=""
            icon="system-uicons:message"
            icon-size="25"
            :icon-static="true"
            style="height: 48px"
          />
        </div>
        <div class="small-btn" v-if="userOther" @click="openModal('favorite')">
          <Button
            color-sheme="secondary"
            label=""
            icon="ph:star"
            icon-size="25"
            :icon-static="true"
            style="height: 48px"
          />
        </div>
        <div class="small-btn" v-tooltip="'Копировать ссылку в профиль'">
          <Button
            color-sheme="secondary"
            label=""
            icon="fluent:share-28-regular"
            icon-size="25"
            :icon-static="true"
            style="height: 48px"
          />
        </div>
      </div>
    </div>
    <div class="profileHead_bottom">
      <div class="profileHead__name">{{ name }}</div>
      <div class="profileHead_bottom_info">
        <div class="profileHead__id">{{ id }}</div>
        <div class="profileHead_change__status">
          <p>Доступно</p>
          <Icon name="jam:chevron-down" v-if="!userOther" />
        </div>
      </div>
      <div class="profileHead__quote"><slot name="quote" /></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import AvatarCircle from "../interface/AvatarCircle.vue";
import Button from "../ui/Button.vue";
import defaultHeaderImage from "../assets/img/default_header_image.png";
import { useRouter } from "vue-router";
import { useModalStore } from "~/store/useModalStore";

const router = useRouter();
const { openModal } = useModalStore();

const slots = defineSlots<{
  quote: () => any;
  default: () => any;
}>();

const props = withDefaults(
  defineProps<{
    name?: string;
    id?: string;
    quote?: string;
    userOther?: boolean;
    profileBg?: string;
  }>(),
  {
    name: "KotoFeel Good",
    id: "@u406691674",
    userOther: false,
    quote: "",
    profileBg: "",
  }
);

const profileBg = computed(() => {
  return props.profileBg || defaultHeaderImage;
});

function nextProfile() {
  router.push("/my/settings/profile");
}
</script>

<style scoped lang="scss">
.profileHead {
  background-size: 100% 180px;
  background-repeat: no-repeat;
  position: relative;
  padding-bottom: 30px;
  border-bottom: 1px solid $light;
  max-width: 600px;
  &:after {
    content: "";
    background: linear-gradient(#000, rgba(138, 150, 163, 0));
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 144px;
    pointer-events: none;
    opacity: 0.4;
    pointer-events: none;
  }
}

.profileHead__top {
  @include flex-space;
  color: $white;
  position: relative;
  z-index: 1;
  padding: 16px;
}
.profileHead_top__title {
  @include flex-start;
  gap: 20px;
  h2 {
    font-size: 19px;
  }
}
.profileHead__other {
  cursor: pointer;
}
.profileHead__back {
  width: 36px;
  height: 36px;
  @include flex-center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 100%;
  &:hover {
    background-color: #ffffff18;
  }
}

.profileHead__action {
  @include flex-end;
  gap: 10px;
}
.profileHead__name {
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 10px;
}
.profileHead_change__status {
  @include flex-start;
  gap: 3px;
}
.profileHead_bottom {
  padding: 0 16px;
}
.profileHead_bottom_info {
  @include flex-start;
  color: $gray;
  gap: 15px;
  font-size: 14px;
}
.profileHead__medium {
  position: relative;
  z-index: 1;
  @include flex-space;
  align-items: flex-end;
  margin-bottom: 20px;
  padding: 80px 16px 0 16px;
}

.small-btn {
  width: 48px;
  :deep(.button) {
    padding: 0;
  }
}

.content-isNotEmpty {
  padding-top: 65px;
}

.profileHead__quote {
  margin-top: 10px;
}
</style>
