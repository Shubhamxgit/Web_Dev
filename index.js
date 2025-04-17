// console.log("Hello World", 47);
// const obj = {
//     apple:500,
//     ball:800,
//     "cat":700,
// }  
// console.log(obj);

// //Arithmatic Operator
// console.log(10+2);
// console.log(10-2);
// console.log(10/2);      //Quotient
// console.log(10%2);      //Remainder
// console.log(10**2);     //power

// //Assingment operator
// let x = 10;
// x+=5;                   //x=x+5
// console.log(x);

// //Comparison Operator -> Result is Bollean
// let m = 9;
// let n = 5;
// console.log(m>=n);
// console.log(m<=n);
// console.log(m==n);
// console.log(m>n);
// console.log(m<n);

// //Logical Operator
// console.log(0 && 9);
// console.log(undefined && 9);    //Returns undefined since if 1st input is false it returns the first input itself
// console.log(9 && 10);   //Returns 2nd value since any number except 0 is true(i.e. 1st part is true)

// //Bitwise Operator
// console.log(12 | 5);
// console.log(12 & 5);

// //Function
// function myFirstFunction(){
//     console.log("This is ");
//     console.log("My first Function");
//     console.log("It is without any input");
// }

// myFirstFunction();      //Calling the function
// myFirstFunction();

// //Passing array in function
// let array1 = [3, 4, 5, 6, 7]
// function sumOfArray([num1, num2, num3]){ //only first 3 elements of array will be considered
//     return num1 + num2 + num3;
// }
// console.log(sumOfArray(array1)); 

// //Default value of parameter
// function product(x, y = 6){       //default value of y=4
//     return x*y;
// }
// console.log(product(5))
// //default value should be from right to left else it is invalid

// //function with infinite number of argumnets 
// function sumOfAllParameters(){
//     sum = 0;
//     for (let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum; 
// }
// console.log(sumOfAllParameters(3,6,9,12,15,18))


// //Recursion
// //Factorial 
// function fac(n){
//     if  (n == 1 || n==0){
//         return 1;
//     }
//     else{
//         return n*fac(n-1);
//     }
// }
// console.log(fac(5))

// //an example to visualise how call stack work
// function fu(x=15){
//     console.log("final sum", x+5);
//     console.log("f1 ends")
// }
// function fun(p=10){
//     console.log("new sum", p+10)
//     fu(p+10)
//     console.log("f2 ends")
// }
// function func(a=5){
//     console.log("initial Number", a+6)
//     fun(a+6)
//     console.log("f3 ends")
// }
// func(0)

// //Fibonacci
// function fibbo(x){
//     if(x == 0 || x==1) return x;
//     else return fibbo(x-1) + fibbo(x-2);
// }
// console.log("The fibbonaci of 45 is ", fibbo(45))

// // Scope 
// var teacher = "Sanket";
// function fun(){
//     var teacher = "Modi";
//     autoglobal="hello"
//     console.log(teacher);   //It will print the variable in function scope 
// }
// function fun2(){
//     var student = "Shubh";
//     console.log(student);   //print variable in function scope 
// }
// //here if we write console.log(autoglobal)
// fun()
// fun2()
// console.log(teacher)               //print varibale in global scope


//Array in JS
let a = ["Shubham", 35, 85, "male", 1.99, false];
console.log(a);
let b = new Array(10)
console.log(b)
console.log(a[5], a[0])