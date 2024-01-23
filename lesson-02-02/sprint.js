/* Задание 1 на проверку знаний:
 Напишите функцию isPositive, которая принимает один аргумент - число, и возвращает true, если число положительное, 
 и false в противном случае. Используйте условный оператор if и стрелочную функцию. */ 

const isPositive = (number) => {
    if (number > 0 ) {
        return true;
    } else {
        return false;
    }
}

/* Задание 2 на проверку знаний:
Перепеши  (заверни) наше старое задание создав функцию giveMeResult(), в которую будешь передавать день недели: */

let dayOfWeek = "Monday"; 
const giveMeResult = (dayOfWeek) => {
if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") { 
    dayOfWeek = "dayOff" 
} else { 
    dayOfWeek = "weekday" 
} 
 
switch (dayOfWeek) { 
    case "weekday": 
        console.log("Будний день"); 
        break; 
 
    case "dayOff": 
        console.log("Выходной день"); 
        break; 
    default: 
        console.log("Некорректное значение дня недели"); 
} 
}

console.log(giveMeResult('Sunday'));