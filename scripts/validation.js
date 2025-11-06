const FormValidator = {
    init() {
        const form = document.getElementById('form-cadastro');
        if (!form) return;

        this.attachValidationListeners();
        this.preventInvalidSubmit();
    },

    attachValidationListeners() {
        const emailConfirm = document.getElementById('confirmar_email');
        if (emailConfirm) {
            emailConfirm.addEventListener('blur', () => this.validateEmailMatch());
            emailConfirm.addEventListener('input', () => this.clearError('confirmar_email'));
        }

        const cpf = document.getElementById('cpf');
        if (cpf) {
            cpf.addEventListener('blur', () => this.validateCPF());
            cpf.addEventListener('input', () => this.clearError('cpf'));
        }

        const dataNascimento = document.getElementById('data_nascimento');
        if (dataNascimento) {
            dataNascimento.addEventListener('blur', () => this.validateAge());
            dataNascimento.addEventListener('input', () => this.clearError('data_nascimento'));
        }

        const telefone = document.getElementById('telefone');
        if (telefone) {
            telefone.addEventListener('blur', () => this.validatePhone());
            telefone.addEventListener('input', () => this.clearError('telefone'));
        }

        const cep = document.getElementById('cep');
        if (cep) {
            cep.addEventListener('blur', () => this.validateCEP());
            cep.addEventListener('input', () => this.clearError('cep'));
        }
    },

    preventInvalidSubmit() {
        const form = document.getElementById('form-cadastro');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if (!this.validateAll()) {
                this.showGlobalError('Por favor, corrija os erros no formulário antes de enviar.');
            } else {
                this.showSuccessModal();
                form.reset();
            }
        });
    },

    showSuccessModal() {
        const modal = document.getElementById('success-modal');
        const closeBtn = document.getElementById('close-modal');
        
        if (modal) {
            modal.classList.add('active');
            
            const closeModal = () => {
                modal.classList.remove('active');
                
                if (typeof FormTypeSwitcher !== 'undefined') {
                    FormTypeSwitcher.hideAllSections();
                }
            };
            
            if (closeBtn) {
                closeBtn.addEventListener('click', closeModal);
            }
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    },

    validateAll() {
        let isValid = true;

        if (!this.validateEmailMatch()) isValid = false;
        if (!this.validateCPF()) isValid = false;
        if (!this.validateAge()) isValid = false;
        if (!this.validatePhone()) isValid = false;
        if (!this.validateCEP()) isValid = false;

        return isValid;
    },

    validateEmailMatch() {
        const email = document.getElementById('email');
        const emailConfirm = document.getElementById('confirmar_email');

        if (!email || !emailConfirm) return true;
        if (!emailConfirm.value) return true;

        if (email.value !== emailConfirm.value) {
            this.showError('confirmar_email', 'Os e-mails não coincidem');
            return false;
        }

        this.clearError('confirmar_email');
        return true;
    },

    validateCPF() {
        const cpf = document.getElementById('cpf');
        if (!cpf || !cpf.value) return true;

        const cpfClean = cpf.value.replace(/\D/g, '');
        
        if (cpfClean.length !== 11) {
            this.showError('cpf', 'CPF deve ter 11 dígitos');
            return false;
        }

        if (/^(\d)\1{10}$/.test(cpfClean)) {
            this.showError('cpf', 'CPF inválido');
            return false;
        }

        this.clearError('cpf');
        return true;
    },

    validateAge() {
        const dataNascimento = document.getElementById('data_nascimento');
        if (!dataNascimento || !dataNascimento.value) return true;

        const birthDate = new Date(dataNascimento.value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 15) {
            this.showError('data_nascimento', 'Você deve ter pelo menos 15 anos');
            return false;
        }

        if (age > 100) {
            this.showError('data_nascimento', 'Data de nascimento inválida');
            return false;
        }

        this.clearError('data_nascimento');
        return true;
    },

    validatePhone() {
        const telefone = document.getElementById('telefone');
        if (!telefone || !telefone.value) return true;

        const phoneClean = telefone.value.replace(/\D/g, '');

        if (phoneClean.length < 10 || phoneClean.length > 11) {
            this.showError('telefone', 'Telefone inválido (deve ter 10 ou 11 dígitos)');
            return false;
        }

        this.clearError('telefone');
        return true;
    },

    validateCEP() {
        const cep = document.getElementById('cep');
        if (!cep || !cep.value) return true;

        const cepClean = cep.value.replace(/\D/g, '');

        if (cepClean.length !== 8) {
            this.showError('cep', 'CEP deve ter 8 dígitos');
            return false;
        }

        this.clearError('cep');
        return true;
    },

    showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        field.classList.add('field-error');

        this.removeErrorMessage(fieldId);

        const errorDiv = document.createElement('span');
        errorDiv.className = 'error-message';
        errorDiv.id = `${fieldId}-error`;
        errorDiv.textContent = message;
        
        field.parentNode.insertBefore(errorDiv, field.nextSibling);
    },

    clearError(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) return;

        field.classList.remove('field-error');
        this.removeErrorMessage(fieldId);
    },

    removeErrorMessage(fieldId) {
        const existingError = document.getElementById(`${fieldId}-error`);
        if (existingError) {
            existingError.remove();
        }
    },

    showGlobalError(message) {
        const form = document.getElementById('form-cadastro');
        if (!form) return;

        const existingGlobalError = document.getElementById('global-form-error');
        if (existingGlobalError) {
            existingGlobalError.remove();
        }

        const errorDiv = document.createElement('div');
        errorDiv.id = 'global-form-error';
        errorDiv.className = 'alert alert-error';
        errorDiv.innerHTML = `<strong>❌ Erro:</strong> ${message}`;
        
        form.insertBefore(errorDiv, form.firstChild);

        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

        setTimeout(() => {
            errorDiv.remove();
        }, 5000);
    }
};

