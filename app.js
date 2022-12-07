// var userLogin = 'Bekova';
// var userPassword = '12345';
// var authLoginUser = prompt('введите логин');
// var authPasswordUser = prompt('введите пароль');

// var userINN = '10810200300758'
// // var innFirstNumber = Number (userINN[0]);
// // if ((innFirstNumber === 0 || innFirstNumber === 1 || innFirstNumber === 2) && userINN.length === 14) {
// //     console.log("персональный номер найден!")
// // }else {
// //     console.log("персональный номер не найден!")
// // }

// var size = "s";
// var euSize = "0";
// if (size === 's'){
//     console.log('европейский размер ->', euSize = 36)
//     alert ('европейский размер ->', euSize = 36)
// } else if(size === 'l'){
//     console.log('европейский размер ->', euSize = 40)
// } else if(size === 'm'){
//     console.log('европейский размер ->', euSize = 44)
// } else {
//     console.log('Такого размера не существует')
// }
// //этот же код через swtch..case сквозные ветки
// switch (size){
//     case "XL":
//     case "xl":
//         console.log('европейский размер xl - 42')
//         break
//     case "L":
//     case "l":
//         console.log('европейский размер l - 40')
//         break
//     case "M":
//     case "m":
//         console.log('европейский размер m - 38')
//         break
//     case "S":
//     case "s":
//         console.log('европейский размер s - 36')
//         break
//     default:
//         console.log('unknow size')
// }
//undefined - неопределенный тип данных 4

let name;
console.log(typeof name)

// null - нулевой тип данных 5

var surname = null;
console.log(typeof surname)

// object - объект (комплексный тип данных)

var user = {
    name: 'Aidana',
    surname: 'Bekova',
    phoneNumber: '0708902334',
    age: 19,
    secondNumber: undefined,
    address: null,
    inMaried: false,
    frontend: {
        month: 'JS1'
    },
}
console.log( user.name, user.surname)
console.log(user.frontend.month)

//NaN - not a number
