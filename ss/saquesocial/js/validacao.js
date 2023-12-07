function formatCPF(input) {
    var value = input.value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{2})$/, '$1-$2');
    input.value = value;
}

function validateCPF(input) {
    var cpf = input.value.replace(/[\.\-]/g, '');
    var errorElement = document.getElementById('cpf-error');
    var iconElement = document.getElementById('cpf-icon');

    if (cpf.length !== 11 || !isValidCPF(cpf)) {
        errorElement.style.display = 'block';
        iconElement.style.display = 'block';
    } else {
        errorElement.style.display = 'none';
        iconElement.style.display = 'none';
    }
}

function isValidCPF(cpf) {
    // Lgica de validaão do CPF (pode ser semelhante à sua funço PHP validateCPF)
    return true; // Exemplo, atualize com a lógica correta
}

function formatAndValidateCPF(input) {
    var value = input.value.replace(/\D/g, '');
    if (value.length === 11) {
        validateCPF(value);  // Validao aqui
        value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        input.value = value;
    }
}


function validateCPF(cpf) {
    var errorElement = document.getElementById('cpf-error');
    var iconElement = document.getElementById('cpf-icon');
    var buttonbloqueado = document.getElementById('consultar-button');

    if (!isValidCPF(cpf)) {
        errorElement.style.display = 'block';
        iconElement.style.display = 'block';
        buttonbloqueado.style.display = 'none';

    } else {
        errorElement.style.display = 'none';
        iconElement.style.display = 'none';
        buttonbloqueado.style.display = 'block';
    }
}

function isValidCPF(cpf) {
    if (cpf.length !== 11) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}
