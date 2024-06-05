<template>
  <div class="sidebar_profile_w">
    <div class="sidebar_profile">
      <InputSearch v-model="search" placeholder="Искать сообщение пользователя" />
      <SpotifyCard />
      <OtherLinks />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputSearch from "../ui/InputSearch.vue";
import SpotifyCard from "../card/SpotifyCard.vue";
import OtherLinks from "../ui/OtherLinks.vue";
const search = ref<string>("");
</script>

<style scoped lang="scss">
.sidebar_profile_w {
  height: 100%;
  flex-grow: 1;
}
.sidebar_profile {
  max-width: 380px;
  width: 100%;
  padding: 20px 0;
  position: sticky;
  top: 0;
  right: 0;

  & > div {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}
</style>
