<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    emits: {
      action: null
    },
    color: {
      type: String,
      default: '',
      validator (value) {
        return ['', 'danger', 'primary'].includes(value)
      }
    }
  },
  methods: {
    btnLog () {
      console.log('btn log')
    }
  }
}
</script>
