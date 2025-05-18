let activeElement = 0
let changeTime = 4000

/*Pobranie 4 elementów na których pracujemy */
const firstImage = document.querySelector('.first')
const text = document.querySelector('.text-js')

/*Utworzenie 4 tablic */
const colorImages = ['images/Photo1.png', 'images/Photo2.png', 'images/Photo3.png', 'images/Photo4.png']
const titles = ['WYDRUKI 3D NA ZAMÓWIENIE', 'USŁUGI W ZAKRESIE AI', 'PRODUKCJA MASOWA', 'SZKOLENIA Z ZAKRESU AI']

function changeElement() {
    activeElement++;
    if(activeElement == colorImages.length) {
        activeElement = 0;
    }
    firstImage.src = colorImages[activeElement]
    text.textContent = titles[activeElement]
}

setInterval(changeElement, changeTime)