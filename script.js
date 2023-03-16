const username = document.getElementById("username")
const password = document.getElementById("password")
const userError = document.getElementById("userError")
const passwordError = document.getElementById("passwordError")
let flag = 1

// before submitting form

function validateForm(){
    // username
    if(username.value == ""){
        userError.innerHTML = "UserName is empty"    
        flag = 0
    }else if(username.value.length < 4){
        userError.innerHTML = "Username require min. 3 character"
        flag = 0
    }else{
        userError.innerHTML = ""
        flag = 1
    }
    // password
    if(password.value == ""){
        passwordError.innerHTML = "Password is empty"
        flag = 0
    }else{
        passwordError.innerHTML = ""
        flag = 1
    }

    // check form validation
    if(flag){
        return true
    }else{
        return false
    }
}