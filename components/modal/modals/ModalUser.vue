<template>
  <div class="user_modal">
    <AvatarCircle :online="true" size="medium" class="user__avatar" />
    <div class="close__modal" @click="closeModal('user')">
      <IconButton iconName="formkit:close" iconSize="23" iconColor="gray" />
    </div>
    <div class="user__tile">
      <div class="user_tile__text">
        <p>Klaus</p>
        <span> @u403758784 </span>
      </div>
      <div class="icon_expand__profile">
        <IconButton iconName="fluent:chevron-down-32-filled" iconSize="22" />
      </div>
    </div>
    <ul class="user__subscribe">
      <li><span>0</span> фаны</li>
      <li class="dots">·</li>
      <li><span>1</span> подписки</li>
    </ul>
    <ul class="nav__list">
      <li>
        <NavItemLink name="Мой профиль" icon="iconoir:profile-circle" link="/profile" />
      </li>
      <li>
        <NavItemLink
          name="Коллекции"
          icon="material-symbols-light:collections-bookmark-outline-sharp"
        />
      </li>
      <li>
        <NavItemLink
          name="Настройки"
          icon="clarity:settings-line"
          link="/my/settings/profile"
        />
      </li>
    </ul>
    <ul class="info__list">
      <li>
        <NavItemLink
          name="Ваши карты"
          subname="(для подписки)"
          icon="solar:card-outline"
          link="/my/payments"
        />
      </li>
      <li>
        <NavItemLink
          name="Станьте создателем"
          subname="(чтобы заработать)"
          icon="uit:create-dashboard"
          link="/my/banking"
        />
      </li>
    </ul>
    <ul class="nav__list">
      <li><NavItemLink name="Помощь и поддержка" icon="iconoir:help-circle" /></li>
      <li>
        <NavItemLink name="Темный режим" icon="heroicons:moon" />
      </li>
      <li>
        <NavItemLink name="Russian" icon="pepicons-pencil:internet" :expanded="true" />
      </li>
    </ul>
    <ul class="last__list">
      <li>
        <NavItemLink name="Выйти" icon="circum:logout" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import AvatarCircle from "~/components/interface/AvatarCircle.vue";
import IconButton from "~/components/ui/IconButton.vue";
import NavItemLink from "~/components/ui/NavItemLink.vue";
import { useModalStore } from "~/store/useModalStore";

const { closeModal } = useModalStore();
</script>

<style scoped lang="scss">
.user_modal {
  background-color: $white;
  min-width: 248px;
  border-radius: 10px;
  padding: 10px 16px;
  overflow: hidden;
  max-height: 100%;
  overflow-y: auto;

  position: relative;
}

.nav__list,
.info__list {
  @include flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  padding-bottom: 15px;
  margin-bottom: 10px;
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140%;
    left: -20%;
    content: "";
    border-bottom: 1px solid $light;
  }
  li {
    width: 100%;
  }
}

.user__avatar {
  margin-bottom: 10px;
}

.user__tile {
  @include flex-space;
  align-items: flex-start;
  gap: 20px;
  padding: 11px 36px 15px 6px;
  position: relative;
  p {
    font-weight: 500;
    margin-bottom: 4px;
  }
  span {
    font-size: 14px;
    color: $gray;
  }
}

.icon_expand__profile {
  position: absolute;
  top: 33%;
  right: 0;
  transform: translateY(-50%);
}

.user__subscribe {
  @include flex-start;
  gap: 10px;
  font-size: 14px;
  padding-left: 8px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  position: relative;
  &:before {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 140%;
    left: -20%;
    content: "";
    border-bottom: 1px solid $light;
  }

  span {
    font-weight: 500;
  }
}

.dots {
  font-weight: 600;
  font-size: 18px;
}

.last__list {
  padding-bottom: 10px;
}

.close__modal {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
