const FormTypeSwitcher = {
    init() {
        this.hideAllSections();
        this.attachEventListeners();
        this.setupRadioGroupKeyboard();
        this.checkPreselectedType();
    },

    hideAllSections() {
        document.querySelectorAll('.form-section').forEach(section => {
            section.style.display = 'none';
        });
    },

    attachEventListeners() {
        document.querySelectorAll('input[name="tipo_cadastro"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.showFormForType(e.target.value);
                this.updateRadioTabIndex(e.target);
            });
        });
    },

    setupRadioGroupKeyboard() {
        const radios = document.querySelectorAll('input[name="tipo_cadastro"]');
        
        radios.forEach((radio, index) => {
            radio.addEventListener('keydown', (e) => {
                let targetIndex;
                
                if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                    e.preventDefault();
                    targetIndex = (index + 1) % radios.length;
                } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                    e.preventDefault();
                    targetIndex = (index - 1 + radios.length) % radios.length;
                } else {
                    return;
                }
                
                radios[targetIndex].checked = true;
                radios[targetIndex].focus();
                this.updateRadioTabIndex(radios[targetIndex]);
                this.showFormForType(radios[targetIndex].value);
            });
        });
    },

    updateRadioTabIndex(selectedRadio) {
        document.querySelectorAll('input[name="tipo_cadastro"]').forEach(radio => {
            radio.tabIndex = radio === selectedRadio ? 0 : -1;
        });
    },

    checkPreselectedType() {
        const selectedRadio = document.querySelector('input[name="tipo_cadastro"]:checked');
        if (selectedRadio) {
            this.showFormForType(selectedRadio.value);
        }
    },

    showFormForType(type) {
        this.showCommonSections();
        this.showFormButtons();

        if (type === 'voluntario') {
            this.showVolunteerSection();
            this.hideDonorSection();
            this.updateRequiredFields('volunteer');
        } else if (type === 'doador') {
            this.hideVolunteerSection();
            this.showDonorSection();
            this.updateRequiredFields('donor');
        } else if (type === 'ambos') {
            this.showVolunteerSection();
            this.showDonorSection();
            this.updateRequiredFields('both');
        }
    },

    showCommonSections() {
        document.querySelectorAll('.form-section-common').forEach(section => {
            section.style.display = 'block';
        });
    },

    showVolunteerSection() {
        const volunteerSection = document.querySelector('.form-section-volunteer');
        if (volunteerSection) {
            volunteerSection.style.display = 'block';
        }
    },

    hideVolunteerSection() {
        const volunteerSection = document.querySelector('.form-section-volunteer');
        if (volunteerSection) {
            volunteerSection.style.display = 'none';
        }
    },

    showDonorSection() {
        const donorSection = document.querySelector('.form-section-donor');
        if (donorSection) {
            donorSection.style.display = 'block';
        }
    },

    hideDonorSection() {
        const donorSection = document.querySelector('.form-section-donor');
        if (donorSection) {
            donorSection.style.display = 'none';
        }
    },

    showFormButtons() {
        const formButtons = document.querySelector('.form-buttons');
        if (formButtons) {
            formButtons.style.display = 'block';
        }
    },

    updateRequiredFields(type) {
        const volunteerSection = document.querySelector('.form-section-volunteer');
        const donorSection = document.querySelector('.form-section-donor');

        if (volunteerSection) {
            const volunteerFields = volunteerSection.querySelectorAll('[data-conditional-required]');
            volunteerFields.forEach(field => {
                if (type === 'volunteer' || type === 'both') {
                    field.setAttribute('required', 'required');
                } else {
                    field.removeAttribute('required');
                }
            });
        }

        if (donorSection) {
            const donorFields = donorSection.querySelectorAll('[data-conditional-required]');
            donorFields.forEach(field => {
                if (type === 'donor' || type === 'both') {
                    field.setAttribute('required', 'required');
                } else {
                    field.removeAttribute('required');
                }
            });
        }
    }
};

