// simple Invoice Generator
let item = prompt("Enter Item name of Item:- ")
let rate = parseInt(prompt("Enter The Rate of Item:- "))
let qnty = parseInt(prompt("Enter The Quantity of Item:- "))
let discount = parseFloat(prompt("Enter The Rate of Discoount (in %):- "))

let Genral_Total = rate*qnty
let Net_Total = Genral_Total-  (Genral_Total*discount/100)

document.writeln(`
    ********************<br>
    BI-MALL - INVOICE MEMO <br>
    ********************<br>
    Item Name : ${item} <br>
    Rate : ${rate} <br>
    Quantity : ${qnty} <br>
    Discount in % : ${discount} % <br>
    ********************<br>
    Gross Total : ${Genral_Total} <br>
    Saving : ${Genral_Total-Net_Total} <br>
    <span class= "net-total">Net Total : ${Net_Total}</span> <br>
    ********************<br>
    Thanks :) Visit Again . <br>    
    ********************
    `)


