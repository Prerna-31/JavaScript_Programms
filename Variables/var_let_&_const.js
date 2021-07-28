var website = "www.google.com"
if(website == "www.google.com"){
    let greet = "hi there"
    const height = "5'1\""
    var name = "Bob"
    console.log("The let keyword:", greet);
    console.log("My height is ", height ,"!!");
}
//console.log("The let keyword:", greet);  //The let keyword is scoped type i.e. it can not access outside of the parenthesis but can be reassigned.
console.log("My name is ",name);  //The var keyword is not scoped type i.e. it can be acessed anywhere in the file.
//console.log("My height is ", height ,"!!");  /The const keyword is also scoped type i.e. it can not access outside of the parenthesis and can't be reassigned
