function genCard(){
    const name = document.getElementById('name').value
    const regd = document.getElementById('UPI').value

    // console.log(name)
    // console.log(regd)
    // console.log(course)
    // console.log(purl)
    document.getElementById('namev').innerHTML=name
    document.getElementById('UPIV').innerHTML=regd
    document.getElementById('qr').src=`https://quickchart.io/qr?text=upi://pay?pa=${regd}&size=300`
    
}