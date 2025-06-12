/// <reference types="cypress" />

describe('Validaçao de Campos de Login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.viewport(1920, 1080)
        cy.get('#email').type('xowojik499@gotemv.com')
        cy.get('#senha').type('Teste@teste')
        cy.get('.btn').click()
    });
    it('Utilize os filtros para exibir as movimentações criadas', () => {
        cy.get(':nth-child(4) > a').click()
        cy.get('#ano').select('2010')
        cy.get('#ano').contains('2010')
        cy.get('#mes').select('01')
        cy.get('#mes').contains('Janeiro')
    });

    it('Exclua uma movimentação', () => {
        cy.get(':nth-child(4) > a').click()
        cy.get(':nth-child(1) > :nth-child(6) > a > .glyphicon') .click()
        cy.get('.alert').contains('Movimentação removida com sucesso!')       
    });
})