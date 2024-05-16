console.log("Hello World !!!"); // Check if the link with the file is working ...

function login_logout(element){
    if (element.innerText == "Logout") {
        element.innerText = "Login"
    }
    else{
        element.innerText = "Logout"
    }
}

function remove (element){
    element.remove();
}