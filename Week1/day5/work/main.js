let Username;
let Password;

function login() {
    Username=document.getElementById("Username").value;
    Password=document.getElementById("Password").value;


    if((Username=="prajakta") && (Password=="tae") ){
        alert("Loging Success");
    }
    else{
        alert("Login Failed");
    }
}