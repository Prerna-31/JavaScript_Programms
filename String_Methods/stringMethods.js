let str = "      Javascript 101: Tutorial for beginners      "
console.log("Input string : " , str )
console.log("Length of input string : ", str.length);  // Please note that length is a property not methond.
console.log("Input string in uppercase : ", str.toUpperCase());
console.log("Input string in lowercase : ", str.toLowerCase());
console.log("Trimmed input string : ", str.trim());
console.log("Sliced input string for (17, 24) : ", str.slice(22,30));
console.log("Substring of the input string : ", str.substr(4,26));
console.log("Splitted input string based on spaces : " , str.split(" ")) //returns an array of splitted words.
console.log("Starting index of 'Tutorial' present in the input string : ", str.search('Tutorial'))
console.log("Replaced 'Tutorial' in input string with 'coding': ", str.replace('Tutorial','Coding'));
