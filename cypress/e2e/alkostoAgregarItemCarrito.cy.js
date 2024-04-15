describe('Filtrar por nombre de marca', () => {
    it('Al buscar samsung el unico resultado debe ser samsung', () => {
        // Visit the website
        cy.visit('https://www.alkosto.com/iphone15-pro-128gb-5g-titanio-blanco/p/195949018602') // Replace with your actual website URL
    
        
    
    
        cy.get('#addToCartButton');
    
    
        // Click the login button
        cy.get('#addToCartButton').click();
    
    
        // Within the DIV, find the element with class "name-data" containing the text "samsung"
        cy.reload();
        cy.get('#js-mycart-header .counter')
    
        // Verify that the DIV exists
        .should('eq','1');
        
      })
})

