const formTitle = document.getElementById('form-title');
const toggleLink = document.getElementById('toggle-link');
const toggleMsg = document.getElementById('toggle-msg');
const submitBtn = document.getElementById('submit-btn');
const nameField = document.getElementById('name-field');


let isLogin = true;

toggleLink.addEventListener('click', () => {
  isLogin = !isLogin;

  if (isLogin) {
    formTitle.innerHTML = 'Login to <span>Dream Destination</span>';
    submitBtn.textContent = 'Login';
    toggleMsg.innerHTML = `Don't have an account? <a href="#" id="toggle-link">Sign Up</a>`;
    nameField.classList.add('hidden');
  } else {
    formTitle.innerHTML = 'Create Account on <span>Dream Destination</span>';
    submitBtn.textContent = 'Sign Up';
    toggleMsg.innerHTML = `Already have an account? <a href="#" id="toggle-link">Login</a>`;
    nameField.classList.remove('hidden');
  }

  // Re-attach the event listener for the dynamically updated link
  document.getElementById('toggle-link').addEventListener('click', (e) => {
    e.preventDefault();
    toggleLink.click();
  });
});
 