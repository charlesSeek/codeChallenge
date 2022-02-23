describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('should render properly', () => {
    cy.get('[data-testid="home-title"]').should('have.text', 'Preezie Wizard Questions');
    cy.get('[data-testid="start-btn"]').should('have.text', 'Start');
  })
})