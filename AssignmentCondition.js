//1. What are conditional statements? Explain conditional statements with syntax and examples.
// Conditional statements are statements that work when a pirticular condition or case is true 
// Example : If age of a man is equal to or above 18 then he is eligible to vote 
// Syntex : 
let age=21;
if(age>=18){
    console.log("Eligible to vote")
}
else{
    console.log("Not eligible to vote")
}


//Q2. Write a program that grades students based on their marks
//  If greater than 90 then A Grad
//  If between 70 and 90 then a B grad
//  If between 50 and 70 then a C grad
//  Below 50 then an F grade
let marks=84;
if(marks>90){
    console.log("A grade");
}
else if(marks>=70 && marks<=90){
    console.log("B grade");
}
else if(marks>=50 && marks<70){
    console.log("C grade");
}
else{
    console.log("D grade");
}


//Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and 
// examples.

// Loops are fundamental constructs in programming. Loops are used to repeat a block of code multiple times until 
// a certain condition is met making the code more readable and easier to debug also saving time and efforts.
// 1. For Loop: Runs for a fixed number of times.
// Syntax: for (start; condition; update) { code }
// Example:
for (let i = 0; i < 5; i++) console.log("Iteration: " + i);

// 2. While Loop: Runs as long as a condition is true.
// Syntax: while (condition) { code }
// Example:
let count = 0;
while (count < 3) console.log("Count: " + count++);

// 3. Do-While Loop: Runs at least once, then checks the condition.
// Syntax: do { code } while (condition)
// Example:
let num = 0;
do console.log("Number: " + num++); while (num < 2);


//Q4. Generate numbers between any 2 given numbers.
//  Ex
//  const num1 = 10
//  const num2 = 25;
//  Output: 11, 12, 13, …., 25
let num1=12;
let num2=19;
for(let i=num1+1;i<=num2;i++){
    console.log(i);
}


//Q5. Use the while loop to print numbers from 1 to 25 in ascending and descending order.
let i=1;
let numb2=25;
while(numb2>=i){
    console.log(i);
    i++;
}
i--;
while(1<=i){
    console.log(i);
    i--;
}

