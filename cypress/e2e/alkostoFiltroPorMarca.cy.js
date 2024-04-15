describe('Filtrar por nombre de marca', () => {
    it('Al buscar samsung el unico resultado debe ser samsung', () => {
        // Visit the website
        cy.visit('https://www.alkosto.com/marcas/c/marcas') // Replace with your actual website URL
    
        cy.get('#buscador')

            // Verify that the input element exists
        .should('be.visible')
    
        // Type the email address
        .type('samsung')

        // Verify that the typed email is present in the input field
        .should('have.value', 'samsung');


        cy.get('#btn-search');

   
        // Click the login button
        cy.get('#btn-search').click();

        cy.get('#resultadosDiv')

        // Verify that the DIV exists
        .should('be.visible');

        // Within the DIV, find the element with class "name-data" containing the text "samsung"
        cy.get('#resultadosDiv .name-data')
        .should('contain', 'samsung');
        
      })
    
      it('Al buscar apple no debe aparecer samsung', () => {
        // Visit the website
        cy.visit('https://www.alkosto.com/marcas/c/marcas') // Replace with your actual website URL
    
        cy.get('#buscador')

            // Verify that the input element exists
        .should('be.visible')
    
        // Type the email address
        .type('apple')

        // Verify that the typed email is present in the input field
        .should('have.value', 'apple');


        cy.get('#btn-search');

   
        // Click the login button
        cy.get('#btn-search').click();

        cy.get('#resultadosDiv')

        // Verify that the DIV exists
        .should('be.visible');

        // Within the DIV, find the element with class "name-data" containing the text "samsung"
        cy.get('#resultadosDiv .name-data')
        .should('not.contain', 'samsung');
        
      })
})