// 1. Always Hungry
function alwaysHungry(arr) {
    let result = "";
    for (let i=0; i<= arr.length; i++) {
        if (arr[i] == "food") {
            result += "yummy, "
        }
    }
    if (result.length == 0){
        console.log("I'm hungry ...");
    }
    console.log(result);
}

// 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i=0; i<=arr.length; i++) {
        if (arr[i]>cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}

// 3. Better than average
function betterThanAverage(arr) {
    let sum = 0;
    let average = 0;
    // calculate the average
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    average = sum / arr.length
    let count = 0;
    // count how many values are greater than the average
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > average) {
            count += 1;
        }
    }
    return count;
}

// 4. Array Reverse
function reverse(arr) {
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        let temp = arr[left];
        arr[left] = arr [right]
        arr[right] = temp
        left ++;
        right --;
    }
    return arr;
}

// 5. Fibonacci Array
function fibonnacciArray(n){
    let fibArr = [0, 1];
    while (fibArr.length<n) {
        let prev = fibArr[fibArr.length-1];
        let prevprev  = fibArr[fibArr.length-2]
        fibArr.push(prev + prevprev)
    }
    return fibArr;
}

// Tests

// alwaysHungry([3.14, "food", "pie", true, "food"]);
// alwaysHungry([4, 1, 5, 7, 12]);

// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5)
// console.log(result);

// let result = betterThanAverage([6, 8, 3, 10, -2, 5, 9])
// console.log(result);

// let result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result);

// let result = fibonnacciArray(10);
// console.log(result);