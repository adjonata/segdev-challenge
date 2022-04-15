# SegDev Challenge

Aplicação desenvolvida como teste técnico para vaga na empresa SegDev,
no cargo de Desenvolvedor Front-End Pleno.

---

### Tecnologias utilizadas:

- Vue 3 + Vite
- Composition API
- Typescript
- Axios
- Vue Router
- Pinia + PiniaPersistedState
- Sass

---

### Como rodar localmente

1. Clone o projeto em sua máquina
2. Acesse a pasta do projeto com o comando `cd segdev-challenge`
3. Crie um arquivo `.env` como cópia do arquivo `.env.example`
4. Após isso e rode o comando `yarn install` para instalar as dependências
5. Para finalizar rode o comando `yarn dev` para executar a aplicação em sua máquina

---

### Funcionalidades

A aplicação se consiste na busca de dados paginados da API [Rick and Morty](https://rickandmortyapi.com).<br>

- Para melhorar o fluxo de dados e evitar carregamentos repetidos, criei um state utilizando pinia, que contém a regra de páginação e filtros. Caso um página já tenha sido carregada, ela é retornada do estado, caso contrário realizar uma nova requisição e guarda ela também.<br>
  Junto a esse fluxo adicionei ao projeto a biblioteca PiniaPersistedState que armazena uma cópia do estado no localStorage, sendo assim mesmo que você atualize a página, os dados já carregados permanecerão.<br>
- Na parte visual do sistema, criei um layout padrão que contém um Header e Menu, que trabalha com a navegação entre as rotas.
- Para comunicação criei um módulo chamado API que contém todas as rotas da RickAndMortyAPI, ela é completamente tipada, sendo assim os dados são facilmente manipulados. 
- O projeto contém uma estrutura simples, bem repatorada, de fácil manutenção e adição de novas features. Pretendo melhorar mais ainda ele no futuro para mantér no meu portfólio.