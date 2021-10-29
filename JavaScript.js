let subscribed = false;

function subscribe() {

    
        let username = document.getElementById("username").value
        localStorage.setItem("username", username)

        }
       
     


function switchConfig() {

    if (subscribed == true) {
        let subscriptionForm = document.getElementsByClassName("subscription-form")
        let unsubscribeButton = document.getElementById("unsubscribe")

        let form = document.querySelector("form")
        form.hidden = true

        for (let i = 0; i < subscriptionForm.length; i++) {
            subscriptionForm[i].hidden = true
        }
        //subscriptionForm.hidden = true
        unsubscribeButton.style.display = ""
    }

    else if (subscribed == false) {
        let subscriptionForm = document.getElementsByClassName("subscription-form")
        let unsubscribeButton = document.getElementById("unsubscribe")

        let form = document.querySelector("form")
        form.hidden = false


        for (let i = 0; i < subscriptionForm.length; i++) {
            subscriptionForm[i].hidden = false
        }
        unsubscribeButton.style.display = "none"

    }
    
}


function cancel() {
    //localStorage.clear()
    localStorage.removeItem("username")
    subscribed = false

    //checkSubscription()
    switchConfig()
    
}

function switchBack() {
    let subscriptionForm = document.getElementsByClassName("subscription-form")
    let unsubscribeButton = document.getElementById("unsubscribe")


    for (let i = 0; i < subscriptionForm.length; i++) {
        subscriptionForm[i].hidden = false
    }
    unsubscribeButton.style.display = "none"
}

function welcome() {


    let username = localStorage.getItem("username")

    if (username != null) {
              alert("Benvenut@ " + username+"!")
    }
}

function checkSubscription() {
    let username = localStorage.getItem("username")

    if (username != null) {
        subscribed = true
    }
    else
        subscribed = false
}


function able() {
    let username = document.getElementById("username")
    let button = document.querySelector("button[type='submit']")
    //let button = document.getElementById("subscribe")

    if (username != "") {
        button.disabled = false
    }

}