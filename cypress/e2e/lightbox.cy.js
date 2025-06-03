/// <reference types="cypress" />

describe('lightbox', () => {
    beforeEach(() => {
        cy.visit('../../pages/lightbox.html')
    })

    it('opens ligthbox on click on the overlay ', () => {
        cy.dataCy('lightbox-overlay').click();
        cy.dataCy('lightbox').should('not.be.visible');
    })

    it('close windows outdoor the cross', () => {
        cy.dataCy('windows').click();
    })

    it('can like the pic', () => {
        cy.dataCy('like').click();
    })
})