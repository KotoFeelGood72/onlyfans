<template>
  <div class="sub__sidebar">
    <div class="sub__input">
      <InputSearch placeholder="Искать сообщение пользователя" />
    </div>
    <div class="recent_posts__w">
      <div class="sub__title">НЕДАВНИЕ</div>
      <div class="recent_posts">
        <div class="recent_post">
          <img
            src="https://cdn2.onlyfans.com/files/a/ac/acf84d5434d9a5cc7c8dfb89931de8ba/300x300_2ff28fa2ab4f7277a922cf19744cf528.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvYVwvYWNcL2FjZjg0ZDU0MzRkOWE1Y2M3YzhkZmI4OTkzMWRlOGJhXC8zMDB4MzAwXzJmZjI4ZmEyYWI0ZjcyNzdhOTIyY2YxOTc0NGNmNTI4LmpwZz9UYWc9MiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxNzIzNjA5Nn0sIklwQWRkcmVzcyI6eyJBV1M6U291cmNlSXAiOiI0Ni4xNDkuNzQuMTQ1XC8zMiJ9fX1dfQ__&Signature=GOPsjckap84yYTcuU6cNh7LbzQFGcLJM8cQGsKsrp8ez7BEiEzWAxevZz6Ih6xLK5IVO4Pyly3Bx4GcmCNySuMQq9PVQshQ-W1z3HU7qOFyYz0FVWruNO7bMFpRMZ6j~bZsLnkxtDG6Y~xEJsysPshFQkYFu6uYD9qN21vYkHpp77gU3C5adnXj9VwxwULQdc-ZIFuL3AA01Tqj9mIw8CMD8a33tOtFJGe2ZV8BZIACOHHvWgqaMWk-WisXeydM3NDZP14NKNtirs7fIBhuqJHn8XhtV93UO9hxWXRX9Vg8FfT23~AsbFjSzx3CfTJxXIimhP0i8jOpOX5rclWnJaA__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD"
            alt=""
          />
        </div>
        <div class="recent_post">
          <img
            src="https://cdn2.onlyfans.com/files/d/d7/d727b39971571f2926e4a38b917b294e/960x1200_008bbcb2a354876a8e3292e02e6261c7.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvZFwvZDdcL2Q3MjdiMzk5NzE1NzFmMjkyNmU0YTM4YjkxN2IyOTRlXC85NjB4MTIwMF8wMDhiYmNiMmEzNTQ4NzZhOGUzMjkyZTAyZTYyNjFjNy5qcGc~VGFnPTIiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3MTcyMzY0MzF9LCJJcEFkZHJlc3MiOnsiQVdTOlNvdXJjZUlwIjoiNDYuMTQ5Ljc0LjE0NVwvMzIifX19XX0_&Signature=FSpA11TMXkIGzUYV5hQzeAL1zVgHYkksH7tmkBHk3C73f1PrNV03s6LeJgwYTotxGbizC7I~tD0Vrnbp5yZliFLtYDZTc~Sw~n6tpyZRgOcpuc19LAMh25A8S6iHKb~bYlGWCk3v7sFYtxp8m4SFeHt3ZFomPNwR9h77LGrRanXreaDGKAlh-xNQezs8zKsLIO4wlOyKrRNL20K78p~AbyVpvmxIWliq1QfogzvzIP0Zl8-XYcf71bP7BDmz2hSfftMZO48~rzK8oSwJbKCZf01CVR8vUYIRRK1PZRAnOgYQyMD2x1fxeiN48QT~kkEdIvcf5-82yTmELjpSb42Z5Q__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD"
            alt=""
          />
        </div>
        <div class="recent_post">
          <img
            src="https://cdn2.onlyfans.com/files/c/c1/c1974bde3cf8bb952288bbe0ce490ddc/300x300_d44527450a69a5a396efd228bfbf40d2.jpg?Tag=2&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6XC9cL2NkbjIub25seWZhbnMuY29tXC9maWxlc1wvY1wvYzFcL2MxOTc0YmRlM2NmOGJiOTUyMjg4YmJlMGNlNDkwZGRjXC8zMDB4MzAwX2Q0NDUyNzQ1MGE2OWE1YTM5NmVmZDIyOGJmYmY0MGQyLmpwZz9UYWc9MiIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxNzIzNjQxOH0sIklwQWRkcmVzcyI6eyJBV1M6U291cmNlSXAiOiI0Ni4xNDkuNzQuMTQ1XC8zMiJ9fX1dfQ__&Signature=Yj9EIu6H4GbjltV22WQSXkn6252jkmjTXBM8zjGpnJIvK8LU-HZKy5YOkqIpiMuofC93j81vsJT5vgMZlbV-v36RkM7K-S9nsGD7~YBlOgcDo8dbCAH9PthBkcUi3QtZx69vg5P~37SiiT0AXdg9oEPY0LtuzP45moh2C5lysmUkT-CdaBwUWG03sx20eRZXxg6d56SEEyu8v9Pq7G6zYKj-xzABq8LIZyc~jV3K6~ZIMcnnoKVrV9u~rYWIC6dBz~tbzUckCMFfiqxgOdU2OuNKadzqxgMyoauxb~E-JoI3MMrmFAa6~lYO4hJpTxSObV278x3vvKbyCwAqdeudlg__&Key-Pair-Id=APKAUSX4CWPPATFK2DGD"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="sub__card">
      <p>Подписка</p>
      <div class="sub_action__btn">
        <span>ПОДПИСНОЙ</span>
        <span>БЕСПЛАТНО</span>
      </div>
    </div>
    <div class="sub__other">
      <OtherLinks />
    </div>
  </div>
</template>

<script setup lang="ts">
import InputSearch from "../ui/InputSearch.vue";
import OtherLinks from "../ui/OtherLinks.vue";
</script>

<style scoped lang="scss">
.sub__sidebar {
  max-width: 368px;
  width: 100%;
  padding: 16px 0;
  @include flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  position: sticky;
  top: 0
}

.recent_posts {
  @include flex-space;
  border-radius: 10px;
  overflow: hidden;
  .recent_post {
    height: 110px;
    width: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.sub__input {
  width: 100%;
}

.sub__title {
  color: $gray;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 16px;
}
.recent_posts__w {
  border: 1px solid $light;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
}

.sub__card {
  border: 1px solid $light;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  p {
    color: $gray;
    text-transform: uppercase;
    font-weight: 500;
    margin-bottom: 12px;
  }
}

.sub_action__btn {
  @include flex-space;
  width: 100%;
  border-radius: 30px;
  border: 1px solid $light;
  font-size: 14px;
  text-transform: uppercase;
  color: $blue;
  font-weight: 500;
  padding: 10px 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    border-color: $blue;
    background-color: $ultra-light;
  }
}

.sub__other {
  width: 100%;
  margin-top: -20px;
}
</style>
