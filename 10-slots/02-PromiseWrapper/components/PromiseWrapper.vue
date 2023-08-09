<template>
  <Transition name="fade" mode="out-in">
    <template v-if="result">
      <slot name="fulfilled" :result="result" key="fulfilled"/>
    </template>
    <template v-else-if="error">
      <slot name="rejected" :error="error" key="rejected"/>
    </template>

    <template v-else>
      <slot name="pending" key="pending"/>
    </template>
  </Transition>

</template>

<script>
export default {
  name: 'PromiseWrapper',

  props: {
    promise: {
      type: Promise,
      required: true,
    },
  },
  data() {
    return {
      result: null,
      error: null,
    };
  },
  watch: {
    promise: {
      immediate: true,
      handler(newValue) {
        this.result = null
        this.error = null
        newValue.then(response => {
          this.result = response
        })
          .catch(error => {
            this.error = error
          })
      }
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
