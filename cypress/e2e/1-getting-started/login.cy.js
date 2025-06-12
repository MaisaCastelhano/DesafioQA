/// <reference types="cypress" />

describe('Validaçao de Campos de Login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.viewport(1920, 1080)
    })

    it('Criar novo usuário', () => {
       cy.get(':nth-child(2) > a') .click()
       cy.get('#nome') .type('Maisa Teste')
       cy.get('#email') .type('xowojik499@gotemv.com')
       cy.get('#senha') .type('Teste@teste')
       cy.get('.btn') .click()
       cy.wait(1000)
       cy.get('.alert') .contains('Usuário cadastrado com sucesso')
    });
    
    it('Login - Usuário já cadastrado ', () => {
       cy.get(':nth-child(2) > a') .click()
       cy.get('#nome') .type('Maisa Teste')
       cy.get('#email') .type('xowojik499@gotemv.com')
       cy.get('#senha') .type('Teste@teste')
       cy.get('.btn') .click()
       cy.wait(1000)
       cy.get('.alert') .contains('Endereço de email já utilizado')
    });

    it('Login com sucesso', () => {
        cy.get('#email') .type('xowojik499@gotemv.com')
        cy.get('#senha') .type('Teste@teste')
        cy.get('.btn') .click()
    });                
})
