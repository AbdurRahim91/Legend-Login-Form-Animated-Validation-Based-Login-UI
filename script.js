const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const btn = document.querySelector('#login-btn');
const errorMsg = document.querySelector('#error-msg');

const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];

// Show error message
function showMsg() {
  errorMsg.style.display = 'block';
}

// Hide error message
function clearMsg() {
  errorMsg.style.display = 'none';
}

// Remove all shift classes
function removeAllShifts() {
  positions.forEach(pos => btn.classList.remove(pos));
}

// Button shift logic
btn.addEventListener('mouseover', () => {
  if (uname.value.trim() === '' || pass.value.trim() === '') {
    showMsg();
    const currentPosition = positions.find(pos => btn.classList.contains(pos)) || 'shift-left';
    const nextIndex = (positions.indexOf(currentPosition) + 1) % positions.length;
    removeAllShifts();
    btn.classList.add(positions[nextIndex]);
  } else {
    clearMsg();
    removeAllShifts(); // Reset position
  }
});

// Auto-reset position on typing
uname.addEventListener('input', () => {
  if (uname.value.trim() && pass.value.trim()) {
    clearMsg();
    removeAllShifts();
  }
});

pass.addEventListener('input', () => {
  if (uname.value.trim() && pass.value.trim()) {
    clearMsg();
    removeAllShifts();
  }
});
