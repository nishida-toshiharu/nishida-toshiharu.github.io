var vi = new Vue({
  el: '#app',
  data: {
    first:'初回excelコードsample',
    second: '変数 型',
    third: '演算子 比較演算子',
    forth : 'if文 list dict',
    fifth: 'for文 繰り返し',
    sixth: 'is not !=',
    part2_first: 'sample_dataのやりとり',
    listlabel:["解答🔽"],
      // sublistlabel:["Cloth","Pants","Shoes","Goods"],
      active:""
  },
  methods: {
    scrollToAnchorPoint(refName) {
      const el = this.$refs[refName]
      el.scrollIntoView({ behavior: 'smooth'})
    },
    dropdown(list){
      console.log(this.active);
        this.active = this.active===list ? "":list;
    }
  }
})