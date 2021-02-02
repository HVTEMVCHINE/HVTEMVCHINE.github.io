
// ИНСТАНС модального окна / реализация
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
            <div class="popup-content">
                <p>${options.content || ''}</p>
            </div>
            <div class="popup-footer">
                <button data-okey="true">OK</button>
                <button data-destroyclose="true">Cancel</button>
            </div>
        </div>
    </div>
</div>`)
    document.body.appendChild(modal)

    return modal
}

// САМ ПЛАГИН является функцией с опциями настройки модального окна
$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const methods = {
        open() {
            if (destroyed){
                console.log('Modal is destroyed')
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
        },
        destroy() {
            $modal.parentNode.removeChild($modal)
            destroyed = true
            $modal.removeEventListener('click', listener)
            document.body.style.overflow = 'auto'
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
            setTimeout( () => {
                modal.open()
            }, 2000)
        } else if (event.target.dataset.destroyclose){
            modal.destroy()
        }
    } )
    const modalLink = document.querySelectorAll('.popup-link')
    for (let modalOpen of modalLink){
        modalOpen.addEventListener('click', event => {
            modal.open()
            event.preventDefault()
        })
    }
    document.addEventListener('keydown', event => {
        if (event.keyCode === 27){
            modal.close()
        }
    })
        return methods
}



