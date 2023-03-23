describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('가입', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://with.rsquareon.com');
    cy.get('.design-cache-prefix-1134wt9 > :nth-child(1) > .MuiBox-root').should('have.text', '서비스 소개');
    cy.get('.design-cache-prefix-1134wt9 > :nth-child(2) > .MuiBox-root').click();
    cy.get('.design-cache-prefix-16pyde7 > .design-cache-prefix-gui0xa').click();
    cy.get('.design-cache-prefix-d4m1ws > .design-cache-prefix-1xhj18k > .MuiBox-root > .design-cache-prefix-1wxsqf5').check();
    cy.get('.design-cache-prefix-18cpxku').should('have.text', '동의하고 가입하기');
    /* ==== End Cypress Studio ==== */
  });
})