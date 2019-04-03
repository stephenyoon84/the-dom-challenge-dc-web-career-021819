const timer = document.querySelector('#counter');

function timeIncrease(){
  if (checkPauseB()){
    timer.textContent = parseInt(timer.textContent) + 1;
  }
}

function timeDecrease(){
  if (checkPauseB()){
    timer.textContent = parseInt(timer.textContent) - 1;
  }
}

var setTimer = setInterval(timeIncrease, 1000);

function startTimer(){
  setTimer = setInterval(timeIncrease, 1000);
}
function stopTimer(){
  clearInterval(setTimer);
}

function checkPauseB(){
  return document.querySelector('#pause').textContent.trim() === 'pause' ? true : false;
}

const timeDown = document.getElementById('-');
const timeUp = document.getElementById('+');
timeDown.addEventListener('click', timeDecrease);
timeUp.addEventListener('click', timeIncrease);

likes = document.querySelector('ul.likes')
function addList(){
  if (checkPauseB()){
    let liId = document.getElementById(`like${timer.textContent}`);
    if (liId) {
      let li = document.querySelector(`#${liId.id}`);
      let liCount = document.querySelector(`#${liId.id} span`);
      liCount = parseInt(liCount.textContent) + 1;
      li.innerHTML = `${timer.textContent} has liked <span> ${liCount} </span> times`;
    }else{
      let li = document.createElement('li');
      li.setAttribute("id", `like${timer.textContent}`)
      li.innerHTML = `${timer.textContent} has liked <span> 1 </span> time`;
      likes.appendChild(li);
    }
  }
}

const likeButton = document.getElementById('<3');
likeButton.addEventListener('click', addList);

const pauseB = document.querySelector('#pause');
function stopGoTimer(){
  if (pauseB.textContent.trim() === 'pause'){
    pauseB.textContent = 'resume';
    timeDown.disabled = true;
    timeUp.disabled = true;
    likeButton.disabled = true;
    document.getElementById('submit').disabled = true;
    stopTimer();
  }else{
    pauseB.textContent = 'pause';
    timeDown.disabled = false;
    timeUp.disabled = false;
    likeButton.disabled = false;
    document.getElementById('submit').disabled = false;
    startTimer();
  }
}

pauseB.addEventListener('click', stopGoTimer);

const commentDiv = document.querySelector('.comments')

function addComment(event){
  event.preventDefault();
  let newP = document.createElement('p');
  let pInput = document.querySelector('form input').value;
  newP.innerText = pInput;
  commentDiv.appendChild(newP);
  form.reset();
}

const form = document.querySelector('form')
form.addEventListener('submit', addComment)












//
