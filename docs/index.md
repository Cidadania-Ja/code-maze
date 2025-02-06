# Desafio Técnico

### Informações iniciais

Como está o projeto?

### Frontend

O projeto frontend foi construído com **[Next.js](https://nextjs.org/)**, **[React Query](https://tanstack.com/query/latest)** e **[TailwindCSS](https://tailwindcss.com/)**.

- A aplicação possui uma **tela principal com uma lista de posts**, que utiliza o [JSONPlaceholder](https://jsonplaceholder.typicode.com/) como fonte de dados fictícios para facilitar o desenvolvimento e manter o escopo do projeto mais gerenciável. Você pode explorar as rotas para entender melhor como integrá-las.

### Backend

O backend foi construído com **[Express.js](https://expressjs.com/)** e está configurado para fornecer APIs REST ao frontend.

Uma collection do **Postman** está disponível para facilitar a interação com o backend. Baixe o arquivo na raiz do projeto para começar a testar as APIs.

## Tarefas

Você deve completar as seguintes tarefas:

- [ ] **Organizar o projeto**:

  - Refatore o código, garantindo que esteja limpo, bem estruturado e de fácil manutenção.
  - Aplique boas práticas de desenvolvimento e padrões de código.

- [ ] **Implemente o resto do CRUD**:

  - Implemente os fluxos de editar e apagar um post.

- [ ] **Adicionar um novo campo no envio de postagens**:

  - Adicione o campo `body` ao envio de informações do post e ajuste também a exibição em tela.

- [ ] **Implementar funcionalidade de notificações**:

  - Implemente uma funcionalidade de envio de notificações em tempo real.
  - O disparo da notificação deve ser acionado via endpoint da API do backend (disparado pelo postman, por exemplo).
  - A notificação deve ser recebida e exibida **instantaneamente** no frontend, no dropdown do ícone de notificações.

## Dicas

### **Você ganha ponto se:**

- Seu código está limpo e bem estruturado, com padrões consistentes e de fácil leitura.
- As novas funcionalidades foram feitas e estão funcionando conforme descrito.
- Bugs encontrados foram resolvidos adequadamente.
- Soluções criativas para os problemas foram apresentadas.

### **Sobre a avaliação:**

- Você é responsável pela Qualidade de Software de tudo que estiver dentro das pastas backend/src e frontend/app.
- Avaliaremos a qualidade do código do projeto, assim como o funcionamento dos requisitos passados.
- Sinta-se à vontade para registrar considerações por esctrito na descrição do PR aberto por você.

### **Submissão do projeto**

- Faça um download .zip deste repositório público.
- Crie um repositório seu **privado** e suba um commit inicial com o conteúdo do .zip.
- Deixe a main com esse estado inicial e crie uma branch separada para realizar suas mudanças.
- Ao final, crie um Pull Request (PR) dessa sua branch para a main.
- Adicione estes dois colaboradores no seu repositório privado: @FernandoTancini e @GuilhermeAlbert.
- Pronto, assim conseguiremos revisar sua entrega!

### **Sobre permissões e boa fé**

- Você pode instalar novas dependências aos projetos, via yarn.
- Você pode pesquisar na internet ou utilizar AI, como no dia-a-dia de um programador.
- ⚠️ Lembre-se: esta é uma etapa assíncrona para avaliar **suas habilidades** e você será desclassificado se, posteriormente, identificarmos que não possui domínio sobre a sua entrega feita nesta etapa.

---

Boa sorte e divirta-se no desafio! 🚀
