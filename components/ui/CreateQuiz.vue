<template>
  <div class="createQuiz">
    <div
      class="createQuiz__head"
      @click="openModal(victory ? 'victoryDays' : 'quizDays')"
    >
      <div class="createQuiz_head__left">
        <Icon name="mingcute:chart-horizontal-line" size="20" />
        <p>{{ title }}</p>
      </div>
      <div class="createQuiz_head__right">
        <div class="createQuiz__days">7 дней</div>
        <div
          class="createQuiz__remove"
          v-tooltip="'Исключить'"
          @click.stop="removeQuiz()"
        >
          <Icon name="gg:close" size="16" />
        </div>
      </div>
    </div>
    <draggable
      v-model="options"
      class="createQuiz__list"
      @end="onDragEnd"
      animation="200"
      ghost-class="ghost"
      chosen-class="chosen"
      drag-class="drag"
    >
      <template #item="{ element, index }">
        <div class="createQuiz__input">
          <div class="custom-radio" v-if="victory">
            <input
              type="radio"
              :id="'radio-' + index"
              :checked="index === selectedVictory"
              @change="setVictory(index)"
            />
            <label :for="'radio-' + index"
              ><div class="icon-check"><Icon name="ic:twotone-check" size="15" /></div
            ></label>
          </div>
          <input
            :class="{ 'check-radio': victory }"
            type="text"
            :placeholder="`Введите вариант ${index + 1}`"
            v-model="element.text"
          />
          <div class="input__actions">
            <div class="input__remove" @click="removeOption(index)">
              <Icon name="gg:close" size="15" />
            </div>
            <div class="input__drag">
              <Icon name="mingcute:dots-line" size="17" />
            </div>
          </div>
        </div>
      </template>
    </draggable>
    <div class="createQuiz__added" @click="addOption">
      <Icon name="line-md:plus" size="16" />
      <p>Добавить другую опцию</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";
import { useModalStore } from "~/store/useModalStore";

interface Option {
  text: string;
}

const { openModal } = useModalStore();
const props = withDefaults(
  defineProps<{
    victory: boolean;
    title: string;
  }>(),
  {
    victory: false,
    title: "Опрос",
  }
);

const emit = defineEmits<{
  (event: "update:remove", value: boolean): void;
}>();

const options = ref<Option[]>([{ text: "" }]);
const selectedVictory = ref<number | null>(null);

const addOption = () => {
  options.value.push({ text: "" });
};

const removeOption = (index: number) => {
  if (options.value.length > 1) {
    options.value.splice(index, 1);
    if (index === selectedVictory.value) {
      selectedVictory.value = null;
    }
  }
};

const onDragEnd = () => {
  console.log("Options reordered:", options.value);
};

const setVictory = (index: number) => {
  selectedVictory.value = index;
};

const removeQuiz = () => emit("update:remove", false);
</script>

<style scoped lang="scss">
.createQuiz {
  background-color: rgba(138, 150, 163, 0.08);
  margin: 16px 12px;
  padding: 16px 10px;
  border-radius: 6px;
}
.createQuiz__head {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  padding-bottom: 15px;
}

.createQuiz_head__left {
  display: flex;
  align-items: center;
  gap: 5px;
  svg {
    color: $blue;
  }
}
.createQuiz_head__right {
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 500;
}

.createQuiz__remove {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: $blue;
  color: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: $accent;
  }
}

.createQuiz__list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.createQuiz__input {
  border: 1px solid $light;
  position: relative;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: $white;
}

input[type="text"] {
  flex: 1;
  border-radius: 4px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  font-family: "Roboto";
  font-size: 14px;
  color: $gray;
  padding: 10px 15px;
  width: 100%;
  background-color: transparent;
}

.custom-radio {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

.custom-radio input[type="radio"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.custom-radio label {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border: 2px solid $gray;
  border-radius: 50%;
  cursor: pointer;
}

.custom-radio label:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-radio input[type="radio"]:checked ~ label:after {
  display: block;
}

.icon-check {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $white;
  transition: all 0.2s ease;
  opacity: 0;
  visibility: hidden;
}

.custom-radio input[type="radio"]:checked ~ label {
  background-color: rgba(53, 208, 99, 0.75);
  border-color: rgba(53, 208, 99, 0.75);

  .icon-check {
    opacity: 1;
    visibility: visible;
  }
}

.input__actions {
  display: flex;
  align-items: center;
  gap: 5px;
  color: $gray;
  div {
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      color: $blue;
    }
  }
}

.createQuiz__added {
  padding-top: 10px;
  display: flex;
  align-items: center;
  font-size: 14px;
  color: $blue;
  transition: all 0.3s ease;
  cursor: pointer;
  font-weight: 500;
  gap: 5px;
  &:hover {
    color: $accent;
  }
}

.ghost {
  opacity: 0.4;
}

.chosen {
  border: 1px solid #3498db;
}

.drag {
  animation: dragAnimation 0.2s ease;
}

@keyframes dragAnimation {
  from {
    transform: scale(1.05);
  }
  to {
    transform: scale(1);
  }
}

.check-radio {
  padding-left: 40px !important;
}
</style>
