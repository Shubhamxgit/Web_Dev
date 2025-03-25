console.log("Hello WOrld", 47);
const obj = {
    apple:500,
    ball:800,
    "cat":700,
}  

//Arithmatic Operator
console.log(obj);
console.log(10+2);
console.log(10-2);
console.log(10/2);      //Quotient
console.log(10%2);      //Remainder
console.log(10**2);     //power

//Assingment operator
let x = 10;
x+=5;                   //x=x+5
console.log(x);

//Comparison Operator -> Result is Bollean
let m = 9;
let n = 5;
console.log(m>=n);
console.log(m<=n);
console.log(m==n);
console.log(m>n);
console.log(m<n);

//Logical Operator
console.log(0 && 9);
console.log(undefined && 9);    //Returns undefined since if 1st input is false it returns the first input itself
console.log(9 && 10);   //Returns 2nd value since any number except 0 is true(i.e. 1st part is true)

//Bitwise Operator
console.log(12 | 5);
console.log(12 & 5);