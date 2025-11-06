document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Apoia Hub - JavaScript Initialized');
    
    if (document.getElementById('projects-container')) {
        console.log('📄 Página de projetos detectada');
        renderProjects();
    }
    
    if (document.getElementById('form-cadastro')) {
        console.log('📝 Página de cadastro detectada');
        initMasks();
    }
    
    console.log('✅ Todas as funcionalidades carregadas com sucesso');
});

