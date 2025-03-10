describe('Formulário de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('Não deve permitir enviar formulário com todos os campos vazios', () => {
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('botao-enviar').click();
    cy.getByDataTest('mensagem-erro')
      .should('exist')
      .contains('O campo de senha é obrigatório');
  });

  it('Não deve permitir o campo de e-mail vazio', () => {
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('senha-input').type('123456');
    cy.getByDataTest('botao-enviar').click();
    cy.getByDataTest('mensagem-erro')
      .should('exist')
      .contains('O campo email é obrigatório');
  });

  it('Não deve permitir um e-mail inválido', () => {
    cy.getByDataTest('botao-login').click(); // click: clicar em um elemento.
    cy.getByDataTest('email-input').type('neilton@alura'); // type: digitar em um input.
    cy.getByDataTest('senha-input').type('123456');
    cy.getByDataTest('botao-enviar').click();
    cy.getByDataTest('mensagem-erro')
      .should('exist')
      .contains('O email digitado é inválido');
  });

  it('Não deve permitir o campo de senha vazio', () => {
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('neilton@alura.com');
    cy.getByDataTest('botao-enviar').click();
    cy.getByDataTest('mensagem-erro')
      .should('exist')
      .contains('O campo de senha é obrigatório');
  });
});
