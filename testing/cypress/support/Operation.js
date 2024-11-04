class Operation {
    // fill feed back by some default value
    fillFeedBack(){
        cy.get('#radioitem-label-feedback_type-1').click();
        cy.get('#feedback_message').click().type('abc');
        cy.get('#radioitem-label-user_type-1').click();
    }
}
export default Operation;