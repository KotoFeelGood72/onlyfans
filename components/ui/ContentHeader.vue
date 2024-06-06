<template>
  <div class="content_header">
    <div class="content_header__left">
      <div class="content_header__back" v-if="back">
        <Icon name="solar:arrow-left-linear" size="24" />
      </div>
      <h2>{{ title }}</h2>
    </div>
    <div class="content_header__other" v-if="other">
      <Icon name="mage:dots" size="22" />
    </div>
    <div class="content_header__settings" v-if="settings" v-tooltip.bottom="'Настройки'">
      <Icon name="ion:settings-outline" size="22" />
    </div>
    <div class="content_header__support" v-if="banking">
      <Icon name="material-symbols:contact-support-outline" size="25" />
    </div>
    <div class="content_header__added" v-if="added">
      <IconButton iconName="ri:search-line" iconSize="20" name="Поиск" v-if="search" />
      <IconButton
        iconName="ph:plus-bold"
        iconSize="20"
        name="Создать новый список"
        v-if="added"
      />
    </div>
    <div class="content_header__payments" v-if="payments">
      <div class="check_card">Проверить</div>
      <div class="payments__added">
        <IconButton
          iconName="material-symbols-light:add-card-outline"
          iconSize="24"
          name="Добавить карточку"
          positionName="bottom"
        />
      </div>
    </div>
    <div class="content_header__posts" v-if="route.name === 'posts-create'">
      <button type="button">ПОСТ</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "./IconButton.vue";
import { useRoute } from "vue-router";
const props = withDefaults(
  defineProps<{
    title?: string;
    back?: boolean;
    other?: boolean;
    settings?: boolean;
    banking?: boolean;
    payments?: boolean;
    search?: boolean;
    added?: boolean;
  }>(),
  {
    title: "Заголовок страницы",
    back: true,
    other: false,
    settings: false,
    banking: false,
    payments: false,
    search: false,
    added: false,
  }
);

const route = useRoute();
</script>

<style scoped lang="scss">
.content_header {
  @include flex-space;
  padding: 15px 15px;
  border-bottom: 1px solid rgba(138, 150, 163, 0.25);

  h2 {
    font-size: 19px;
    font-weight: 500;
    text-transform: uppercase;
  }
}

.content_header__left {
  @include flex-start;
  gap: 20px;
}

.content_header__other {
  cursor: pointer;
}
.content_header__settings {
  cursor: pointer;
}

.content_header__back {
  cursor: pointer;
}
.content_header__support {
  color: $gray;
}

.content_header__payments {
  @include flex-end;
  gap: 5px;
}

.check_card {
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 100px;
  transition: all 0.3s ease;
  color: $blue;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  &:hover {
    background-color: $ultra-light;
    color: $accent;
  }
}

.content_header__posts {
  button {
    @include flex-center;
    background-color: $blue;
    color: $white;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    border-radius: 30px;
    padding: 10px 20px;
    font-family: "Roboto";
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: $accent;
    }
  }
}

.content_header__added {
  @include flex-end;
}
</style>
