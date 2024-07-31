let final=()=>{
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const confirmpassword=document.getElementById('confirm-password').value;
if(password!==confirmpassword){
    alert("password do not match");
}
const isEmailvalid=email.includes('@') && email.indexOf('.');
if(!isEmailvalid){
    alert("please enter a valid email");
}
if(confirm("are you sure you want to submit")){
    alert('Form submitted successfully')
}
}
