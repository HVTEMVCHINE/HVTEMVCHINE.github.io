// костыль функция высчета объекта относительно верха страницы
function offset(el) {
    const rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return{
        top: rect.top + scrollTop
    }
}



//инстанс - реализация карточек в index.html
const $cards = _createCards()
function _createCards(photos = []) {

    const things = document.createElement('div')
    things.classList.add('things__cards')
    things.insertAdjacentHTML('afterbegin', `
                <!--CARD 1-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link"><i class="fas fa-times card-delete" ></i><img src="img/flacon.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 2-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/lamp.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 3-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/spoon.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 4-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/table.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 5-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/clock1.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 6-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/chairs.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 7-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/clock2.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 8-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/stool.jpg" alt="" class="things__card-pic"></div>
                </div>
                <!--CARD 9-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/corrine.jpg" alt=""
                                                               class="things__card-pic"></div>
                </div>
                <!--CARD 10-->
                <div class="things__card" data-popup-link="true">
                    <div class="things__card-link popup-link"><i class="fas fa-times card-delete" ></i><img src="img/tumblr.jpg" alt="" class="things__card-pic"></div>
                </div>
            </div>`)

    return things

}

const animItems = document.querySelectorAll('.anim-items')
const footerItem = document.getElementById('footer-logo')

    document.addEventListener('scroll', animOnScroll)
    function animOnScroll() {

        for (let animItem of animItems){
            const animItemHeight = animItem.offsetHeight // высота искомого объекта
            const animItemOffset = offset(animItem).top // позиция объекта относительно верха
            const animStart = 4 // коэфициент регулируюший видимую часть
            let animItemPoint = window.innerHeight - animItemHeight / animStart // видимая часть при скролле

            let addNode = false


            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {

                addNode = true
                $cards.appendAfter(document.getElementById('things-empty'))
                        if (addNode){
                            setTimeout( () => {
                                $cards.classList.add('fade')
                            }, 100)
                        }

            } else if (pageYOffset === 0 && !addNode){
                    $cards.parentNode.removeChild($cards)
                    $cards.classList.remove('fade')
            } else if (pageYOffset > 1500){
                setTimeout(() => {
                    footerItem.classList.add('active')
                }, 350)
            }

        }
    }







