describe('Wizard Question', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  })
  it('should render properly', () => {
    cy.get('[data-testid="start-btn"]').click();
    cy.contains('Question 1:');
    cy.contains('Select a characters who appear in every Star Wars movie.');
    cy.get('.ant-select').click();
    cy.get('.ant-select-item-option-content').first().click();
    cy.get('[data-testid="submit-btn"]').click();
    cy.contains('Question 2:');
    cy.contains('Who played Princess Leia?');
    cy.get('[data-testid="form-textInput"]').type('carrie fisher');
    cy.get('[data-testid="submit-btn"]').click();
    cy.contains('Question 3:');
    cy.contains('In what year the original Star Wars film was first released?');
    cy.get('.ant-select').click();
    cy.get('.ant-select-item-option-content').first().click();
    cy.get('[data-testid="submit-btn"]').click();
    cy.contains('Question 4:');
    cy.contains('How old was Yoda when he died in episode VI?');
    cy.get('.ant-select').click();
    cy.get('.ant-select-item-option-content').first().click();
    cy.get('[data-testid="submit-btn"]').click();
    cy.contains('Question 5:');
    cy.contains('What does AT-AT stand for?');
    cy.get('[data-testid="form-textInput"]').type('All Terrain Armored Transport');
    cy.get('[data-testid="submit-btn"]').click();
    cy.contains('Score: 40.00');
    cy.get('[data-testid="answer-item"]').should('have.length', 5);
  })
})