describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_SDO_Role').then(function (EPIC_SDO_Role) {
        this.EPIC_SDO_Role = EPIC_SDO_Role
      }) 
    })
    it ('Test SDO Role', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_SDO_Role.login)
        cy.get('#logonpassfield').type(this.EPIC_SDO_Role.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(5000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
        cy.wait(5000)
        cy.get('#__button0').click({force: true})
        cy.wait(5000)
        cy.get('#__tile3-title-inner').click()
        cy.wait(7000)
        cy.get('#__button4-BDI-content').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.wait(5000)
        cy.get('#__xmlview4--combobox-data-source-arrow').click()
        cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_SDO_Role.DataSource) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview4--input-data-flow-name-inner').type(this.EPIC_SDO_Role.DataFlowName)
        cy.wait(2000)
        cy.get('#__xmlview4--input-description-inner').type(this.EPIC_SDO_Role.Description)
        cy.get('#__xmlview4--combobox-datadestination-arrow').click()
        cy.get('#__xmlview4--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_SDO_Role.DataDestination) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview4--switch-enabled-textoff').click({force: true})
        cy.wait(2000)
        cy.get('#__button8-BDI-content').click()
        cy.wait(5000)
        cy.get('#__button6-inner').click()
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_SDO_Role.Message)
        cy.get('#__button13-inner').click({force: true})
        cy.wait(3000)
        cy.get('#__button0-inner').click()
        cy.wait(4000)
        cy.get('#__xmlview1--tile-pco-monitor-title-inner').click()
        cy.wait(30000)
        cy.get('#__xmlview5--table-pco-monitoring-tblBody').find('tr').eq(5).click()
        cy.wait(2000)
        cy.get('#__xmlview5--button-restart-agent-BDI-content').click()
        cy.wait(2000)
        cy.get('#__button15-BDI-content').click({force: true})







    })


})