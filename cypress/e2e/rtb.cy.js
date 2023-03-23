describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('dsdsd', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://manage.rsquare.co.kr');
    cy.get('.nav-link > img').click();
    cy.get('.nav-link > img').click();
    cy.get('.gnb-area-top-right > a').click();
    /* ==== End Cypress Studio ==== */
  });
})