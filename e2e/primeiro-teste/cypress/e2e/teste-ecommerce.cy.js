import { faker } from '@faker-js/faker'


describe('tela de login', () => {                                 // decribe -> "tela sendo testada"

    it('criar conta com email já cadastrado', () => {            // it -> caso de teste
        cy.fixture('example').then((example) => {
            cy.visit('https://www.automationexercise.com/login')
            cy.get('[data-qa="signup-name"]').type(example.name)
            cy.get('[data-qa="signup-email"]').type(example.email)
            cy.get('[data-qa="signup-button"]').click()
            cy.get('.signup-form > form > p').should('have.text', 'Email Address already exist!')

        })

    })
 
    it('criar conta com novo email', () => {
        const user_testing = {
            nome: faker.person.fullName(),
          }
        cy.fixture('usuario').then((usuario) => {
            cy.visit('https://www.automationexercise.com/login')
            cy.get('[data-qa="signup-name"]').type(usuario.name)
            cy.get('[data-qa="signup-email"]').type(usuario.email)
            cy.get('[data-qa="signup-button"]').click()

            // verificar se está na página correta
            cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information')
            
            cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').check()
            cy.get('[data-qa="first_name"]').type(user_testing.nome)
        })
    })
})

