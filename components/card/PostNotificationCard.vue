<template>
  <div class="post-notification">
    <ul class="post_notification__action">
      <li class="current">Все</li>
      <li><Icon name="mdi:pencil-outline" size="16" /></li>
    </ul>
    <div class="notification__card__w">
      <div class="notification__card">
        <div>
          <Icon
            name="mdi:information-variant-circle-outline"
            size="25"
            class="icon-alert"
          />
          Dear KotoFeel Good
        </div>
        <br />
        <span> We've updated our Privacy Policy, which can be viewed </span>
        <a href="#">here</a>
        <br />
        <span>
          At OnlyFans, we respect your privacy. We are committed to protecting your
          personal data and being transparent about how it is used.
        </span>
        <br />
        <br />
        <span> The key updates include more information about:</span>
        <br />
        <br />
        <span>
          - the personal data we collect, why we collect it and why we share it.</span
        >
        <br />
        <br />
        <span>
          - Creator and Fan onboarding, and how / why personal data is used in these
          processes.</span
        >
        <br />
        <br />
        <span> - how we comply with new privacy legislation.</span>
        <br />
        <br />
        <span> The OnlyFans Team</span>
        <div class="accept__btn__w">
          <div class="accept__btn">Отклонить</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.post-notification {
  border-top: 8px solid $marked;
  border-bottom: 8px solid $marked;
}

.post_notification__action {
  border-bottom: 8px solid $marked;
  padding: 15px 20px;
  @include flex-start;
  gap: 10px;
  li {
    cursor: pointer;
    font-size: 14px;
    height: 32px;
    padding: 5px 15px;
    @include flex-center;
    border-radius: 30px;
    &:not(:first-child) {
      width: 32px;
      background-color: rgba(138, 150, 163, 0.12);
      color: $black;
      padding: 0;
      transition: all 0.3s ease;
      &:hover {
        color: $blue;
        background-color: $light-blue;
      }
    }

    &.current {
      background-color: $light-blue;
    }
  }
}

.notification__card {
  padding: 15px 15px 15px 50px;
  position: relative;
  max-height: 300px;
  overflow-y: scroll;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Скрываем полосу прокрутки */
  }

  & {
    -ms-overflow-style: none; /* Скрываем полосу прокрутки в IE и Edge */
    scrollbar-width: none; /* Скрываем полосу прокрутки в Firefox */
  }
}

.notification__card__w {
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    content: "";
    background-color: $light-blue;
    opacity: 0.5;
  }
}

.accept__btn__w {
  @include flex-end;
}
.accept__btn {
  @include flex-center;
  color: $blue;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 15px 2px 15px;
  border-radius: 30px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #00b0f018;
  }
}

.icon-alert {
  position: absolute;
  left: 15px;
  color: $blue;
}
</style>
