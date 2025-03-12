describe("Cadastrar task", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Deve cadastrar novas tasks", () => {
    cy.get('[data-test="task-input"]').type("lorem ipsum dolor");
    cy.get('[data-test="task-register-button"]').click();
    cy.get('[data-test="task-input"]').clear();

    cy.get('[data-test="task-input"]').type("consectetur adipiscing elit, sed");
    cy.get('[data-test="task-register-button"]').click();
    cy.get('[data-test="task-input"]').clear();

    cy.get('[data-test="task-input"]').type(
      "sed do eiusmod tempor incididunt ut labore"
    );
    cy.get('[data-test="task-register-button"]').click();
    cy.get('[data-test="task-input"]').clear();
  });
});
