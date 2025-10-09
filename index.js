const createButton = document.querySelector('.create-button');
const body = document.querySelector('body');
const logo = document.querySelector('.logo')

const changeTheme=()=>{
    if(body.dataset.theme=='dark'){
       body.setAttribute('data-theme', 'light');
       logo.src='/public/chad.png'
    }else{
       body.setAttribute('data-theme', 'dark');
       logo.src='/public/chaddark.png'
 
    }
}

createButton.addEventListener('click', changeTheme);