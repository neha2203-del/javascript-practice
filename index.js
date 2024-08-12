// 1 sum of first N natural numbers
function sumOfFirstNNaturalNumbers(N) {
    var sum = 0;
    for (i=1; i<=N; i++) {
        sum += i;
    }
    return sum;
}
var N = 5;
console.log(sumOfFirstNNaturalNumbers(N)); // output:15 [1+2+3+4+5]


// 2 count of even numbers
function countEvenNumbers(arr) {
    var count = 0;
    for ( i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
var arr = [1, 2, 3, 4, 5, 6];
console.log(`The number of even numbers in the array is ${countEvenNumbers(arr)}.`); // output:3 [2,4,6]

// 3 reverse an array
function reverseArray(arr) {
    var reversedArray =[];
    for (i=0; i<arr.length; i++) {
        reversedArray[i] = arr[arr.length -1 -i];
    }
    return reversedArray;
}
var arr = [1,2,3,4,5];
console.log(reverseArray(arr)); //output:[5,4,3,2,1]

// 4 sum of array elements
function sumOfArray(arr) {
    var sum = 0;
    for(i=1; i<arr.length; i++) {
        sum += arr[i];
    } 
    return sum;
}
var arr = [0, 1, 2, 3, 4, 5];
result = sumOfArray(arr);
console.log("sum of array:",result); // output:15

// 5  factorial of a number
function factorial(N) {
    var factorial = 1;
    for(i=2; i<=N; i++) {
        factorial *= i
    }
    return factorial;
}
var N = 4;
console.log(factorial(N)); // output: 24

// 6 find maximum in a array
function findMax(arr) {
    var arr = [1, 3, 7, 2, 5];
    if (arr.length === 0) {
        return undefined;
    }
    var Max = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] > Max) {
            Max = arr[i]
        }
    }
    return Max;
}
console.log(findMax(arr)); // output:7



// 7 count of odd numbers
function countOddNumbers(arr) {
    var OddCount = 0;
    for (i = 1; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            OddCount++;
        }
    }

    return OddCount;
}
arr = [1, 2, 3, 4, 5, 6];
result = countOddNumbers(arr);
console.log("Number of Odd numbers:", result); // n0.of odd numbers:3

// 10 smallest number in a array
function findMin(arr) {
    var arr = [4, 2, 9, 7,1];
    if (arr.length === 0) {
        return undefined;
    }
    var Min = arr[0];
    for(i = 1; i < arr.length; i++) {
        if(arr[i] < Min) {
            Min = arr[i]
        }
    }
    return Min;
}
console.log(findMin(arr));  // output:1

// 11 sum of odd numbers
function sumOfOddNumbers(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
       if (arr[i] % 2 !== 0) {
            sum += arr[i]
        }
    }

    return sum;
}
arr = [1, 2, 3, 4, 5 ];
console.log(sumOfOddNumbers(arr)); // output:9



// 13 sum of even numbers upto N
function sumOfEvenNumbers(N) {
    var sum = 0;
    for (i = 2; i <= N; i += 2) { 
        sum += i;
    }
    return sum;
}
 N = 10;
console.log(sumOfEvenNumbers(N)); // output:30


// 8 array of squares
function squareArray(arr) {
    var squaredArr = [];
    for ( i = 0; i < arr.length; i++) {
        squaredArr.push(arr[i] * arr[i]);
    }
    return squaredArr;
}
arr = [1, 2, 3, 4];
console.log(squareArray(arr));


