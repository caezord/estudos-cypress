import { faker } from "@faker-js/faker"

describe('tela de produtos', () => {
    beforeEach(() => {
        cy.fixture('usuario').then((usuario) => {
            cy.realizarlogin(usuario)
        })
    })

    it('incluir produtos no carrinho', () =>{
    
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

    it('remover itens do carrinho', () => {
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        cy.get('.active').should('have.text', 'Shopping Cart')
        cy.get('h4 > a').should('have.text', 'Men Tshirt')

        cy.get('.cart_quantity_delete').click()

        cy.get('.text-center > b').should('have.text', 'Cart is empty!')
    })

    it('trocar de categoria e selecionar produtos', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.scrollTo(0, 500)

        //selecionar categoria
        cy.get('.brands-name > .nav > :nth-child(1) > a').click()
        cy.scrollTo(0, 500)

        cy.get(':nth-child(6) > .product-image-wrapper > .choose > .nav > li > a').click()


    })
    
})