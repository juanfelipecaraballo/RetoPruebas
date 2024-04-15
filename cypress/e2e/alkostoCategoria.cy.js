

describe('Verificar que al dar click en el boton de ofertas me lleva a la pagina de ofertas', () => {
    it('Deberia navegar a la pagina de ofertas', () => {
      // Visit the website
      cy.visit('https://www.alkosto.com/') 
      
      cy.wait(3000);
      cy.get('.mobile-header__fixed.js-mainHeaderFixed a.top-banner').click()
      // Verify the expected URL after clicking the link
      cy.url().should('include', '/ofertas')

    })

    it('No deberia navegar a la pagina de ofertas', () => {
        // Visit the website (replace with URL that shouldn't lead to offers)
        cy.visit('https://www.alkosto.com/emailVerification') 
          
        // Verify the URL DOES NOT contain "/ofertas"
        cy.url().should('not.include', '/ofertas')
    })
  })