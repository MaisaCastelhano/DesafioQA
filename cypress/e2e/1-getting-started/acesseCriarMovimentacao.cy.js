/// <reference types="cypress" />

describe('Validaçao de Campos de Login', () => {
    beforeEach(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.viewport(1920, 1080)
        cy.get('#email').type('xowojik499@gotemv.com')
        cy.get('#senha').type('Teste@teste')
        cy.get('.btn').click()
    });
    it('Criar no mínimo 2 movimentações (Receita/ Meses/ Situação);', () => {
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('REC')
        cy.get('#data_transacao').type('11/06/2025')
        cy.get('#data_pagamento').type('11/06/2025')
        cy.get('#descricao').type('Receita teste 01')
        cy.get('#interessado').type('Seu barriga')
        cy.get('#valor').type('100')
        cy.get('.btn') //.click()

        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('REC')
        cy.get('#data_transacao').type('01/01/2025')
        cy.get('#data_pagamento').type('01/01/2025') // Outro Mes
        cy.get('#descricao').type('Receita teste 02')
        cy.get('#interessado').type('Seu barriga')
        cy.get('#valor').type('100')
        cy.get('#status_pago').click() // Outra Situação
        cy.get('.btn') //.click()
    });

    it('Criar no mínimo 2 movimentações (Despesa);', () => {
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('DESP')
        cy.get('#data_transacao').type('11/06/2025')
        cy.get('#data_pagamento').type('11/06/2025')
        cy.get('#descricao').type('Despesa teste 01')
        cy.get('#interessado').type('Seu barriga')
        cy.get('#valor').type('100')
        cy.get('.btn').click()

        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('DESP')
        cy.get('#data_transacao').type('01/01/2025')
        cy.get('#data_pagamento').type('01/01/2025')// Outro Mes
        cy.get('#descricao').type('Despesa teste 02')
        cy.get('#interessado').type('Seu barriga')
        cy.get('#valor').type('100')
        cy.get('#status_pago').click() // Outra Situação
        cy.get('.btn').click()
    });

    it('Criar um fluxo alternativo para validar os campos de DATA e VALOR', () => {
        cy.get(':nth-child(3) > a').click()
        cy.get('#tipo').select('REC')
        cy.get('#data_transacao').type('TESTE')
        cy.get('#data_pagamento').type('TESTE')
        cy.get('#descricao').type('Receita teste 02')
        cy.get('#interessado').type('Seu barriga')
        cy.get('#valor').type('TESTE')
        cy.get('.btn').click()
        cy.get('.alert').contains('Data da Movimentação inválida (DD/MM/YYYY)')
        cy.get('.alert').contains('Valor deve ser um número')
    });
})