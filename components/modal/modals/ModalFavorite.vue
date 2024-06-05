<template>
  <div class="save">
    <div class="save__head">
      <p>Сохранить в список</p>
      <div class="save__right">
        <IconButton iconName="ri:search-line" iconSize="22" iconColor="gray" />
        <IconButton
          iconName="iconamoon:sorting-left-fill"
          iconSize="22"
          iconColor="gray"
        />
      </div>
    </div>
    <div class="save__body">
      <ul>
        <li class="save__item">
          <div class="save__info">
            <label class="custom-checkbox">
              <input type="checkbox" name="save" />
              <span class="checkmark"></span>
            </label>
            <div class="save__details">
              <p class="save__title">test</p>
              <p class="save__subtext">2 users • 761 постов</p>
            </div>
          </div>
          <div class="save__avatars">
            <AvatarCircle v-for="item in 2" :key="item" />
          </div>
        </li>
      </ul>
    </div>
    <div class="save__footer">
      <button class="save__button">НОВЫЙ СПИСОК</button>
      <button class="save__button save__button--close">ЗАКРЫТЬ</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconButton from "~/components/ui/IconButton.vue";
import AvatarCircle from "~/components/interface/AvatarCircle.vue";
</script>

<style scoped lang="scss">
.save {
  border-radius: 8px;
  overflow: hidden;
  background-color: $white;
  min-width: 500px;
}

.save__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-bottom: 1px solid $light;
  p {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
  }
}

.save__right {
  display: flex;
  gap: 3px;
}

.save__body {
  padding: 10px;
}

.save__item {
  @include flex-space;
  padding: 10px 6px;
  border-bottom: 1px solid $light;
}

.save__info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.save__details {
  display: flex;
  flex-direction: column;
}

.save__title {
  font-weight: bold;
}

.save__subtext {
  color: gray;
}

.custom-checkbox {
  position: relative;
  display: inline-block;
  width: 22px;
  height: 22px;
}

.custom-checkbox input {
  opacity: 0;
  width: 0;
  height: 0;
}

.custom-checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 50%;
}

.custom-checkbox input:checked ~ .checkmark {
  background-color: #007bff;
  border-color: #007bff;
}

.custom-checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.custom-checkbox input:checked ~ .checkmark:after {
  display: block;
}

.custom-checkbox .checkmark:after {
  left: 8px;
  top: 4px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.save__avatars {
  display: flex;
  align-items: center;
}

.save__avatars .avatar {
  margin-left: -20px;
}

.save__avatars .avatar:first-child {
  margin-left: 0;
}

.save__footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #ccc;
}

.save__button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 14px;
}

.save__button--close {
  color: red;
}
</style>
