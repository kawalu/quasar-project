<template>
  <div class="q-pa-none example-column-horizontal-alignment">
    <div class="row">
      <div class="col-12">
        <q-img :src="YAMAHA2"></q-img>
      </div>
      <q-breadcrumbs class="text-h6" style="padding-left: 15%;">
        <q-breadcrumbs-el label="回首頁" icon="home" to="/" />
        <q-breadcrumbs-el label="探索kawa" icon="electric_moped" />
      </q-breadcrumbs>
      <div class="kawa lt-lg col-12">
        <div class="kawa_bg2">123</div>
        <div class="q-pa-xl">
          <div class="title">
            <span class="kawa_sapn">經營理念</span>
            <p style="margin-top: 20px;">
              Kawa的產品，在全世界的道路持續奔馳，
              從生產的測試跑道，無盡綿延的城鎮道路，甚至最高極速賽車場都有Honda經驗累積，
              我們將這些經驗落實到所有車款研發，只為了讓顧客感受Kawa真正的好。
            </p>
            <p>
              Kawa Taiwan以「追求顧客滿意度 NO.1」為目標，站在顧客的立場思考，
              建立高品質的服務環境；不論是賞車空間的規劃、顧客休息區的設立、保養維修服務的想法，
              甚至是對女性顧客的貼心考量...Kawa衷心的希望，在台灣的每個顧客，都能感受到Kawa的用心。
            </p>
          </div>
        </div>
      </div>
      <div class="kawa col-12 gt-md">
        <div class="kawa_bg"></div>
        <div class="text_kawa">
          <div class="title">
            <span class="kawa_sapn">經營理念</span>
            <p style="margin-top: 20px;">
              Kawa的產品，在全世界的道路持續奔馳，
              從生產的測試跑道，無盡綿延的城鎮道路，甚至最高極速賽車場都有Honda經驗累積，
              我們將這些經驗落實到所有車款研發，只為了讓顧客感受Kawa真正的好。
            </p>
            <p>
              Kawa Taiwan以「追求顧客滿意度 NO.1」為目標，站在顧客的立場思考，
              建立高品質的服務環境；不論是賞車空間的規劃、顧客休息區的設立、保養維修服務的想法，
              甚至是對女性顧客的貼心考量...Kawa衷心的希望，在台灣的每個顧客，都能感受到Kawa的用心。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="q-pa-none example-column-horizontal-alignment" style="background: #424242; color: #fff;">
    <div class="row">
      <div class="col-4 q-pa-xl q-gutter-md" style="margin-left: 150px; ">
        <q-img src="../../assets/企鵝.png"></q-img>
      </div>
      <div class="col-6 q-pa-xl q-gutter-md" style="margin-top: 70px;">
        <p style="font-size: 16px; font-weight: bolder;">
          大家好！我是KAWA。未來將由我帶領 KAWA Taiwan 暨全體員工繼續為台灣的消費者服務，持續推動 KAWA 品牌在台灣市場茁壯。為了讓台灣消費者願意繼續支持 KAWA 的產品與服務，我將秉持最能代表 KAWA
          文化的基本理念，亦即「尊重個人」以及「三種喜悅」。這也是我在整個職業生涯中一直遵循的方針。所謂「尊重個人」就是重視每位顧客、經銷夥伴、協力廠商及 KAWA Taiwan
          全體員工的想法。並透過「三種喜悅」讓每位顧客、所有相關人員都能「發自內心微笑」。未來也會依循上述理念同時展開溝通交流，期盼可以「讓所有與 KAWA 相關的人們獲得最大滿足」，進而推動 KAWA 在台灣的事業經營。

          汽車產業目前正面臨百年一遇的重大轉型時期，此外全球市場也遭受新冠病毒的影響與打擊。接下來我們將投入更具吸引力的產品，以及提供更加完善的服務，期望在各個領域能夠發揮相乘效果，讓所有顧客滿意，擁有充滿樂趣的用車生活。

          承蒙各位長期的支持與愛護，KAWA Taiwan 在2022年已正式邁入設立20周年的里程碑，感謝從過去至今一路陪伴 KAWA Taiwan 走來的朋友們，未來還請大家繼續支持並陪伴 KAWA Taiwan
          迎向下一個20周年。

          謝謝！
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.kawa {
  position: relative;
}

.kawa_bg {
  background-image: url('src/assets/about-visual-01.jpg');
  height: 656px;
}

.kawa_bg2 {
  background-image: url('src/assets/about-visual-01.jpg');
  height: 656px;
  background-position: 55% 50%;
  background-size: cover;
}

.kawa_sapn {
  font-size: 35px;
  font-weight: bolder;
}

.text_kawa {
  position: absolute;
  width: 550px;
  background: #e8e8e8;
  padding: 50px;
  color: #414141;
  left: calc((100% - 1632px)/2 + 10px);
  top: 50%;
  transform: translateY(-50%);
}
</style>

<script setup>
import { reactive } from 'vue'
const YAMAHA2 = reactive(
  new URL('../../assets/YAMAHA封面2.jpg', import.meta.url).href
)
</script>
