document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;

    if(email === 'siam@gmail.com' && password === 'siam'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid Username or Password. Try again');
    }
    
})