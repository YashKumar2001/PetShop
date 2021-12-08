let loginForm = document.querySelector('.header .login-form');

document.querySelector("#sign-in").onclick=()=>{
    let password=document.forms["loginform"]["password"].value;
    let digit=false,smallchar=false,capitalchar=false,valid=true;
    if(password.length<8) valid=false;
    for(let i=0;i<password.length;i++)
    {
        if(password[i]>='0' && password[i]<='9') {
            digit=true;
        }
        if(password[i]>='a' && password[i]<='z') {
            smallchar=true;
        }
        if(password[i]>='A' && password[i]<='Z') {
            capitalchar=true;
        }
    }
    valid=valid&digit;
    valid=valid&smallchar;
    valid=valid&capitalchar;
    if(valid==false){
        alert("Enter a valid passwrod containg atleast 8 character including small and capital alphabats and numbers");
        return false;
    }
}


document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    loginForm.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}


window.onload = () =>{
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}