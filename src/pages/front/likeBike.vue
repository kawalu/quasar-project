<template>
  <div class="q-pa-md example-row-column-width">
    <div class="row">
      <div class="col-12">
        <h1>收藏</h1>
      </div>
      <div class="col-12">
        <q-table :rows="like" :columns="columns">
          <template v-slot:body="props">
            <q-tr :props="props">
              <q-td key="name" :props="props">
                {{ props.row.product.name }}
              </q-td>
              <q-td key="image" :props="props" >
                <q-img :src="props.row.product.image" style="max-height: 400px" />
              </q-td>
              <q-td key="model" :props="props">
                {{ props.row.product.model }}
              </q-td>
              <q-td key="quantity" :props="props">
                {{ props.row.quantity }}
              </q-td>
              <q-td key="delete" :props="props">
                <q-btn color="primary" icon="delete" @click="removeFromLikes(props.row)" />
              </q-td>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { ref, onMounted } from 'vue'
import { apiAuth } from 'boot/axios'
import { useUserStore } from 'stores/user'

const $q = useQuasar()
const user = useUserStore()
const like = ref([])

const removeFromLikes = async (item) => {
  try {
    const { data } = await apiAuth.delete('/users/like', {
      data: {
        product: item.product._id
      }
    })
    like.value = like.value.filter(i => i.product._id !== item.product._id)
    user.like = data.result
  } catch (error) {
    console.log(error)
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '刪除失敗'
    })
  }
}

const columns = [
  {
    name: 'name',
    required: true,
    label: '名稱',
    align: 'center',
    field: 'name',
    sortable: true
  },
  { name: 'image', align: 'center', label: '圖片', field: 'image', sortable: true },
  { name: 'model', align: 'center', label: '型號', field: 'model', sortable: true },
  { name: 'quantity', align: 'center', label: '數量', field: 'quantity', sortable: true },
  { name: 'delete', align: 'center', label: '刪除', field: 'delete' }
]

onMounted(async () => {
  try {
    const { data } = await apiAuth.get('/users/like')
    like.value = data.result
  } catch (error) {
    console.log(error)
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '獲取收藏失敗'
    })
  }
})
</script>
