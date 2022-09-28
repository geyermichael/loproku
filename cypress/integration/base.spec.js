describe('Test visit homepage', () => {
  it('should visit the home page', () => {
    cy.visit(Cypress.config().baseUrl + '/');
  });
});

describe('Test valid zipcode input', () => {
  it('should enter a valid zip code', () => {
    cy.get('#zipcode').type('89584').get('#search-form').submit().get('#map')
  })
})
