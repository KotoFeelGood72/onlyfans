<template>
  <div class="modal-sub">
    <div class="modal_sub__head">
      <img
        src="https://thumbs.onlyfans.com/public/files/thumbs/w480/g/gt/gtb/gtbbrz0tmbgtrfxcv4rdwuwxyi7ri2s91716259344/389854837/header.jpg"
        alt=""
      />
      <div class="modal_sub__avatar">
        <AvatarCircle
          avatar="https://thumbs.onlyfans.com/public/files/thumbs/c144/i/iw/iw0/iw0jnhziothqb9kgskhhi0m4m1cooya81715371488/389854837/avatar.jpg"
          label="Miss Louisa 🧨"
          txt="@louisa.louisa"
          size="large"
          custom-style="border: 2px solid #fff;"
          :online="true"
        />
      </div>
    </div>
    <div class="modal_sub__body">
      <div class="modal_sub__title">ПОДПИШИТЕСЬ И ПОЛУЧИТЕ СЛЕДУЮЩИЕ ПРЕИМУЩЕСТВА:</div>
      <ul>
        <li>
          <div class="icon-tile">
            <Icon name="ph:check-bold" size="22" />
          </div>
          <p>Полный доступ к контенту этого пользователя</p>
        </li>
        <li>
          <div class="icon-tile">
            <Icon name="ph:check-bold" size="22" />
          </div>
          <p>Прямое сообщение с этим пользователем</p>
        </li>
        <li>
          <div class="icon-tile">
            <Icon name="ph:check-bold" size="22" />
          </div>
          <p>Отменить подписку в любое время</p>
        </li>
      </ul>
      <Button
        label="ПОЖАЛУЙСТА, ДОБАВЬТЕ ПЛАТЕЖНУЮ КАРТУ"
        color-sheme="secondary"
        style="text-align: center; line-height: 20px; padding: 15px; border-radius: 100px"
        @click="changeModal()"
      />
    </div>
    <div class="modal_sub_bottom">
      <button type="button" @click="closeModal('subscribe')">Закрыть</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import AvatarCircle from "~/components/interface/AvatarCircle.vue";
import Button from "~/components/ui/Button.vue";
import { useModalStore } from "~/store/useModalStore";

const { closeModal, openModal } = useModalStore();

function changeModal() {
  closeModal("subscribe");
  openModal("addCart");
}
</script>

<style scoped lang="scss">
.modal-sub {
  background-color: $white;
  max-width: 344px;
  border-radius: 8px;
  overflow: hidden;
}

.modal_sub__head {
  position: relative;
  z-index: 0;
  margin-bottom: 25px;
  img {
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    object-fit: cover;
  }
}

.modal_sub__avatar {
  position: relative;
  z-index: 2;
  padding-top: 40px;
  padding: 35px 16px 0 16px;
}
:deep(.avatar) {
  align-items: flex-end;
}
:deep(.avatar p) {
  font-size: 19px;
  font-weight: 500;
}
:deep(.avatar span) {
  align-items: flex-end;
}

.modal_sub__body {
  padding: 16px;
  ul {
    margin-bottom: 15px;
    li {
      @include flex-start;

      align-items: flex-start;
      font-size: 15px;
      line-height: 20px;
      gap: 10px;

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  }
}

.modal_sub__title {
  color: $gray;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 10px;
}

.icon-tile {
  color: $blue;
}

.modal_sub_bottom {
  border-top: 1px solid $light;
  padding: 10px 5px 10px 5px;
  @include flex-end;

  button {
    padding: 6px 15px;
    font-size: 14px;
    text-transform: uppercase;
    color: $blue;
    font-weight: 500;
    font-family: "Roboto";
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: $ultra-light;
    }
  }
}
</style>
