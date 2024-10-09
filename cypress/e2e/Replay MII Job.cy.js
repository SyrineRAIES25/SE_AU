describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Replay_MII_Job').then(function (EPIC_Replay_MII_Job) {
        this.EPIC_Replay_MII_Job = EPIC_Replay_MII_Job
      }) 
})
it ('Replay MII Job', function () {
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
    cy.get('#logonuidfield').type(this.EPIC_Replay_MII_Job.login)
    cy.get('#logonpassfield').type(this.EPIC_Replay_MII_Job.password)
    cy.get('.urBtnStdNew').click()
    cy.wait(7000)
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
    cy.wait(7000)
    cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
    cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
    cy.wait(7000)
    cy.get('#__button0').click()
    cy.wait(7000)
    cy.get('#__tile3-title').click()
    cy.wait(7000)
    cy.get('#__button4-BDI-content').click()
    cy.wait(2000)
    cy.get('#__xmlview4--combobox-data-source-arrow').click()
    cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Replay_MII_Job.DataSource) {
           cy.wrap($e).click({force: true})}
           })   
    cy.get('#__xmlview4--input-data-flow-name-inner').type(this.EPIC_Replay_MII_Job.DataFlowName)
    cy.get('#__xmlview4--input-description-inner').type(this.EPIC_Replay_MII_Job.Description)
    cy.get('#__xmlview4--combobox-datadestination-arrow').click()
    cy.get('#__xmlview4--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Replay_MII_Job.DataDestination) {
           cy.wrap($e).click({force: true})}
           })   
    cy.get('#__xmlview4--switch-enabled-handle').click()
    cy.wait(2000)
    cy.get('#__button8-BDI-content').click()
    cy.wait(3000)
    // cy.get('#__button6').click({force: true})
    // cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Replay_MII_Job.Message)
    // cy.get('#__button13').click({force: true})
    cy.wait(2000)
    cy.get('#__button0').click()
    cy.wait(2000)
    cy.get('#__tile1-title').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.wait(7000)
    cy.get('#__button10-content').click()
    cy.wait(7000)
    cy.get('#__box7-arrow').click({force: true})
    cy.get('#__box7-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Replay_MII_Job.Plant) {
           cy.wrap($e).click({force: true})}
           })
    cy.get('#plantStep-nextButton-BDI-content').click({force: true})
    cy.wait(2000)
    cy.get('#data-source-type-arrow').click({force: true})
    cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Replay_MII_Job.DataSourceType) {
           cy.wrap($e).click({force: true})}
           })   
    cy.wait(2000)
    cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
    cy.wait(2000)
    cy.get('#__input0-inner').type(this.EPIC_Replay_MII_Job.DataSourceName , {force: true})
    cy.get('#__input1-inner').type(this.EPIC_Replay_MII_Job.DataSourceDescription , {force: true})
    cy.wait(2000)
    cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})   
    cy.wait(2000)
    cy.get('#__box6-arrow').click({force: true})
    cy.get('#__box6-popup-list-listUl>li').each(($e,index)=>{
    if ($e.text() === this.EPIC_Replay_MII_Job.DataServer) {
          cy.wrap($e).click({force: true})}
           }) 
    cy.get('#__box7-arrow').click({force: true}) 
    cy.get('#__box7-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Replay_MII_Job.DataServerType) {
            cy.wrap($e).click({force: true})}
           }) 
    cy.wait(2000)
    cy.get('#__box9-arrow').click({force: true})
    cy.get('#__box9-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Replay_MII_Job.PCo_Cred) {
           cy.wrap($e).click({force: true})}
           }) 
    cy.wait(2000)
    cy.get('#dataServerConfigStep-nextButton-BDI-content').click({force: true})
    cy.get('#__button14-BDI-content').click({force: true})
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false
      })
    cy.wait(7000)
    cy.get('#__button0').click()
    cy.wait(7000)
    cy.get('#__tile4-title').click()
    cy.wait(7000)
    cy.get('#__button16-BDI-content').click()
    cy.wait(7000)
    cy.get('#__xmlview7--combobox-data-source-arrow').click()
    cy.get('#__xmlview7--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
      if ($e.text() === this.EPIC_Replay_MII_Job.DataSource) {
         cy.wrap($e).click({force: true})}
         }) 
    cy.get('#__xmlview7--input-data-flow-name-inner').type(this.EPIC_Replay_MII_Job.DataFlowName2)
    cy.get('#__xmlview7--input-description-inner').type(this.EPIC_Replay_MII_Job.Description_Contextual)
    cy.get('#__xmlview7--combobox-datadestination-arrow').click()
    cy.get('#__xmlview7--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
      if ($e.text() === this.EPIC_Replay_MII_Job.DataDestination_Contextual) {
         cy.wrap($e).click({force: true})}
         })
    cy.get('#__xmlview7--switch-enabled-switch').click()
    cy.wait(2000)
    cy.get('#__button21-BDI-content').click()
    cy.wait(2000)
    // cy.get('#__button22').click({force: true})
    // cy.wait(1000)
    // cy.get('#__item201-info').click({force: true})
    // cy.get('#__popover1-messageViewMessageDescriptionText').contains(this.EPIC_Replay_MII_Job.Message2)
    // cy.get('#__button30').click({force: true})
    // cy.wait(2000)
    cy.get('#__button0').click()
    cy.wait(1000)
    cy.get('#__xmlview1--tile-jobs-title-inner').click()
    cy.wait(1000)
    cy.get('#__xmlview8--combobox-plant-arrow').click()
    cy.get('#__xmlview8--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
      if ($e.text() === this.EPIC_Replay_MII_Job.Plant) {
         cy.wrap($e).click({force: true})}
         }) 
    cy.wait(2000)
    cy.get('#__xmlview8--table-jobs-monitoring-tblBody').find('td').eq(1).click({force: true})
    cy.wait(1000)
    cy.get('#__xmlview8--button-update-end-date-BDI-content').click()
    cy.wait(1000)
    //cy.get('#date-time-inner').should('be.visible')
    cy.get('#date-time-inner').clear({force: true})
    cy.get('#date-time-inner').type(this.EPIC_Replay_MII_Job.DateEnd , {force: true})
    cy.wait(2000)
    cy.get('#ds-button-save-BDI-content').click({force: true})
    cy.get('#__button33-BDI-content').click({force: true})
    //cy.get('#__text123-__clone189').contains(this.EPIC_Replay_MII_Job.Catchup)
    







})
})