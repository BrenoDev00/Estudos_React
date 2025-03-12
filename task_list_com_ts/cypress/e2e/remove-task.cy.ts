describe("Excluir task", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Deve excluir tasks", () => {
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

    cy.get('[data-test="task-section"]')
      .find('[data-test="task-container"]')
      .last()
      .find('[data-test="remove-task-button"]')
      .click();

    cy.get('[data-test="task-section"]')
      .find('[data-test="task-container"]')
      .first()
      .find('[data-test="remove-task-button"]')
      .click();
  });
});
