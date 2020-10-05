// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

// Bonus: Can you do this in one pass?

//check for pairs with nested loop




// function findSum() {

//     for (let i = 0; i < numbers.length; i++) {
//         console.log(i);
//         for (let j = 1; j < numbers.length; j++) {
//             if (i != j && numbers[i] + numbers[j] == k) {
//                 console.log('true');
//                 return true
//             }
//             console.log('false');
//             return false

//         }
//     }

// }

// for (let i of numbers) {
//     console.log(i);
//     for (let j of numbers) {
//         console.log(j);
//         if (i != j && numbers[i] + numbers[j] == k) {
//             console.log('true')
//         } else {
//             console.log('false');


//         }
//     }
// }


let numbers = [10, 15, 3, 7];
let k = 17;

function findSum() {
    // for (let i = 0; i < numbers.length; i++) {
    for (let i in numbers) {
        console.log(numbers[i]);
        for (let j = numbers.length - 1; j >= 0; j--) {
            console.log(numbers[j]);
            if (numbers[i] + numbers[j] == k) {
                console.log('true');
                return true;
            } else {
                console.log('false');
                return false;
            }
        }
    }
}
findSum();


// let numbers = [10, 15, 3, 7];
// let k = 17;

// function findSum() {
//     for (let i in numbers) {
//         console.log(i)
//     }
//     console.log("======= break ======")
//     for (let i of numbers) {
//         console.log(i)
//     }
//     console.log("======= break ======")

//     for (let i = 0; i < numbers.length; i++) {
//         console.log(i)
//     }
// }
// findSum();



// let numbers = [10, 15, 3, 7];
// let k = 17;

// function findSum() {
//     for (let i in numbers) {
//         console.log(i)
//         console.log(numbers[i])
//     }
//     console.log("======= break ======")
//     for (let i of numbers) {
//         console.log(i)
//         console.log(numbers[i])
//     }
//     console.log("======= break ======")

//     for (let i = 0; i < numbers.length; i++) {
//         console.log(i)
//         console.log(numbers[i])
//     }
// }
// findSum();




// def two_sum(lst, k):
//     for i in range(len(lst)):
//         for j in range(len(lst)):
//             if i != j and lst[i] + lst[j] == k:
//                 return True
//   return 