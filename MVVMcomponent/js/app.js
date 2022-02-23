import SearchModel from './models/SearchModel.js'
import KeywordModel from './models/KeywordModel.js'
import HistoryModel from './models/HistoryModel.js'

import FormComponent from './components/FormComponent.js'
import ResultComponent from './components/ResultComponent.js'
import ListComponent from './components/ListComponent.js'

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
    // 탭은 두개니까 배열로
    tabs: ['추천 검색어', '최근 검색어'],
    selectedTab: '',
    // 검색결과
    keywords: [],
    history: [],
    searchResult: [],
  },
  // Vue 인스턴스에서 컴포넌트를 사용하려면 추가해야함
  components: {
    // 키(실제 사용할 디렉티브 명) : 밸류
    'search-form': FormComponent,
    'search-result': ResultComponent,
    'list': ListComponent,
  },
  // 뷰 인스턴스가 생성 될 때 실행
  created(){
    this.selectedTab = this.tabs[0]
    this.fetchKeyword()
    this.fetchHistory()
  },
  // DOM과 바인딩할 함수 정의
  methods:{
    onSubmit(query){
      this.query = query
      this.search()
    },
    onReset(){
      this.resetForm()
    },
    onClickTab(tab){
      this.selectedTab = tab
    },
    onClickKeyword(keyowrd){
      this.query = keyowrd
      this.search()
    },
    onClickRemoveHistory(keyword){
      HistoryModel.remove(keyword)
      this.fetchHistory()
    },
    fetchKeyword(){
      KeywordModel.list().then(data => {
        this.keywords = data
      })
    },
    fetchHistory(){
      HistoryModel.list().then(data => {
        this.history = data
      })
    },
    search(){
      SearchModel.list().then(data => {
        this.submitted = true
        this.searchResult = data
      })
      HistoryModel.add(this.query)
      this.fetchHistory()
    },
    resetForm(){
      this.query = ''
      this.submitted = false
      this.searchResult = []
    }
  }
})