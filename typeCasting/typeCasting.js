let age = "31"
console.log("Before converting into number: " + typeof(age) + "--->" + age)
age = Number(age)
console.log("After converting into number: " + typeof(age) + "--->" + age)
age = String(age)
console.log("Converted back to string:" + typeof(age) + "--->" + age)

// We can convert something into array or object by using Array() and Object().
let myName = "Prerna Gupta"
console.log("Before converting string into array:" + typeof(myName) + "--->" + myName)
myName = Array(myName)
console.log("After converting string into array:" + typeof(myName) + "--->" + myName)
myName = String(myName)
console.log("Converted back to string" + typeof(myName) + "--->" + myName)

let myProp = "Name: Prerna Gupta, age : 56"
console.log("Before converting string into object:" + typeof(myProp) + "--->" + myProp)
myName = Object(myProp)
console.log("After converting string into object:" + typeof(myProp) + "--->" + myProp) 
myName = String(myProp)
console.log("Converted back to string :" + typeof(myProp) + "--->" + myProp)