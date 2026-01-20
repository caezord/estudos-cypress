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

        const user_testing = {              // criação de dados de usuário utilizando o faker
            user: faker.internet.username(),
            name: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            password: "123456",
            streetname: faker.location.street(),
            state: faker.location.state(),
            city: faker.location.city(),
            zip: faker.location.zipCode(),
            num: faker.phone.number()

          }

        
        cy.visit('https://www.automationexercise.com/login')
        cy.get('[data-qa="signup-name"]').type(user_testing.user)
        cy.get('[data-qa="signup-email"]').type(user_testing.email)
        cy.get('[data-qa="signup-button"]').click()

        // verificar se está na página correta
        cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information')

        // preencher forms
        cy.get(':nth-child(3) > .top > [data-qa="title"] > span > [name="title"]').check()
        cy.get('[data-qa="password"]').type(user_testing.password)

        // selecionar data de nascimento
        cy.get('[data-qa="days"]').select('10')
        cy.get('[data-qa="months"]').select('June')
        cy.get('[data-qa="years"]').select('2003')

        // nome
        cy.get('[data-qa="first_name"]').type(user_testing.name)
        cy.get('[data-qa="last_name"]').type(user_testing.lastName)

        // endereço
        cy.get('[data-qa="address"]').type(user_testing.streetname)
        cy.get('[data-qa="country"]').select('Canada')
        cy.get('[data-qa="state"]').type(user_testing.state)
        cy.get('[data-qa="city"]').type(user_testing.city)
        cy.get('[data-qa="zipcode"]').type(user_testing.zip)
        cy.get('[data-qa="mobile_number"]').type(user_testing.num)

        cy.get('[data-qa="create-account"]').click()

        // verificar se foi criado corretamente
        cy.get('[data-qa="create-account"]').should('have.text', 'Account Created!')
        cy.get('[data-qa="continue-button"]').click()
        
    })
})

