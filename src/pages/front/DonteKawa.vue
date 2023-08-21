<template>
  <div class="q-pa-md example-row-variable-width text-center">
    <div class="row justify-center">
      <div class="col-12 q-pm-xl">
        <h3>支持kawa</h3>
      </div>
      <div class="col-12 col-md-6">
        <a href="https://qr.opay.tw/jDwvv">  <q-img :src="Monkey"></q-img></a>
      </div>
      <div class="col-12 text-center">
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const Monkey = reactive(
  new URL('../../assets/4287358-PH.jpg', import.meta.url).href
)
</script>
