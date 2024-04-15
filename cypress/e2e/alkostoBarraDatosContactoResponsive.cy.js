describe('Verify main navigation hides on mobile viewport', () => {
    it('Should be present with display flex on desktop version', () => {
      // Visit the website
      cy.visit('https://www.alkosto.com/') // Replace with your actual website URL
  
      cy.viewport('macbook-16')  
      cy.get('.header-primary__support').should('have.css', 'display', 'flex')
      // Set the viewport to a mobile size
      
    })

    it('Should no be present on mobile version', () => {
        // Visit the website
        cy.visit('https://www.alkosto.com/') // Replace with your actual website URL
    
        
        cy.viewport('iphone-xr') // Adjust the viewport size if needed
    
        // Verify the navigation is hidden after viewport change
        cy.get('.header-primary__support').should('not.be.visible')
      })


  })