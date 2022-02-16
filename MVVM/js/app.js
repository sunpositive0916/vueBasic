import SearchModel from './models/SearchModel.js'

// Vue Instance 생성
new Vue({
  // Vue Instance가 HTML의 어느 부분에 마운팅 될지
  el: '#app',
  // 전달할 데이터
  data: {
    // 입력을 데이터를 받아서 저장하는 역할
    query: '',
    // submit이 일어났는지 안일어났는지 확인(검색어를 칠 때 마다 "'검색어' 검색어로 찾을 수 없습니다." 문구가 뜨기 때문)
    submitted: false,
    // 검색결과
    searchResult: [],
  },
  // DOM과 바인딩할 함수 정의
  methods:{
    onSubmit(e){
      this.search()
    },
    onKeyup(){
      if(!this.query.length) this.resetForm()
    },
    onReset(){
      this.resetForm()
    },
    search(){
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data
      })
    },
    resetForm(){
      this.query = ''
      this.submitted = false
      this.searchResult = []
    }
  }
})