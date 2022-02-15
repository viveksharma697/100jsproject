window.addEventListener('keydown', function(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.num[data-key="${e.keyCode}"]`);
   if (!audio) return;
   audio.currentTime = 0;
   audio.play();
   console.log(key);
   key.classList.add('playing');
});

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.num');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));