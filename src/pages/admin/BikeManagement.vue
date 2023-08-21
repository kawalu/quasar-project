<template>
  <div>
    <h1>管理重機</h1>
  </div>
  <div class="q-pa-md q-gutter-sm">
    <q-btn label="新增" color="green" @click="dialog = true" />
    <q-table title="管理資料" class="my-sticky-column-table" :rows="rows" :columns="columns" row-key="_id" :loading="loading"
      :filter="tableFilter">
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="tableFilter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
      <template v-slot:body-cell-image="props">
        <div style="text-align: center;">
          <q-img :src="props.row.image" width="100px"></q-img>
        </div>
      </template>
      <template v-slot:body-cell-sell="props">
        <div style="text-align: center;">
          <q-icon name="check" size="30px" v-if="props.row.sell"></q-icon>
        </div>
      </template>
      <template v-slot:body-cell-edit="props">
        <q-td :props="props">
          <q-btn color="primary" icon="edit" @click="tableEditItem(props.row)" />
        </q-td>
      </template>
      <template v-slot:body-cell-delete="props">
        <q-td :props="props">
          <q-btn color="red" icon="delete" @click="tableDeleteItem(props.row._id)" />
        </q-td>
      </template>
    </q-table>
  </div>
  <q-dialog v-model="dialog">
    <q-card class="my-card" style="width: 500px;">
      <h6>{{ dialogId.length > 0 ? '編輯' : '新增' }}</h6>
      <q-form @submit="onSubmit">
        <q-input filled type="text" v-model="name" :dense="dense" label="名稱" lazy-rules :rules="[
          val => !!val || '請輸入名稱'
        ]" />
        <q-input filled type="text" v-model="model" :dense="dense" label="型號" lazy-rules :rules="[
          val => !!val || '請輸入型號'
        ]" />
        <q-input filled type="text" v-model="engineform" :dense="dense" label="引擎" />
        <q-input filled type="text" v-model="dimensions" :dense="dense" label="車長×車寬×車高" />
        <q-input filled type="text" v-model="seatHeight" :dense="dense" label="座高" />
        <q-input filled type="text" v-model="weight" :dense="dense" label="車重" />
        <q-input filled type="text" v-model="displacement" :dense="dense" label="總排氣量" />
        <q-input filled type="text" v-model="maxHorsepower" :dense="dense" label="最高馬力" />
        <q-input filled type="text" v-model="maxTorque" :dense="dense" label="最大扭力" />
        <q-input filled type="text" v-model="frontSuspension" :dense="dense" label="前懸吊系統" />
        <q-input filled type="text" v-model="rearSuspension" :dense="dense" label="後懸吊系統" />
        <q-input filled type="text" v-model="frontTire" :dense="dense" label="輪胎(前)" />
        <q-input filled type="text" v-model="rearTire" :dense="dense" label="輪胎(後)" />
        <q-input filled type="text" v-model="frontBrakeSystem" :dense="dense" label="前煞車系統" />
        <q-input filled type="text" v-model="rearBrakeSystem" :dense="dense" label="後煞車系統" />
        <q-input v-model="description" filled type="textarea" :dense="dense" label="說明" lazy-rules :rules="[
          val => !!val || '請輸入說明'
        ]" />
        <q-select label="分類" v-model="category" :options="options"></q-select>
        <VueFileAgent v-model="files" v-model:raw-model-value="rawFiles" :max-files="1" max-size="1MB"
          accept="image/jpg, image/jpeg, image/png" :multiple="false" :error-text="{ type: '檔案格式錯誤', size: '檔案格式太大' }"
          help-text="選擇檔案或放到這裡" deletable ref="fileAgent"></VueFileAgent>
        <q-checkbox v-model="sell" label="以上傳" />
        <q-card-section class="text-center">
          <q-btn color="red" @click="onReset">取消</q-btn>
          <q-btn type="submit" :loading="loading" color="green">送出</q-btn>
        </q-card-section>
      </q-form>

    </q-card>
  </q-dialog>
  <router-view></router-view>
</template>

<style scoped>
.my-sticky-column-table {
  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 100%;
}

.my-sticky-column-table thead tr:first-child th:first-child {
  /* bg color is important for th; just specify one */
  background-color: #00b4ff;
}

.my-sticky-column-table td:first-child {
  background-color: #00b4ff;
}

.my-sticky-column-table th:first-child,
.my-sticky-column-table td:first-child {
  position: sticky;
  left: 0;
  z-index: 1;
}
</style>

<script setup>
import { ref } from 'vue'
import { apiAuth } from 'boot/axios'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const tableFilter = ref('')
const category = ref(null)
const options = [
  'YAMAHA', 'HONDA', 'KAWASAKI'
]
const sell = ref(false)
const dialog = ref(false)
const dense = ref(false)
const name = ref('')
const model = ref('')
const description = ref('')

const engineform = ref('')
const dimensions = ref('')
const seatHeight = ref('')
const weight = ref('')
const displacement = ref('')
const maxHorsepower = ref('')
const maxTorque = ref('')
const frontSuspension = ref('')
const rearSuspension = ref('')
const frontTire = ref('')
const rearTire = ref('')
const frontBrakeSystem = ref('')
const rearBrakeSystem = ref('')

const loading = ref(false)

const files = ref([])
const rawFiles = ref([])
const fileAgent = ref(null)

const dataclear = () => {
  name.value = ''
  model.value = ''
  description.value = ''
  category.value = ''
  engineform.value = ''
  dimensions.value = ''
  seatHeight.value = ''
  weight.value = ''
  displacement.value = ''
  maxHorsepower.value = ''
  maxTorque.value = ''
  frontSuspension.value = ''
  rearSuspension.value = ''
  frontTire.value = ''
  rearTire.value = ''
  frontBrakeSystem.value = ''
  rearBrakeSystem.value = ''
  sell.value = false
}

const onReset = () => {
  dialog.value = false
  dataclear()
  fileAgent.value.deleteFileRecord()
}

const columns = [
  {
    name: 'name',
    required: true,
    label: '名稱',
    align: 'center',
    field: 'name'
  },
  { name: 'image', align: 'center', label: '圖片', field: 'image', sortable: true },
  { name: 'model', align: 'center', label: '型號', field: 'model', sortable: true },
  { name: 'engineform', align: 'center', label: '引擎形式', field: 'engineform' },
  { name: 'dimensions', align: 'center', label: '車長×車寬×車高', field: 'dimensions' },
  { name: 'seatHeight', align: 'center', label: '座高', field: 'seatHeight' },
  { name: 'weight', align: 'center', label: '車重', field: 'weight' },
  { name: 'displacement', align: 'center', label: '總排氣量', field: 'displacement' },
  { name: 'maxHorsepower', align: 'center', label: '最高馬力', field: 'maxHorsepower' },
  { name: 'maxTorque', align: 'center', label: '最大扭力', field: 'maxTorque' },
  { name: 'frontSuspension', align: 'center', label: '前懸吊系統', field: 'frontSuspension' },
  { name: 'rearSuspension', align: 'center', label: '後懸吊系統', field: 'rearSuspension' },
  { name: 'frontTire', align: 'center', label: '輪胎(前)', field: 'frontTire' },
  { name: 'rearTire', align: 'center', label: '輪胎(後)', field: 'rearTire' },
  { name: 'frontBrakeSystem', align: 'center', label: '前煞車系統', field: 'frontBrakeSystem' },
  { name: 'rearBrakeSystem', align: 'center', label: '後煞車系統', field: 'rearBrakeSystem' },
  { name: 'description', align: 'center', label: '說明', field: 'description' },
  { name: 'category', align: 'center', label: '分類', field: 'category' },
  { name: 'sell', align: 'center', label: '上架', field: 'sell' },
  { name: 'edit', align: 'center', label: '編輯', field: 'calcium', sortable: false },
  { name: 'delete', align: 'center', label: '刪除', field: 'iron', sortable: false }
]

const rows = ref([])
const dialogId = ref('')

const tableEditItem = (item) => {
  // 設定表單 id
  dialogId.value = item._id
  // 表單填入預設值
  name.value = item.name
  model.value = item.model
  description.value = item.description
  category.value = item.category
  sell.value = item.sell
  engineform.value = item.engineform
  dimensions.value = item.dimensions
  seatHeight.value = item.seatHeight
  weight.value = item.weight
  displacement.value = item.displacement
  maxHorsepower.value = item.maxHorsepower
  maxTorque.value = item.maxTorque
  frontSuspension.value = item.frontSuspension
  rearSuspension.value = item.rearSuspension
  frontTire.value = item.frontTire
  rearTire.value = item.rearTire
  frontBrakeSystem.value = item.frontBrakeSystem
  rearBrakeSystem.value = item.rearBrakeSystem
  // 打開表單
  dialog.value = true
}

const bike = async () => {
  loading.value = true
  try {
    const { data } = await apiAuth.get('/products/all')
    rows.value = data.result.data
    loading.value = false
  } catch (error) {
    console.log(error)
  }
}
bike()

const tableDeleteItem = async (value) => {
  await apiAuth.delete(`/products/${value}`)
  bike()
}

const onSubmit = async () => {
  loading.value = true
  if (dialogId.value.length === 0 && files.value.length === 0) return
  try {
    const fd = new FormData()
    fd.append('name', name.value)
    fd.append('model', model.value)
    fd.append('description', description.value)
    fd.append('category', category.value)
    fd.append('sell', sell.value)
    fd.append('engineform', engineform.value)
    fd.append('dimensions', dimensions.value)
    fd.append('seatHeight', seatHeight.value)
    fd.append('weight', weight.value)
    fd.append('displacement', displacement.value)
    fd.append('maxHorsepower', maxHorsepower.value)
    fd.append('maxTorque', maxTorque.value)
    fd.append('frontSuspension', frontSuspension.value)
    fd.append('rearSuspension', rearSuspension.value)
    fd.append('frontTire', frontTire.value)
    fd.append('rearTire', rearTire.value)
    fd.append('frontBrakeSystem', frontBrakeSystem.value)
    fd.append('rearBrakeSystem', rearBrakeSystem.value)
    if (files.value.length > 0) {
      fd.append('image', files.value[0].file)
    }

    if (dialogId.value.length > 0) {
      await apiAuth.patch('/products/' + dialogId.value, fd)
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: '修改成功'
      })

      dialog.value = false
      loading.value = false
      bike()
    } else {
      await apiAuth.post('/products', fd)
      $q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: '新增成功'
      })
      bike()
      dialog.value = false
      dataclear()
      fileAgent.value.deleteFileRecord()
      loading.value = false
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
</script>
