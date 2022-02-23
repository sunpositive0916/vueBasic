// 모듈 패턴
export default{
    // 이 컴포넌트가 바인딩 되어야 할 DOM을 선택
    template: '#search-form',
    // 외부(디렉토리)에서 받아오는 값
    props: ['value'],
    data(){
        return{
            inputValue: this.value,
        }
    },
    // 어떤 뷰 모델을 감시하고 있다가 변경이 일어나면 행동함
    watch:{
        value(newVal, oldVal){
            this.inputValue = newVal
        }
    },
    methods: {
        onSubmit(){
            this.$emit('@submit', this.inputValue.trim())
        },
        onKeyup(){
            if(!this.inputValue.length) this.onReset()
        },
        onReset(){
            this.inputValue = ''
            this.$emit('@reset')
        },
    }
}