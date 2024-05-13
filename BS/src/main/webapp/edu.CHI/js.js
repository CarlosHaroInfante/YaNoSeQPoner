/**
 * 
 */

  function validarFormulario() {
            var email = document.getElementById("email").value;
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var confirmPassword = document.getElementById("confirmPassword").value;

            // Validar que las contraseñas coincidan
            if (password !== confirmPassword) {
                alert("Las contraseñas no coinciden");
                return false;
            }

            // Aquí podrías agregar más validaciones según tus necesidades

            // Si todo está correcto, puedes enviar el formulario
            alert("Formulario enviado correctamente");
            return true;
        }