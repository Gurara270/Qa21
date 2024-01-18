//describe('template spec', () => {
//  it('passes', () => {
  //  cy.visit('https://example.cypress.io')
    describe('Check the Login Functionality for Gmail', ()=>{
      
      it.skip('Check system behavior when valid email id and password is entered.',()=>{
          //Test steps 
             // visity gmail website
             // enter email   
             // enter password
             // click login button
         })
      it('Check system behavior when invalid email and valid password is entered.',()=>{
         //Test steps
             // visity gmail website
             // enter email   
             // enter password
             // click login button
         })
      it('Check system behavior when valid email and invalid password is entered.',()=>{
         //Test steps
              // visity gmail website
             // enter email   
             // enter password
             // click login button
        })
     it('Check system behavior when invalid email id and invalid password is entered.',()=>{
         //Test steps
              // visity gmail website
             // enter email   
             // enter password
             // click login button
         })
        
         describe('Check the Login Functionality for Gmail', ()=>{
               
               it('Check system behavior when valid email id and password is entered.',()=>{
                   //Test steps 
                      // visity gmail website
                      // enter email   
                      // enter password
                      // click login button
                  })
               it('Check system behavior when invalid email and valid password is entered.',()=>{
                  //Test steps
                      // visity gmail website
                      // enter email   
                      // enter password
                      // click login button
                  })
               it('Check system behavior when valid email and invalid password is entered.',()=>{
                  //Test steps
                       // visity gmail website
                      // enter email   
                      // enter password
                      // click login button
                 })
              it('Check system behavior when invalid email id and invalid password is entered.',()=>{
                  //Test steps
                       // visity gmail website
                      // enter email   
                      // enter password
                      // click login button
                  })
           })
         
           
           describe('Check the Login Functionality for Gmail', ()=>{
                 
                 it('Check system behavior when valid email id and password is entered.',()=>{
                     //Test steps 
                        // visity gmail website
                        // enter email   
                        // enter password
                        // click login button
                    })
                 it('Check system behavior when invalid email and valid password is entered.',()=>{
                    //Test steps
                        // visity gmail website
                        // enter email   
                        // enter password
                        // click login button
                    })
                 it('Check system behavior when valid email and invalid password is entered.',()=>{
                    //Test steps
                         // visity gmail website
                        // enter email   
                        // enter password
                        // click login button
                   })
                it('Check system behavior when invalid email id and invalid password is entered.',()=>{
                    //Test steps
                         // visity gmail website
                        // enter email   
                        // enter password
                        // click login button
                    })
             })
           
            
describe('Check the Login Functionality for Gmail', ()=>{
      
      it('Check system behavior when valid email id and password is entered.',()=>{
          //Test steps 
             // visity gmail website
             // enter email   
             // enter password
             // click login button
         })
      it('Check system behavior when invalid email and valid password is entered.',()=>{
         //Test steps
             // visity gmail website
             // enter email   
             // enter password
             // click login button
         })
      it('Check system behavior when valid email and invalid password is entered.',()=>{
         //Test steps
              // visity gmail website
             // enter email   
             // enter password
             // click login button
        })
     it('Check system behavior when invalid email id and invalid password is entered.',()=>{
         //Test steps
              // visity gmail website
             // enter email   
             // enter password
             // click login button
         })
  })
                    
    it("using xpath",()=>{

        cy.visit("https://www.google>com")
cy.xpath("//textarea[@id='APjFqb']").type("cypress tutorial")
cy.xpath("//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']").click()
//cy.xpath("//div[@class='FPdoLc lJ9FBc']//div[3]")
//cy.xpath("//div[@aria-label='Search by image']")
    })
        



})


//describe.only("xpath",()=>{
    it("xpath example",()=>{
    cy.visit("https://www.google.com")
    cy.xpath("//textarea[@id='APjFqb']").type("cypress tutorial")
    cy.xpath("//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']").click()
//cy.xpath("//div[@class='FPdoLc lJ9FBc']//div[3]")
//cy.xpath("//div[@aria-label='Search by image']")
    })
   
   it("usingtestrunner",()=>{
   cy.visit("https://www.google.com/")
   cy.get('#APjFqb').type("cypress tutorial")
   cy.get('.FPdoLc > center > .gNO89b').click({force:true})
   })
   describe("Testing regstration_page",()=>{



   
   
   it("verifying regstration page functionality",()=>{
   cy.visit("https://end-to-end.onrender.com/registration/")
    //cy.xpath("//h2[normalize-space()='Registration Form']")
    //cy.xpath("//label[@for='first_name']")
   cy.xpath("//input[@id='first_name']").type("Aklilu")
    //cy.xpath("//label[@for='last_name']")
   cy.xpath("//input[@id='last_name']").type("Bitew")
    //cy.xpath("//label[@for='username']")
   cy.xpath("//input[@id='username']").type("Byes")
    //cy.xpath("//label[@for='email']")
   cy.xpath("//input[@id='email']").type("Yesbit@gmail.com")
    //cy.xpath("//label[@for='phone']")
   cy.xpath("//input[@id='phone']").type('70366')
    //cy.xpath("//label[@for='date_of_birth']")
   cy.xpath("//input[@id='date_of_birth']").type('1990-01-01')
    //cy.xpath("//label[@for='address']")
   cy.xpath("//textarea[@id='address']"). type(" USA")
    //cy.xpath("//label[@for='password1']")
   cy.xpath("//input[@id='password1']").type("trrrr")
    //cy.xpath("//label[@for='confirm-password']")
   cy.xpath("//input[@id='confirm-password']").type("trrrr")
    //cy.xpath("//label[@for='role']")
   cy.xpath("//select[@id='role']").select("User")
   cy.xpath("//input[@value='Register']").click()
    //cy.xpath("//a[@class='account']")
    //cy.xpath("//h2[normalize-space()='Login']") ({force:true})
    //cy.xpath("//label[@for='username']")
    //cy.xpath("//input[@id='username']").type("Sasee")
    //cy.xpath("//label[@for='password']")
    //cy.xpath("//input[@id='password']").type("free")
    //cy.xpath("//button[@type='submit']").click()
    //cy.xpath("//p[1]")

})
  it("verifying login page functionality with wrong user name",()=>{
  cy.visit("https://end-to-end.onrender.com/")
    //cy.xpath("//h2[normalize-space()='Login']")
    //cy.xpath("//label[@for='username']")
  cy.xpath("//input[@id='username']").type("Bye") 
    //cy.xpath("label[for='password']")
  cy.xpath("//input[@id='password']").type("trrr")
  cy.xpath("//button[@type='submit']").click()
    //cy.xpath("//div[@class='container']"
    })
   it("veriying login page functionality with wrong password",()=>{
   cy.visit("https://end-to-end.onrender.com/")
    //cy.xpath("//h2[normalize-space()='Login']")
    //cy.xpath("//label[@for='username']")
   cy.xpath("//input[@id='username']").type("Byes")
    
    //cy.xpath("label[for='password']")
   cy.xpath("//input[@id='password']").type("trrr")
   cy.xpath("//button[@type='submit']").click()
    //cy.xpath("//div[@class='container']")
        })
   it ("verifing functionality with wrong password and wrong user name",()=>{
   cy.visit("https://end-to-end.onrender.com/")
    //cy.xpath("//h2[normalize-space()='Login']")
    //cy.xpath("//label[@for='username']")
   cy.xpath("//input[@id='username']").type("Byes")
    //cy.xpath("label[for='password']")
   cy.xpath("//input[@id='password']").type("trrr")
   cy.xpath("//button[@type='submit']").click()
            })
    //cy.xpath("//div[@class='container']")
   it("verifying functionality with correct user name and correct password",()=>{
   cy.visit("https://end-to-end.onrender.com/")
    //cy.xpath("//h2[normalize-space()='Login']")
    //cy.xpath("//label[@for='username']")
   cy.xpath("//input[@id='username']").type("Byes") 
    //cy.xpath("label[for='password']")
   cy.xpath("//input[@id='password']").type("trrrr")
   cy.xpath("//button[@type='submit']").click()


   cy.url().should ("eq","https://end-to-end.onrender.com/home/");
                })



            })

     describe("Registered Users",()=>{  
       
        it.only("verfiy implicit assertion",()=>{ 
        cy.visit("https://end-to-end-v1.onrender.com/")
        cy.url().should('eq','https://end-to-end-v1.onrender.com/')
        cy.url().should('include','end-to-end-v1.onrender')
        .should('include','end-to-end-v1.onrender')
        .and('contain','.onrender.com')
        .should('not.eq','https://end-to-end-v1.onrender.com/home')
        cy.get('body')
        .should("exist")
        .and("be.visible")
        cy.get('h2').should("exist")
        .and("be.visible")
        //cy.get('.link-deco').should("be.visible")
        //.and ("exist")
        
    
        cy.get('#username').type("Byes")
        cy.get('#password').type("trrrr")
        cy.get('button').click()
})

    it("verfy explicit assertions ",()=>{
       cy.visit("https://end-to-end-v1.onrender.com/")
       cy.xpath("//input[@id='username']").type("Byes")
       cy.xpath("//input[@id='password']").type("trrrr")
       cy.xpath("//button[@type='submit']").click()

       //let expName="username"
       //cy.get('[for="username"]').then((x)=>{

       //let actName=x.text()
       //expect(actName).to.not.equal(expName)

      let expName="create account"
      cy.get('.account').then((x) =>{ 
      let actual=x.text()
      expect(actName).to.equal(expName)
      //assert.equal(actName,expName)
      //assert.notEqual(actName,expName)
    




      })


       })
       
        
       }) 

    
    