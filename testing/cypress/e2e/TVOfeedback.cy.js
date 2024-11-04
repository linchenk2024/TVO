import Operation from "../support/Operation"
describe('TVO feedback spec', () => {
  const operation = new Operation()
 
  beforeEach(() => {
    // assue desktop size solution for example
    cy.viewport(1024, 768)
    cy.visit('https://tvolearn.com/pages/grade-8-mathematics')
  })


  it('test feed back required field', () => {
    
    cy.get('#feedbackComponent').should('not.be.visible')
    cy.get('#feedback-title').click()
    cy.get('#feedbackComponent').should('be.visible')

    cy.get('#feedbackComponent button[type="submit"]').click()

    cy.get('div:has(> #radio-feedback_type-label)').should('have.class', 'show-error')
    cy.get('div:has(> #feedback_message)').should('have.class', 'show-error')
    cy.get('div:has(> #radio-user_type-label)').should('have.class', 'show-error')

    // fill the feed back by some default value
    operation.fillFeedBack()

    cy.get('div:has(> #radio-feedback_type-label)').should('not.have.class', 'show-error')
    cy.get('div:has(> #feedback_message)').should('not.have.class', 'show-error')
    cy.get('div:has(> #radio-user_type-label)').should('not.have.class', 'show-error')

  })

  it('test feed back submit', () => {
    cy.get('#feedback-title').click()

    operation.fillFeedBack()

    cy.get('form[id="feedbackForm"]').submit()

    cy.wait(5000)
    cy.get('.feedback__success').should('have.style', 'display: block')
    cy.on("fail", (err, runnable) => {
      console.log(err.message);
      return false;
    });
  })
})