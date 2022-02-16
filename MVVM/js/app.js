// Vue Instance 생성
new Vue({
  // Vue Instance가 HTML의 어느 부분에 마운팅 될지
  el: '#app',
  // 전달할 데이터
  data: {
    // 입력을 데이터를 받아서 저장하는 역할
    query: '',
  },
  // DOM과 바인딩할 함수 정의
  methods:{
    onSubmit(e){
      debugger
    },
    onKeyup(){
      if(!this.query.length) this.onReset()
    },
    onReset(){
      this.query = ''
      // 검색 결과를 숨기는 코드 작성 예정
    }
  }
})