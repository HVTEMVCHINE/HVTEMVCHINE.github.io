function _createModal (options){
    const DEFAULT_WIDTH = 600
    const modal = document.createElement('div')
    modal.classList.add('popup')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="popup-overlay" data-close="true">
        <div class="popup-window" style="${options.width || DEFAULT_WIDTH}">
            <div class="popup-header">
                <span class="popup-title" data-title>${options.title || 'OKHO'}</span>
                ${options.closable ? `<i class="fas fa-times popup-close" id="popup-close" data-close="true"></i>` : ''}
            </div>
            <div class="popup-content">
                <p>${options.content || ''}</p>
            </div>
            <div class="popup-footer">
                <button data-close="true">OK</button>
                <button data-destroyclose="true">Cancel</button>
            </div>
        </div>
    </div>
</div>`)
    document.body.appendChild(modal)
    return modal
}


$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    let destroyed = false

    const modal = {
        open() {
            if (destroyed){
                console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
            document.body.style.overflow = 'hidden'
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


    // Закрытие по клику
    const listener = event => {
        if (event.target.dataset.close){
            modal.close()
        }
    }
    $modal.addEventListener('click', listener)


    $modal.addEventListener('click', event =>{
        if (event.target.dataset.destroyclose){
            modal.destroy()
        }
    })
    return modal
}
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



