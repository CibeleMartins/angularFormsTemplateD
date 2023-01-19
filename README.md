

# Bem vindo ao Angular Forms Template Driven

## Sobre

### O Angular oferece duas abordagens quando se trata de formulários: Abordagem orientada a modelos e Abordagem reativa.

<h5>Abordagem orientada a modelos:</h5> é chamda assim porque é possível configurar todo o formulário no código html, e o 
Angular infere a estrutura do formulário com uma representação JavaScript.

<h5>Abordagem reativa:</h5> é uma abordagem mais complexa, na qual a estrutura do formulário é definida no código TypeScript,
o código HTML é configurado, e depois essas partes são conectadas manualmente.

-> O módulo "FormsModule" inclui muitas funcinalidades para formulários. Esse módulo cria uma representação de objeto JavaScript quando detecta uma tag <form> em um documento HTML. Dentro dessa representação JavaScript do formulário há muitas propriedades e métodos que permitem aplicar validação, setar valores de maneira padrão ou com a ocorrencia de algum evento.

-> Para ter acesso a essa representação JavaScript do formulário, é necessário inserir uma referencia local na tag <form>
e adicionar a ela um valor em string como: "ngForm". Depois disso, para acessar essa referencia local no arquivo .ts do componente,é necessário importar "ViewChild", chamar o decorator c/ "@ViewChild()" e   @ViewChild('nome da ref local', { static: false }) nome da propriedade: NgForm <- tipo;

-> A partir dessa propriedade que foi criada com a referencia local do formulário é possível acessar todas as propriedades e 
métodos da representação JavaScript do formulário que foi criada pelo Angular. Além das propriedades como valid, invalid, required, controls que da acesso aos inputs do formulário, existem dois métodos muito importantes:

1 - setValue() = altera todos os inputs
2 - pathValue() = altera apenas um ou mais inputs expecíficos

-> Estes métodos permitem alterar/sobrepor após a ocorrencia de algum evento ou alguma outra execução na aplicacao, os valores
de todos os controles/inputs do formulário ou apenas o valor de algum deles. Ambos recebem um objeto como parametro, bem como dentro deles deve ser definida a representacao do objeto que leva ao caminho dos/do controle(s)/input(s).

## Conhecimentos Praticados

✔ Angular <br>
✔ Bootstrap <br>
✔ Formulários <br>

Neste repositório foi criado um exemplo simples de um formulário orientado p/ template driven, clone o projeto e de uma olhada ;)

- Utilize o Git Clone no repositório.
- Abra o projeto em sua IDE
- Abra o terminal e rode "npm i"
- E depois digite o comando "ng serve"

Qualquer dúvida ou sugestão me procure no <a href='www.linkedin.com/in/cibelemartinssss'>Linkedin</a>.
