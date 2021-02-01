'use strict'


const popupLinks = document.querySelectorAll('.popup-link')
const lockPadding = document.querySelectorAll('.lock-padding')
const body = document.querySelector('html')


let unlock = true

const timeout = 800

if (popupLinks.length > 0){
    for (let index = 0; index < popupLinks.length; index++){
        const popupLink = popupLinks[index] // Получаем все ссылки на модальные окна
        popupLink.addEventListener('click', function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '')
            const currentPopup = document.getElementById(popupName)
            popupOpen(currentPopup)
            e.preventDefault()
        })
    }
}


const closePopupIcon = document.querySelectorAll('.close-popup') // Все объекты для закрытия окон
if (closePopupIcon.length > 0){
    for (let index = 0; index < closePopupIcon.length; index++){
        const el = closePopupIcon[index]
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'))
            e.preventDefault()
        })
    }
}

function popupOpen(currentPopup) { // Функция открытия окна
    if (currentPopup && unlock){
        const popupActive = document.querySelector('.popup.open')
        if (popupActive){
            popupClose(popupActive, false)
        } else {
            bodyLock();
        }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')){
            popupClose(e.target.closest('.popup'))
        }
    })
    }
}


function popupClose(popupActive, doUnlock = true) {
     if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock){
            bodyUnLock();
        }
    }
}






function bodyLock() {
    const lockPaddingValue =  (window.innerWidth - document.querySelector('header').offsetWidth)  + 'px'


    for (let index = 0; index < lockPadding.length; index++){
        const el = lockPadding[index]
        el.style.paddingRight = lockPaddingValue
    }
    body.style.paddingRight = lockPaddingValue
    body.style.overflowX = 'hidden'


    unlock = false
    setTimeout(function () {
        unlock = true
    }, timeout)
}


function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0){
            for (let index = 0; index < lockPadding.length; index++){
                const el = lockPadding[index]
                el.style.paddingRight = '0px'
                el.style.overflow = 'auto'
            }
        }
        //Это функция возвращает скролл для всего остального
        body.style.paddingRight = '0px'
        body.style.overflow = 'auto'
    }, timeout)

    unlock = false
    setTimeout(function () {
        unlock = true
    }, timeout)
}


document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27){
        const popupActive = document.querySelector('.popup.open')
        popupClose(popupActive)
    }
})












