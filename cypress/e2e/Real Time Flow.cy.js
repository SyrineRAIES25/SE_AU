describe('template spec', () => {
    beforeEach (() => { 
        cy.fixture('EPIC_Real_Time_Flow').then(function (EPIC_Real_Time_Flow) {
            this.EPIC_Real_Time_Flow = EPIC_Real_Time_Flow ;
         });
    })
    it ('Real Time Flow', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Real_Time_Flow.login)
        cy.get('#logonpassfield').type(this.EPIC_Real_Time_Flow.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(9000)  
        cy.get('#__tile1-title').click()
        //cy.get('#__item3-__clone4-selectSingle').click()  
        cy.wait(5000)
        cy.get('#__xmlview2--table-datasources-tblBody').find('div').eq(9).click({force: true})
        cy.get('#__xmlview2--button-synchronize-pco-agent-BDI-content').click()
        cy.wait(6000)
        cy.get('#__button4-img').click()
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Real_Time_Flow.Message)
        cy.get('#__button8-inner').click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.wait(5000)
        cy.get('#__xmlview2--table-datasources-tblBody').find('td').eq(80).click({force: true})
        cy.wait(3000)
        cy.get('#__button1-inner').click()
        cy.wait(2000)
        cy.get('#__toolbar0-overflowButton-inner').click()
        cy.get('#__xmlview2--button-synchronize-pco-destination-BDI-content').click({force: true})
        cy.wait(3000)
        cy.get('#__button4-inner').click()
        cy.get('#__item21-imgNav').click({force: true})
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Real_Time_Flow.Message)
        cy.get('#__button8-inner').click({force: true})
        cy.wait(2000)
        cy.get('#__button0-inner').click()
        cy.get('#__tile2').click()
        cy.wait(2000)
        cy.get('#__xmlview4--combobox-data-dest-type-arrow').click()
        cy.get('#__xmlview4--combobox-data-dest-type-popup-list-listUl>li').each(($e, index) => {
            if ($e.text() === this.EPIC_Real_Time_Flow.DestinationType) {
               cy.wrap($e).click({ force: true });
            }
         });




        



    })

})