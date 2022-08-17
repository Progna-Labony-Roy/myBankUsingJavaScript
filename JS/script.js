// 26-3(Add eventListener and compare email password)
document.getElementById('btn-submit').addEventListener('click',function(){
    const userEmail=document.getElementById('user-email');
    const email=userEmail.value;
    console.log(email);
    const userPassword=document.getElementById('user-password');
    const password=userPassword.value;
    console.log(password);
    if(email === 'shundori@gmail.com' && password === 'tumpa'){
        // Navigate to another page
        window.location.href='bank.html'
    }
    else{
        alert('Enter valid user id or password')
    }
})