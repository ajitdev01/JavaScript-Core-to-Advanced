let paraGraph = prompt("Enter The ParaGrapg")
let Splite = prompt("Enter The Splite")

console.log(paraGraph)
console.log(Splite)
console.log(paraGraph.split(Splite))

let arrys = paraGraph.split(Splite)
console.log(arrys)
arrys.forEach(function(items){
    document.writeln(`${items} <br><br><br><br><br><br><br><br><br><br><br>`)
})
