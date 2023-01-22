

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});






signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});



signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

// Get the sign up button and add a click event listener

signUpButton.addEventListener("click", () => {
    // Get the container element and the sign up container element
    const container = document.getElementById("container");
    const signUpContainer = document.querySelector(".sign-up-container");
    // Add the 'right-panel-active' class to the container element
    container.classList.add("right-panel-active");
    // Remove the 'right-panel-active' class from the sign up container element
    signUpContainer.classList.remove("right-panel-active");
});
