describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC7_DATA').then(function (EPIC7_DATA) {
        this.EPIC7_DATA = EPIC7_DATA
      }) 
    })
    it ('Test Data Source', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC7_DATA.login)
        cy.get('#logonpassfield').type(this.EPIC7_DATA.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(5000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
        cy.wait(5000)
        cy.get('#__button0').click({force: true})
        cy.wait(5000)
        cy.get('#__tile1').click()
        cy.wait(5000)
        cy.get('#__xmlview3--table-datasources-listUl').contains(this.EPIC7_DATA.Kepware).click({force: true})
        cy.wait(5000)
        cy.screenshot()
        cy.get('#__button1').click()
        cy.get('#__xmlview3--table-datasources-listUl').contains(this.EPIC7_DATA.Archive).click({force: true})
        cy.wait(5000)
        cy.screenshot()
        cy.get('#__button1').click()
        cy.wait(5000)
        cy.get('#__xmlview3--page-data-sources-cont').scrollTo(0, 3000)
        cy.get('#__xmlview3--table-datasources-listUl').contains(this.EPIC7_DATA.FlatFile).click({force: true})
        cy.wait(5000)
        cy.screenshot()
        cy.get('#__button1').click()
        cy.wait(5000)
        cy.get('#__xmlview3--page-data-sources-cont').scrollTo(0, 5000)
        cy.get('#__xmlview3--table-datasources-listUl').contains(this.EPIC7_DATA.Contextual).click({force: true})
        cy.wait(5000)
        cy.screenshot()

       
      })
        
  })
        