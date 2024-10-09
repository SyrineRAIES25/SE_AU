describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Kepware_Channel').then(function (EPIC_Kepware_Channel) {
        this.EPIC_Kepware_Channel = EPIC_Kepware_Channel
      }) 
})
    it ('Archive Flow Update', function () {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
      cy.get('#logonuidfield').type(this.EPIC_Kepware_Channel.login)
      cy.get('#logonpassfield').type(this.EPIC_Kepware_Channel.password)
      cy.get('.urBtnStdNew').click()
      cy.wait(2000)
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
      cy.wait(7000)
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
      cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
      cy.wait(5000)
      cy.get('#__button0').click()
      cy.wait(5000)
      cy.get('#__tile1-title').click()
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.wait(2000)
      cy.get('#__button4-BDI-content').click()
      cy.wait(2000)
      cy.get('#__box0-arrow').click({force: true})
      cy.get('#__box0-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Kepware_Channel.Plant) {
           cy.wrap($e).click({force: true})}
           })  
      cy.get('#plantStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#data-source-type-arrow').click({force: true})
      cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Kepware_Channel.DataSourceType) {
           cy.wrap($e).click({force: true})}
           })   
      cy.wait(2000)
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__input0-inner').type(this.EPIC_Kepware_Channel.DataSourceName , {force: true})
      cy.get('#__input1-inner').type(this.EPIC_Kepware_Channel.DataSourceDescription , {force: true})
      cy.wait(2000)
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__box1-arrow').click({force: true})
      cy.get('#__box1-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Kepware_Channel.DataServer) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__box2-arrow').click({force: true}) 
      cy.get('#__box2-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Kepware_Channel.DataServerType) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#multicombobox-kepware-channels-arrow').click({force: true})
      //cy.get('#__label12-bdi').should('be.visible')

    })
})