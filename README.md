Bem vindo(a)!
===================


Você verá a seguir, instruções para execução de um teste prático e simples referente a vaga **Desenvolvedor Frontend**. 
----------


Passo 1 (trabalhar com versionamento)
-------------
Trabalhar com versionamento de código é indispensável para qualquer time, por isso é essencial que você saiba trabalhar com repositórios GIT.
- Faça o FORK deste respositório.
- Faça o CLONE do repositório.
- Abra seu terminal, acesse a pasta raiz do projeto e execute os seguintes comandos: ``` npm install ``` e depois ``` npm start ```

Caso não consiga executar estes passos, você poderá fazer o *[DOWNLOAD](http://107.170.204.35/public/msit-frontend-test.zip)* do teste, e nos enviar novamente, porém vamos priorizar candidatos que saibam trabalhar com versionamento de código.

Passo 2
-------------
  Você deverá criar uma página e introduzir dentro dela um formulário para cadastro de pessoas. Para facilitar, deixamos um exemplo em código de como fazer isso:

  O arquivo ``` src/containers/ExamplePage.js ``` nós o classificamos como um container, é a página que irá organizar os componentes na tela (no caso só temos um componente dentro deste container que é o formulário ``` src/components/example/ExampleForm.js ```). 

  ```src/redux/actions/types/exampleTypes.js```: O nosso formulário exemplo possui apenas uma ação, o nome dela deixamos registrados em uma constante.

```src/redux/actions/exampleActions.js```: Aqui estamos armezenando todas as ações (armazenamos as ações em um arquivo específico, pois os componentes podem ter comportamentos diferentes mas reaproveitar as mesmas ações).

```src/redux/reducer/exampleReducer.js```: Armazena o estado inicial da área de exemplo.

Passo 3
-------------
 Agora que você já entendeu do que se tratam os arquivos de exemplo, você irá criar um formulário para cadastro de pessoas, que contenham os seguintes campos:

- Nome (String: utilizar o componente de texto)
- Data de Nascimento (Date: utilizar o componente DatePicker)
- Trabalhador (Boolean: utilizar o componente Checkbox, para informar se trabalha ou não)

Inserir 2 botões, pode copiar do exemplo, um para cancelar limpando o formulário e outro para concluir, que irá capturar os dados e enviar para a ação (lembra do arquivo ```src/redux/actions/exampleActions.js``` ?).

Dicas
-------------
Para os formulários, no exemplo é utilizado o *[Redux Form](http://redux-form.com/)*. 
Todos os componentes visuais são do *[Material-UI](http://www.material-ui.com/#/components/app-bar)* . 
O framework utilizado é o *[ReactJS](https://facebook.github.io/react/)*.
