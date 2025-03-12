describe("Linhas entre tasks", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Deve habilitar e desabilitar linhas entre tasks", () => {
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

    cy.get('[data-test="line-enabler-container"]').should("exist");
    cy.get('[data-test="line-enabler-text"]')
      .should("exist")
      .contains("Habilitar linhas");
    cy.get('[data-test="line-enabler"]').click();
    cy.wait(1000);
    cy.get('[data-test="line-enabler"]').click();
  });
});
