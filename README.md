# Desafio 3 - Furniro

*Projeto da trilha de aprendizagem do programa de estágio da CompassUol, o qual se consiste em recriar uma página de vendas de móveis. Com rotas protegidas, redux, responsividade e hospedagem de arquivos na AWS.*

![Furniro](https://imgur.com/uPcB2tC.png)

## Como utilizar ❔
*Passo a passo para execução do projeto*

1 - Você precisará ter o Nodejs (mínimo de versão: v16.16.0) instalado para executar os comandos de instalação de dependências do projeto.

2 - Após clonar o projeto ou fazer download do arquivo ZIP, acesse o diretório do projeto em um terminal de comando e execute o comando para instalar as dependências:

`npm install`

ou 

`yarn add`


3 - Após instalar as dependências do projeto, utilize o seguinte comando para executar via localhost:

`npm start`
  

> [!IMPORTANT]
> Observação: Este projeto utiliza JSON server para simular um banco de dados, então utilize os seguintes comandos para executar corretamente:
  
- Para instalar globalmente o json-server na versão utilizada neste projeto:

`npm install -g json-server@0.17.4`


- Para executar o json-server localmente na sua máquina:

`json-server --watch db.json`

> [!IMPORTANT]
> Nesse projeto há um script para executar os comandos "npm start" e "json-server --watch db.json" ao mesmo tempo, pois eles precisam rodar em conjunto para execução correta do projeto. Então apenas use "npm start" e certifique-se de que ambas portas localhost 3000 e 3001 não estejam sendo utilizadas.

## Lista de Requerimentos do projeto 
- Utilize TypeScript para tipagem;
- Utilize [Firebase](https://firebase.google.com/docs/auth?hl=pt-br), para lidar com a autenticação do usuário. A autenticação deve ser possível com: e-mail, Facebook e Google. A documentação linkada está detalhada e fornece todas as informações necessárias para aplicar esta funcionalidade;
- [React Router](https://reactrouter.com/en/main) para criação das rotas, sendo que é necessário proteger as rotas;
- Crie controles deslizantes para exibição dos móveis na sessão da Home, em formato de Carrossel. Recomendação de biblioteca: [Splide](https://splidejs.com/). [Splide for React docs.](https://splidejs.com/integration/react-splide/) **Sinta-se à vontade para usar a biblioteca de sua preferência;**
- Crie um arquivo JSON e cole-o no [Run Mocky](https://designer.mocky.io/) para criar uma API para os produtos;
- A página de produtos gerais deve conter paginação como no Figma, o botão de ‘Filter’ deve abrir um pop-up com filtros funcionais;
- Ao clicar no card de um móvel, é necessário redirecionar o usuário para a rota específica que contém suas informações detalhadas (Product Page);
- Na página de produto, o botão de ‘Add To Cart’ deve adicionar o produto no carrinho e o produto pode ser adicionado ou removido quantas vezes o usuário desejar;
- O carrinho deve ser criado com [**Redux**](https://redux.js.org/);
- Na página de carrinho o usuário pode remover todos os produtos, independente da quantidade, ao clicar no ícone de lixeira;
- Ao clicar no botão de ‘Check Out’, o usuário PRECISA estar logado para fazer o redirecionamento para a página de Check Out, essa rota específica deve estar protegida;
- Os campos de formulário devem ser todos validados;
- Na página de Check Out, os dados de endereço devem vir da [API](https://viacep.com.br/) e preencher todos os campos de endereço automaticamente, exceto o de complemento;
- A aplicação deve estar responsiva;
- Pode fazer o uso de biblioteca externa (estritamente **styled-components ou Tailwind)** para estilização;
- Testes unitários com pelo menos 70% de cobertura;
- Crie um repositório privado em seu Github e adicione os instrutores como colaboradores do projeto até as **17h30 do dia 10/06**;
- Adicione um README ao seu projeto, com instruções para inicializar e rodar sua aplicação;
- Faça pequenos commits e use Convencionais Commits para manter seu repositório organizado.
- ReactApp rodando em uma instância EC2 (uso geral) com porta aberta para acesso externo (VPC do EC2)
- Todas as imagens devem ser hospedadas em bucket do S3 (uso geral)
