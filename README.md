## Controle de Impressões
Projeto fullstack para gerenciamento e controle de impressões realizadas. \
O projeto possui 3 abas com as seguintes funções:\
Dashboard - Visão geral das impressões\
Nova Impressão - Adicionar novas impressões\
Histórico - Buscar impressões com mais detalhes usando filtros

## Tecnologias utilizadas
* Javascript - Next.js - React
* Tailwindcss
* Mongodb

### Como Inicializar
Instale o mongodb e execute ```mongod``` no terminal \
Ou instale o mongodb compass e crie uma nova conexão 

Clone o repositório \
Na pasta "src" crie um novo arquivo chamado .env \
.env deve conter ```DATABASE_URL=mongodb://127.0.0.1:27017/dbImpressoes```

Abra a pasta do projeto com VSCode (ou acesse a pasta via terminal) e execute:
```bash
npm i
# 
npm run dev

```

A aplicação estará rodando em [http://localhost:3000](http://localhost:3000) que pode ser acessado no browser.

## Prints

![dashboard](/dashboard.jpg)
![novaImpressao](/novaImpressao.jpg)
![historico](/historico.jpg)
![filtros](/filtros.jpg)


