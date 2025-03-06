describe('Página inicial', () => {
  it('Deve renderizar a tag h1 com o texto correto', () => {
    // visit: visitar determinada url
    cy.visit('http://localhost:3000');

    // get: obter elemento pelo DOM; should('exist'): verifica se um elemento está renderizado no DOM; contains: verifica a existência de determinado texto.
    cy.get('h1[data-test="titulo-principal"')
      .should('exist')
      .contains(
        'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
      );
  });
});
