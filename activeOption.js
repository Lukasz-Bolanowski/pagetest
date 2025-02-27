const menuItems = document.querySelectorAll('.menu__item')

document.addEventListener('click', () => {
    menuItems.forEach((item) => {
        item.classList.add('active')
    })
})