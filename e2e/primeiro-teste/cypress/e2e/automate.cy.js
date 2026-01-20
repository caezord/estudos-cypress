import { faker } from '@faker-js/faker'

describe('tela de produtos', () => {
    it('incluir produtos no carrinho', () =>{
        cy.fixture('usuario').then((usuario) => {
            cy.realizarlogin(usuario)
    
            // abrir a tela de produtos
            cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
            cy.get('.title').should('have.text', 'All Products')
            cy.scrollTo(0, 500)

            //selecionar um produto
            cy.get(':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a').click()
            cy.get('.product-information > h2').should('have.text', 'Men Tshirt')
            cy.get(':nth-child(5) > .btn').click()

            // validar inclusão do produto
            cy.get('.modal-body > :nth-child(1)').should('have.text', 'Your product has been added to cart.')
            cy.get('.modal-footer > .btn').click()
        })

    })
})