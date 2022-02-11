import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import KeywordView from '../views/KeywordView.js'

import SearchModel from '../models/SearchModel.js'
import KeywordModel from '../models/KeywordModel.js'

const tag = '[MainController]'

export default {
  init(){
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    TabView.setup(document.querySelector('#tabs'))
      .on('@change', e => this.onChangeTab(e.detail.tabName))
    
    KeywordView.setup(document.querySelector('#search-keyword'))
      .on('@click', e => this.onClickKeyword(e.detail.keyword))

    ResultView.setup(document.querySelector('#search-result'))

    this.selectedTab = '추천 검색어'
    this.renderView()
  },

  renderView() {
    console.log(tag, 'renderView()')
    TabView.setActiveTab(this.selectedTab)

    if(this.selectedTab === '추천 검색어') {
      // 코드 재사용을 위해 따로 함수 생성
      this.fetchSearchKeyword()
    } else {

    }

    ResultView.hide()
  },

  fetchSearchKeyword(){
    KeywordModel.list().then(data => {
      KeywordView.render(data)
    })
  },

  // 검색을 처리
  search(query){
    console.log(tag, 'search()'. query)

    // 입력된 값을 input에 셋팅(추천검색어 클릭시 사용)
    FormView.setValue(query)

    // list는 promise를 반환하기 때문에 then함수 사용 가능
    SearchModel.list(query).then(data =>{
      // search api의 결과를 받아 처리하는 함수(onSearchResult)
      this.onSearchResult(data)
    })
  },

  // 키보드 눌렸을때 실행
  onSubmit(input){
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },
  // 리셋 버튼 혹은 글 끝까지 지우면 실행
  onResetForm(){
    console.log(tag, 'onResetForm()')
    this.renderView()
  },

  // 검색처리된 화면을 그려줌
  onSearchResult(data){
    TabView.hide()
    KeywordView.hide()
    ResultView.render(data)
  },

  // 탭 요소를 클릭했을 때 실행
  onChangeTab(tabName){
    debugger
  },

  // 추천검색어 리스트의 요소를 클릭했을 때 실행
  onClickKeyword(keyword){
    this.search(keyword)
  }
}