
const wrapperElm = document.getElementById('wrapper')

const lpVue = new Vue({
  el: '#app',
  data: {
    lpPattern: 'type-a',
    mainCatchText: 'うるおい満ちる透明肌へ',
    subCatchText: 'デイリーケアで保湿も美白もかなえる',
    pointlist01: '強み1',
    pointlist02: '強み2',
    pointlist03: '強み3',
    second_titleEn: 'SPECIAL OFFER',
    second_titleJa: '初回限定50％OFF',
    setDetail: `美白化粧水\n90mL（1ヶ月分）\n\n美白乳液\n70ｍL（1ヶ月分）`,
    normalPrice: '6,480',
    offPercent: '50',
    discountPrice: '3,240',
    cvButton: 'お得に試してみる',
    note_title: 'お申し込みについて',
    note_sentence: `・定期コースへの自動移行はありません。\n・初回50％OFFはこのページから初めてお申し込みの場合の限定特典です。他のページや店舗でご購入の場合は、50％OFFが適用されませんのでご注意ください。`,

    fullLpMode: false, // 全画面処理のブーリアン
    
  },

  methods: {
    changeFullLp: function() {
      this.fullLpMode = !this.fullLpMode
      // console.log(wrapperElm)
    },
  }
});