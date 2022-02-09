import View from './View.js'

// 디버깅을 위해 만든 tag
const tag = '[FormView]'

// View 객체를 복사
const FormView = Object.create(View)

// html el을 받아서 주입받아서 내부적으로 속성을 갖게끔 처리
FormView.setup = function (el) {
  this.init(el) // View.js의 init
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')
  this.showResetBtn(false)
  this.bindEvents()
  return this
}

// 리셋버튼 디스플레이 논블록 처리
FormView.showResetBtn = function (show = true){
  this.resetEl.style.display = show ? 'block' : 'none'
}

// 키보드 입력에 대한 이벤트 바인드
FormView.bindEvents = function(){
  this.on('submit', e => e.preventDefault())
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  this.resetEl.addEventListener('click', e => this.onClickReset())
}

// 키 입력 될때마다 실행
FormView.onKeyup = function (e){
  const enter = 13
  this.showResetBtn(this.inputEl.value.length) // input에 입력값이 있는지 확인(input 글자수 체크)
  if (!this.inputEl.value.length) this.emit('@reset')
  if (e.keyCode !== enter) return 
  this.emit('@submit', {input: this.inputEl.value})
}

FormView.onClickReset = function(){
  this.emit('@reset')
  this.showResetBtn(false)
}

export default FormView