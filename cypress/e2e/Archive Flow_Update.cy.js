describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Archive_flow_update').then(function (EPIC_Archive_flow_update) {
        this.EPIC_Archive_flow_update = EPIC_Archive_flow_update
      }) 
})
    it ('Archive Flow Update', function () {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
      cy.get('#logonuidfield').type(this.EPIC_Archive_flow_update.login)
      cy.get('#logonpassfield').type(this.EPIC_Archive_flow_update.password)
      cy.get('.urBtnStdNew').click()
      cy.wait(5000)
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
      cy.wait(5000)
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
      cy.wait(5000)
      cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
      cy.wait(5000)
      cy.get('#__button0').click()
      cy.wait(7000)
      cy.get('#__tile1-title').click({force: true})
      cy.wait(5000)
      cy.get('#__button4-BDI-content').click()
      cy.get('#__box0-arrow').click({force: true})
      cy.get('#__box0-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.Plant) {
           cy.wrap($e).click({force: true})}
           })   
      cy.get('#plantStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#data-source-type-arrow').click({force: true})
      cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.DataSourceType) {
           cy.wrap($e).click({force: true})}
           })   
      cy.wait(2000)
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__input0-inner').type(this.EPIC_Archive_flow_update.DataSourceName , {force: true})
      cy.get('#__input1-inner').type(this.EPIC_Archive_flow_update.DataSourceDescription , {force: true})
      cy.wait(2000)
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__box1-arrow').click({force: true})
      cy.get('#__box1-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.DataServer) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__box2-arrow').click({force: true}) 
      cy.get('#__box2-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.DataServerType) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#__box4-arrow').click({force: true})
      cy.get('#__box4-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.PCo_Cred) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#dataServerConfigStep-nextButton-BDI-content').click({force: true})
      cy.get('#__button8-BDI-content').click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.wait(2000)
      cy.get('#__button0-inner').click()
      cy.wait(2000)
      cy.get('#__tile3').click()
      cy.get('#__xmlview4--combobox-data-source-arrow').click()      
      cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.DataSourceFiltre) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#__xmlview4--table-archive-flows-tblBody').find('div').eq(1).click()
      cy.get('#__xmlview4--button-run-flow-manually-BDI-content').click()
      cy.get('#__xmlview4--messagestrip-run-flow-manually').contains(this.EPIC_Archive_flow_update.Message1)
      cy.wait(2000)
      cy.get('#__button10-BDI-content').click()
      cy.get('#__xmlview5--combobox-data-source-arrow').click()  
      cy.get('#__xmlview5--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.DataSourceName) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__xmlview5--input-data-flow-name-content').type(this.EPIC_Archive_flow_update.DataFlowName)
      cy.get('#__xmlview5--switch-compressed-handle').click()
      cy.get('#__xmlview5--switch-enabled-handle').click()
      cy.get('#__button14-content').click()
      cy.get('#__xmlview5--input-description-inner').type(this.EPIC_Archive_flow_update.Description)
      cy.get('#__xmlview5--combobox-datadestination-arrow').click()
      cy.get('#__xmlview5--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Archive_flow_update.DataDestination) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#__button14-BDI-content').click()
      cy.get('#__button12-content').click()
      cy.get('.sapMSLIDescriptionText').contains(this.EPIC_Archive_flow_update.Message)
      cy.get('#__button18-img').click({force: true})
      cy.get('#__xmlview4--table-archive-flows-tblBody').find('tr').eq(6).click()
      cy.wait(2000)
      cy.get('#__xmlview5--input-description-inner').clear()
      cy.get('#__xmlview5--input-description-inner').type(this.EPIC_Archive_flow_update.Description2)
      cy.get('#__button14-BDI-content').click()
      cy.get('#__button20-content').click({force: true})
      cy.get('#__input5-table-change-messages-0-inner').type(this.EPIC_Archive_flow_update.UpdateDescription , {force: true})
      cy.get('#__button20-content').click({force: true})
      // cy.get('#__button12-img').click()
      // cy.get('.sapMSLIDescriptionText').contains(this.EPIC_Archive_flow_update.Message2)
      // cy.get('#__button18-img').click({force: true})
      cy.get('#__xmlview4--table-archive-flows-tblBody').find('tr').eq(6).click()
      cy.get('#__xmlview5--button-delete-BDI-content').click()
      cy.get('#__button22-BDI-content').click({force: true})
      cy.get('#__button0-inner').click()
      cy.get('#__xmlview1--panel-sap-mii-CollapsedImg').click()
      cy.get('#__tile14').click()
      
  })
})