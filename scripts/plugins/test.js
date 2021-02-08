



// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n)
//     }
// }
//
//
// const calc = createCalcFunction(43)
// const calced = createCalcFunction(23)
//
// calc()
// calced()



// function createIncrement(n) {
//     return function (num) {
//         return num + n
//     }
// }
//
// const calc = createIncrement(20)
//
// console.log(calc(10))
// console.log(calc(20))
// console.log(calc(23))


//
// function urlGenerate(domain) {
//     return function (url) {
//         return (`http://${url}.${domain}`)
//     }
// }
//
// const el = urlGenerate('com')
// const ru = urlGenerate(`ru`)
//
//
// console.log(ru(`google`))