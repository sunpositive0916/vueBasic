import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.messages = {
    NO_RESULT: '검색 결과가 없습니다.'
}

ResultView.setup = function (el){
    this.init(el);
}

// 서버에서 받아온 검색결과 데이터를 가지고 동적으로 DOM을 그려주는 역할
ResultView.render = function(data = []){
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT
    this.show()
}

ResultView.getSearchResultsHtml = function(data){
    // 데이터는 collection이므로 reduce함수를 이용해서 만든다
    return data.reduce((html, item) => {
        html += this.getSearchItemHtml(item)
        return html
    }, '<ul>') + '</ul>'
}

ResultView.getSearchItemHtml = function(item){
    return `<li>
        <img src="${item.image}" alt="">
        <p>${item.name}</p>
    </li>`
}

export default ResultView