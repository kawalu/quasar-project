<template>
  <div class="q-pa-md text-center">
    <div class="column items-center">
      <div class="col q-pa-none">
        <h3>{{ bike.name }} {{ bike.model }}</h3>
      </div>
      <div class="col" style="width: 500px;">
        <q-img :src="bike.image"></q-img>
      </div>
      <div class="moto col">
        <table class="p_table">
          <tbody>
            <tr>
              <td class="tit">車長×車寬×車高</td>
              <td class="con">{{ bike.dimensions }}</td>
              <td class="tit">最大馬力</td>
              <td class="con">{{ bike.maxHorsepower }}</td>
            </tr>
            <tr>
              <td class="tit">座高</td>
              <td class="con">{{ bike.seatHeight }}</td>
              <td class="tit">最大扭力</td>
              <td class="con">{{ bike.maxTorque }}</td>
            </tr>
            <tr>
              <td class="tit">引擎形式</td>
              <td class="con">{{ bike.engineform }}</td>
              <td class="tit">前懸吊系統</td>
              <td class="con">{{ bike.frontSuspension }}</td>
            </tr>
            <tr>
              <td class="tit">車重</td>
              <td class="con">{{ bike.weight }}</td>
              <td class="tit">後懸吊系統</td>
              <td class="con">{{ bike.rearSuspension }}</td>
            </tr>
            <tr>
              <td class="tit">總排氣量</td>
              <td class="con">{{ bike.displacement }}</td>
              <td class="tit">輪胎(前)</td>
              <td class="con">{{ bike.frontTire }}</td>
            </tr>
            <tr>
              <td class="tit">前煞車系統</td>
              <td class="con">{{ bike.frontBrakeSystem }}</td>
              <td class="tit">輪胎(後)</td>
              <td class="con">{{ bike.rearTire }}</td>
            </tr>
            <tr>
              <td class="tit">後煞車系統</td>
              <td class="con">{{ bike.rearBrakeSystem }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
.moto {
  width: 1038px;
  margin: 50px auto;
  border-top: 30px solid
}

.tit {
  width: 15%;
  background-color: #eee;
}

.p_table {
  width: 100%;
}

.con {
  width: 35%;
}
</style>

<script setup>
import { useQuasar } from 'quasar'
import { onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar()

const bike = ref({
  _id: '',
  name: '',
  model: '',
  image: '',
  description: '',
  category: '',
  engineform: '',
  dimensions: '',
  seatHeight: '',
  weight: '',
  displacement: '',
  maxHorsepower: '',
  maxTorque: '',
  frontSuspension: '',
  rearSuspension: '',
  frontTire: '',
  rearTire: '',
  frontBrakeSystem: '',
  rearBrakeSystem: '',
  sell: true
})

const init = async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    bike.value._id = data.result._id
    bike.value.name = data.result.name
    bike.value.model = data.result.model
    bike.value.image = data.result.image
    bike.value.description = data.result.description
    bike.value.category = data.result.category
    bike.value.engineform = data.result.engineform
    bike.value.dimensions = data.result.dimensions
    bike.value.seatHeight = data.result.seatHeight
    bike.value.weight = data.result.weight
    bike.value.displacement = data.result.displacement
    bike.value.maxHorsepower = data.result.maxHorsepower
    bike.value.maxTorque = data.result.maxTorque
    bike.value.frontSuspension = data.result.frontSuspension
    bike.value.rearSuspension = data.result.rearSuspension
    bike.value.frontTire = data.result.frontTire
    bike.value.rearTire = data.result.rearTire
    bike.value.frontBrakeSystem = data.result.frontBrakeSystem
    bike.value.rearBrakeSystem = data.result.rearBrakeSystem
    bike.value.sell = data.result.sell

    document.title = bike.value.category + ' | ' + bike.value.name
  } catch (error) {
    console.log(error)
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '上傳失敗'
    })
  }
}

onMounted(init)
</script>
