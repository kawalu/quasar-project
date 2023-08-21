<template>
  <div class="q-pa-none example-column-horizontal-alignment">
    <div class="row">
      <div class="col-12">
        <q-img src="src/assets/YAMAHA封面2.jpg"></q-img>
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
