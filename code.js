document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = function() {
         var menu = document.querySelector('.menu-container');
         menu.classList.add('scrolled');
        
    };
 });

 document.addEventListener('DOMContentLoaded', function(){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        var menu = document.querySelector('.menu-container');
        if (prevScrollpos > currentScrollPos) {
            menu.classList.remove("scrolled");
        } else {
            menu.classList.add("scrolled");
        }
        prevScrollpos = currentScrollPos;
    }
});






const signUpButton = document.getElementById("signUp");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

const signInButton = document.getElementById("signIn");

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
