<template>
  <div class="note-card">
    <div class="note_card__img">
      <img
        src="https://thumbs.onlyfans.com/public/files/thumbs/c50/o/oq/oqh/oqhgznm3msxczopaiolulfqdnc56ilg41655228867/52123787/avatar.jpg"
        alt=""
      />
      <div class="note__isLive">
        <Icon name="fluent:live-24-regular" />
      </div>
    </div>
    <div class="note_content">
      <div class="note_content__title">
        <span>Jaqueline ❤️‍🔥 #1 LATINA</span>
        <div class="note__nickname">
          <Icon name="material-symbols-light:verified-outline-rounded" size="20" />
          <p>@jackyromero</p>
        </div>
      </div>
      <div class="note__info">
        <div class="note_info__list">
          <Icon name="clarity:star-solid" />
          <p>Списки</p>
        </div>
        <span class="dots">·</span>
        <NuxtLink to="/">Test </NuxtLink>
      </div>
      <p>начал новую <NuxtLink to="/">прямую трансляцию</NuxtLink></p>
      <div class="note__date">25 мар.</div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.note-card {
  @include flex-start;
  align-items: flex-start;
  gap: 15px;
  padding: 18px 20px;
}

.note_card__img {
  position: relative;
  img {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: 100px;
  }
}

.note__isLive {
  position: absolute;
  bottom: 0px;
  right: -3px;
  width: 24px;
  height: 24px;
  @include flex-center;
  background-color: #e7e7e7;
  border: 2px solid $white;
  border-radius: 100%;
  color: $blue;
}
.note_content {
  font-size: 14px;
  @include flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.note_content__title {
  @include flex-start;
  span {
    font-weight: 500;
  }
}

.note__nickname {
  @include flex-start;
  gap: 3px;
  margin-left: 10px;
  p {
    color: $gray;
  }
}

.note__info,
.note_info__list {
  @include flex-start;
}

.note_info__list {
  gap: 3px;
  svg {
    color: $blue;
  }
}

.dots {
  display: inline-flex;
  padding: 0 3px;
  font-size: 18px;
  font-weight: 600;
}

.note__date {
  color: $gray;
}
p {
  a {
    color: $blue;
  }
}
</style>
