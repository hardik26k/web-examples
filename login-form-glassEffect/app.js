const pass_field = document.querySelector(".pass-key");
const show_button = document.querySelector(".show");
show_button.addEventListener("click", function(){
    if(pass_field.type === "password"){
        pass_field.type = "text";
        show_button.textContent = "HIDE";
        show_button.style.color = "#3494db"
    } else {
        pass_field.type = "password";
        pass_field.textContent = "SHOW";
        show_button.style.color = "#222";
    }
})