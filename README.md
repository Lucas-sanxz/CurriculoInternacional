# Site de Currículo Profissional - Célia Cunha

Um site de currículo profissional moderno e responsivo com sistema de administração e suporte a múltiplos idiomas.

## Características

- **Design Moderno**: Baseado no design da imagem de referência com cores da FBD Global Business
- **Sistema de Administração**: Acesso restrito para edição de conteúdo
- **Múltiplos Idiomas**: Português, Inglês e Espanhol
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Glassmorphism**: Efeitos visuais modernos com transparência
- **Navegação Suave**: Scroll suave entre seções

## Como Usar

### Para Visitantes
1. Abra o arquivo `index.html` no seu navegador
2. Use o seletor de idioma no canto superior esquerdo para escolher seu idioma preferido
3. Navegue pelas seções usando o menu superior ou os botões de ação

### Para Administrador
1. **Login**: Dê duplo clique no nome "Célia Cunha" no canto superior esquerdo
2. **Senha**: Digite `admin123` (pode ser alterada no arquivo `script.js`)
3. **Editar**: Clique em "Editar Perfil" para modificar o conteúdo
4. **Salvar**: Clique em "Salvar Alterações" para persistir as mudanças
5. **Logout**: Clique em "Sair" para sair do modo administrador

## Estrutura de Arquivos

- `index.html` - Estrutura principal do site
- `styles.css` - Estilos e design responsivo
- `script.js` - Funcionalidades JavaScript e sistema de admin

## Personalização

### Alterar Senha de Admin
No arquivo `script.js`, linha 3:
```javascript
const ADMIN_PASSWORD = 'admin123'; // Altere aqui
```

### Modificar Cores
No arquivo `styles.css`, as cores principais são definidas no gradiente:
```css
background: linear-gradient(135deg, #8B0000 0%, #FF4500 50%, #FFD700 100%);
```

### Adicionar Novos Idiomas
1. Adicione as traduções no objeto `translations` no `script.js`
2. Adicione a opção no seletor de idioma no `index.html`

## Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6+)
- Font Awesome (ícones)
- LocalStorage (para persistência de dados)

## Compatibilidade

- Chrome, Firefox, Safari, Edge (versões recentes)
- Responsivo para dispositivos móveis
- Funciona offline após carregamento inicial

## Notas Importantes

- Todos os dados são salvos localmente no navegador
- A senha de administração é armazenada em texto simples (não recomendado para produção)
- O site não requer servidor web para funcionar
- Compatível com macOS (sem arquivos começando com ".")