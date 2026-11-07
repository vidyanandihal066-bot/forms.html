function data(){
let a= document.getElementById("username").value.trim();
let b= document.getElementById("email-Id").value.trim();
let c= document.getElementById("password").value;
let d= document.getElementById("confirm-password").value;
let e= document.getElementById("phone").value.trim();

if(a ==="" || b ==="" ||c ==="" ||d ===""||e ===""){
    alert("all the fields are required");
    return false;
}else if(a.length <=6){
    alert("username should contain atleast 6 char");
    return false;
}else if(e.length !==10){
    alert("enter valid phone no");
    return false;
}else if(c.length <=8){
    alert("password should contain atleast 8 characters");
    return false;
}else if(d !==c){
    alert ("password doesn't match");
    return false;
}
return true;
}
