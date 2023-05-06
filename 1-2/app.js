








const email = document.querySelector('.email')
const div = document.querySelector('.wrong')
// const check = /\w+\@\w+\.+\w/
const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
check.test(email)


function validEmail(){
if( check.test(email.value) === true ){
        alert('Вы успешно зарегистрировались')
    }else{
        // alert('Не корректный формат почты')
        email.style.border= " 1px solid red"
        div.innerText = "Не корректный формат почты"
    }
}

document.querySelector('.button').addEventListener('click', validEmail)





