describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Equipment_Catalog').then(function (EPIC_Equipment_Catalog) {
        this.EPIC_Equipment_Catalog = EPIC_Equipment_Catalog
      }) 
})
it ('Equipement Catalog', function () {
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
    cy.get('#logonuidfield').type(this.EPIC_Equipment_Catalog.login)
    cy.get('#logonpassfield').type(this.EPIC_Equipment_Catalog.password)
    cy.get('.urBtnStdNew').click()
    cy.wait(7000)
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
    cy.wait(8000)
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
    cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
    cy.wait(7000)
    cy.get('#__button0').click()
    cy.wait(7000)
    cy.get('#__tile5-title-inner').click()
    cy.wait(2000)
    cy.get('#__button4-BDI-content').click({force: true})
    cy.wait(2000)
    cy.get('#__xmlview4--combobox-data-source-arrow').click()
    cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Equipment_Catalog.DataSource) {
           cy.wrap($e).click({force: true})}
           })  
    cy.get('#__xmlview4--input-data-flow-name-inner').type(this.EPIC_Equipment_Catalog.DataFlowName) 
    cy.get('#__xmlview4--input-description-inner').type(this.EPIC_Equipment_Catalog.Description)
    cy.get('#__xmlview4--input-pco-destination-id-inner').type(this.EPIC_Equipment_Catalog.PcoDestination)
    cy.get('#__xmlview4--combobox-datadestination-arrow').click()
    cy.get('#__xmlview4--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Equipment_Catalog.DataDestination) {
           cy.wrap($e).click({force: true})}
           })  
    cy.get('#__xmlview4--combobox-synch-type-arrow').click() 
    cy.get('#__xmlview4--combobox-synch-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Equipment_Catalog.Sychro) {
           cy.wrap($e).click({force: true})}
           })  
    cy.get('#__button9-BDI-content').click()
    // cy.get('#__button6').click()
    // cy.wait(2000)
    // cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Equipment_Catalog.Message)
    // cy.wait(1000)
    // cy.get('#__button14').click({force: true})
    cy.wait(5000)
    cy.get('#__button0').click()
    cy.wait(5000)
    cy.get('#__tile1-title').click()
    cy.wait(5000)
    cy.get('#__button11-BDI-content').click()
    cy.get('#__box8-arrow').click({force: true})
    cy.get('#__box8-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Equipment_Catalog.Plant) {
           cy.wrap($e).click({force: true})}
           })
    cy.get('#plantStep-nextButton-BDI-content').click({force: true})
    cy.wait(2000)
    cy.get('#data-source-type-arrow').click({force: true})
    cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Equipment_Catalog.DataSourceType) {
           cy.wrap($e).click({force: true})}
           }) 
    cy.wait(2000)
    cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
    cy.wait(2000)
    cy.get('#__input0-inner').type(this.EPIC_Equipment_Catalog.DataSourceName , {force: true})
    cy.get('#__input1-inner').type(this.EPIC_Equipment_Catalog.DataSourceDescription , {force: true})
    cy.wait(2000)
    cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
    cy.wait(2000)
    cy.get('#__box9-arrow').click({force: true})
    cy.get('#__box9-popup-list-listUl>li').each(($e,index)=>{
    if ($e.text() === this.EPIC_Equipment_Catalog.DataServer) {
          cy.wrap($e).click({force: true})}
           }) 
    cy.get('#__box10-arrow').click({force: true}) 
    cy.get('#__box10-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Equipment_Catalog.DataServerType) {
            cy.wrap($e).click({force: true})}
           }) 
    cy.wait(2000)
    cy.get('#__box12-arrow').click({force: true})
    cy.get('#__box12-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Equipment_Catalog.PCo_Cred) {
           cy.wrap($e).click({force: true})}
           }) 
    cy.wait(2000)
    cy.get('#dataServerConfigStep-nextButton-BDI-content').click({force: true})
    cy.get('#__button15-BDI-content').click({force: true})
    Cypress.on('uncaught:exception', (err, runnable) => {
       return false
    })
    cy.get('#__button0').click()
    cy.wait(5000)
    cy.get('#__tile9').click()
    cy.wait(3000)
    cy.get('#__button19').click()
    // cy.get('#__item188-selectSingle').click({force: true})
    // cy.get('#__dialog1-acceptbutton-BDI-content').click({force: true})
    // cy.get('#__item173-__clone175_cell2').click()
    // cy.wait(5000)
    // cy.get('#__xmlview7--batch-combo-hierarchy-2-arrow').click()
    // cy.get('#__item200-content').click({force: true})
    // cy.get('#__xmlview7--batch-combo-hierarchy-3-arrow').click()
    // cy.get('#__item226-content').click({force: true})
    
    // cy.get('#__xmlview7--batch-combo-hierarchy-4-arrow').click()
    // cy.get('#__item231-content').click({force: true})
    
    // cy.get('#__xmlview7--batch-combo-hierarchy-5-arrow').click()  
    // cy.get('#__item232-content').click({force: true})
    // cy.get('#__button26-BDI-content').click()
    // cy.get('#__button34-BDI-content').click({force: true})
    // cy.get('#__input5-table-change-messages-0-inner').type(this.EPIC_Equipment_Catalog.Update , {force: true})
    // cy.get('#__button34-BDI-content').click({force: true})
    // cy.wait(2000)
    // cy.get('#__button29-content').click()
    // cy.wait(1000)
    // cy.get('#__item241-imgNav').click({force: true})
    // cy.get('#__popover2-messageViewMessageDescriptionText').contains(this.EPIC_Equipment_Catalog.Message1)
    // cy.wait(2000)
    // cy.get('#__button39').click({force: true})
    // cy.wait(2000)
    // cy.get('#__button1').click()
    // cy.wait(2000)
    // cy.get('#__button23').click()
    // cy.get('#__item257-selectSingle').click({force: true})
    // cy.get('#__dialog2-acceptbutton-BDI-content').click({force: true})
    // cy.get('#__item173-__clone252_cell2').click()
    // cy.wait(2000)
    // cy.get('#__xmlview7--batch-combo-hierarchy-2-arrow').click()
    // cy.get('#__item200-content').click({force: true})
    // cy.get('#__xmlview7--batch-combo-hierarchy-3-arrow').click()
    // cy.get('#__item261-content').click({force: true})
    // cy.get('#__xmlview7--batch-combo-hierarchy-4-arrow').click()
    // cy.get('#__item266-content').click({force: true})
    // cy.get('#__xmlview7--batch-combo-hierarchy-5-arrow').click()
    // cy.get('#__item267-content').click({force: true})
    // cy.get('#__button26-BDI-content').click()
    // cy.get('#__button41-BDI-content').click({force: true})
    // cy.get('#__input6-table-change-messages-0-inner').type(this.EPIC_Equipment_Catalog.Update , {force: true})
    // cy.get('#__button41-BDI-content').click({force: true})
    // cy.wait(2000)
    // cy.get('#__button29').click()
    // cy.get('#__item279-imgNav').click({force: true})
    // cy.get('#__popover2-messageViewMessageDescriptionText').contains(this.EPIC_Equipment_Catalog.Message1)
    // cy.wait(2000)
    // cy.get('#__button39').click({force: true})
    // cy.get('#__button27-content').click()
    // cy.get('#__button43-content').click({force: true})
    // cy.get('#__input7-table-change-messages-0-inner').type(this.EPIC_Equipment_Catalog.Update , {force: true})
    // cy.get('#__button43-content').click({force: true})
    // cy.wait(2000)
    // cy.get('#__button29').click()
    // cy.get('#__item296-imgNav').click({force: true})
    // cy.get('#__popover2-messageViewMessageDescriptionText').contains(this.EPIC_Equipment_Catalog.Message1)
    // cy.get('#__button38').click({force: true})
})
})