function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin"&& password=="vikas123"){
      alert("Login Succefully")
    }
    else{
        alert("Login Failed")
    }
}