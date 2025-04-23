const sections = document.querySelectorAll('section')
const menuItems = document.querySelectorAll('.menu__item a')

let currentSection = ''

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        if (window.scrollY + 200 >= section.offsetTop) {
            currentSection = section.id
        }
    })

    if (window.scrollY >= 0 && window.scrollY < 1600) {
        currentSection = 'header'
    }

    menuItems.forEach(item => {
        if (item.href.includes(currentSection)) {
            const activeOption = document.querySelectorAll('.menu__item a')
            for (let i = 0; i < activeOption.length; i++) {
                activeOption[i].classList.remove('clicked')
            }
            item.classList.add('clicked')
        }
    })
})