describe("Existência de elementos iniciais", () => {
  it("Verifica a existência do título principal, do input de task e do botão de cadastrar task", () => {
    cy.visit("http://localhost:5173/");

    cy.get('h1[data-test="main-title"]')
      .should("exist")
      .contains("Lista de tarefas");

    cy.get('input[data-test="task-input"]').should("exist");

    cy.get('button[data-test="task-register-button"]').should("exist");
  });
});
