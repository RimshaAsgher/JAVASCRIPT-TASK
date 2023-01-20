// 24.  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want
//  to try more comparisons, write more tests. Have at least one True and one False result for each 
//  of the following:

// • Tests for equality and inequality with strings

//equality..
let myName = 'rimsha';
console.log ("Is my name =='rimsha' ?, i predict True")
console.log(myName == 'rimsha')
//inequality
console.log ("Is myName =='Safa' ?, i predict false")
console.log(myName == 'Safa')

// • Tests using the lower case function

//--> FALSE
let country = 'pakistan';
console.log("country name == 'USA', i predict False" )
console.log(country == 'USA')
//-->TRUE
console.log("my country == 'pakistan', i predict True" )
console.log(country == 'pakistan')

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

//-->TRUE
let num = 9 ;
console.log("number == 9 , i predict True")
console.log(num == 9)
//-->FALSE
console.log("num == 4 , i predict false")
console.log(num == 4)

// • Tests using "and" and "or" operators
//---->AND

//TRUE..
let num1 = 5 ;
let num2 = 10 ;
console.log(num1 == 5 && num2 == 10)
console.log(num1 + num2)
//FALSE..
let num3 = 98 ;
let num4 = 67 ;
console.log(num3 == 9 && num4 == 67)
console.log(num3 + num4)

//---->OR
//TRUE..
let no1 = 21 ;
let no2 = 82 ;
console.log(no1 == 213 || no2 == 82)
console.log(no1 + no2)
//FALSE..
if (no1 == 9 || no2 == 5){
console.log(no1 + no2)
}
else{
    console.log("numbers are incorrect")
}

// • Test whether an item is in a array
var city = ["karachi" , "quetta" , "lahore" , "rawalpindi"]
console.log( city.includes('lahore'));

// • Test whether an item is not in a array
console.log( city.includes('maree') );