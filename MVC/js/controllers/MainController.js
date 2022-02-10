import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'

import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init(){
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    ResultView.setup(document.querySelector('#search-result'))
  },

  search(query){
    console.log(tag, 'search()'. query)
    // list는 promise를 반환하기 때문에 then함수 사용 가능
    SearchModel.list(query).then(data =>{
      // search api의 결과를 받아 처리하는 함수(onSearchResult)
      this.onSearchResult(data)
    })
  },

  onSubmit(input){
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },
  onResetForm(){
    console.log(tag, 'onResetForm()')
    ResultView.hide()
  },

  onSearchResult(data){
    ResultView.render(data)
  }
}