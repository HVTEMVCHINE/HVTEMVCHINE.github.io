//карточки
const photos = [
    {id: 1, price: Math.floor(Math.random() * (6000 - 1456) + 18) + '$'},
    {id: 2, price: Math.floor(Math.random() * (6000 - 1456) + 11) + '$'},
    {id: 3, price: Math.floor(Math.random() * (6000 - 1436) + 34) + '$'},
    {id: 4, price: Math.floor(Math.random() * (6000 - 1456) + 12) + '$'},
    {id: 5, price: Math.floor(Math.random() * (6000 - 1464) + 9) + '$'},
    {id: 6, price: Math.floor(Math.random() * (6000 - 16) + 88) + '$'},
    {id: 7, price: Math.floor(Math.random() * (6000 - 147) + 3) + '$'},
    {id: 8, price: Math.floor(Math.random() * (6000 - 1756) + 4) + '$'},
    {id: 9, price: Math.floor(Math.random() * (6000 - 1456) + 7) + '$'},
    {id: 10, price: Math.floor(Math.random() * (6000 - 1456) + 5) + '$'}
]




// объект с параметрами
const modal = $.modal({
    title: 'Maxim Smirnov',
    closable: true,
    content: `
<h4>Modal is working!</h4>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
`,
    width: '400px',
    footerButtons: [
        {text: 'OK', type: 'light', handler() {
            console.log('Primary button clicked')
                modal.close()
        }},
        {text: 'Cancel', type: 'light', handler() {
                console.log('Danger button clicked')
                modal.destroy()
            }}
        ]
})




/*
------------------------------------------------------------------------------------------------------
По клику на определенную карточку, должна показываться цена карточки с модальным окном с кнопкой ОК
По клику на крестик должна вылезти модалка с кнопками удалить или отменить
------------------------------------------------------------------------------------------------------

либа animated.css изучить анимации

-------------------------------------------------------------------------------------------------------

Реализовать кнопку которая будет переводить страницу наверх
Реализовать кнопку поиска (навигация должна будет уходить вверх, а кнопка поиска расширятся)







*/



