describe('template spec', () => {
    beforeEach (() => { 
        cy.fixture('EPIC_Remove_Data_Source').then(function (EPIC_Remove_Data_Source) {
            this.EPIC_Remove_Data_Source = EPIC_Remove_Data_Source ;
         });
    })

    it ('Remove Data Source', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Remove_Data_Source.login)
        cy.get('#logonpassfield').type(this.EPIC_Remove_Data_Source.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(9000)
        // cy.get('#__tile5-title').click()
        // cy.wait(7000)
        // cy.get('#__xmlview2--table-File-flows-tblBody').find('td').eq(150).click({force: true})
        // cy.get('#__xmlview3--button-delete-BDI-content').click()
        // cy.get('#__button9-BDI-content').click({force: true})
        cy.get('#__tile1').click()
        cy.wait(5000)
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.get('#__xmlview2--combobox-plant-popup-list-listUl>li').each(($e, index) => {
            if ($e.text() === this.EPIC_Remove_Data_Source.Plant) {
               cy.wrap($e).click({ force: true });
            }
        })
        cy.get('#__xmlview2--filterbar-data-sources-btnGo-BDI-content').click()
        cy.wait(9000)
        cy.get('#__xmlview2--table-datasources-tblBody').find('td').eq(130).click({force: true})
        cy.wait(7000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.get('#__xmlview3--button-delete-BDI-content').click()
        cy.get("#__button8-BDI-content").click({force: true})
        cy.wait(5000)
        cy.get('#__button4-inner').click()
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Remove_Data_Source.Message)
        cy.wait(5000)
        cy.get('#__button0-inner').click()
        cy.wait(5000)
        cy.get('#__tile11').click()



        


    })



})