<template>
  <div class="spotify">
    <div class="spotify_dropdown">
      <div
        class="spotify_card__head"
        @click="isDropdown = !isDropdown"
        :class="{ expand: isDropdown }"
      >
        <p>SPOTIFY</p>
        <div class="spotify__expand">
          <Icon name="pajamas:chevron-lg-down" size="20" />
        </div>
      </div>
      <div class="spotify_card__body" v-if="isDropdown">
        <p>СЧЕТ SPOTIFY</p>
        <button type="button">Настройки</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isDropdown = ref<boolean>(true);
</script>

<style scoped lang="scss">
.spotify {
  border: 1px solid $light;
  border-radius: 8px;
}

.spotify_card__head {
  @include flex-space;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  color: $gray;
  padding: 10px 15px;
  position: relative;
  cursor: pointer;
  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: "";
    width: 98%;
    height: 78%;
    background-color: $ultra-light;
    border-radius: 5px;
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
  }
  &:hover {
    &:after {
      opacity: 1;
      visibility: visible;
    }
  }
}

.spotify_card__body {
  @include flex-space;
  padding: 10px 15px;
  p {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 500;
    color: $gray;
  }

  button {
    text-transform: uppercase;
    color: $blue;
    font-weight: 500;
    font-size: 14px;
    border: 1px solid $light;
    border-radius: 30px;
    padding: 8px 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: "Roboto";
    &:hover {
      border-color: $blue;
      background-color: $ultra-light;
    }
  }
}
</style>
