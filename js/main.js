const userInput = document.querySelector('#userInput')
const crushInput = document.querySelector('#crushInput')
const message = document.querySelector('.message-block')
const form = document.querySelector('form')
const formBtn = form.querySelector('button')
const demoButton = document.querySelector('#demoBtn')
const loveContainer = 'love-form'
const demoContainer = 'demo'

const showPage = (demoId, calcId) => {
  const demo = document.querySelector(`#${demoId}`)
  const view = document.querySelector(`#${calcId}`)

  demoButton.addEventListener('click', () => {
    demo.classList.add('fadeOut')

    view.classList.add('fadeIn')
    view.classList.remove('fadeOut')
  })
}
showPage(demoContainer, loveContainer)

const resetPage = (demoId, calcId) => {
  const demo = document.querySelector(`#${demoId}`)
  const view = document.querySelector(`#${calcId}`)

  demo.classList.add('fadeIn')
  view.classList.add('fadeOut')
  view.classList.remove('fadeIn')
}
addEventListener('load', () => resetPage(demoContainer, loveContainer), false)


const calculate = (inputOne, inputTwo) => {
  let lovePercentage = Math.floor(Math.random() * 100);

  if (inputOne.value == "" || inputTwo.value == "") {
    showToast('error-notification-message', 'error-notification-text', formBtn, 'toastBtn')
  } else if (lovePercentage < 50) {
    generateMsg(`${inputOne.value} your love <span class="fa fa-heart heart-red"></span> percentage with ${inputTwo.value} is ${lovePercentage}%`, `danger`)
    inputOne.value = ''
    inputTwo.value = ''
  } else {
    generateMsg(`${inputOne.value} your love <span class="fa fa-heart heart-green"></span> percentage with ${inputTwo.value} is ${lovePercentage}% match good luck on your relationship`, `success`)
    inputOne.value = ''
    inputTwo.value = ''
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault()
  calculate(userInput, crushInput)
})

function generateMsg(msg, msgClass, iconId) {
  const messageDiv = document.createElement('div')
  const formP = document.querySelector('#love-form')
  const message = document.createElement('p')

  const icon = document.createElement('span')
  icon.className = `fa fa-${iconId} ${iconId}`

  message.classList.add(`${msgClass}`)
  message.innerHTML = `${msg}`

  messageDiv.classList.add('love-percentage-display')
  messageDiv.appendChild(message)



  formP.append(messageDiv)
  setTimeout(() => messageDiv.remove(), 3500)
}

const showToast = (toastDiv, toastMsg, btn, closeBtn) => {
  const toast = document.querySelector(`.${toastDiv}`),
    toastText = document.querySelector(`.${toastMsg}`),
    closeButton = document.querySelector(`.${closeBtn}`)

  toastText.innerHTML = `Please fill in the field input respectively`
  btn.addEventListener('click', () => {
    toast.classList.add('active')
  })
  closeButton.addEventListener('click', (e) => e.target.parentElement.classList.remove('active'))
  setTimeout(() => {
    toast.classList.remove('active')
  }, 3500)
}
