<template>
  <div class="main">
    <div class="content">
      <ContentHeader title="НОВЫЙ ПОСТ" />
      <CreateQuiz
        v-if="quizType === 'quiz'"
        @update:remove="removeQuiz"
        :victory="false"
        title="Опрос"
      />
      <CreateQuiz
        v-if="quizType === 'victory'"
        @update:remove="removeQuiz"
        :victory="true"
        title="Викторина"
      />
      <FormTrigger @update:quiz="addedQuiz" />
    </div>
    <SidebarPopular />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ContentHeader from "~/components/ui/ContentHeader.vue";
import SidebarPopular from "~/components/shared/SidebarPopular.vue";
import FormTrigger from "~/components/ui/FormTrigger.vue";
import CreateQuiz from "~/components/ui/CreateQuiz.vue";

const quizType = ref<string | null>(null);

function addedQuiz(type: string) {
  if (type === "quiz" || type === "victory") {
    quizType.value = type;
  }
}

function removeQuiz() {
  quizType.value = null;
}
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  gap: 30px;
}

.content {
  min-width: 600px;
  min-height: 100vh;
  height: 100%;
  border-left: 1px solid $light;
  border-right: 1px solid $light;
}
</style>
