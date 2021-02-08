'use strict'

document.addEventListener('scroll', animOnScroll)

function offset(item) {
    const rect = item.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return{
        top: rect.top + scrollTop
    }
}

function animOnScroll() {
    const animItems = document.querySelectorAll('.anim-items')
        for (let animItem of animItems){
            const animItemHeight = animItem.offsetHeight // высота искомого объекта
            const animItemOffset = offset(animItem).top // позиция объекта относительно верха
            const animStart = 9 // коэфициент регулируюший видимую часть
            let animItemPoint = window.innerHeight - animItemHeight / animStart // видимая часть при скролле

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                render()
                renderButtonScroll()
                renderNav()
            } else
             if (pageYOffset === 0){
                unRender()
            }
        }
    }


function renderButtonScroll() {

    const scrollButton = document.querySelector('.things')
    scrollButton.insertAdjacentHTML('afterbegin', `<div class="scroll-wrapper" data-scroll="scroll"><div class="scroll-btn" data-scroll="scroll"><i class="fas fa-angle-double-up" data-scroll="scroll"></i></div></div>`)



    const anchor = document.getElementById('scroll-item')
    const upPageButton = document.querySelector('[data-scroll]')
    function scrollToAnchor() {
        anchor.scrollIntoView({
            block: "center",
            behavior: "smooth"
        })
    }
    upPageButton.addEventListener('click', scrollToAnchor)
}











