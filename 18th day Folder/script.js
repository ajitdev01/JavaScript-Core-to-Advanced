function sum(num1, num2){
    document.writeln( `${num1} + ${num2} = ${num1+num2} <br>`)
}
function sub(num1, num2){
    document.writeln( `${num1} - ${num2} = ${num1-num2}<br>`)
}
function div(num1, num2){
    document.writeln( `${num1} / ${num2} = ${num1/num2}<br>`)
}
function mul(num1, num2){
    document.writeln( `${num1} X ${num2} = ${num1/num2}<br>`)
}

sum(12,12)
sub(12,12)
div(12,12)
mul(12,12)

function bodmas(num1 , num2,op){
    switch(op){
        case '+':
            result = num1+num2
            break;
        case '-':
            result = num1-num2
            break;
        case '/':
            result = num1/num2
            break;

        case 'x':
            result = num1*num2
            break;
        default:
            result = "Enter Vaild Op"
            break;
    }
    document.writeln(`${num1} ${op} ${num2} = ${result} <br>`)
}

bodmas(12,12,"+")
bodmas(12,12,"-")
bodmas(12,12,"/")
bodmas(12,12,"x")