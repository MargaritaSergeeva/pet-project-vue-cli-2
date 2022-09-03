<template>
  <div class="card">
    <ul>
      <li v-for="(item, i) in 6" :key="i">
        <slot :iter="item" :idx="i"></slot>
      </li>
    </ul>
  </div>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>
