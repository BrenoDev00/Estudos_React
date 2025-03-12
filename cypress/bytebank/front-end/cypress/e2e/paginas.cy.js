describe('Teste de múltiplas páginas', () => {
  it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('/');
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('breno@mail.com');
    cy.getByDataTest('senha-input').type('123');
    cy.getByDataTest('botao-enviar').click();

    // location: obtém a URL base da aplicação e verifica se está na página /home.
    cy.location('pathname').should('eq', '/home');

    // find: procura uma tag filha; eq: pega o elemento filho em determinada posição no dom.
    cy.getByDataTest('app-home').find('a').eq(1).click();
    cy.getByDataTest('titulo-cartoes').should('exist').contains('Meus cartões');

    cy.location('pathname').should('eq', '/home/cartoes');
  });
});
