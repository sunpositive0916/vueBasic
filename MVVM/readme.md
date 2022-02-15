# MVVM
- Model : 데이터 관리
    - 데이터베이스에 있는 데이터를 가져와서 또 다른 객체에게 전달
    - 외부 객체로부터 입력데이터를 받아서 DB에 넣어주는 역할
    - `웹프론트에서 모델의 역할은 데이터베이스에 직접 접근하지 않고 API형태로 접근`
    - `API로 데이터를 가져와서 다른 객체로 전달`
    - `외부 객체로부터 데이터를 입력받으면 백엔드API를 통해서 호출`
- View : 데이터를 가지고 화면을 그리는 역할
    - 보통은 HTML, CSS, JavaScript로 구현
    - 사용자가 입력한 데이터를 처리하는 역할(입력 이벤트를 다른 객체로 전달)
    - 전체적인 화면 관리
- ViewModel : 모델과 비슷하지만 살짝 다름(모델과 뷰 사이에 위치)
    - 모델로부터 데이터를 가져옴(뷰에 적합한 형태로 가공)
    - 뷰모델이 변경 될 때마다 자동으로 연결된 뷰 화면에 반영

``` javascript
// [예시]
// h1 태그 만들기
const h1 = document.createElement('h1')
document.body.appendChild(h1)


const viewModel = {}
let model = ''

// 뷰모델 생성
Object.defineProperty(viewModel, 'model', { // 프로퍼티를 정의한 객체, 속성 => viewModel.model에 접근하면 get함수 실행
    get(){
        return model;
    },
    set(val){
        model = val;
        h1.innerHTML = model;
    }
});

viewModel.model
viewModel.model = 'hello world'
viewModel.model = 'test'
// 데이터가 변경될 때 마다 화면에 즉시 반영되는것이 확인 됨 => 뷰모델의 역할
```

### Vuejs 설치 방법
- CDN 주소를 가져와서 스크립트를 삽입하는 방법(실습이므로 간단하게 하기 위해 이 방법 채택)
- NPM을 동해 실제 라이브러리를 다운받는 방법