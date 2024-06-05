<template>
  <div class="form_trigger">
    <textarea
      placeholder="Создать новый пост..."
      class="add_post__txt"
      v-model="text"
      @input="adjustHeight"
    ></textarea>
    <div class="form__action">
      <IconButton
        iconName="ph:image"
        iconColor="gray"
        iconSize="25"
        name="Добавить изображение"
      />
      <IconButton
        iconName="fluent-mdl2:poll-results"
        iconColor="gray"
        iconSize="20"
        name="Добавить опрос"
        @click="triggerQuiz('quiz')"
      />
      <IconButton
        iconName="hugeicons:puzzle"
        iconColor="gray"
        iconSize="21"
        name="Добавить викторину"
        @click="triggerQuiz('victory')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconButton from "./IconButton.vue";
import { useRoute, useRouter } from "vue-router";

const text = ref("");

const route = useRoute();
const router = useRouter();

const emit = defineEmits<{
  (event: "update:quiz", type: string): void;
}>();

function triggerQuiz(type: string) {
  emit("update:quiz", type);
}

function routeThePost() {
  if (route.name != "posts-create") {
    router.push("/posts/create");
  }
}

function adjustHeight(event: Event) {
  const target = event.target as HTMLTextAreaElement;
  target.style.height = "auto";
  target.style.height = `${target.scrollHeight}px`;
}
</script>

<style scoped lang="scss">
.form_trigger {
  border-bottom: 1px solid $light;
  p {
    min-height: 79px;
    font-size: 16px;
    color: $gray;
    padding: 16px;
  }
}

.form__action {
  @include flex-start;
  color: $gray;
  gap: 5px;
  padding: 0 16px 10px 16px;
  li {
    cursor: pointer;
  }
}

.add_post__txt {
  font-size: 16px;
  font-family: "Roboto";
  font-weight: 400;
  color: $gray;
  border: none;
  padding: 10px 16px;
  @include flex-start;
  width: 99%;
  margin-top: 10px;
  resize: none;
  overflow-y: hidden;
  margin-right: 10px;
  line-height: 24px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $light;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: $gray;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
}
</style>
