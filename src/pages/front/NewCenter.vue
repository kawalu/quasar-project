<template>
  <div class="q-pa-md example-row-variable-width text-center">
    <div class="row justify-center q-mt-lg">
      <div class="col col-md-2 ">
        <div class="q-gutter-md ">
          <q-select filled v-model="Bike" :options="bikeOptions" label="請選擇型號" option-label="model" />
        </div>

        <div v-if="Bike">
          <h2>{{ Bike.name }}</h2>
          <q-img :src="Bike.image"></q-img>
          <p><strong>型號:</strong> {{ Bike.model }}</p>
          <p><strong>引擎形式:</strong> {{ Bike.engineform }}</p>
          <p><strong>車長×車寬×車高:</strong> {{ Bike.dimensions }}</p>
          <p><strong>座高:</strong> {{ Bike.seatHeight }}</p>
          <p><strong>車重:</strong> {{ Bike.weight }}</p>
          <p><strong>總排氣量:</strong> {{ Bike.displacement }}</p>
          <p><strong>最高馬力:</strong> {{ Bike.maxHorsepower }}</p>
          <p><strong>最高扭力:</strong> {{ Bike.maxTorque }}</p>
          <p><strong>前懸吊系統:</strong> {{ Bike.frontSuspension }}</p>
          <p><strong>後懸吊系統:</strong> {{ Bike.rearSuspension }}</p>
          <p><strong>輪胎(前):</strong> {{ Bike.frontTire }}</p>
          <p><strong>輪胎(後):</strong> {{ Bike.rearTire }}</p>
          <p><strong>前煞車系統:</strong> {{ Bike.frontBrakeSystem }}</p>
          <p><strong>後煞車系統:</strong> {{ Bike.rearBrakeSystem }}</p>
          <!-- Add other specification fields here -->
        </div>
      </div>
      <div class="col col-md-2" style="margin-left:50px;">
        <div class="q-gutter-md">
          <q-select filled v-model="Bike2" :options="bikeOptions" label="請選擇型號" option-label="model" />
        </div>

        <div v-if="Bike2">
          <h2>{{ Bike2.name }}</h2>
          <q-img :src="Bike2.image"></q-img>

          <p><strong>型號:</strong> {{ Bike2.model }}</p>
          <p><strong>引擎形式:</strong> {{ Bike2.engineform }}</p>
          <p><strong>車長×車寬×車高:</strong> {{ Bike2.dimensions }}</p>
          <p><strong>座高:</strong> {{ Bike2.seatHeight }}</p>
          <p><strong>車重:</strong> {{ Bike2.weight }}</p>
          <p><strong>總排氣量:</strong> {{ Bike2.displacement }}</p>
          <p><strong>最高馬力:</strong> {{ Bike2.maxHorsepower }}</p>
          <p><strong>最高扭力:</strong> {{ Bike2.maxTorque }}</p>
          <p><strong>前懸吊系統:</strong> {{ Bike2.frontSuspension }}</p>
          <p><strong>後懸吊系統:</strong> {{ Bike2.rearSuspension }}</p>
          <p><strong>輪胎(前):</strong> {{ Bike2.frontTire }}</p>
          <p><strong>輪胎(後):</strong> {{ Bike2.rearTire }}</p>
          <p><strong>前煞車系統:</strong> {{ Bike2.frontBrakeSystem }}</p>
          <p><strong>後煞車系統:</strong> {{ Bike2.rearBrakeSystem }}</p>
          <!-- Add other specification fields here -->
        </div>
      </div>
      <div class="col col-md-2" style="margin-left:50px;">
        <div class="q-gutter-md">
          <q-select filled v-model="Bike3" :options="bikeOptions" label="請選擇型號" option-label="model" />
        </div>

        <div v-if="Bike3">
          <h2>{{ Bike3.name }}</h2>
          <q-img :src="Bike3.image"></q-img>
          <p><strong>型號:</strong> {{ Bike3.model }}</p>
          <p><strong>引擎形式:</strong> {{ Bike3.engineform }}</p>
          <p><strong>車長×車寬×車高:</strong> {{ Bike3.dimensions }}</p>
          <p><strong>座高:</strong> {{ Bike3.seatHeight }}</p>
          <p><strong>車重:</strong> {{ Bike3.weight }}</p>
          <p><strong>總排氣量:</strong> {{ Bike3.displacement }}</p>
          <p><strong>最高馬力:</strong> {{ Bike3.maxHorsepower }}</p>
          <p><strong>最高扭力:</strong> {{ Bike3.maxTorque }}</p>
          <p><strong>前懸吊系統:</strong> {{ Bike3.frontSuspension }}</p>
          <p><strong>後懸吊系統:</strong> {{ Bike3.rearSuspension }}</p>
          <p><strong>輪胎(前):</strong> {{ Bike3.frontTire }}</p>
          <p><strong>輪胎(後):</strong> {{ Bike3.rearTire }}</p>
          <p><strong>前煞車系統:</strong> {{ Bike3.frontBrakeSystem }}</p>
          <p><strong>後煞車系統:</strong> {{ Bike3.rearBrakeSystem }}</p>
          <!-- Add other specification fields here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useRoute } from 'vue-router'

const route = useRoute()
const $q = useQuasar()

const Bike = ref(null)
const Bike2 = ref(null)
const Bike3 = ref(null)
const bikeOptions = ref([])

const init = async () => {
  try {
    const { data } = await api.get('/products')
    bikeOptions.value = data.result

    if (route.params.id) {
      const { data: bikeData } = await api.get('/products/' + route.params.id)
      Bike.value = bikeData.result
    }
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
