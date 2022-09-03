<template>
  <div class="container pt-1">
    <div class="card center">
      <h2>Тема Асинхронные Динамические компоненты</h2>
    </div>

    <div class="card">
      <app-button ref="btnRef" :color="oneColor" @action="active='one'">Первая</app-button>
      <app-button :color="twoColor" @action="active='two'">Вторая</app-button>
      <app-button :color="threeColor" @action="active='three'">Третья</app-button>
    </div>

    <div class="card">
      <app-async-component></app-async-component>
    </div>

    <keep-alive>
      <component :is="needComponent"></component>
    </keep-alive>

    <div class="card center">
      <h2>Тема Slots</h2>
    </div>
    <app-list>
      <template #default="{ iter, idx }">
        <span style="color:red;">
          <strong>{{ idx + 1 }}</strong>
          Item: {{ iter }}
        </span>
      </template>
    </app-list>
    <app-slot>
      <p>Просто текст</p>
      <template #footer>
        <ul>
          <li>Список</li>
        </ul>
      </template>
      <template #header><h2>Заголовок</h2></template>
      <p>Просто текст</p>
    </app-slot>
  </div>
</template>

<script>
import AppSlot from '@/AppSlot'
import AppList from '@/AppList'
import AppButton from '@/AppButton'
import appOne from '@/AppOne'
import appTwo from '@/AppTwo'
import appThree from '@/AppThree'

export default {
  data () {
    return {
      active: 'one'
    }
  },
  mounted () {
    setTimeout(() => {
      this.needComponent = 'new comp'
    }, 1500)

    this.$refs.btnRef.btnLog()
  },
  computed: {
    needComponent: {
      get () {
        return `app-${this.active}`
      },
      set (value) {
        console.log('needComponent', value)
      }
    },
    oneColor () {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor () {
      return this.active === 'two' ? 'primary' : ''
    },
    threeColor () {
      return this.active === 'three' ? 'primary' : ''
    }
  },
  components: {
    AppSlot,
    AppList,
    AppButton,
    appOne,
    appTwo,
    appThree
  }
}
</script>
