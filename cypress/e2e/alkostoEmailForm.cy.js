describe('Login form validation', () => {
    it('Should validate email input', () => {
     
      cy.visit('https://www.alkosto.com/emailVerification');
  
      // Get the email input element
      cy.get('#js-login-email')
  
      // Verify that the input element exists
      .should('be.visible')
  
      // Type the email address
      .type('email@email.com')
  
      // Verify that the typed email is present in the input field
      .should('have.value', 'email@email.com');
  
      // Additional validations (Optional)
      // You can add further assertions based on your needs:
      // - Test invalid email format (e.g., typing an invalid email and checking for error messages)
      // - Test empty email input (checking for error messages)
       // Get the login button element
    cy.get('#js-login-continue');

   
    // Click the login button
    cy.get('#js-login-continue').click();

    cy.url().should('include', '/login/options');  
    })

    it('Should not validate email input', () => {
     
        cy.visit('https://www.alkosto.com/emailVerification');
    
        // Get the email input element
        cy.get('#js-login-email')
    
        // Verify that the input element exists
        .should('be.visible')
    
        // Type the email address
        .type('uniandes@uniandes.edu.co')
    
        // Verify that the typed email is present in the input field
        .should('have.value', 'uniandes@uniandes.edu.co');
    
        // Additional validations (Optional)
        // You can add further assertions based on your needs:
        // - Test invalid email format (e.g., typing an invalid email and checking for error messages)
        // - Test empty email input (checking for error messages)
         // Get the login button element
      cy.get('#js-login-continue');
  
     
      // Click the login button
      cy.get('#js-login-continue').click();
  
      cy.url().should('not.include', '/login/options');  
      })
  })