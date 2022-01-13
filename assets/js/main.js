const menuWrapper = document.querySelector('.menuWrapper');
const toggle = document.querySelector('.hamburger-menu');
const navbarAct = document.querySelector('.navActive');

menuWrapper.addEventListener('click', handleClick);

function handleClick() {
    toggle.classList.forEach(classe => {
        if (classe == 'animate') {
            toggle.classList.remove('animate');
            navbarAct.classList.remove('active');

            document.body.style.position = '';
            document.body.style.top = '';
        } else {
            toggle.classList.add('animate');
            navbarAct.classList.add('active');

            document.body.style.position = 'fixed';
            document.body.style.top = `-${window.scrollY}px`;
        }
    })
}