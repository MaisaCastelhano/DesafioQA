/// <reference types="cypress" />

describe('Validaçao de Campos de Login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.viewport(1920, 1080)
        cy.get('#email').type('xowojik499@gotemv.com')
        cy.get('#senha').type('Teste@teste')
        cy.get('.btn').click()
    });

it('Deslogue do sistema', () => {
    cy.get(':nth-child(5) > a') .click()
    cy.url().should('eq', 'https://seubarriga.wcaquino.me/logout')
    });
})