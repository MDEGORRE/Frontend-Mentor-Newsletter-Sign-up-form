const formSubmission = {
    init: function () {
        document.querySelector("form").addEventListener("submit", formSubmission.handleSubmit);
        document.querySelector(".dismiss").addEventListener("click", formSubmission.disableSuccessMessage);
    },


    /**
     * Performs a check on email value submitted. If value matches regex, a thank you section is displayed otherwise calls the emailErrors function.
     * @param {*} event 
     */
    handleSubmit: function (event) {
        event.preventDefault();
        const emailValue = document.querySelector("form").email.value;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

        if (emailRegex.test(emailValue)) {
        document.querySelector(".container").classList.add('container_hidden')
        document.querySelector(".container_hidden").classList.remove('container')
        document.querySelector(".emailValue").textContent = emailValue
        document.querySelector(".success").hidden = false
        document.querySelector(".success").classList.add('container')
        document.querySelector(".container").style.display = 'block'
        document.querySelector("form").reset()
        } else formSubmission.handleEmailErrors()
    },


    /**
     * Shows the error message when email value is invalid.
     */
    handleEmailErrors: function() {
        document.getElementById('email').classList.add('wrongEmail');
        document.querySelector(".error_message").hidden = false;
    },

    /**
     * Allows to come back to the form.
     */
    disableSuccessMessage: function () {
        document.querySelector(".success").hidden = true
        document.querySelector(".success").classList.remove('container')
        document.querySelector(".success").style.display = ''
        document.querySelector(".container_hidden").classList.add('container')
        document.querySelector(".container").classList.remove('container_hidden')
        document.querySelector(".error_message").hidden = true;
        document.getElementById('email').classList.remove('wrongEmail');
    }
}

document.addEventListener("DOMContentLoaded", formSubmission.init)
