describe('template spec', () => {
    beforeEach (() => { 
        cy.fixture('EPIC_Delete_Tag_Config').then(function (EPIC_Delete_Tag_Config) {
            this.EPIC_Delete_Tag_Config = EPIC_Delete_Tag_Config ;
         });
    })
    it ('Delete Tag Config', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Delete_Tag_Config.login)
        cy.get('#logonpassfield').type(this.EPIC_Delete_Tag_Config.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(9000)
        cy.get('#__tile7-title').click()
        cy.wait(9000)
        cy.get('#__xmlview2--combobox-archive-arrow').click()
        cy.get('#__xmlview2--combobox-archive-popup-list-listUl>li').each(($e, index) => {
            if ($e.text() === this.EPIC_Delete_Tag_Config.Archive) {
               cy.wrap($e).click({ force: true });
            }
        })
        cy.wait(6000)
        cy.get('#__xmlview2--combobox-initial-load-arrow').click()
        cy.get('#__xmlview2--combobox-initial-load-popup-list-listUl>li').each(($e, index) => {
            if ($e.text() === this.EPIC_Delete_Tag_Config.Initial) {
               cy.wrap($e).click({ force: true });
            }
        })
        cy.wait(9000)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.get('#__xmlview2--table-tag-catalog-tblBody').find('td').eq(4).click({force: true})
        cy.wait(11000)
        cy.get('#__xmlview3--tagInfo-RestBtn-BDI-content').click()
        cy.wait(2000)
        cy.get('#__mbox-btn-0-BDI-content').click({force:true})
        cy.wait(2000)
        cy.get('#__input0-table-change-messages-0-inner').type(this.EPIC_Delete_Tag_Config.Update , {force: true})
        cy.get('#__input0-table-change-messages-1-inner').type(this.EPIC_Delete_Tag_Config.Update , {force: true})
        cy.get('#__input0-table-change-messages-2-inner').type(this.EPIC_Delete_Tag_Config.Update , {force: true})
        cy.get('#__input0-table-change-messages-3-inner').type(this.EPIC_Delete_Tag_Config.Update , {force: true})
        cy.get('#__input0-table-change-messages-4-inner').type(this.EPIC_Delete_Tag_Config.Update , {force: true})
        cy.get('#__button20-BDI-content').click({force: true})
        cy.wait(3000)
        cy.get('#__button8-inner').click()
        //cy.get('#__item50-imgNav').click({force: true})
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Delete_Tag_Config.Message)
        cy.get('#__button25-inner').click({force: true})
        cy.wait(2000)
        cy.get('#__button0-inner').click()
        cy.wait(3000)
        cy.get('#__tile11').click()
        
        



    })

    
})