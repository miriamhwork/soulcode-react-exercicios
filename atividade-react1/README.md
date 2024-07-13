# Acesse o deploy do projeto
>>> https://code-plus-ten.vercel.app/

____________________________________________________________________

## Atividade de React
### Parte 1 - semana 4

#### Objetivo:
Criar uma página totalmente componentizada fazendo uso do React. 

#### Instruções Gerais:
- O foco deve estar na estruturação e arquitetura dos componentes;
- A estrutura de componentes deve ser a seguinte:
- <App>: componente principal e pai de todos os componentes da aplicação;
    - <Cabecalho>: com um logo e links de navegação (sem funcionamento)
    - <Banner>: seção com algum conteúdo destacado
    - <Galeria>: seção que possui diversos componentes de Card relacionado a temática
    - <Card>: componente que representa o card relacionado a temática
    - <Rodape>: informações sobre a temática escolhida
- O componente <Galeria> deve utilizar a ideia de map, para gerar a lista de Cards de acordo com um array de objetos
- O componente <Cabecalho> deve ter um botão de “Entrar” que ao ser clicado exibe um alerta no navegador.

#### Requisitos:
- Componentes;
- Estilização CSS com React;
- Props;
- Renderização condicional;
- Listas e Eventos;

____________________________________________________________________

### Parte 2 - semana 5
#### Objetivo:
Fazer uso das bibliotecas react-router-dom, react-bootstrap e react-hook-form.

#### Instruções Gerais:
O foco deve estar no uso das bibliotecas de navegação, Bootstrap e formulários
Rotas (com links na Navbar/Menu da aplicação)
    <Home>: tela inicial demonstrando a aplicação (aqui mantém a estrutura da página da semana 04)
    <Contato>: tela com formulário de contato com os campos (nome, email, e feedback) e validação dos campos
    <Cadastro>: tela com formulário de cadastro com os campos (nome, email, data de nascimento, senha) e validação dos campos
    <Login>: tela com formulário de login com campos (email e senha) e validação dos campos
    <NotFound>: componente exibido quando o usuário fizer um acesso inexistente
Dentro deve haver um botão que volta para a Home
Entrega via repositório no Github

### Requisitos:
Navegação com React Router
Componentes do React e Bootstrap
Formulários com React Hook Form