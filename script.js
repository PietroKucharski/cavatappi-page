const box = document.querySelector('.container')
const images = document.querySelectorAll('.container .carrosel-img')

let contador = 0;

function slider() {
    contador++;

    if(contador > images.length - 1) {
        contador = 0;
    }

    box.style.transform = `translateX(${-contador*1400}px)`
}

setInterval(slider, 10000)