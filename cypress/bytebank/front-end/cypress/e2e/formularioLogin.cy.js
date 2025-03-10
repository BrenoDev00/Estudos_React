describe('Formulário de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
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
});
