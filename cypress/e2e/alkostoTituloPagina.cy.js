describe('Verificar la página de inicio de Alkosto', () => {
    it('Debería cargarse correctamente', () => {
      // Visitar la página de inicio de Alkosto
      cy.visit('https://www.alkosto.com/')
  
      // Verificar el título de la página
      cy.title().should('eq', 'Alkosto Hiperahorro | Orgullosamente Colombiano')
  
      // Verificar que se muestren los elementos principales
      
    })


    it('Título incorrecto de la página de inicio', () => {
        // Visit the Alkosto homepage
        cy.visit('https://www.alkosto.com/')
    
        // Verify the INCORRECT title using negative assertion (should.not.eq)
        cy.title().should('not.eq', 'Bienvenido a Alkosto') // Replace with an invalid title
      })


  })