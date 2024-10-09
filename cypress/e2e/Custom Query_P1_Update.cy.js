describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Custom_Query_P1_Update').then(function (EPIC_Custom_Query_P1_Update) {
        this.EPIC_Custom_Query_P1_Update = EPIC_Custom_Query_P1_Update
      }) 
})
    it ('Archive Flow Update', function () {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
      cy.get('#logonuidfield').type(this.EPIC_Custom_Query_P1_Update.login)
      cy.get('#logonpassfield').type(this.EPIC_Custom_Query_P1_Update.password)
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
      cy.wait(5000)
      cy.get('#__button4-BDI-content').click()
      cy.get('#__box0-arrow').click({force: true})
      cy.get('#__box0-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Custom_Query_P1_Update.Plant) {
           cy.wrap($e).click({force: true})}
           })   
      cy.get('#plantStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#data-source-type-arrow').click({force: true})
      cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Custom_Query_P1_Update.DataSourceType) {
           cy.wrap($e).click({force: true})}
           })   
      cy.wait(2000)
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__input0-inner').type(this.EPIC_Custom_Query_P1_Update.DataSourceName , {force: true})
      cy.get('#__input1-inner').type(this.EPIC_Custom_Query_P1_Update.DataSourceDescription , {force: true})
      cy.wait(2000)
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__box1-arrow').click({force: true})
      cy.get('#__box1-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Custom_Query_P1_Update.DataServer) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__box2-arrow').click({force: true}) 
      cy.get('#__box2-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Custom_Query_P1_Update.DataServerType) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#__box4-arrow').click({force: true})
      cy.get('#__box4-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Custom_Query_P1_Update.PCo_Cred) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#dataServerConfigStep-nextButton-BDI-content').click({force: true})
      cy.get('#__button8-BDI-content').click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.get('#__button0').click()
      cy.wait(2000)
      cy.get('#__tile4-title').click()
      cy.get('#__xmlview4--combobox-plant-arrow').click()
      
      cy.get('#__xmlview4--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Custom_Query_P1_Update.Plant2) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__xmlview4--table-contextual-flows-tblBody').find('tr').eq(17).click()
      cy.wait(2000)
      cy.get('#__xmlview5--input-text-area-sql-query-inner').type(this.EPIC_Custom_Query_P1_Update.SqlQuery)
      cy.get('#__button13-BDI-content').click()
    })
})