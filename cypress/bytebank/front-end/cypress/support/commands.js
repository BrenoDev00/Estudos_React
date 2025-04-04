// Este arquivo é usado para criar comandos personalizados com o cypress.
// Sintaxe: Cypress.Commands.add("nome do comando", callback).

Cypress.Commands.add('getByDataTest', (selector) => {
  // get: obter elemento pelo DOM;
  return cy.get(`[data-test="${selector}"]`);
});
