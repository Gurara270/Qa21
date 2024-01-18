
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

it("verify the home page display a list of regisstered users with crrect coulmus",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get('h2')
    //cy.url().should('contain','end-to-end-v1.onrender.com')
    .should("be.visible")
    .and('exist')
    
})

it("click on the view for specific user",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(4) > .btn-view').click()
    cy.get('h2')
    .should("be.visible")
    .and("exist")
    
        
})
it("click on  the update for specific user",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(5) > .btn-update').click()
    cy.get('h2')
    .should("be.visible")
    .and("exist")
    
})

it("click on delete for specific user",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get(':nth-child(1) > :nth-child(6) > .btn-delete').click()
    
})


it("click on the Qa test tool",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get('ul > :nth-child(1) > a').click()
    .should("be.visible")
    .and ('exist')
    cy.url().should('include',"onrender.com/")

})

it("click on the logout",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get('.login-btn > a').click()
    cy.get('p')
    .should("be.visible")
    .and("exist")
    
})

it("click on the craft Knowiedge",()=>{ 
    cy.visit("https://end-to-end-v1.onrender.com/")
    cy.get('#username').type("Byes")
    cy.get('#password').type("trrrr")
    cy.get('button').click()
    cy.get('.link-deco').click()
})
    


    








