<img width="870" height="360" alt="logo-wide" src="https://github.com/user-attachments/assets/75f0297e-f95e-4909-be6b-911706a72e7d" />

# 🤝 Apoia Hub

**Conectando quem apoia com quem transforma**

![Status](https://img.shields.io/badge/status-active-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## 📖 Sobre o Projeto

A **Apoia Hub** é uma ONG digital que conecta pessoas, empresas e projetos sociais, facilitando doações, voluntariado e transparência nas ações sociais. O site é o ponto de encontro entre quem quer ajudar e quem transforma, utilizando a tecnologia para ampliar o impacto do terceiro setor no Brasil.

Este projeto foi desenvolvido como parte das disciplinas de **Desenvolvimento Web** e segue os requisitos das Entregas I, II, III e IV, implementando HTML5 semântico, CSS3 moderno, JavaScript ES6+ e práticas de acessibilidade WCAG 2.1 Nível AA.

---

## 🎯 Missão, Visão e Valores

### Missão
Tornar o voluntariado e a doação acessíveis, transparentes e eficientes, aproximando pessoas de causas sociais por meio de tecnologia simples e confiável.

### Visão
Ser a maior plataforma de conexão solidária do Brasil, onde cada projeto encontra o apoio certo e cada pessoa descobre como fazer a diferença.

### Valores
- **Transparência**: Prestamos contas de cada ação e doação
- **Inovação**: Usamos tecnologia para transformar vidas
- **Empatia**: Colocamos as pessoas no centro de tudo
- **Colaboração**: Acreditamos no poder da união
- **Sustentabilidade**: Pensamos no impacto a longo prazo

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilização moderna com custom properties
- **JavaScript ES6+** - Funcionalidades interativas

### Ferramentas e Práticas
- **Git/GitHub** - Controle de versão
- **Design Responsivo** - Mobile-first approach
- **Acessibilidade WCAG 2.1 AA** - Inclusão digital
- **SEO** - Otimização para motores de busca

### Fontes
- **Google Fonts** - Poppins (headings) e Inter (body)

---

## ✨ Funcionalidades Implementadas

### 🎨 Design System
- **Paleta de cores** com 8+ cores (primárias, secundárias, neutras)
- **Tipografia hierárquica** com 5 tamanhos de fonte
- **Sistema de espaçamento modular** (8px, 16px, 24px, 32px, 48px, 64px)
- **Variáveis CSS** para consistência e manutenibilidade

### 📐 Layout Responsivo
- **CSS Grid** para estrutura geral
- **Flexbox** para componentes internos
- **5+ breakpoints** responsivos
- **Sistema de grid customizado** (12 colunas)
- **Mobile-first approach**

### 🧭 Navegação
- Menu principal responsivo com **submenu dropdown**
- Menu hambúrguer para mobile
- Indicadores visuais para dropdowns (setas)
- Transições suaves e animações

### 🎴 Componentes de Interface
- **Cards responsivos** para projetos
- **Botões** com estados visuais (hover, focus, active, disabled)
- **Formulários estilizados** com validação visual
- **Alerts, modals e toasts** para feedback
- **Badges e tags** para categorização
- **Meters** para progresso
- **Blockquotes** estilizados

### 📝 Formulário de Cadastro SPA
- **Alternância dinâmica**: Escolha entre voluntário, doador ou ambos
- **Máscaras de input**: CPF, telefone, CEP, valor em moeda
- **Validação em tempo real**: Email, CPF, idade, telefone, CEP
- **Feedback visual**: Mensagens de erro específicas
- **Modal de sucesso**: Confirmação após envio
- **Campos condicionais**: Aparecem/desaparecem conforme tipo

### 🎯 Projetos Dinâmicos
- **Renderização via JavaScript**: Cards criados dinamicamente
- **Templates reutilizáveis**: Código organizado e modular
- **Links diretos**: Menu dropdown leva a projetos específicos

### 🌓 Modo Escuro
- **Toggle manual**: Botão flutuante no canto superior direito
- **Persistência**: Preferência salva no localStorage
- **Cores adaptadas**: Contraste otimizado para leitura
- **Transições suaves**: Mudança gradual entre modos

### ♿ Acessibilidade (WCAG 2.1 Nível AA)
- ✅ **Navegação por teclado**: Tab, Shift+Tab, Enter, Esc, setas
- ✅ **Estrutura semântica**: HTML5 tags apropriadas
- ✅ **ARIA labels e landmarks**: Suporte para leitores de tela
- ✅ **Skip links**: "Pular para o conteúdo principal"
- ✅ **Contraste mínimo 4.5:1**: Textos legíveis
- ✅ **Focus visível**: Indicadores visuais fortes (outline + shadow)
- ✅ **Radio groups**: Navegação com setas (roving tabindex)
- ✅ **Modal trap**: Focus mantido dentro do modal
- ✅ **Alt text**: Todas as imagens descritas

---

## 🎨 Sistema de Design

### Cores Primárias
```css
--primary: #2563eb;
--secondary: #10b981;
--accent: #f59e0b;
```

### Cores Funcionais
```css
--success: #10b981;
--error: #ef4444;
--warning: #f59e0b;
```

### Tipografia
```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
```

### Espaçamento
```css
--space-1: 8px;
--space-2: 16px;
--space-3: 24px;
--space-4: 32px;
--space-6: 48px;
--space-8: 64px;
```

---

## 🌐 Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Não requer instalação de dependências

### Executando Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/apoia-hub-site.git
```

2. **Navegue até a pasta**
```bash
cd apoia-hub-site
```

3. **Abra no navegador**
```bash
# Opção 1: Abrir diretamente
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux

# Opção 2: Usar servidor local (recomendado)
python -m http.server 8000
# ou
npx http-server
```

4. **Acesse no navegador**
```
http://localhost:8000
```

---

## 🧪 Validações Implementadas

### Validação de E-mail
- Confirmação de e-mail (match)
- Formato válido

### Validação de CPF
- 11 dígitos obrigatórios
- Algoritmo de validação de dígitos verificadores
- Rejeita CPFs sequenciais (111.111.111-11)

### Validação de Idade
- Idade entre 15 e 100 anos

### Validação de Telefone
- 10 ou 11 dígitos (com DDD)
- Máscara: (XX) XXXXX-XXXX

### Validação de CEP
- 8 dígitos obrigatórios
- Máscara: XXXXX-XXX

### Validação de Moeda
- Formato brasileiro: R$ X.XXX,XX
- Aceita valores até milhões

---

## ♿ Recursos de Acessibilidade

### Navegação por Teclado
- **Tab**: Navega entre elementos interativos
- **Shift + Tab**: Navega para trás
- **Enter/Space**: Ativa botões e links
- **Esc**: Fecha modais
- **Setas (↑↓)**: Navega em radio groups

### Suporte para Leitores de Tela
- ARIA labels em todos os elementos interativos
- Landmarks (main, nav, footer, contentinfo)
- Live regions para feedback dinâmico
- Descrições alternativas em imagens

### Contraste e Visibilidade
- Contraste mínimo 4.5:1 (WCAG AA)
- Focus visível com outline + box-shadow
- Modo escuro com cores adaptadas

### Skip Links
- "Pular para o conteúdo principal" no início de cada página
- Visível apenas com foco (acessibilidade de teclado)

---

## 📦 Entregas do Projeto

### ✅ Entrega I - HTML Semântico
- Estrutura HTML5 completa
- Tags semânticas apropriadas
- Formulários funcionais
- Navegação entre páginas

### ✅ Entrega II - CSS3 e Design System
- Design system com variáveis CSS
- Layout responsivo (Grid + Flexbox)
- Componentes modulares
- Menu dropdown funcional
- 5+ breakpoints responsivos

### ✅ Entrega III - JavaScript e Interatividade
- Renderização dinâmica de projetos
- Máscaras de input
- Validação de formulários
- Alternância de formulário (SPA-like)
- Modal de sucesso

### ✅ Entrega IV - Acessibilidade e Versionamento
- WCAG 2.1 Nível AA
- Navegação por teclado completa
- Skip links
- ARIA labels e landmarks
- Modo escuro
- README profissional
- Repositório GitHub público

---

## 📧 Contato

**Apoia Hub**

- 📧 E-mail: contato@apoiahub.org.br
- 📞 Telefone: (11) 4002-8922
- 💬 WhatsApp: (11) 98765-4321
- 📍 Endereço: Rua da Solidariedade, 123 - Centro - São Paulo/SP

**Redes Sociais:**
- Facebook: /apoiahub
- Instagram: @apoiahub
- Twitter: @apoiahub
- LinkedIn: /company/apoiahub
- YouTube: @apoiahub

---

## 📜 Licença

Este projeto está sob a licença MIT.

---

## 🙏 Agradecimentos

Obrigado por visitar o projeto Apoia Hub! Juntos, podemos fazer a diferença e transformar vidas através da solidariedade e da tecnologia.

**"Conectando quem apoia com quem transforma."**

---

## 👨‍💻 Autor

Desenvolvido como projeto acadêmico para as disciplinas de **Desenvolvimento Web Front-End**.

---

<p align="center">
  Desenvolvido com ❤️ para conectar pessoas e transformar vidas
</p>

<p align="center">
  <strong>Apoia Hub © 2025</strong>
</p>
