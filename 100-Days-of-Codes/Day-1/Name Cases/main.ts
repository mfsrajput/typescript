// // Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase,
//  uppercase, and titlecase.


// To Lower Case

let personeName: string = "Muhammad Farhan Rajput"
console.log("lowercase:",personeName.toLocaleLowerCase());

// To Upper Case
console.log("uppercase:",personeName.toLocaleUpperCase());

//to Title Case
console.log("TitleCase:",personeName.replace(/\bw/g,c => c.toLowerCase()))