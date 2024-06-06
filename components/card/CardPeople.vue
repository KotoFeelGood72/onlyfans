<template>
  <NuxtLink to="/">
    <div class="people">
      <div class="people__content">
        <p>Test</p>
        <ul>
          <li>1 user</li>
          <li>810 постов</li>
        </ul>
      </div>
      <div class="people__users">
        <AvatarCircle
          size="medium"
          v-for="people in peopleCount"
          :key="'people-count-' + people"
        />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import AvatarCircle from "../interface/AvatarCircle.vue";

const props = withDefaults(
  defineProps<{
    peopleCount?: number;
  }>(),
  {
    peopleCount: 1,
  }
);
</script>

<style scoped lang="scss">
.people {
  @include flex-space;
  position: relative;
  padding: 10px 16px;
  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: $ultra-light;
    content: "";
    width: 98%;
    height: 90%;
    transform: translate(-50%, -50%);
    border-radius: 7px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  &:hover {
    &:before {
      opacity: 1;
      visibility: visible;
    }
  }

  p {
    font-weight: 500;
    margin-bottom: 4px;
  }

  ul {
    @include flex-start;
    font-size: 14px;
    color: $gray;
    li {
      position: relative;
      &:not(:last-child) {
        &:after {
          content: "•";
          margin: 0 4px;
        }
      }
    }
  }
}

.people__users {
  @include flex-end;
  :deep(div) {
    &:not(:last-child) {
      margin-right: -25px;
    }
  }
}
</style>
