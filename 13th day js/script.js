// switch santax 

// switch (variable){
//     case 1:
//         statement ... 
//         break;
//     case 2:
//         statement .
//         break ;
//     default :
//         statement ..
//         break;
// }



let dayNumber = 1
let dayname ;

switch(dayNumber){
    case 1:
        dayname = "Monday"
        break;
    case 2:
        dayname = "Tueday"
        break;
    case 3:
        dayname = "Wedensday"
        break;
    case 4:
        dayname = "Thurday"
        break;
    case 5:
        dayname = "Friday"
        break;
    case 6:
        dayname = "saturday"
        break;
    case 7:
        dayname = "sunday"
        break;
    default:
        dayname = "Invaild day Number (Pleaase Enter Vaild number)"
        break;
}

document.writeln(`The ${dayNumber} is ${dayname}.`)




