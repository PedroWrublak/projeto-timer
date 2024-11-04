function cronometro() {

function  getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC',
    });
}

console.log(getTimeFromSeconds(10));

const relogio = document.querySelector('.relogio');
const start = document.querySelector('.start');
const stopp = document.querySelector('.stopp');
const reset = document.querySelector('.reset');

let segundos = 0;
let timer;

function StartClock() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('start')) {
        relogio.classList.remove('pausado');
        StartClock()
    }
    
    if (el.classList.contains('stopp')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
    }

    if(el.classList.contains('reset')) {
        clearInterval(timer);
        relogio.classList.remove('pausado');
        segundos = 0;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }
});
}

cronometro();