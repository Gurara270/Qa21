

it("click on update and submit the update with empty fields ",()=>{
cy.visit("https://end-to-end-v1.onrender.com/")
cy.get('#username').type("Byes")
cy.get('#password').type("trrrr")
cy.get('button').click()
cy.get('ul > :nth-child(1) > a').click()

})

it("click on the view",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(4) > .btn-view').click()
    //cy.url().should('include',"end-to-end-v1.onrender.com/")
    .should("be.visible" )
    .and("exist")

})

it("click on the view",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(4) > .btn-view').click()
    cy.get('ul > :nth-child(1) > a').click()
    //cy.url().should('include',"end-to-end-v1.onrender.com/")
    cy.get('ul > :nth-child(1) > a')
    .should("be.visible" )
    .and("exist")

})
it("click on the view then click on log out",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(4) > .btn-view').click()
    cy.get('.login-btn > a').click()
    cy.get('.account')
    .should("be.visible")
    .and("exist")
    
    

})

it("click on the view then click on Craft Knowledge link in the footer",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(4) > .btn-view').click()
    cy.get('.link-deco').click()



})

it("click on the update and sumit the update with empty fields",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get(':nth-child(9) > input').click()
})
it("click on the update and inter invalid first name that contain non letter character",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click() 
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get(':nth-child(2) > #username').clear()
    cy.get(':nth-child(2) > #username').type("4567&%")
    cy.get('#date_of_birth').type("1990-01-01")
    cy.get('#address').type("USA")
    cy.get('#role').select("User")
    cy.get(':nth-child(9) > input').click()
    cy.get('p')
    .should("be.visible")
    .and("exist")


})
it("click on the update and inter invalid last name that contain non letter character",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click() 
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get(':nth-child(3) > #username').clear()
    cy.get(':nth-child(3) > #username').type("%")
    cy.get('#date_of_birth').type("1990-01-01")
    cy.get('#address').type("USA")
    cy.get('#role').select("User")
    cy.get(':nth-child(9) > input').click()
    //cy.get(':nth-child(8) > label')
    //.should("be.visible")
    //.and("exist")

})

it("click on the update and inter invaid email address that does not follow the correct email format ",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click() 
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get('#email').clear()
    cy.get('#email').type("34556%jjj")
    cy.get('#date_of_birth').type('1990-01-01')
    cy.get('#address').type('USA')
    cy.get(':nth-child(9) > input').click()
    .should("be.visible")
    .and("exist")


})
it("click on the update and insert phone number that does not follow  corredct format",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get('#phone').clear()
    cy.get('#phone').type("12-345-6789&")
    cy.get('#date_of_birth').type("1990-01-01")
    cy.get('#address').type("USA")
    cy.get('#role').select("User")
    cy.get(':nth-child(9) > input').click()
    
    })
    
it("click on the update and insert a date of birth indicates  an age below 20",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get('#date_of_birth').type("2017-09-05")
    cy.get('#address').type("USA")
    cy.get('#role').select("User")
    cy.get(':nth-child(9) > input').click()


})

it("submit the update form with valid and complete data",()=>{
    cy.visit("https://end-to-end-v1.onrender.com/registration/")
    cy.get('#first_name'). type ('Aklilu')
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
it("click on the Qa test tool",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get('ul > :nth-child(1) > a').click()

})
it("click on the update and then click logout from update page ",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get('.login-btn > a').click()


})

it("click on the update and then click Craft Knowledge from update page ",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get('.link-deco').click()

})

it("click on the delete to delete selected user ",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(6) > .btn-delete').click()
})
    













    





