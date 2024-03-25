// Famous Quote 2: Repeat Exercise 4, 
// Albert Einstein once said, 
// “A person who never made a mistake never tried anything new.”
// but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. 
// Print your message.
var Quote = "A person who never made a mistake never tried anything new.";
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"").concat(Quote, "\"");
console.log(message);
