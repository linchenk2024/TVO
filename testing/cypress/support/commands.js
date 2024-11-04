// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.addQuery('isWithinViewport', () => {

    const viewportWidth = Cypress.config('viewportWidth')
    const viewportHeight = Cypress.config('viewportHeight')
  
    const innerFn = (subject) => {
  
      const {top, left, bottom, right} = subject[0].getBoundingClientRect();
      expect(top).to.be.at.least(0);
      expect(left).to.be.at.least(0);
      expect(left).to.be.at.most(viewportWidth);
      expect(top).to.be.at.most(viewportHeight);
    }
    return innerFn;
  })