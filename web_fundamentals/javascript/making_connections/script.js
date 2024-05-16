console.log("page loaded ...");

var cnn_requests = document.querySelector("#requests")
var your_conn = document.querySelector("#connections")
var userName = document.querySelector("#name") 


function editName() {
    userName.innerText = "another name"
}

function accept(id) {
    var element = document.querySelector(id)
    element.remove()
    cnn_requests.innerText--
    your_conn.innerText++
}

function ignore(id) {
    var element = document.querySelector(id)
    element.remove()
    cnn_requests.innerText--
}
