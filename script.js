function validarID() {
    const input = document.getElementById('user-id');
    const errorMessage = document.getElementById('error-message');

    input.value = input.value.replace(/\D/g, '');

    if (input.value === '') {
        errorMessage.style.display = 'block';
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 3000);
    }
}

function enviarSkin() {
    const userId = document.getElementById('user-id').value;
    if (userId) {
        document.getElementById('status').style.display = 'block';
        document.getElementById('id-display').textContent = userId;
    } else {
        alert("Por favor, insira seu ID!");
    }
}

// Função de login com Google
function onSignIn(response) {
    const credential = response.credential;
    const data = JSON.parse(atob(credential.split('.')[1]));

    document.getElementById('login-container').style.display = 'none';
    document.getElementById('user-info').classList.remove('hidden');
    document.getElementById('user-name').textContent = data.name;
    document.getElementById('user-photo').src = data.picture;
}

// Logout do Google
function signOut() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('user-info').classList.add('hidden');
}