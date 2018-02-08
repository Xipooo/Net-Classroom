let day = 4;
let dayName;

// if (day == 1){
//     dayName = "Sunday";
// }
// else if (day == 2){
//     dayName = "Monday";
// }
// else if (day == 3){
//     dayName = "Tuesday";
// }
// else if (day == 4){
//     dayName = "Wednesday";
// }
// else if (day == 5){
//     dayName = "Thursday";
// }
// else if (day == 6){
//     dayName = "Friday";
// }
// else if (day == 7){
//     dayName = "Saturday";
// }
// else {
//     dayName = "Invalid day";
// }

switch (new Date().getDay()) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
        break;
}
console.log(dayName);