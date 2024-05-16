console.log("page loaded ...");

var likes1 = document.querySelector("#likes1");
var likes2 = document.querySelector("#likes2");
var likes3 = document.querySelector("#likes3");

var countLikes1 = 0;
var countLikes2 = 0;
var countLikes3 = 0;

function increaseLikes(n) {
    if (n == 1){
        countLikes1 += 1;
        likes1.innerText = countLikes1 + " like(s)"
    }else if (n == 2){
        countLikes2 += 1;
        likes2.innerText = countLikes2 + " like(s)"
    }else{
        countLikes3 += 1;
        likes3.innerText = countLikes3 + " like(s)"
    }
}
