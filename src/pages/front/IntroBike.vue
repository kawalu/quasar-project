<template>
  <div class="q-pa-xl row items-start q-gutter-md" style="padding: 0% 15% 0% 15%;">
    <div class="row">
      <div class="col-12">
        <h2>車款介紹</h2>
        <q-breadcrumbs class="text-h6">
          <q-breadcrumbs-el label="回首頁" icon="home" to="/" />
          <q-breadcrumbs-el label="車款介紹" icon="electric_moped" />
        </q-breadcrumbs>
      </div>
      <div class="col-12">
        <h2>HONDA</h2>
      </div>
      <div class="col-12">
        <!-- HONDA封面 -->
        <q-img :src="HONDA"></q-img>
      </div>
      <template v-for="bike in bikes" :key="bike._id">
        <div class="col-12 col-md-6 col-lg-3" v-if="bike.category === 'HONDA'">
          <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
        </div>
      </template>
      <div class="col-12">
        <h2>YAMAHA</h2>
      </div>
      <div class="col-12">
        <!-- YAMAHA封面 -->
        <q-img :src="YAMAHA"></q-img>
      </div>
      <template v-for="bike in bikes" :key="bike._id">
        <div class="col-12 col-md-6 col-lg-3" v-if="bike.category === 'YAMAHA'">
          <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
        </div>
      </template>
      <div class="col-12">
        <h2>KAWASAKI</h2>
      </div>
      <div class="col-12">
        <q-img :src="KAWASAKI"></q-img>
      </div>
      <template v-for="bike in bikes" :key="bike._id">
        <div class="col-12 col-md-6 col-lg-3" v-if="bike.category === 'KAWASAKI'">
          <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { api } from 'boot/axios'
import { ref, reactive } from 'vue'
import { useQuasar } from 'quasar'
import BikeCard from 'src/components/BikeCard.vue'

const $q = useQuasar()

const HONDA = reactive(
  new URL('../../assets/HONDA封面.jpg', import.meta.url).href
)
const YAMAHA = reactive(
  new URL('../../assets/YAMAHA封面.jpg', import.meta.url).href
)

const KAWASAKI = reactive(
  new URL('../../assets/kawasaki封面.jpg', import.meta.url).href
)

const bikes = ref([]);

(async () => {
  try {
    const { data } = await api.get('/products')
    bikes.value.push(...data.result)
  } catch (error) {
    $q.notify({
      text: error.response.data.message,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})()

</script>
