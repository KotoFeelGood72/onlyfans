import { defineStore } from 'pinia';

interface ModalsState {
  sortering: boolean;
  subscribe: boolean
  addCart: boolean
  user: boolean
  pay: boolean
  favorite: boolean
  victoryDays: boolean
  quizDays: boolean
}

export const useModalStore = defineStore('modal', {
  state: (): { modals: ModalsState } => ({
    modals: {
      sortering: false,
      subscribe: false,
      addCart: false,
      user: false,
      pay: false,
      favorite: false,
      victoryDays: false,
      quizDays: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName: keyof ModalsState): void {
      this.modals[modalName] = false;
    },
  },
});


export const useModalStoreRefs = () => storeToRefs(useModalStore());
