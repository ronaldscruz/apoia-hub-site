function maskCPF(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value.substring(0, 14);
}

function maskPhone(value) {
    value = value.replace(/\D/g, '');

    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
        value = value.replace(/(\d{2})(\d)/, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }

    return value.substring(0, 15);
}

function maskCEP(value) {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
    return value.substring(0, 9);
}

function maskCurrency(value) {
    value = value.replace(/\D/g, '');

    if (value === '') return '';

    value = (parseInt(value) / 100).toFixed(2);

    value = value.replace('.', ',');
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return 'R$ ' + value;
}

function applyMask(input, maskFunction) {
    input.addEventListener('input', function (e) {
        const start = this.selectionStart;
        const oldLength = this.value.length;

        this.value = maskFunction(this.value);

        const newLength = this.value.length;
        const newStart = start + (newLength - oldLength);

        this.setSelectionRange(newStart, newStart);
    });
}

function initMasks() {
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        applyMask(cpfInput, maskCPF);
        console.log('✓ Máscara de CPF aplicada');
    }

    const telefoneInput = document.getElementById('telefone');
    if (telefoneInput) {
        applyMask(telefoneInput, maskPhone);
        console.log('✓ Máscara de telefone aplicada');
    }

    const cepInput = document.getElementById('cep');
    if (cepInput) {
        applyMask(cepInput, maskCEP);
        console.log('✓ Máscara de CEP aplicada');
    }

    const currencyInputs = document.querySelectorAll('input[type="text"][id*="valor"], input[type="text"][id*="doacao"]');
    currencyInputs.forEach(input => {
        applyMask(input, maskCurrency);
        console.log(`✓ Máscara de moeda aplicada em: ${input.id}`);
    });

    const valorDoacao = document.getElementById('valor_doacao');
    if (valorDoacao) {
        applyMask(valorDoacao, maskCurrency);
        console.log('✓ Máscara de moeda aplicada em valor_doacao');
    }
}

