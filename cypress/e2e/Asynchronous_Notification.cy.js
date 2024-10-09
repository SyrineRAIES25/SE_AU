describe('template spec', () => {
    beforeEach (() => { 
        cy.fixture('EPIC_Asynchronous_Notification').then(function (EPIC_Asynchronous_Notification) {
            this.EPIC_Asynchronous_Notification = EPIC_Asynchronous_Notification ;
         });
    })
    it ('Asynchronous Notification', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Asynchronous_Notification.login)
        cy.get('#logonpassfield').type(this.EPIC_Asynchronous_Notification.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(9000)
        cy.get('#__tile7').click()
        cy.wait(9000)
        cy.get('#__xmlview2--table-tag-catalog-sa-CbBg').click()
        cy.wait(2000)
        cy.get('#__toolbar0-overflowButton-img').click()
        cy.wait(2000)
        cy.get('#__xmlview2--button-disable-data-load-content').click({force: true})
        cy.wait(2000)
        cy.get('#__button9-BDI-content').click({force: true})
        cy.get('#__mbox-btn-0-BDI-content').click({force: true})

    })

})
