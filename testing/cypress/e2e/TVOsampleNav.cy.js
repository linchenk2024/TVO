import { baseCourses } from "../support/Constant"

describe('TVO sample ', () => {

  beforeEach(() => {
    // assume desktop size solution for example
    cy.viewport(1024, 768)
    cy.visit('https://tvolearn.com')
  })

  // set grade 1-2 for save time for sample
  for(let i=1; i < 3; i++){
    baseCourses.forEach((course) => {
      it(`navigate to Grade${i} - ${course}`, () => {
        cy.contains('Learning Resources (K-12)').click()
        cy.contains(`Grade ${i}`).click()
        cy.url().should('include', `/pages/grade-${i}`)
        cy.contains(`${course}`).click()
        cy.url().should('include', `/pages/grade-${i}-${course.toLocaleLowerCase()}`)
      })
    })
  }

})