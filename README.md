
Bem vindo ao Angular Forms Template Driven

Sobre

O Angular oferece duas abordagens quando se trata de formulários: Abordagem orientada a modelos e Abordagem reativa.

Abordagem orientada a modelos: é chamda assim porque é possível configurar todo o formulário no código html, e o 
Angular infere a estrutura do formulário com uma representação JavaScript.

Abordagem reativa: é uma abordagem mais complexa, na qual a estrutura do formulário é definida no código TypeScript,
o código HTML é configurado, e depois essas partes são conectadas manualmente.

O módulo "FormsModule" inclui muitas funcinalidades para formulários. Esse módulo cria uma representação de objeto JavaScript quando detecta uma tag <form> em um documento HTML. Dentro dessa representação JavaScript do formulário há muitas propriedades e métodos que permitem aplicar validação, setar valores de maneira padrão ou com a ocorrencia de algum evento.

Para ter acesso a essa representação JavaScript do formulário, é necessário inserir uma referencia local na tag <form>
e adicionar a ela um valor em string como: "ngForm". Depois disso, para acessar essa referencia local no arquivo .ts do componente,é necessário importar "ViewChild", chamar o decorator c/ "@ViewChild()" e   @ViewChild('nome da ref local', { static: false }) nome da propriedade: NgForm <- tipo;

A partir dessa propriedade que foi criada com a referencia local do formulário é possível acessar todas as propriedades e 
métodos da representação JavaScript do formulário que foi criada pelo Angular.

