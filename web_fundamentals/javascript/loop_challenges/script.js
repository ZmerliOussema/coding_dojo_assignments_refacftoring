// 1. Print odds 1-20
function odds() {
    for (let i=1; i<=20; i++) {
        if (i%2 != 0) {
            console.log(i);
        }
    }
}

// 2. Decreasing Multiples of 3
function decreaseMul3(){
    for (let i=100; i>=0; i--) {
        if (i%3  == 0){
            console.log(i);
        }
    }
}

// 3. Print the sequence
function sequence() {
    for(let i=4; i>=-4; i--) {
        console.log(i);
        i -= 0.5
    }
}

// 4. Sigma
function sigma() {
    let sum = 0;
    for (let i=1; i<=100; i++) {
        sum += i
    }
    console.log(sum);
}

// 5. Factorial
function factorial() {
    let product = 1;
    for (let i = 1; i<=12; i++){
        product *= i
    }
    console.log(product);
}

// Tests
// odds();
// decreaseMul3();
// sequence();
// sigma();
// factorial();