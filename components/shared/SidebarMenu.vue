<template>
  <div class="sidebar_w">
    <div class="sidebar">
      <AvatarCircle class="sidebar__profile" @click="openModal('user')" :hover="true" />
      <ul class="sidebar-menu">
        <li v-for="(item, i) in menu" :key="'sidebar-menu-item' + i">
          <NuxtLink :to="item.link">
            <Icon :name="item.icon" class="sidebarmenu_item__icon" size="25" />
            <span>{{ item.name }}</span>
          </NuxtLink>
        </li>
      </ul>
      <Button
        label="Новый пост"
        icon="heroicons:plus-20-solid"
        color-sheme="primary"
        icon-size="30"
        @click="newPost()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { menu } from "~/consts/MenuConsts";
import Button from "../ui/Button.vue";
import AvatarCircle from "../interface/AvatarCircle.vue";
import { useModalStore } from "~/store/useModalStore";
import { useRouter } from "vue-router";

const { openModal } = useModalStore();
const router = useRouter();

function newPost() {
  router.push("/posts/create");
}
</script>

<style lang="scss" scoped>
.sidebar_w {
  min-width: 260px;
}
.sidebar {
  padding: 25px 0 32px 0;
  position: sticky;
  top: 0;
  left: 0;
}

.sidebar-menu {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 20px;
  li {
    a {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 19px;
      font-weight: 500;
      color: $gray;
      position: relative;
      padding: 5px 10px;
      border-radius: 30px;
      &:hover,
      &.router-link-active {
        background-color: rgba(0, 144, 234, 0.082);
        color: $blue;
      }
    }
  }
}

.sidebar__profile {
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
