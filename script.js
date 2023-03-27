console.log("Hello");

let btn = document.querySelector("#btn")


const submitHandler = () => {
 let firstname =  document.getElementById("firstname_input")
 let lastname = document.getElementById("lastname_input")
 let message = document.getElementById("text_area")

 let first= firstname.value
 let last = lastname.value
 

 let messageToUser = `Hello ${first} ${last}`
 
 alert(messageToUser)

}

btn.addEventListener('click', submitHandler)