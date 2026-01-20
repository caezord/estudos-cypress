describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // colocar itens no carrinho

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    // preencher dados de entrega

    cy.get('[data-test="firstName"]').type('Nome')
    cy.get('[data-test="lastName"]').type('Teste')
    cy.get('[data-test="postalCode"]').type('1234678')
    cy.get('[data-test="continue"]').click()

    // finalizar
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="back-to-products"]').click()
    
  })
})