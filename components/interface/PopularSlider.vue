<template>
  <div class="popular_slider__w">
    <div class="popular_slider__head">
      <p>предложения</p>
      <div class="popular_slider__action">
        <div class="slider_action__btn" v-tooltip="'Показать только бесплатные'">
          <Icon name="foundation:pricetag-multiple" size="24" />
        </div>
        <div class="slider_action__btn" v-tooltip="'Обновить'">
          <Icon name="bytesize:reload" size="20" />
        </div>
        <div class="slider__nav">
          <div class="slider__left" v-tooltip="'Предыдущий'">
            <Icon name="ci:chevron-left" size="25" />
          </div>
          <div class="slider__right" v-tooltip="'Следущий'">
            <Icon name="ci:chevron-right" size="25" />
          </div>
        </div>
      </div>
    </div>
    <div class="popular__slider">
      <Swiper
        :slides-per-view="1"
        :loop="true"
        :space-between="30"
        :modules="[Navigation, Pagination]"
        :navigation="{
          prevEl: `.new-prev`,
          nextEl: `.new-next`,
        }"
        :pagination="{
          el: '.popular_slider__pagination',
          clickable: true,
        }"
      >
        <SwiperSlide v-for="(item, i) in 12" :key="'item-slide-' + i">
          <div class="popular_slider__subslides">
            <CardGalleryImg
              v-for="item in 3"
              :key="'sub-slide-item' + item"
              style="width: 100%"
            />
          </div>
        </SwiperSlide>
        <div class="popular_slider__pagination swiper-pagination"></div>
      </Swiper>
    </div>
    <OtherLinks />
  </div>
</template>

<script setup lang="ts">
import { Navigation, Pagination } from "swiper/modules";
import OtherLinks from "../ui/OtherLinks.vue";
import CardGalleryImg from "../ui/CardGalleryImg.vue";
</script>

<style scoped lang="scss">
.popular_slider__head {
  @include flex-space;
  padding: 30px 0 20px 0;
  p {
    text-transform: uppercase;
    color: $gray;
    font-size: 15px;
    font-weight: 500;
  }
}
.popular_slider__action,
.slider__nav {
  @include flex-start;
  color: $gray;
}

.popular_slider__action {
  gap: 15px;
}

.slider__nav {
  gap: 5px;
}

.slider_action__btn,
.slider__left,
.slider__right {
  cursor: pointer;
}

.slider__left,
.slider__right {
  &:swiper-button-disabled {
    pointer-events: none;
  }
}

.popular_slider__subslides {
  @include flex-start;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.popular_slider__pagination {
  position: relative;
  bottom: 0;
  margin-top: 10px;
  :deep(.swiper-pagination-bullet-active) {
    background: $gray !important;
  }
}
</style>
