console.log(`page loading ...`);

var cookie = document.querySelector("#cookie");
var max1 = document.querySelector("#max1");
var max2 = document.querySelector("#max2");
var max3 = document.querySelector("#max3");
var max4 = document.querySelector("#max4");
var min1 = document.querySelector("#min1");
var min2 = document.querySelector("#min2");
var min3 = document.querySelector("#min3");
var min4 = document.querySelector("#min4");

function pickCity(element){
    alert("Loading weather report " + element.innerText)
}

function accept() {
    cookie.remove()
}

function convert(element) {
    console.log(element.value);
    if (element.value == "f") {
        max1.innerText = "75°";
        max2.innerText = "80°";
        max3.innerText = "69°";
        max4.innerText = "78°";
        min1.innerText = "65°";
        min2.innerText = "66°";
        min3.innerText = "61°";
        min4.innerText = "70°";
    } else{
        max1.innerText = "24°";
        max2.innerText = "27°";
        max3.innerText = "21°";
        max4.innerText = "26°";
        min1.innerText = "18°";
        min2.innerText = "19°";
        min3.innerText = "16°";
        min4.innerText = "21°";
    }
}