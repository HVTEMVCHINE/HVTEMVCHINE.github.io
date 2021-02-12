'use strict'

// костыль для добавления нода после определенного дива в уже созданном нод элементе
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}




// Инстанс модального окна / реализация
function _createModal (options){
    const DEFAULT_WIDTH = 800
    const modal = document.createElement('div')
    modal.classList.add('popup')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="popup-overlay" data-close="true">
        <div class="popup-window" style="width: ${options.width || DEFAULT_WIDTH}">
            <div class="popup-header">
                <span class="popup-title" data-title="true">${options.title}</span>
                ${options.closable ? `<i class="fas fa-times popup-close" id="popup-close" data-close="true"></i>` : ''}
            </div>
            <div class="popup-content" data-content="true" style="max-height: ${options.height}; overflow: ${options.overflow}">
                <p>${options.content}</p>
            </div>
        </div>
    </div>
</div>`)

    const $footer = _createFooterModal(options.footerButtons)
    $footer.appendAfter(modal.querySelector('[data-content]'))


    document.body.appendChild(modal)
    return modal
}

// инстанс - реализация создания футера
function _createFooterModal(buttons = []) {
    if (buttons.length === 0){
        return document.createElement('div')
    } else {
        const popupFooter = document.createElement('div')
        popupFooter.classList.add('popup-footer')

        buttons.forEach(f => {
            const $btn = document.createElement('button')
            $btn.textContent = f.text
            $btn.classList.add(`btn-${f.type}`)
            $btn.onclick = f.handler

            popupFooter.appendChild($btn)
        })
        return popupFooter
    }
}



// Сам глобальный плагин является функцией с опциями настройки инстанса
$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const body = document.querySelector('body')

    const modal = {
        open() {
            if (destroyed){
                console.log('Modal is destroyed');
            } else {
                    !closing && $modal.classList.add('open')
                    body.style.overflowY = 'hidden'
            }

        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                closing = false
                $modal.classList.remove('hide')
                body.style.overflowY = 'auto'

                if (typeof options.onClose === 'function'){
                    options.onClose()
                }
            }, ANIMATION_SPEED)
        }
    }

    const listener = event => {
        if (event.target.dataset.close){
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)



        return Object.assign(modal, {
            destroy() {
                $modal.parentNode.removeChild($modal)
                destroyed = true
                $modal.removeEventListener('click', listener)
            },
            setContent(html) {
                $modal.querySelector('[data-content]').innerHTML = html
            },
            setTitle(html) {
                $modal.querySelector('[data-title]').innerHTML = html
            },
            onClose(){
            }
        })
}

