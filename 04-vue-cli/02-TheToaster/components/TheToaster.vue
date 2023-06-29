<template>
  <div class="toasts">
    <template v-for="toast in toasts" :key="toast.id">
      <UiToast
        :toastInfo="toast"
        @deleteToast="deleteToast"
      />
    </template>
  </div>
</template>

<script>
import UiToast from './UiToast.vue';

const SHOW_TIME = 5000
export default {
  name: 'TheToaster',

  components: {UiToast},

  data() {
    return {
      toasts: [],
    }
  },

  methods: {
    success(message) {
      const id = this.generateId()
      this.toasts.push({
        type: "success",
        message: message,
        id: id
      })
      setTimeout(() => {
        this.deleteToast(id)
      }, SHOW_TIME)
    },
    error(message) {
      const id = this.generateId()
      this.toasts.push({
        type: "error",
        message: message,
        id: id
      })
      setTimeout(() => {
        this.deleteToast(id)
      }, SHOW_TIME)
    },
    deleteToast(id) {
      const index = this.toasts.findIndex(toast => toast.id === id)
      if (index >= 0) {
        this.toasts.splice(index, 1)
      }
    },
    generateId() {
      return Date.now().toString(36) + Math.random().toString(36)
    }
  }
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
  cursor: pointer;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
