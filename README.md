# Trybesmith Project

[![Trybesmith Doc Screen Shot][product-screenshot]](https://documenter.getpostman.com/view/22433291/2s93RXtrEC)

### Link da documentação do projeto: [https://documenter.getpostman.com/view/22433291/2s93RXtrEC](https://documenter.getpostman.com/view/22433291/2s93RXtrEC)


<!-- TABLE OF CONTENTS -->
<details>
  <summary><h2><strong>Sumário</strong></h2></summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#contexto">Contexto</a></li>
        <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
        <li><a href="#funcionalidades-implementadas">Funcionalidades Implementadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#para-iniciar-a-aplicação-localmente">Para Iniciar a Aplicação Localmente</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#clonando-o-repositório">Clonando o Repositório</a></li>
        <li><a href="#rodando-serviços-com-docker-compose">Rodando Serviços com docker-compose</a></li>
        <li><a href="#acessando-container-e-instalando-dependências">Acessando Container e Instalando Dependências</a></li>
        <li><a href="#subindo-banco-de-dados-e-executando-a-aplicação">Subindo Banco de Dados e Executando a Aplicação</a></li>
        <!-- <li><a href="#executando-testes-e-análise-de-cobertura">Executando Testes e Análise de Cobertura</a></li> -->
        <li><a href="#parando-a-aplicação-e-descendo-os-containers">Parando a Aplicação e Descendo os Containers</a></li>
      </ul>
    </li>
    <li><a href="#contribuições-e-autoria">Contribuições e Autoria</a></li>
  </ol>
</details>


# Sobre o Projeto
  O projeto Trybesmith é uma aplicação back-end composta por uma API REST, que acessa banco de dados relacional, com rotas para gestão de uma simulação de loja virtual de itens medievais.

## Contexto
  Esse projeto foi desenvolvido por _[Juliana Álvares](https://www.linkedin.com/in/juliana-alvares/)_, como parte do processo de aprendizado do Módulo de Back-end, do curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/) :rocket:
  
  _"A Trybe é uma escola do futuro para qualquer pessoa que queira mudar de vida e construir uma carreira de sucesso em tecnologia, onde a pessoa tem a possibilidade de só pagar quando conseguir um bom trabalho."_

  O programa conta com mais de 1.500 horas de aulas presenciais e online, aborda introdução ao desenvolvimento de software, front-end, back-end, ciência da computação, engenharia de software, metodologias Ágeis e habilidades comportamentais.

## Tecnologias Utilizadas

  #### Back-end:
  * [![MySQL][MySQL-img]][MySQL-url]
  * [![Node.js][Node-img]][Node-url]
  * [![Express][Express-img]][Express-url]
  * [![JWT][JWT-img]][JWT-url]

  <!-- #### Testes:
  * [![Jest][Jest-img]][Jest-url]
  * [![Testing-Library][RTL-img]][RTL-url] -->

  #### Linguagens:
  * [![TypeScript][TypeScript-img]][TypeScript-url]

  #### Auxiliares (Execução e Documentação):
  * [![Docker][Docker-img]][Docker-url]
  * [![Postman][Postman-img]][Postman-url]

## Funcionalidades Implementadas

  - API REST com os seguintes endpoints, conectados ao banco de dados MySQL, desenvolvida em modelo de camadas MSC (Model, Service e Controller):

    [![Trybesmith Routes Screen Shot][routes-screenshot]](https://documenter.getpostman.com/view/22433291/2s93RXtrEC)

    **Obs.: A explicação detalhada de cada rota pode ser acessada na [Documentação da API](https://documenter.getpostman.com/view/22433291/2s93RXtrEC).**

# Para Iniciar a Aplicação Localmente
  Para rodar esta aplicação localmente é necessário garantir o cumprimento dos pré-requisitos, fazer uma cópia do repositório e executar as instruções a seguir. Neste projeto é sugerido o uso do Docker, a partir do docker-compose já configurado no repositório, que subirá os serviços `node` e `db`, via containers chamados `trybesmith` e `trybesmith_db`.

## Pré-requisitos
  * [docker-compose](https://docs.docker.com/compose/) em versão 1.29 ou superior.
  * Estar com a porta padrão do `mysql` (`3306`) liberada, pois o serviço `db` está configurado no docker-compose para conexão nesta porta.

## Clonando o Repositório
  ```bash
    git clone git@github.com:AlvaresJu/trybesmith.git
  ```
## Rodando Serviços com docker-compose
  ```bash
    cd trybesmith/
    docker-compose up -d
  ``` 
## Acessando Container e Instalando Dependências
  ```bash
    docker exec -it trybesmith bash
    npm install
  ``` 
## Subindo Banco de Dados e Executando a Aplicação
 *Obs.: comandos a serem executados de DENTRO do Container `node`*
  ```bash
    npm run restore
    npm start
  ```
<!-- ## Executando Testes e Análise de Cobertura
  ```bash
    npm test
    npm run test-coverage
  ``` -->
## Parando a Aplicação e Descendo os Containers
 *Obs.: comandos a serem executados de FORA do Container `node`*
  ```bash
    docker-compose down
  ```

# Contribuições e Autoria
  Como descrito, este projeto foi proposto pela [Trybe](https://www.betrybe.com/) e desenvolvido por _[Juliana Álvares](https://www.linkedin.com/in/juliana-alvares/)_ durante o curso de Desenvolvimento Web realizado. Por isso, foram disponibilizados pela Trybe alguns arquivos base de configurações e auxiliares ao desenvolvimento do projeto. Segue especificação de autoria dos principais documentos:
  
  Arquivos/diretórios desenvolvidos pela autora do projeto (Juliana Álvares):
  > README.md | images/** | src/controllers/** | src/database/connection.ts | src/interfaces/** | src/middlewares/** | src/models/** | src/routes/** | src/services/** | src/utils/** | src/app.ts
  
  Arquivos/diretórios desenvolvidos pela Trybe:
  > docker-compose.yml | .eslintrc.json | package.json | package-lock.json | tsconfig.json | src/index.ts | src/database/Trybesmith.sql | src/database/recreateDatabase.ts

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot_doc.png
[routes-screenshot]: images/screenshot_routes.png
<!-- [der-screenshot]: images/der.png -->
<!-- [product-gif]: images/features.gif -->
[MySQL-img]: https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white
[MySQL-url]: https://www.mysql.com/
[Node-img]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Express-img]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[JWT-img]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[JWT-url]: https://jwt.io/
[TypeScript-img]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[Docker-img]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[Docker-url]: https://www.docker.com/
[Postman-img]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white
[Postman-url]: https://www.postman.com/
