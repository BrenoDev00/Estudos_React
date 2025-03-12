describe('Teste de múltiplas páginas', () => {
  it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('/');
    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('breno@mail.com');
    cy.getByDataTest('senha-input').type('123');
    cy.getByDataTest('botao-enviar').click();

    // find: procura uma tag filha; eq: pega o elemento filho em determinada posição no dom.
    cy.getByDataTest('app-home').find('a').eq(1).click();
    cy.getByDataTest('titulo-cartoes').should('exist').contains('Meus cartões');
  });
});
