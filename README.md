[![Node.js CI](https://github.com/alinepmarcondes/chatbot-iws/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/alinepmarcondes/chatbot-iws/actions/workflows/node.js.yml)

# ChatBot-IWS

O projeto em desenvolvimento é uma aplicação PWA de um chat bot projetado para fornecer atendimento eficiente e personalizado aos usuários.
O objetivo principal é melhorar a experiência do usuário, reduzir o tempo de espera e aumentar a eficiência do atendimento ao cliente.

***Tecnologias que serão utilizadas:***

[![My Skills](https://skillicons.dev/icons?i=react,nodejs,mongodb)](https://skillicons.dev)

**Front end:**  React   |   **Back end:** Node.js   |   **Persistência:** Mongo DB

## Processo de instalação
Instalar o Node.js e npm (Node Package Manager)

Instalar o Create React 
```bash
  npm install -g create-react-app
```

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/alinepmarcondes/chatbot-iws.git
```

Entre no diretório do projeto

```bash
  cd chatbot-iws
```

Inicie o programa

```bash
  npm run start
```

Inicie o MongoDB
```bash
  cd backend
  node server.js
```
Utilizando o MongoDB Compass
* Faça uma conexão na porta padrão, terá acesso ao histórico de chat e usuários criados (feat. Admin) 

## Testes Automatizados
Instale a biblioteca 
```bash
  npm install @testing-library/react @testing-library/jest-dom jest-fetch-mock
```

Rode os testes
```bash
  npm run tests
```
* **Artifact com Html-Report dos Testes disponível em Actions "Node.js CI"**

