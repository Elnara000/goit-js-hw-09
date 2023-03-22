let timerId = null;

const refs = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')
}

refs.btnStart.addEventListener('click', onStartInt);
refs.btnStop.addEventListener('click', onStopInt);



function onStartInt() {
    
    timerId = setInterval(() => {
        const randomColor = getRandomHexColor();
        document.body.style.backgroundColor = `${randomColor}`}, 1000);
        refs.btnStart.setAttribute('disabled', true);
        
    }
    
    function onStopInt() {
        
        clearInterval(timerId);
        refs.btnStart.removeAttribute('disabled');

}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  