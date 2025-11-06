const projectsData = [
    {
        id: 'educacao',
        title: 'Educação para Todos',
        category: 'Educação',
        badgeClass: 'badge-secondary',
        image: 'assets/img/projeto-educacao-destaque.jpg',
        imageAlt: 'Sala de aula com crianças aprendendo informática',
        description: 'Oferecemos reforço escolar e aulas de informática para crianças de comunidades carentes. O objetivo é garantir que todos tenham acesso a uma educação de qualidade e às ferramentas tecnológicas do século XXI.',
        location: 'São Paulo - SP | Zona Leste',
        target: 'Crianças e adolescentes de 7 a 16 anos',
        goalType: 'Meta de Arrecadação',
        goal: {
            current: 45000,
            total: 100000,
            unit: 'R$',
            text: 'R$ 45.000 arrecadados de R$ 100.000'
        },
        needs: [
            'Professores voluntários (presencial e online)',
            'Doações de computadores e tablets',
            'Contribuições financeiras para material didático'
        ],
        impact: 'Beneficiar 300 crianças em 2025'
    },
    {
        id: 'alimentacao',
        title: 'Alimente uma Vida',
        category: 'Alimentação',
        badgeClass: 'badge-warning',
        image: 'assets/img/projeto-alimentacao-destaque.jpg',
        imageAlt: 'Voluntários distribuindo cestas básicas para famílias',
        description: 'Combatemos a fome através da distribuição de cestas básicas, refeições comunitárias e oficinas de educação nutricional. Ninguém deveria dormir com fome em um país tão rico como o Brasil.',
        location: 'Rio de Janeiro - RJ | Zona Norte',
        target: 'Famílias em situação de insegurança alimentar',
        goalType: 'Meta de Arrecadação',
        goal: {
            current: 72000,
            total: 80000,
            unit: 'R$',
            text: 'R$ 72.000 arrecadados de R$ 80.000'
        },
        needs: [
            'Voluntários para preparar e distribuir refeições',
            'Doações de alimentos não perecíveis',
            'Nutricionistas voluntários',
            'Contribuições financeiras'
        ],
        impact: 'Atender 500 famílias mensalmente'
    },
    {
        id: 'meio-ambiente',
        title: 'Verde Vivo - Reflorestamento Urbano',
        category: 'Meio Ambiente',
        badgeClass: 'badge-secondary',
        image: 'assets/img/projeto-meio-ambiente-destaque.jpg',
        imageAlt: 'Plantando mudas em área verde urbana',
        description: 'Promovemos o reflorestamento de áreas urbanas degradadas, plantando árvores nativas e criando espaços verdes nas comunidades. Além de melhorar o clima, geramos conscientização ambiental.',
        location: 'Belo Horizonte - MG | Região Metropolitana',
        target: 'Comunidades urbanas e escolas públicas',
        goalType: 'Meta de Plantio',
        goal: {
            current: 3500,
            total: 10000,
            unit: '',
            text: '3.500 árvores plantadas de 10.000'
        },
        needs: [
            'Voluntários para mutirões de plantio (aos sábados)',
            'Engenheiros ambientais e agrônomos',
            'Doações de mudas e ferramentas de jardinagem',
            'Apoio logístico e transporte'
        ],
        impact: 'Plantar 10.000 árvores nativas até dezembro de 2025'
    },
    {
        id: 'capacitacao',
        title: 'Capacitação Profissional Jovem',
        category: 'Capacitação',
        badgeClass: 'badge-secondary',
        image: 'assets/img/projeto-capacitacao-destaque.jpg',
        imageAlt: 'Jovens em curso de capacitação profissional',
        useFigure: true,
        figcaption: 'Jovens estudando robótica',
        description: 'Oferecemos cursos profissionalizantes gratuitos para jovens de baixa renda, preparando-os para o mercado de trabalho. Incluímos desde soft skills até habilidades técnicas em áreas de alta demanda.',
        location: 'Salvador - BA | Subúrbio Ferroviário',
        target: 'Jovens de 16 a 24 anos',
        goalType: 'Meta de Arrecadação',
        goal: {
            current: 35000,
            total: 60000,
            unit: 'R$',
            text: 'R$ 35.000 arrecadados de R$ 60.000'
        },
        needs: [
            'Instrutores voluntários (presencial e online)',
            'Profissionais para mentorias individuais',
            'Doações de equipamentos (computadores, projetores)',
            'Empresas parceiras para estágios'
        ],
        impact: 'Capacitar 200 jovens e inserir 70% no mercado de trabalho'
    }
];

function generateProjectHTML(project) {
    const percentage = Math.round((project.goal.current / project.goal.total) * 100);

    const imageHTML = project.useFigure ?
        `<figure>
            <img src="${project.image}" alt="${project.imageAlt}" width="700" height="400">
            <figcaption>${project.figcaption}</figcaption>
        </figure>` :
        `<img src="${project.image}" alt="${project.imageAlt}" width="700" height="400">`;

    const needsList = project.needs.map(need => `<li>${need}</li>`).join('\n                        ');

    return `
            <article class="card" id="${project.id}">
                <div class="card-header">
                    <span class="badge badge-primary">Ativo</span>
                    <span class="badge ${project.badgeClass} badge-group">${project.category}</span>
                </div>
                
                <div class="card-body">
                    ${project.useFigure ? '' : imageHTML}
                    <h3>${project.title}</h3>
                    ${project.useFigure ? imageHTML : ''}
                    ${project.useFigure ? '<h4>Sobre o Projeto</h4>' : ''}
                    <p>
                        ${project.description}
                    </p>

                    ${project.useFigure ? '<h4>Localização</h4>' : ''}
                    <p><strong>${project.useFigure ? '' : '📍 Localização: '}</strong>${project.location}</p>
                    ${project.useFigure ? '<h4>Público-Alvo</h4>' : ''}
                    <p><strong>${project.useFigure ? '' : '👥 Público-Alvo: '}</strong>${project.target}</p>

                    <h4>${project.goalType}</h4>
                    <p>
                        <meter value="${project.goal.current}" min="0" max="${project.goal.total}" title="${percentage}% da meta alcançada">${percentage}% alcançado</meter><br>
                        ${project.goal.text}
                    </p>

                    <h4>Precisa de</h4>
                    <ul>
                        ${needsList}
                    </ul>

                    ${project.useFigure ? '<h4>Impacto Esperado</h4>' : ''}
                    <p><strong>${project.useFigure ? '' : '🎯 Impacto Esperado: '}</strong>${project.impact}</p>
                </div>

                <div class="card-footer">
                    <a href="cadastro.html" class="btn btn-primary" title="Apoie este projeto">Quero apoiar este projeto</a>
                </div>
            </article>

            <hr>
    `;
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = '';

    projectsData.forEach(project => {
        container.innerHTML += generateProjectHTML(project);
    });

    console.log(`✓ ${projectsData.length} projetos renderizados dinamicamente`);
}

