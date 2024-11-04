import { jumpToIds } from "../support/Constant"

describe('TVO sample ', () => {

  beforeEach(() => {
    // assue desktop size solution for example
    cy.viewport(1024, 768)
    cy.visit('https://tvolearn.com/pages/grade-8-mathematics')
  })

  jumpToIds.forEach((id) => {
    it(`check jump to ${id}`, () => {
      cy.get(`[href="${id}"]`).click()
      cy.get(`div:has(> ${id})`).isWithinViewport() // I add new method in commands.js to check this in viewport
    })
  })

})