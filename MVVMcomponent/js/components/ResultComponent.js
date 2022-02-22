// 모듈 패턴
export default{
    // 이 컴포넌트가 바인딩 되어야 할 DOM을 선택
    template: '#search-result',
    // 외부(디렉토리)에서 받아오는 값
    props: ['data','query'],
}