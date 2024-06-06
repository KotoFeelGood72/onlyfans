<template>
  <div class="list_post">
    <div class="list_post__head">
      <p>{{ title }}</p>
      <div class="list_postHead__actions">
        <IconButton iconName="mingcute:search-line" iconSize="24" iconColor="gray" />
        <IconButton
          :iconName="iconName"
          iconSize="24"
          iconColor="gray"
          name="Полный вид"
          @click="toggleView"
        />
        <MoreChatTooltipe />
      </div>
    </div>
    <div class="sort-post">
      <SorteringButtons :sortering="sort" />
    </div>
    <div class="list" :class="{ grid: isViewCompact }">
      <component
        v-for="(post, i) in posts"
        :is="currentCardComponent"
        :key="'item-post-' + i"
        :post="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CompactCard from "../card/post/CompactCard.vue";
import DefaultCard from "../card/post/DefaultCard.vue";
import IconButton from "../ui/IconButton.vue";
import SorteringButtons from "../ui/SorteringButtons.vue";
import MoreChatTooltipe from "../tooltipe/MoreChatTooltipe.vue";

const props = defineProps<{
  posts: any[];
  title: string;
  isCompactView: boolean;
}>();

const isViewCompact = ref(props.isCompactView);

const sort = ref<any>([
  { name: " Все 803 " },
  { name: " 🍑🍑 CULO 64 " },
  { name: " 🍈🍈 TETAS 55 " },
]);

const currentCardComponent = computed(() =>
  isViewCompact.value ? CompactCard : DefaultCard
);

const iconName = computed(() =>
  isViewCompact.value
    ? "fluent:window-24-regular"
    : "material-symbols-light:window-outline"
);

function toggleView() {
  isViewCompact.value = !isViewCompact.value;
}
</script>

<style scoped lang="scss">
.list_post__head {
  @include flex-space;
  padding-bottom: 10px;
  p {
    font-weight: 500;
    text-transform: uppercase;
    color: $gray;
  }
}

.list_postHead__actions {
  @include flex-end;
  gap: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 2px;
  margin: 0 -20px 0 -20px;
  & > div {
    height: 200px;
    @include flex-center;
  }
}

.sort-post {
  padding: 2px 0 10px 0;
}
</style>
