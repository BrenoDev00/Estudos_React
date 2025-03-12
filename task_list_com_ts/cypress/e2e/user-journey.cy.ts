describe("Jornada de usuário", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Deve testar todas as funcionalidades da aplicação, simulando a jornada de usuário", () => {
    cy.get('h1[data-test="main-title"]')
      .should("exist")
      .contains("Lista de tarefas");

    cy.get('input[data-test="task-input"]').should("exist");

    cy.get('button[data-test="task-register-button"]').should("exist");

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
