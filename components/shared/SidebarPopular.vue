<template>
  <div class="sidebar_popular_w">
    <div class="sidebar_popular">
      <InputSearch v-model="search" />
      <PopularSlider />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputSearch from "../ui/InputSearch.vue";
import PopularSlider from "../interface/PopularSlider.vue";
const search = ref<string>("");
</script>

<style scoped lang="scss">
.sidebar_popular_w {
  height: 100%;
}
.sidebar_popular {
  max-width: 380px;
  padding: 20px 0;
  position: sticky;
  top: 0;
  right: 0;
}
</style>
