var boton = document.querySelector('.ir');

window.onscroll = function() {
    if (document.documentElement.scrollTop > 150) {
        document.querySelector('.ir').style.display = 'block';
    } else {
        document.querySelector('.ir').style.display = 'none';
    }


    boton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}