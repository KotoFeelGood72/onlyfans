<template>
  <div class="days">
    <div class="days-content">
      <h2>Викторина</h2>
      <div class="input-group">
        <input
          type="text"
          v-model="duration"
          :placeholder="placeholderText"
          @input="onInput"
        />
      </div>
      <p>Выберите из списка ниже или введите свой собственный</p>
      <div
        class="button-group"
        ref="buttonGroup"
        @mousedown="onMouseDown"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
        @touchmove="onTouchMove"
      >
        <div
          v-for="option in options"
          :key="option.value"
          :class="{
            active:
              duration === option.label ||
              (duration === '' && option.label === 'Без ограничений') ||
              (parseInt(duration) && parseInt(duration) === parseInt(option.label)),
          }"
          @click="setDuration(option.label)"
        >
          {{ option.label }}
        </div>
      </div>
      <div class="actions">
        <button @click="cancel">ОТМЕНА</button>
        <button @click="save">СОХРАНИТЬ</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, onUnmounted } from "vue";
import { useModalStore } from "~/store/useModalStore";

const props = defineProps<{ title: string }>();

const duration = ref("");
const placeholderText = ref("Без ограничений");
const buttonGroup = ref<HTMLElement | null>(null);
let isDown = false;
let startX: number;
let scrollLeft: number;

const options = [
  { value: "", label: "Без ограничений" },
  { value: "1", label: "1 день" },
  { value: "3", label: "3 дня" },
  { value: "7", label: "7 дней" },
];

const { closeModal } = useModalStore();

const setDuration = (value: string) => {
  duration.value = value;
};

const onInput = () => {
  const inputValue = duration.value;
  const matchingOption = options.find((option) => option.label === inputValue);

  if (inputValue === "" || matchingOption) {
    if (!matchingOption) {
      placeholderText.value = "Без ограничений";
      duration.value = "";
    } else {
      placeholderText.value = matchingOption.label;
    }
  }
};

const save = () => {
  closeModal("victoryDays");
  // Add any additional save logic here
};

const cancel = () => {
  closeModal("victoryDays");
  // Add any additional cancel logic here
};

const onMouseDown = (e: MouseEvent) => {
  isDown = true;
  if (buttonGroup.value) {
    buttonGroup.value.classList.add("active");
    startX = e.pageX - buttonGroup.value.offsetLeft;
    scrollLeft = buttonGroup.value.scrollLeft;
  }
};

const onMouseLeave = () => {
  isDown = false;
  if (buttonGroup.value) {
    buttonGroup.value.classList.remove("active");
  }
};

const onMouseUp = () => {
  isDown = false;
  if (buttonGroup.value) {
    buttonGroup.value.classList.remove("active");
  }
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDown) return;
  e.preventDefault();
  if (buttonGroup.value) {
    const x = e.pageX - buttonGroup.value.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    buttonGroup.value.scrollLeft = scrollLeft - walk;
  }
};

const onTouchStart = (e: TouchEvent) => {
  isDown = true;
  if (buttonGroup.value) {
    buttonGroup.value.classList.add("active");
    startX = e.touches[0].pageX - buttonGroup.value.offsetLeft;
    scrollLeft = buttonGroup.value.scrollLeft;
  }
};

const onTouchEnd = () => {
  isDown = false;
  if (buttonGroup.value) {
    buttonGroup.value.classList.remove("active");
  }
};

const onTouchMove = (e: TouchEvent) => {
  if (!isDown) return;
  if (buttonGroup.value) {
    const x = e.touches[0].pageX - buttonGroup.value.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    buttonGroup.value.scrollLeft = scrollLeft - walk;
  }
};

onMounted(() => {
  if (buttonGroup.value) {
    buttonGroup.value.addEventListener("mouseleave", onMouseLeave);
    buttonGroup.value.addEventListener("mouseup", onMouseUp);
    buttonGroup.value.addEventListener("mousemove", onMouseMove);
  }
});

onUnmounted(() => {
  if (buttonGroup.value) {
    buttonGroup.value.removeEventListener("mouseleave", onMouseLeave);
    buttonGroup.value.removeEventListener("mouseup", onMouseUp);
    buttonGroup.value.removeEventListener("mousemove", onMouseMove);
  }
});
</script>

<style scoped lang="scss">
.days {
  @include flex-center;
  background-color: $white;
  border-radius: 10px;
  padding: 16px;
  max-width: 350px;
  width: 100%;

  h2 {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    color: $gray;
    padding-left: 20px;
    margin-bottom: 20px;
  }
}

.days-content {
  width: 100%;
  max-width: 100%;
}

.input-group {
  margin: 20px 0 10px 0;
}

input[type="text"] {
  width: 100%;
  border: 1px solid $light;
  border-radius: 5px;
  padding: 13px 16px;
  font-size: 16px;
  font-family: "Roboto";
}

.button-group {
  @include flex-start;
  overflow-x: auto;
  max-width: 100%;
  width: 100%;
  gap: 10px;
  margin-bottom: 15px;
  cursor: grab;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  &.active {
    cursor: grabbing;
  }
  & > div {
    background-color: rgba(138, 150, 163, 0.12);
    font-size: 14px;
    border-radius: 30px;
    font-family: "Roboto";
    white-space: nowrap;
    padding: 8px 20px;
    transition: all 0.3s ease;
    cursor: pointer;
    user-select: none;
    &:hover,
    &.active {
      color: $black;
      background-color: $light-blue;
    }
  }
}

.actions {
  @include flex-end;
  font-size: 14px;
  gap: 5px;
  button {
    font-family: "Roboto";
    text-transform: uppercase;
    color: $blue;
    border-radius: 30px;
    cursor: pointer;
    padding: 8px 10px;
    transition: all 0.3s ease;
    font-weight: 500;
    &:hover {
      background-color: $ultra-light;
      color: $accent;
    }
  }
}
</style>
