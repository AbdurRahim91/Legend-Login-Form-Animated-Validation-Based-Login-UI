const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const btnContainer = document.querySelector('.btn-container');
const btn = document.querySelector('#login-btn');
const errorMsg = document.querySelector('#error-msg');

btn.disabled = true;

function showMsg() {
  errorMsg.style.display = 'block';
}

function shiftButton() {
  showMsg();
  const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
  const currentPosition = positions.find(dir => btn.classList.contains(dir));
  const nextPosition = positions[(positions.indexOf(currentPosition) + 1) % positions.length];

  btn.classList.remove(currentPosition);
  btn.classList.add(nextPosition);
}

btn.addEventListener('mouseover', () => {
  if (uname.value.trim() === '' || pass.value.trim() === '') {
    shiftButton();
  } else {
    errorMsg.style.display = 'none';
  }
});
