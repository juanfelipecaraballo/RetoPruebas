describe('Verify "En abril ofertas Mil" text on Alkosto homepage', () => {
    it('Texto correcto en el banner de Abril', () => {
      // Visit the Alkosto homepage
      cy.visit('https://www.alkosto.com/')
  
      // Verify the element with the specified class and text exists
      cy.get('.txt-desktop').contains('En Abril Ofertas Mil').should('be.visible')
    })

    it('Texto incorrecto en el banner de Abril', () => {
      // Visit the Alkosto homepage
      cy.visit('https://www.alkosto.com/')
  
      // Verify the INCORRECT title using negative assertion (should.not.eq)
      cy.get('.txt-desktop').contains('Agosto Alkosto').should('not.exist')
    })
  })