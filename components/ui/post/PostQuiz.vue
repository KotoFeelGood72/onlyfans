<template>
  <div class="quiz">
    <div
      v-for="(option, index) in pollOptions"
      :key="index"
      class="option"
      :class="{ disabled: isDisabled || hasVoted }"
      @click="vote(index)"
    >
      <div class="option-text" :class="{ gray: hasVoted }">{{ option.text }}</div>
      <div
        v-if="hasVoted"
        class="option-bar"
        :style="{ width: option.percentage + '%' }"
      ></div>
      <div class="option-votes" v-if="hasVoted">{{ option.votes }}</div>
    </div>
    <div class="total-votes">
      <Icon name="ph:chart-bar-horizontal-light" size="16" /> Опрос ·
      {{ totalVotes }} Голоса
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";

interface PollOption {
  text: string;
  votes: number;
  percentage: number;
}

const props = defineProps<{ initialOptions: PollOption[] }>();
const pollOptions = ref<PollOption[]>([...props.initialOptions]);
const hasVoted = ref<boolean>(false);
const isDisabled = ref<boolean>(false);

const totalVotes = computed(() =>
  pollOptions.value.reduce((sum, option) => sum + option.votes, 0)
);

const updatePercentages = () => {
  const total = totalVotes.value;
  pollOptions.value.forEach((option) => {
    option.percentage = (option.votes / total) * 100;
  });
};

watch(
  () => props.initialOptions,
  (newOptions) => {
    pollOptions.value = [...newOptions];
    updatePercentages();
  },
  { immediate: true, deep: true }
);

const vote = (index: number) => {
  if (isDisabled.value || hasVoted.value) return;
  pollOptions.value[index].votes++;
  hasVoted.value = true;
  updatePercentages();
};

onMounted(() => {
  updatePercentages();
});
</script>

<style scoped lang="scss">
.quiz {
  border: 1px solid $light;
  border-radius: 4px;
}

.option {
  padding: 8px 10px 8px 6px;
  border-bottom: 1px solid $light;
  @include flex-space;
  position: relative;
  user-select: none;
  cursor: pointer;

  &.disabled {
    pointer-events: none;
  }

  .option-text {
    width: 100%;
    color: $blue;
    padding: 7px 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;

    &.gray {
      color: $gray;
    }

    &:hover {
      background-color: $ultra-light;
      color: $accent;
    }
  }
}

.option-votes {
  font-size: 14px;
  color: $gray;
}

.total-votes {
  min-height: 40px;
  @include flex-start;
  font-size: 14px;
  color: $gray;
  background-color: rgba(138, 150, 163, 0.08);
  padding: 11px 15px;

  svg {
    margin-right: 4px;
  }
}

.option-bar {
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
  height: 34px;
  background-color: rgba(0, 175, 240, 0.12);
  transition: width 0.3s;
  border-radius: 5px;
}
</style>
