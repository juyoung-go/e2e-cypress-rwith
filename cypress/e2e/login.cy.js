describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('로그인점검', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://with.rsquareon.com');
    cy.get('[href="/login"] > .MuiBox-root').should('have.text', '로그인');
    cy.get('[href="/login"] > .MuiBox-root').click();
    cy.get('.design-cache-prefix-18cpxku').should('have.text', '로그인');
    cy.get('.design-cache-prefix-8lk51g > .design-cache-prefix-ll4oth').should('have.text', '아직 회원이 아니신가요?');
    cy.get('.design-cache-prefix-11enphv').click();
    cy.get('.design-cache-prefix-1rlhhu7').clear();
    cy.get('.design-cache-prefix-1rlhhu7').type('tester@test.com');
    cy.get('.design-cache-prefix-18nh1jx').click();
    cy.get('.design-cache-prefix-dz5ysa').clear();
    cy.get('.design-cache-prefix-dz5ysa').type('asdf1234');
    cy.get('.design-cache-prefix-18cpxku').click();
    cy.get('.design-cache-prefix-16wapu5').should('have.text', '로그인이메일비밀번호이메일 저장로그인아직 회원이 아니신가요?회원가입');
    /* ==== End Cypress Studio ==== */
  });
})