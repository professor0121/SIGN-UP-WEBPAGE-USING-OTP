
var userpassword=document.getElementById("user-password").value;
var conformpassword=document.getElementById("conform-password").value;


var email="pegesus36@gmail.com";
var msg="Your otp is "


function generateRandomNumber() { 
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return randomNumber;
}
const randomNumber = generateRandomNumber();


function sendotp(){
    var params={
        name:document.getElementById("user-name").value,
        from_name:email,
        to_email:document.getElementById("email_id").value,
        email_id:document.getElementById("email_id").value,
        message:msg+randomNumber,
    }
    emailjs.send("service_7vxsqa1","template_vjg23ln",params).than(alert("otp sended sucessfully Please close the dialog box"))
}


function submit(){
     if(userpassword==conformpassword)
     {
        var otp=document.getElementById("otp").value;
        if(otp==randomNumber){
            alert("sign in sucessfull")
        }
        else{
         alert("envalid otp")
        }
     }
     else alert("password and conform password are not matching")
}