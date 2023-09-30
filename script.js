const container = document.querySelector(".container")
const pwShowHideIcons = document.querySelectorAll(".showHidePw");
        const pwFields = document.querySelectorAll("input[type='password']");
        const signUP = document.querySelector(".signup-link");
        const logIn = document.querySelector(".login-link");

        pwShowHideIcons.forEach((eyeIcon, index) => {
            eyeIcon.addEventListener("click", () => {
                if (pwFields[index].type === "password") {
                    pwFields[index].type = "text";
                    eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
                } else {
                    pwFields[index].type = "password";
                    eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
                }
            });
        });



        signUP.addEventListener("click",( ) =>{
            container.classList.add("active");
        });
        logIn.addEventListener("click", ( )=>{
            container.classList.remove("active")
        });