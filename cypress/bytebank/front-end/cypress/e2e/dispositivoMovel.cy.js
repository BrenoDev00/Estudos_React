describe('Testando dispositivos móveis', () => {
  it('Deve existir um botão menu burguer', () => {
    // viewport: define a largura e altura da viewport do dispositivo.
    cy.viewport(375, 667);

    cy.visit('/');

    cy.getByDataTest('botao-login').click();
    cy.getByDataTest('email-input').type('breno@mail.com');
    cy.getByDataTest('senha-input').type('123');
    cy.getByDataTest('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByDataTest('menu-burguer').click();
    cy.getByDataTest('menu-lateral').find('a').eq(3).click();
    cy.location('pathname').should('eq', '/home/investimentos');
  });
});
