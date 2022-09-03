<template>
  <div class="container pt-1">
    <div class="card center">
      <h2>Тема Slots</h2>
    </div>
    <app-list>
      <template #default="{ iter, idx }">
        <span style="color:red;">
          <strong>{{idx + 1}}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>
    <app-slot>
      <p>Просто текст</p>
      <template #footer><ul><li>Список</li></ul></template>
      <template #header><h2>Заголовок</h2></template>
      <p>Просто текст</p>
    </app-slot>
  </div>
</template>

<script>
import AppSlot from '@/AppSlot'
import AppList from '@/AppList'

export default {
  data () {
    return {
    }
  },
  components: {
    AppSlot,
    AppList
  }
}
</script>
