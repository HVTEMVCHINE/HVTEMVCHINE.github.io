// костыль для добавления нода после определенного дива
Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

// инстанс - реализация создания футера
function _createFooterModal(buttons = []) {
    if (buttons.length === 0){
        return document.createElement('div').classList.add('empty')
    } else {
        const wrap = document.createElement('div')
        wrap.classList.add('popup-footer')

        buttons.forEach(key => {
            const $btn = document.createElement('button')
            $btn.textContent = key.text
            $btn.classList.add('btn')
            $btn.classList.add(`btn-${key.type || 'secondary'}`)
            $btn.onclick = key.handler || console.log('empty key')

            wrap.appendChild($btn)
        })

        return wrap
    }
}

// Инстанс модального окна / реализация
function _createModal (options){
    const DEFAULT_WIDTH = 600
    const modal = document.createElement('div')
    modal.classList.add('popup')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="popup-overlay" data-close="true">
        <div class="popup-window" style="${options.width || DEFAULT_WIDTH}">
            <div class="popup-header">
                <span class="popup-title" data-title>DEFAULT TITLE</span>
                ${options.closable ? `<i class="fas fa-times popup-close" id="popup-close" data-close="true"></i>` : ''}
            </div>
            <div class="popup-content" data-content="true">
                <p>${options.content || ''}</p>
            </div>
        </div>
    </div>
</div>`)

    const $footer = _createFooterModal(options.footerButtons)
    $footer.appendAfter(modal.querySelector('[data-content]'))


    document.body.appendChild(modal)
    return modal
}

// Сам глобальный плагин является функцией с опциями настройки инстанса
$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const methods = {
        open() {
            if (destroyed){
                console.log('Modal is destroyed');
            }
            !closing && $modal.classList.add('open')

        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                closing = false
                $modal.classList.remove('hide')
                document.body.style.overflow = 'auto'
            }, ANIMATION_SPEED)
        }
    }
    const listener = event => {
        if (event.target.dataset.close){
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)

    $modal.addEventListener('click', event =>{
        if (event.target.dataset.okey){
                modal.close()
        } else if (event.target.dataset.destroyclose){
            modal.destroy()
        }
    })



    const modalLink = $cards.querySelectorAll('[data-popup-link]')
    for (let modalOpen of modalLink){
        modalOpen.addEventListener('click', event => {
            modal.open()
        })
    }
    document.addEventListener('keydown', event => {
        if (event.keyCode === 13){
            modal.close()
        }
    })

        return Object.assign(methods, {
            destroy() {
                $modal.parentNode.removeChild($modal)
                destroyed = true
                $modal.removeEventListener('click', listener)
            },

            setContent(html) {
                $modal.querySelector('[data-content]').innerHTML = html
            }
        })
}
