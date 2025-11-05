# Components Design System

Este diretório contém todos os componentes do sistema de design do Apoia Hub, organizados de forma modular.

## Estrutura

Cada componente tem sua própria pasta com arquivos CSS independentes:

```
components/
├── alert/
│   └── alert.css          # Componente de alertas (success, error, warning, info)
├── badge/
│   └── badge.css          # Componente de badges/tags
├── blockquote/
│   └── blockquote.css     # Componente de citações
├── button/
│   └── button.css         # Componente de botões (primary, secondary, outline)
├── card/
│   └── card.css           # Componente de cards com header, body e footer
├── figure/
│   └── figure.css         # Componente de figuras com imagens e legendas
├── meter/
│   └── meter.css          # Componente de barra de progresso
└── modal/
    └── modal.css          # Componente de modais
```

## Componentes Disponíveis

### Button
- `.btn` - Botão base
- `.btn-primary` - Botão primário (azul)
- `.btn-secondary` - Botão secundário (verde)
- `.btn-outline` - Botão com borda

### Card
- `.card` - Container do card
- `.card-header` - Cabeçalho do card
- `.card-body` - Corpo do card
- `.card-footer` - Rodapé do card

### Badge
- `.badge` - Badge base
- `.badge-primary` - Badge primário
- `.badge-secondary` - Badge secundário
- `.badge-warning` - Badge de aviso

### Alert
- `.alert` - Container do alerta
- `.alert-success` - Alerta de sucesso
- `.alert-error` - Alerta de erro
- `.alert-warning` - Alerta de aviso
- `.alert-info` - Alerta informativo

### Modal
- `.modal` - Container do modal
- `.modal.active` - Modal ativo/visível
- `.modal-content` - Conteúdo do modal

### Meter
- `<meter>` - Barra de progresso HTML5

### Figure
- `<figure>` - Container de figura
- `<figcaption>` - Legenda da figura
- Imagens dentro de figures são automaticamente centralizadas

### Blockquote
- `<blockquote>` - Citação em bloco
- `<blockquote> <footer>` - Autor da citação

## Funcionalidades

### Centralização Automática de Imagens
Todas as imagens são automaticamente centralizadas por padrão, a menos que:
- Tenham estilos inline de posicionamento (`float`, `position`)
- Tenham a classe `.no-center` aplicada

### Botões sem Mudança de Cor no Hover
Os botões não mudam a cor do texto no hover (exceto btn-outline que muda de contorno para preenchido).

## Como Adicionar Novos Componentes

1. Crie uma nova pasta em `components/` com o nome do componente
2. Crie um arquivo CSS dentro da pasta (ex: `components/novo-componente/novo-componente.css`)
3. Adicione o import no arquivo `style.css`:
   ```css
   @import url('components/novo-componente/novo-componente.css');
   ```

## Boas Práticas

- Mantenha cada componente independente e reutilizável
- Use as variáveis CSS definidas em `variables.css`
- Documente classes e variantes no topo de cada arquivo
- Prefira modificadores de classe em vez de elementos aninhados complexos

