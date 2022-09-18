const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const CLASSNAME_HIDDEN = 'hidden'
const USERNAME_KEY = 'username'
const greeting = document.querySelector('#greeting')

function onLoginSubmit(event){
    event.preventDefault();
    const typedUsername = loginInput.value;
    localStorage.setItem(USERNAME_KEY, typedUsername);
    loginForm.classList.add(CLASSNAME_HIDDEN);
    showGreetings(typedUsername);
};

function showGreetings(username){
    greeting.innerText = `안녕 ${username}! 만나서 반가워 :)`
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove('hidden');
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    showGreetings(savedUsername);
}