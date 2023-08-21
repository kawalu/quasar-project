<template>
  <div class="q-pa-none" @scroll="saveScrollPosition">
    <q-carousel class="q-carousel-container q1 shadow-1" swipeable animated arrows padding v-model="slide"
      v-model:fullscreen="fullscreen" infinite control-color="white" :autoplay="5000">
      <q-carousel-slide :name="1" img-src="./輪播1.jpg" />
      <q-carousel-slide :name="2" img-src="./輪播2.jpg" />
      <q-carousel-slide :name="3" img-src="./輪播3.jpg" />
      <q-carousel-slide :name="4" img-src="./輪播4.jpg" />
    </q-carousel>
  </div>

  <div class="q-pa-md example-row-horizontal-alignment" data-aos="fade-up">
    <div class="row justify-center">
      <div class="col-4">
        <h2 style="color: brown; font-weight: bolder;">機種一覽 <span class="text">BIKE LINE UP</span></h2>
      </div>
      <div class="col-4">
      </div>
    </div>
  </div>

  <div class="q-pa-xl row q-gutter-md justify-center"  style="padding: 0 15%;" data-aos="fade-up" data-aos-delay="400">
    <swiper :navigation="true" :slidesPerView="4" :spaceBetween="3" :pagination="{
      clickable: true,
    }" :modules="modules" class="mySwiper">
      <swiper-slide>
        <template v-for="bike in bikes" :key="bike._id">
          <div class="col-12 col-md-6 col-lg-3" v-if="bike.model === 'Super Cub C125'">
            <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
          </div>
        </template>
      </swiper-slide>
      <swiper-slide>
        <div class="">
          <template v-for="bike in bikes" :key="bike._id">
            <div class="col-12 col-md-6 col-lg-3" v-if="bike.model === 'CB650R'">
              <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
            </div>
          </template>
        </div>
      </swiper-slide>
      <swiper-slide>
        <template v-for="bike in bikes" :key="bike._id">
          <div class="col-12 col-md-6 col-lg-3" v-if="bike.model === 'monkey125'">
            <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
          </div>
        </template>
      </swiper-slide>
      <swiper-slide>
        <template v-for="bike in bikes" :key="bike._id">
          <div class="col-12 col-md-6 col-lg-3" v-if="bike.model === 'r3'">
            <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
          </div>
        </template>
      </swiper-slide>
      <swiper-slide>
        <div class="col-2">
          <template v-for="bike in bikes" :key="bike._id">
            <div class="col-12 col-md-6 col-lg-3" v-if="bike.model === 'z900'">
              <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
            </div>
          </template>
        </div>
      </swiper-slide>
      <swiper-slide>
        <template v-for="bike in bikes" :key="bike._id">
          <div class="col-12 col-md-6 col-lg-3" v-if="bike.model === 'Mt-09'">
            <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
          </div>
        </template>
      </swiper-slide><swiper-slide>
        <template v-for="bike in bikes" :key="bike._id">
          <div class="col-12 col-md-6 col-lg-3" v-if="bike.model === 'ninja 400'">
            <BikeCard v-bind="bike" class="q-ma-md"></BikeCard>
          </div>
        </template>
      </swiper-slide>
    </swiper>
  </div>

  <div class="q-pa-md example-row-horizontal-alignment" style="background: #545353;">
    <div class="col-12 q-px-xl" style="padding: 0 10%; margin: 0;" data-aos="fade-up" data-aos-delay="800">
      <h2 class="title-h3">關於KAWA <span class="text">BIKE LINE UP</span></h2>
    </div>
    <swiper :loop="true" :navigation="true" :modules="modules" class="mySwiper" data-aos="fade-up" data-aos-delay="1200">
      <swiper-slide>
        <div class="row justify-center">
          <div class="col-6 q-px-xl ">
            <h3 class="title-h3">夢想之翼的靈魂人物</h3>
            <p class="title">
              本田宗一郎，這位被譽為二戰之後最有貢獻的技術型企業家享譽全球的HONDA創辦人，<br>
              在1946年的濱松市成立「本田技術研究所」之前，尚在汽車修理廠「東海精機」擔任總經理的本田宗一郎，<br>
              在研發活塞裝置時感到自身機械知識的不足進而在同年進入靜岡大學工學部，用三年的時間強化金屬學科知識。<br>
              一介堂堂公司總經理願意回到學校再度進修，你便能從這種精神中看出本田宗一郎的不恥下問與熱心向學的精神。<br>
            </p>
          </div>
          <div class="col-4">
            <q-card class="my-card q-my-xl">
              <q-img src="src/assets/honda.jpg">
              </q-img>
            </q-card>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="row justify-center">
          <div class="col-6 q-px-xl ">
            <h3 class="title-h3">HONDA第一輛市售摩托車-「夢想D型」</h3>
            <p class="title">
              1949年當HONDA成立後一年，「夢想D型」的到來，
              以98cc的二行程引擎搭配高手把與到現在依然流行的水滴型油箱，正式宣告了HONDA在摩托車產業展開以夢之名的羽翼與車輛製造的新頁。
            </p>
          </div>
          <div class="col-4">
            <q-img src="src/assets/hondaskilltree-2.jpg" style="height: 100%; width: 100%;">
            </q-img>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="row justify-center">
          <div class="col-6 q-px-xl ">
            <h3 class="title-h3">競技領域的霸業桂冠</h3>
            <p class="title">
              就如同你所熟知的，在MotoGP那經典不敗的REPSOL橘色塗裝，RC213V被新科霸主Marc Marquez
              駕馭的彷彿外星科技神車般的神勇表現，這些結晶可是HONDA在賽事領域的歷史中一筆一劃所練就出的紮實基本功而衍伸出的美好果實。
              除了之前提及的曼島TT初登場，
              1960年以正廠隊身份參戰WGP（MotoGP前身），並在六年後取得了二輪技競的最高殿堂冠軍金盃，
              2006年完成了WGP與MotoGP通算200勝的成績，HONDA的競賽部門HRC更是將觸手研伸至WSBK、世界耐久賽、
              世界越野車大獎賽等級別，建立威信與打出一片屬於夢想之翼的豐功偉業。
            </p>
          </div>
          <div class="col-4">
            <q-img src="src/assets/rc213v.jpg" style="height: 100%; width: 100%;">
            </q-img>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="row justify-center">
          <div class="col-6 q-px-xl ">
            <h3 class="title-h3">永不退縮的精神</h3>
            <p class="title">
              對於絕大多數人，困境只會令他們退縮。可對於極少部分人，困境卻會令他們孤注一擲，
              而恰恰是這種出其不意的進攻，能讓他們在後發劣勢下實現彎道超車。本田宗一郎向我們證明了野心與格局對一位創業者的重要性。
              最終，本田電單車成了本田公司打開世界市場大門，並成為世界級機動車與發動機廠商的一把鑰匙。
              從本田摩托車的發展，向我們展現了小企業如何逆襲的典範。
            </p>
          </div>
          <div class="col-4">
            <q-img src="src/assets/cbr1000rrr.jpg" style="height: 100%; width: 100%;">
            </q-img>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.title {
  font-size: 18px;
  color: #A5A2A2;
}

.title-h3 {
  color: #fff;
  font-weight: bolder;
}

.q1 {
  position: relative;
  height: calc(100vh - 50px);
}

.my-card {
  width: 100%;
  max-width: 350px;
}

.text {
  font-size: 25px;
}

.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, .3);
}

.swiper {
  /* position: static; */
}
</style>

<script setup>

import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import BikeCard from 'src/components/BikeCard.vue'
import { api } from 'boot/axios'
import { useQuasar } from 'quasar'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slide = ref(1)
const modules = [Pagination, Navigation]
const fullscreen = ref(false)

const $q = useQuasar()

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
