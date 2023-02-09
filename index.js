  const email = document.getElementById("email");
        const password = document.getElementById("password");

        email.addEventListener('input', () => {
            const emailBox = document.querySelector('.emailBox');
            const emailText = document.querySelector('.emailText');
            const emailReg = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;

            if (email.value.match(emailReg)) {
                emailBox.classList.add('valid');
                emailBox.classList.remove('invalid');
                emailText.innerHTML = "Your Email Address in Valid";
            } else {
                emailBox.classList.add('invalid');
                emailBox.classList.remove('valid');
                emailText.innerHTML = "Must be a valid email address.";
            }
        });

        password.addEventListener('input', () => {
            const passBox = document.querySelector('.passBox');
            const passText = document.querySelector('.passText');
            const regPass =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;            ;

            if (password.value.match(regPass)) {
                passBox.classList.add('valid');
                passBox.classList.remove('invalid');
                passText.innerHTML = "Your Password in Valid";
            } else {
                passBox.classList.add('invalid');
                passBox.classList.remove('valid');
                passText.innerHTML = "Your password must be at least 4 characters "
            }
        });