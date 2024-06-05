<template>
  <NuxtLayout>
    <div class="main">
      <SiderbarMessages />
      <div class="empty__chat">
        <h3>Выберите любую беседу или отправьте новое сообщение</h3>
        <Button
          color-sheme="primary"
          label="Новое сообщение"
          style="display: inline-flex"
        />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import SiderbarMessages from "./../../../components/shared/SiderbarMessages.vue";
import Button from "~/components/ui/Button.vue";

useHead({
  title: "Учетная запись",
});
</script>

<style lang="scss" scoped>
.main {
  @include flex-start;
  align-items: flex-start;
  width: 100%;
}

.empty__chat {
  @include flex-center;
  flex-direction: column;
  min-height: 100vh;
  border-right: 1px solid $light;
  flex-grow: 1;
  padding: 30px;
  text-align: center;

  h3 {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 38px;
    font-weight: 500;
  }
}
</style>
