# Cadastro de Usuário

Sistema de cadastro e listagem de clientes com integração a API REST.

## Sobre o sistema

Sistema web para cadastrar, listar e excluir clientes. Os dados são enviados e armazenados via API (CRUD). Inclui contador de clientes com e-mail @gmail.com.

## Funcionalidades

- Cadastro de cliente (nome e e-mail)
- Listagem de todos os clientes
- Exclusão de cliente
- Contador de clientes com Gmail

## Como executar

1. Clone ou acesse a pasta do projeto.
2. Abra o `index.html` em um navegador ou use um servidor local (ex.: extensão Live Server no VS Code).
3. Para uso com API: configure a URL em `js/utils.js` (constante `apiFetch`) conforme sua API.

## Estrutura do projeto

```
cadastro-de-usuario/
├── index.html      # Página principal
├── styles.css      # Estilos
├── js/
│   ├── app.js      # Lógica da aplicação e eventos
│   ├── classes.js  # Classe Cadastro e envio à API
│   └── utils.js    # Utilitários e referências do DOM
└── README.md
```

## Tecnologias

- HTML5, CSS3, JavaScript (ES6+)
- Fetch API para comunicação com backend
