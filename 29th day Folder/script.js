let text = "BRAINZIMA"

console.log(text)
console.log(text.at(0))
console.log(text.at(5))

console.log(text.charAt(0))

// to print the ascii value that character
console.log(text.codePointAt(5))
console.log(text.charCodeAt(5))

console.log(text.length)


console.log(text.indexOf("o")) // if Worng not fount alphabet -1 
console.log(text.indexOf("A")) // if Worng not fount alphabet -1 

console.log(text.endsWith("A"))
console.log(text.endsWith("M"))

console.log(text.search("BRAINZIMA"))// this ture after 0 
console.log(text.search("brainzima"))// this false after -1 