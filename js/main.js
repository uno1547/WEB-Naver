// input focus > placeholder출력,psuedo출력
const input = document.querySelector('.search input')
const psuedo = document.querySelector('.psuedo')
input.addEventListener('focus', function() {
  psuedo.classList.remove('hide')
  // input.setAttribute('placeholder', "hi")
  this.placeholder = "검색어를 입력해 주세요."
})
// input blur > placeholder,psuedo제거
input.addEventListener('focusout', function() {
  psuedo.classList.add('hide')
  this.placeholder = ""
})
// input클릭시 search각지게 바꾸고 드롭다운, input의 focus와 history묶어서toggle