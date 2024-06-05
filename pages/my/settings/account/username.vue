<template>
  <div class="edit-username">
    <Divider :border="false" />
    <div class="usernames">
      <Inputs
        v-model="userName"
        label="Имя пользователя"
        :max="40"
        description="https://onlyfans.com/u406691674"
      />
    </div>
    <div class="save-btn">
      <button type="button">Сохранить</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Inputs from "~/components/ui/Inputs.vue";
import Divider from "~/components/ui/Divider.vue";

definePageMeta({
  title: "Учетная запись",
});

const userName = ref<string>("");
</script>

<style scoped lang="scss">
.usernames {
  padding: 16px 16px 25px 16px;
  border-bottom: 1px solid $light;
}
.edit-username {
  padding-bottom: 60px;
}

.save-btn {
  @include flex-end;
  padding: 12px 16px 11px;
  button {
    border-radius: 30px;
    background-color: $blue;
    padding: 5px 20px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 500;
    color: $white;
    font-family: "Roboto";
    min-height: 36px;
    cursor: pointer;
  }
}
</style>
