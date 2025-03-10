describe('Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001');
  });

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    cy.getByDataTest('botao-cadastro').click();
    cy.getByDataTest('nome-input').type('Breno');
    cy.getByDataTest('email-input').type('breno@mail.com');
    cy.getByDataTest('senha-input').type('123456');
    cy.getByDataTest('checkbox-input').click();
    cy.getByDataTest('botao-enviar').click();
    cy.getByDataTest('botao-fechar-modal').click();
  });
});
