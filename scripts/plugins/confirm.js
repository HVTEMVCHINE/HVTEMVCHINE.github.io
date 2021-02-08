'use strict'

$.confirm = function (options) {
    return new Promise((resolve, reject) => {
        const modal = $.modal({
            title: options.title,
            content: options.content,
            width: '400px',
            closable: false,
            onClose() {
                modal.destroy()
            },
            footerButtons: [
                {text: 'Cancel', type: 'light', handler() {
                        modal.close()
                        reject()
                    }},
                {text: 'Delete', type: 'light', handler() {
                        modal.close()
                        resolve()
                    }}
            ]
        })
        setTimeout( () => {
            modal.open()
        }, 50)

    })
}