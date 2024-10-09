describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('testfile').then(function (testfile) {
        this.testfile = testfile
      })
      
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
    it ('Test File CSV', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.testfile.login)
        cy.get('#logonpassfield').type(this.testfile.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(2000)
    })

})