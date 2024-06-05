<template>
  <div class="note-list">
    <NoteCard v-for="item in 2" :key="'note-item-' + item" class="note-item" />
  </div>
</template>

<script setup lang="ts">
import NoteCard from "../card/NoteCard.vue";
</script>

<style scoped lang="scss">
.note-item {
  position: relative;
  &:before {
    position: absolute;
    bottom: 0;
    right: 0;
    content: "";
    border-bottom: 1px solid $light;
    width: 87%;
  }
}

.note-list {
  display: flex;
  flex-direction: column;
  // gap: 20px;
}
</style>
