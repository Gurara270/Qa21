describe("testing login functionality",()=>{ 
    it("testing login with valid user name and password",()=>{ 
        cy.visit("https://end-to-end-v1.onrender.com/")
        cy.get('#username').type("Byes")
        cy.get('#password').type("trrrr")
        cy.get('button').click()
        //cy.url().should('eq','https://end-to-end-v1.onrender.com/')
        cy.url().should('include','end-to-end-v1.onrender')
        .and('contain','onrender.com')
        cy.get('ul > :nth-child(1) > a')
        .should("exist")
        .and("be.visible")
        cy.get('.link-deco')
        .should ("exist")
        .and("be.visible")
    })

     it("login with invalid user name and valid password",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/")
        cy.get('#username').type("Bye")
        cy.get('#password').type("trrrr")
        cy.get('button').click()
        //cy.url().should(eq,'https://end-to-end-v1.onrender.com/')
        cy.get('h2')
        .should ("exist")
        .and("be.visible")
        cy.url().should  ('include','onrender.com')

        })

        it("login with valid user name and invalid password",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/")
            cy.get('#username').type("Byes")
            cy.get('#password').type("trrr")
            cy.get('button').click()
            cy.get('.error')
            .should("exist")
            .and("be.visible")
        })

        it("login with invalid user name and invalid password",()=>{
            cy.visit("https://end-to-end-v1.onrender.com/")
            cy.get('#username').type("bye")
            cy.get('#password').type(" trr")
            cy.get('button').click()
            cy.get('.error')
            .should("exist")
            .and("be.visible")
            //.and("contain",'Invalid credentials' )

 })
// describe("verfy registration functionality",()=>{
  it.only("validtion with first name correclty",()=>{
    cy.visit("/registration/")
    cy.get('#first_name'). type ('1234')
    cy.get('#last_name').type ("bitew")
    cy.get('#username').type("Byes")
    cy.get('#email').type("yesbit@gmail.com")
    cy.get('#phone').type (+7038109262)
    cy.get('#date_of_birth').type('1990-01-01')
    cy.get('#address').type("USA")
    cy.get('#password1').type("trrrr")
    cy.get('#confirm-password').type("trrrr")
    cy.get('#role').select("User")
    cy.get(':nth-child(12) > input').click()
    cy.get('ul.my-list > .my-list')
    .should("be.visible")
    






  })




})
    
 






 
       
       
       
       
    


        


        



        
        



        


        
       
       
       
       
       
        

    
    
