const inputs = document.querySelectorAll('.input')
const button = document.querySelector('.loginbutton')

const handlefocus = ({ target }) => {
    const span = target.previousElementSibling
    span.classList.add('spanactive')
}

const handlefocusout = ({ target }) => {
    if (target.value === "") {
        const span = target.previousElementSibling
        span.classList.remove('spanactive')
    }
}

const handlechange = () => {
    const [username, password] = inputs

    if (username.value && password.value.length >= 8) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

inputs.forEach((input) => input.addEventListener('focus', handlefocus))
inputs.forEach((input) => input.addEventListener('focusout', handlefocusout))
inputs.forEach((input) => input.addEventListener('input', handlechange))