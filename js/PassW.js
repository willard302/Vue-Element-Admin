// show || hide password

let passWord = document.querySelector('#passWord')
let passBtn = document.querySelector('.passBtn')
let repassWord = document.querySelector('#repassWord')
let repassBtn = document.querySelector('.repassBtn')

passBtn.addEventListener('click', function () {
  showHidePasw(passWord)
})
if(repassBtn){
  repassBtn.addEventListener('click', function () {
    showHidePasw(repassWord)
  })
}

const showHidePasw = (item) => {
  if (item.type == 'password') {
    item.setAttribute('type', 'text')
  } else {
    item.setAttribute('type', 'password')
  }
}

// check password & repassword
let alertText = document.querySelector('#alertText')

if(passWord && repassWord){
  repassWord.addEventListener('change', () => {
    if (passWord.value && (repassWord.value !== passWord.value)) {
      alertText.classList.remove('hidden')
    } else {
      alertText.classList.add('hidden')
    }
  })
  passWord.addEventListener('change', () => {
    if (repassWord.value && (repassWord.value !== passWord.value)) {
      alertText.classList.remove('hidden')
    } else {
      alertText.classList.add('hidden')
    }
  })
}
