// let userfavNum = prompt("Enter your favourite Number")

// console.log(+userfavNum + 5)


// Cmparison Operators
// == , === , != , !==
// console.log(5==="5")
// console.log(6!=="5")
// < , > , <= , >= 
// console.log(5>="5")
// console.log(5>"5")
// let user1Age = 8;
// let user2Age = 18;
// console.log(user2Age>=18)

// let userAge = +prompt("Enter your Age")
// if ( userAge >=18) {
//     console.log("You are eligible for ID card")
// }
// else {
//     console.log("You are not eligible for ID card")
// }
// let userfavNum = +prompt("Enter your favourite Number")
// // let computerNum = Math.round(Math.random() * 10)
// if ( userfavNum === computerNum) {
//     console.log("You won the game " + computerNum)
//     // document.write("You won the game " + computerNum)
// }
// else {
//     console.log(" You lost the game " + computerNum)
//     // document.write("You lost the game " + computerNum)
// }
let userInput = prompt("Guess Even or Odd");
let computerNum = Math.round(Math.random() * 10);
let isEven = computerNum % 2===0;
if (isEven && userInput === "even") {
    // console.log("You won the game " + computerNum)
    document.write("You won the game " + computerNum)
    
}
else if( !isEven && userInput === "odd"){
    // console.log("You won the game " + computerNum)
    document.write("You won the game " + computerNum)
}
else {
    // console.log("You lose the game" + computerNum)
    document.write("Chutiye tm game har gae " + "Computer ne ye Number guees kia tha " + computerNum )
};
     
//     let table = 3;
//    for (let i = 1; i <= 100; i++){
//     document.write( table +" x "+ i +" = "+ table*i +"<br>")
// }