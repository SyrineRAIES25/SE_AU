describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Manage_Data_Source').then(function (EPIC_Manage_Data_Source) {
        this.EPIC_Manage_Data_Source = EPIC_Manage_Data_Source
      }) 
})
    it ('Archive Flow Update', function () {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
      cy.get('#logonuidfield').type(this.EPIC_Manage_Data_Source.login)
      cy.get('#logonpassfield').type(this.EPIC_Manage_Data_Source.password)
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
      cy.wait(2000)
      cy.get('#__button4-BDI-content').click()
      cy.wait(2000)
      cy.get('#__box0-arrow').click({force: true})
      cy.get('#__box0-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.Plant) {
           cy.wrap($e).click({force: true})}
           })   
      cy.get('#plantStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#data-source-type-arrow').click({force: true})
      cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.DataSourceType) {
           cy.wrap($e).click({force: true})}
           })   
      cy.wait(2000)
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__input0-inner').type(this.EPIC_Manage_Data_Source.DataSourceName , {force: true})
      cy.get('#__input1-inner').type(this.EPIC_Manage_Data_Source.DataSourceDescription , {force: true})
      cy.wait(2000)
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__box1-arrow').click({force: true})
      cy.get('#__box1-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.DataServer) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__box2-arrow').click({force: true}) 
      cy.get('#__box2-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.DataServerType) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#__box4-arrow').click({force: true})
      cy.get('#__box4-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.PCo_Cred) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#dataServerConfigStep-nextButton-BDI-content').click({force: true})
      cy.get('#__button8-BDI-content').click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.wait(2000)
      cy.get('#__button4-BDI-content').click()
      cy.wait(2000)
      cy.get('#__box5-arrow').click({force: true})
      cy.get('#__box5-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.Plant) {
           cy.wrap($e).click({force: true})}
           })   
      cy.get('#plantStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#data-source-type-arrow').click({force: true})
      cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.DataSourceType) {
           cy.wrap($e).click({force: true})}
           })   
      cy.wait(2000)
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__input5-inner').type(this.EPIC_Manage_Data_Source.DataSourceName , {force: true})
      cy.get('#__input6-inner').type(this.EPIC_Manage_Data_Source.DataSourceDescription , {force: true})
      cy.wait(2000)
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
      cy.wait(2000)
      cy.get('#__box6-arrow').click({force: true})
      cy.get('#__box6-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.DataServer) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__box7-arrow').click({force: true}) 
      cy.get('#__box7-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.DataServerType) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#__box9-arrow').click({force: true})
      cy.get('#__box9-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.PCo_Cred) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.wait(2000)
      cy.get('#dataServerConfigStep-nextButton-BDI-content').click({force: true})
      cy.get('#__button11-BDI-content').click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
      cy.wait(2000)
      // cy.get('#__button6').click()
      // cy.get('#__item178').click({force:true})
      // cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Manage_Data_Source.Message)
      // cy.wait(2000)
      // cy.get('#__button16').click({force: true})
      cy.get('#__xmlview3--combobox-plant-arrow').click()
      cy.wait(2000)
      cy.get('#__xmlview3--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.Plant) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__xmlview3--table-datasources-tblBody').find('tr').eq(1).click()
      cy.wait(2000)
      cy.get('#__xmlview4--input-data-source-name-inner').clear()
      cy.get('#__xmlview4--input-data-source-name-inner').type(this.EPIC_Manage_Data_Source.DataSourceName_Update)
      cy.get('#__xmlview4--combobox-dataserver-file-arrow').click()
      cy.get('#__xmlview4--combobox-dataserver-file-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.DataServer_Update) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__xmlview4--input-description-inner').clear()
      cy.get('#__xmlview4--input-description-inner').type(this.EPIC_Manage_Data_Source.DataSourceDescription_Update)
      cy.get('#__xmlview4--combobox-pco-credential-arrow').click()
      cy.get('#__xmlview4--combobox-pco-credential-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.PCo_Cred_Update) {
           cy.wrap($e).click({force: true})}
           }) 
      cy.get('#__button14-BDI-content').click()
      cy.get('#__button16-BDI-content').click({force: true})
      cy.get('#__input10-table-change-messages-0-inner').type(this.EPIC_Manage_Data_Source.UpdateDescription , {force: true})
      cy.get('#__input10-table-change-messages-1-inner').type(this.EPIC_Manage_Data_Source.UpdateDescription , {force: true})
      cy.get('#__input10-table-change-messages-2-inner').type(this.EPIC_Manage_Data_Source.UpdateDescription , {force: true})
      cy.get('#__input10-table-change-messages-3-inner').type(this.EPIC_Manage_Data_Source.UpdateDescription , {force: true})
      cy.get('#__button16-BDI-content').click({force: true})
      cy.wait(6000)
      // cy.get('#__button6').click()
      // cy.get('.sapMSLIDescriptionText').contains(this.EPIC_Manage_Data_Source.Message2)
      // cy.get('#__button15').click({force: true})
      cy.get('#__xmlview3--combobox-plant-arrow').click({force: true})
      
      cy.get('#__xmlview3--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Manage_Data_Source.Plant) {
           cy.wrap($e).click({force: true})}
           })
      cy.get('#__xmlview3--table-datasources-tblBody').find('tr').eq(1).click()
      cy.wait(2000)
      cy.get('#__xmlview4--button-delete-BDI-content').click()
      cy.get('#__button18-BDI-content').click({force: true})
      // cy.get('#__button17').click()
      // cy.get('#__item264-imgNav').click({force: true})
      // cy.get('#__popover1-messageViewMessageDescriptionText').contains(this.EPIC_Manage_Data_Source.Message3)
    })
})
