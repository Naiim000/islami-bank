document.getElementById('login-btn').addEventListener('click',function(){
    const emailField=document.getElementById('user-email');
    const email=emailField.value;
    const passwordField=document.getElementById('user-password')
    password=passwordField.value;
    if(email=="didar@gmail.com" && password =="didar090")
    {
        window.location.href="user.html";
    }
    else{
        alert("bainchut email password thikmoto de");
    }

})