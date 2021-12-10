const mobileButtons = document.querySelector('#mobileButtons')
const mobileMenu = document.querySelector('#mobileMenu')

mobileButtons.addEventListener('click', (event) => { menuAct() })

function menuAct() {
    if (mobileMenu.classList.value == 'mobile-menu__container active') {
        mobileMenu.classList.remove('active')
        mobileButtons.classList.remove('act')

    }
    else {
        mobileMenu.classList.add('active')
        mobileButtons.classList.add('act')
    }
}