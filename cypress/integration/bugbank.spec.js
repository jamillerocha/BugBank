///<reference types="cypress" />

beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
  })

//realizar um novo registro
describe ('Bug Bank', () => {
    it('Deve realizar cadastro de um usuario valido',() => {

        

        cy.get('.ihdmxA').click({force: true})
        cy.get(':nth-child(2) > .input__default').type('jamille.oliveira.r@gmail.com' ,{force: true})
        cy.get(':nth-child(3) > .input__default').type('teste', {force: true})
        cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456',{force: true} )
        cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456',{force: true})
        cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force: true})
        cy.get('#btnCloseModal').click()

        cy.request({
            method: 'GET',
            url:'bugbank.netlify.app'
          }).then((response) => {
            expect(response.status).to.equal(200);

        cy.wait(2000)
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('jamille.oliveira.r@gmail.com')
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456')
        

    
        
        
        cy.get('.otUnI').click()

        

});
});
})
