<p align="center">
    <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-começando">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-licença">Licença</a>
</p>

## 💻 Sobre

- Uma plataforma online para compartilhar copy pastas da <a href="https://www.twitch.tv">Twitch</a>
 - Você pode acessar ele online disponibilizado neste link: https://twitchdoodles.now.sh

## 🚀 Tecnologias

### Back-end

- [NodeJS](https://nodejs.org/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [ts-node-dev](https://www.npmjs.com/package/ts-node-dev) - Executa e observa alterações na API
- [TypeORM](https://typeorm.io/) - ORM usado com Node.js, JavaScript, TypeScript e outras linguagens
- [Postgres](https://www.postgresql.org/) - Banco de Dados
- [Docker](https://www.docker.com/) - Criação de ambientes isolados (containers).
- [CORS](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS) - Permite que endereços (domínios) diferentes acessem a API
  - **Padrão:** Outras aplicações front-end não podem acessar a API se não estiverem no mesmo endereço (domínio) dela

### Front-end

- Você pode encontrar o projeto <a href="https://github.com/gabrielgraciani/twitch-doodles-frontend" target="_blank">clicando aqui</a>

## ⌛ Começando

Em primeiro lugar, você precisa ter o *node* e *yarn* (ou *npm*) instalado em sua máquina.

*Se você decidir usar o npm, não se esqueça de deletar yarn.lock nas pastas*

Então você pode clonar o repositório.

`git clone https://github.com/gabrielgraciani/twitch-doodles-backend`

Iniciando a aplicação.

1. Instale as dependências do projeto: `yarn ou npm install`
2. Instale o docker: https://docs.docker.com/get-docker/
3. Crie uma imagem do postgres com a seguinte linha de comando no seu terminal: `docker run --name twitch_doodles_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
4. Inicie a sua imagem do postgres: `docker start twitch_doodles_postgres` <br> *toda vez que o computador for reiniciado é necessário rodar este comando*
5. Execute as migrations: `yarn typeorm migration:run ou npm run typeorm migration:run`
6. Inicie o servidor: `yarn dev ou npm run dev`

## 🤔 Como contribuir

1. Faça um fork desse repositório;
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`;
3. Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
4. Faça push para a sua branch: `git push origin minha-feature`;
5. Crie um pull request;
6. Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## 📝 Licença

Este projeto está sob a licença MIT. Veja a [licença](LICENSE) para mais informações.

---

Feito com 💟 por Gabriel Thomaz Graciani 👋 [Fale comigo!](https://www.linkedin.com/in/gabriel-thomaz-graciani-98400b166/)
