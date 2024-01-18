
describe("verfy registration functionality",()=>{
    it("validtion first name with chracter than letter",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/registration/")
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
        cy.url().should('include',"end-to-end-v1.onrender.com")
        .and('contain', 'end-to-end-v1.onrender.com')
    })
    it(" validation last name with charcter than letter",()=>{
    cy.visit("https://end-to-end-v1.onrender.com/registration/")
    cy.get('#first_name').type ('aklilu')
    cy.get('#last_name').type ("1234")
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
    cy.url().should('contain','end-to-end-v1.onrender.com')
    


    })

    
    it(" validation username with others charcter than letter",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/registration/")
        cy.get('#first_name').type ('aklilu')
        cy.get('#last_name').type ("Bitew")
        cy.get('#username').type("76$#")
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
        cy.get(':nth-child(11) > label')
        .should("exist")
        .and("be.visible")


    })


    

    it(" validation phone numberusing other than +1234567890 ",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/registration/")
        cy.get('#first_name').type ('Aklilu')
        cy.get('#last_name').type ("Bitew")
        cy.get('#username').type("Byes")
        cy.get('#email').type("yesbit@gmail.com")
        cy.get('#phone').type (7038109262)
        cy.get('#date_of_birth').type('1990-01-01')
        cy.get('#address').type("USA")
        cy.get('#password1').type("trrrr")
        cy.get('#confirm-password').type("trrrr")
        cy.get('#role').select("User")
        cy.get(':nth-child(12) > input').click()
        cy.get('ul.my-list > .my-list')
        .should("be.visible")
        .and("exist")
    })

    
    it("Trying to register by using user name and email address  that alredy registred ",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/registration/")
        cy.get('#first_name').type ('Akli')
        cy.get('#last_name').type ("Bite")
        cy.get('#username').type("Byes")
        cy.get('#email').type("yesbit@gmail.com")
        cy.get('#phone').type (+7038109262)
        cy.get('#date_of_birth').type('1990-01-01')
        cy.get('#address').type("US")
        cy.get('#password1').type("trrr")
        cy.get('#confirm-password').type("trrrB")
        cy.get('#role').select("User")
        cy.get(':nth-child(12) > input').click()
        cy.get('ul.my-list > .my-list')
        .should("be.visible")
        .and("exist")
    })


    
    it("Trying to registe by inserting the diffrenet value for password1 and pasword2 ",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/registration/")
        cy.get('#first_name').type ('Akli')
        cy.get('#last_name').type ("Bite")
        cy.get('#username').type("Byes")
        cy.get('#email').type("yesbit@gmail.com")
        cy.get('#phone').type (+7038109262)
        cy.get('#date_of_birth').type('1990-01-01')
        cy.get('#address').type("US")
        cy.get('#password1').type("trrr")
        cy.get('#confirm-password').type("trrrB")
        cy.get('#role').select("User")
        cy.get(':nth-child(12) > input').click()
        cy.get('ul.my-list > .my-list')
        .should("be.visible")
        .and("exist")
    })

    it("Trying to register by inserting valid and unique input for all fild ",()=>{
        cy.visit("https://end-to-end-v1.onrender.com/registration/")
        cy.get('#first_name').type ('Akliu$$$')
        cy.get('#last_name').type ("Bitew$%$%")
        cy.get('#username').type("Byes@#&")
        cy.get('#email').type("yesbit@gmail.com%$")
        cy.get('#phone').type (+7038109262)
        cy.get('#date_of_birth').type('1990-01-01')
        cy.get('#address').type("US$#")
        cy.get('#password1').type("trrr%#")
        cy.get('#confirm-password').type("trrrB@@")
        cy.get('#role').select("User")
        cy.get(':nth-child(12) > input').click()
        cy.get(':nth-child(12) > input')
        .should("be.visible")
        .and("exist")
    })

    it("verify successfully logout",()=>{ 
        cy.visit("https://end-to-end-v1.onrender.com/")
        cy.get('#username').type("Byes")
        cy.get('#password').type("trrrr")
        cy.get('button').click()
        cy.get('.login-btn > a').click()
        cy.get('p')
        .should("be.visible")
        .and("exist")
})
    
    
})
    
    




















    

  

    
    
    
    