<template>
  <q-card class="my-card" flat bordered>
    <q-card-actions align="center">
      <q-card-section style="width: 300px;">
        <div style="background: cover;">
          <q-img class="imgHover" :src="props.image" style="width: 100%; height: 100%;"></q-img>
        </div>
        <router-link :to="'/introbike/' + _id" class="text-primary" style="text-decoration: none;">
          <div class="text-h6 q-mb-xs">{{ props.name }}</div>
        </router-link>
        <div class="text-subtitle1">
          {{ props.model }}
        </div>
        <pre class="text-caption text-grey">{{ props.description }}</pre>
        <div class="row no-wrap items-center">
          <q-rating size="18px" v-model="stars" :max="5" color="primary" />
        </div>
        <div class="q-ml-sm">
          <q-btn flat round color="red" icon="favorite" label="like" @click="addLike" />
        </div>
      </q-card-section>
    </q-card-actions>
  </q-card>
</template>

<style scoped>
.imgHover {
  transition: all .3s;
}
.imgHover:hover {
transform: scale(1.1);
}
</style>

<script setup>
import { defineProps } from 'vue'
import { apiAuth } from 'src/boot/axios'
import { useQuasar } from 'quasar'
import { useUserStore } from 'stores/user'

const $q = useQuasar()
const user = useUserStore()

const props = defineProps({
  _id: {
    type: String,
    default: () => ''
  },
  category: {
    type: String,
    default: () => ''
  },
  description: {
    type: String,
    default: () => ''
  },
  image: {
    type: String,
    default: () => ''
  },
  name: {
    type: String,
    default: () => ''
  },
  model: {
    type: String,
    default: () => ''
  },
  sell: {
    type: Boolean,
    default: () => true
  }
})

const addLike = async () => {
  try {
    const { data } = await apiAuth.post('/users/like', {
      product: props._id,
      quantity: 1
    })
    user.like = data.result
  } catch (error) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: '失敗'
    })
  }
}
</script>
