const ThemeSwitcher = {
    init() {
        this.createControls();
        this.loadPreferences();
        this.attachEventListeners();
    },

    createControls() {
        const controlsHTML = `
            <div class="accessibility-controls" aria-label="Controles de acessibilidade">
                <button id="theme-toggle" class="accessibility-btn" aria-label="Alternar entre modo claro e escuro" title="Modo Claro/Escuro">
                    <span class="theme-icon">🌓</span>
                </button>
            </div>
        `;

        document.body.insertAdjacentHTML('afterbegin', controlsHTML);
    },

    loadPreferences() {
        const theme = localStorage.getItem('apoia_theme') || 'light';
        document.body.classList.add(theme === 'dark' ? 'dark-mode' : 'light-mode');
        this.updateButtonStates();
    },

    attachEventListeners() {
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });
    },

    toggleTheme() {
        const isDark = document.body.classList.contains('dark-mode');
        
        document.body.classList.remove('light-mode', 'dark-mode');
        
        if (isDark) {
            document.body.classList.add('light-mode');
            localStorage.setItem('apoia_theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('apoia_theme', 'dark');
        }

        this.updateButtonStates();
    },

    updateButtonStates() {
        const themeBtn = document.getElementById('theme-toggle');
        const isDark = document.body.classList.contains('dark-mode');

        if (themeBtn) {
            themeBtn.classList.toggle('active', isDark);
        }
    }
};
