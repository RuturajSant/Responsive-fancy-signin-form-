

const signinButton = document.querySelector('.signinButton');
const signupButton = document.querySelector('.signupButton');
const formbox = document.querySelector('.formbox');
const body = document.querySelector('body');

signupButton.onclick = function(){
    formbox.classList.add('active');
    body.classList.add('active');
}

signinButton.onclick = function(){
    formbox.classList.remove('active');
    body.classList.remove('active');
}
 