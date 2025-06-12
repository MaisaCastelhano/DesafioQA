/// <reference types="cypress" />


describe('Validaçao de Campos de Login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.viewport(1920, 1080)
        cy.get('#email').type('xowojik499@gotemv.com')
        cy.get('#senha').type('Teste@teste')
        cy.get('.btn').click()
    });

    it('Adicionar no mínimo 2 contas', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('Conta 01')
        cy.get('.btn').click()

        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('Conta 02')
        cy.get('.btn').click()
    });

    it('Listar todas as contas', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
    });

    it('Alterar Nome das contas', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href="/editarConta?id=2488795"] > .glyphicon').click()
        cy.get('#nome').clear().type('Conta 01 - Alteração')
        cy.get('.btn').click()

        cy.get('[href="/editarConta?id=2488796"] > .glyphicon').click()
        cy.get('#nome').clear().type('Conta 02 - Alteração')
        cy.get('.btn').click()
    });

    it('Criar um fluxo alternativo para tentar excluir uma conta que esteja vinculada a uma movimentação', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(2) > a').click()
        cy.get('[href="/removerConta?id=2488779"] > .glyphicon').click()
        cy.get('.alert').contains('Conta em uso na movimentações')
    });
    it('Criar um fluxo alternativo para tentar adicionar uma conta com o nome já existente', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
        cy.get('#nome').type('Conta 01 - Alteração')
        cy.get('.btn').click()
        cy.get('.alert').contains('Já existe uma conta com esse nome!')
    });
})