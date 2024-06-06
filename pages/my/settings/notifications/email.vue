<template>
  <div class="profileSettings">
    <Divider :border="false" />
    <Toggle name="Уведомления электронной почты" :borderTop="false"
      >Получайте электронные письма, чтобы узнать, что происходит, когда вы не находитесь
      на OnlyFans. Вы можете выключить их в любое время.</Toggle
    >
    <Toggle
      name="Показывать полный текст сообщения в уведомлении по электронной почте"
      :borderTop="false"
    />
    <Toggle name="Ежемесячный бюллетень" :borderTop="false" />
    <Divider :border="false" />
    <ListLinks
      label="Подписки и последующие"
      :checkboxes="[
        { name: 'Сводка новых должностей', isChecked: true },
        { name: 'Новые лайки', isChecked: true },
        { name: 'New Stream', isChecked: true },
        { name: 'Предстоящие напоминания о потоке', isChecked: true },
      ]"
    >
      <template #checkbox-slot-0>
        <div class="select-row">
          <Select
            :items="[
              { value: 'Каждый час', label: 'Каждый час' },
              { value: 'Каждые 3 часа', label: 'Каждые 3 часа' },
              { value: 'Каждые 6 часы', label: 'Каждые 6 часы' },
              { value: 'Каждые 12 часы', label: 'Каждые 12 часы' },
              { value: 'Каждые 24 часы', label: 'Каждые 24 часы' },
            ]"
            v-model="prof"
            label="Частота обновления"
          />
        </div>
      </template>
    </ListLinks>
    <Divider :border="false" />
    <ListLinks
      label="Новые сообщения"
      :checkboxes="[{ name: 'Сводка новых личных сообщений', isChecked: true }]"
    >
      <template #checkbox-slot-0>
        <div class="select-row">
          <Select
            :items="[
              { value: 'Каждый час', label: 'Каждый час' },
              { value: 'Каждые 3 часа', label: 'Каждые 3 часа' },
              { value: 'Каждые 6 часы', label: 'Каждые 6 часы' },
              { value: 'Каждые 12 часы', label: 'Каждые 12 часы' },
              { value: 'Каждые 24 часы', label: 'Каждые 24 часы' },
            ]"
            v-model="prof"
            label="Частота обновления"
          />
        </div>
      </template>
    </ListLinks>
    <Divider :border="false" />
    <p class="row-title">Связанные с вами и вашими сообщениями</p>
    <Toggle name="Новый подписчик" :borderTop="false" />
    <Toggle name="Новая подписка из пробной версии" :borderTop="false" />
    <Toggle name="Получать меньше уведомлений" :borderTop="false"
      >Получать уведомления по электронной почте только для прямых сообщений.</Toggle
    >
    <Divider :border="false" />
    <Toggle name="Важные уведомления о подписке" :borderTop="false"
      >Уведомления о предстоящем продлении и истечении срока действия подписки</Toggle
    >
  </div>
</template>

<script setup lang="ts">
import Divider from "~/components/ui/Divider.vue";
import ListLinks from "~/components/ui/ListLinks.vue";
import Toggle from "~/components/ui/Toggle.vue";
import Select from "~/components/ui/Select.vue";

const prof = ref<any>(null);

definePageMeta({
  title: "УВЕДОМЛЕНИЯ ЭЛЕКТРОННОЙ ПОЧТЫ",
});
</script>

<style scoped lang="scss">
.profileSettings {
  padding-bottom: 60px;
  width: 100%;
  flex-grow: 1;
}

.profileSettings_preview__bg {
  width: 100%;
  height: 180px;
  margin-bottom: -50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.profileSettings_preview__avatar {
  border: 2px solid $white;
  border-radius: 100%;
  display: inline-flex;
  margin-left: 20px;
  box-shadow: 0 0 20px 0 #00000013;
}

.profileSetting__form {
  padding: 20px 16px;
  @include flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;
  &:deep(div) {
    width: 100%;
  }
}

:deep(textarea)::-webkit-scrollbar {
  width: 0;
}

:deep(textarea) {
  -ms-overflow-style: none;
}

:deep(textarea) {
  overflow: -moz-scrollbars-none;
}

.select-row {
  padding: 12px 16px;
  border-bottom: 1px solid $light;
}

.row-title {
  padding: 12px 16px;
  border-bottom: 1px solid $light;
  min-height: 52px;
  @include flex-start;
  font-weight: 500;
}
</style>
