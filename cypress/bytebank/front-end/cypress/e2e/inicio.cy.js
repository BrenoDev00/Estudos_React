describe('Página inicial', () => {
  // beforeEach: executa este comando antes de iniciar qualquer teste.
  beforeEach(() => {
    // visit: visitar determinada url
    cy.visit('http://localhost:3001');
  });

  it('Deve renderizar a tag h1 com o texto correto', () => {
    // contains: verifica a existência de determinado texto.
    cy.getByDataTest('titulo-principal').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });
});
