describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Enable_Historical_Upload').then(function (EPIC_Enable_Historical_Upload) {
        this.EPIC_Enable_Historical_Upload = EPIC_Enable_Historical_Upload
      }) 
    })
    it ('Historical Upload', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Enable_Historical_Upload.login)
        cy.get('#logonpassfield').type(this.EPIC_Enable_Historical_Upload.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(5000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
        cy.get('#__button0').click({force: true} , {timeout: 3000})
        cy.get('#__tile3').click({timeout: 3000})
        cy.get('#__button4-BDI-content').click({timeout: 5000})
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.get('#__xmlview4--combobox-data-source-arrow').click()
        cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Enable_Historical_Upload.DataSource) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview4--input-data-flow-name-inner').type(this.EPIC_Enable_Historical_Upload.DataFlowName)
        cy.wait(2000)
        cy.get('#__xmlview4--input-description-inner').type(this.EPIC_Enable_Historical_Upload.Description)
        cy.get('#__xmlview4--combobox-datadestination-arrow').click()
        cy.get('#__xmlview4--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Enable_Historical_Upload.DataDestination) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview4--switch-enabled-textoff').click({force: true})
        cy.get('#__button8-BDI-content').click()
        cy.get('#__button0-inner').click()
        cy.get('#__tile8-title').click({timeout: 3000})
        cy.get('#__xmlview5--combobox-data-source-arrow').click()
        cy.get('#__xmlview5--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Enable_Historical_Upload.DataSource2) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview5--table-tag-catalog-tblBody').find('tr').eq(1).click({timeout: 3000})
        cy.wait(9000)
        cy.get('#__xmlview6--combobox-uom-arrow').click()
        cy.get('#__xmlview6--combobox-uom-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Enable_Historical_Upload.Unit) {
               cy.wrap($e).click({force: true})}
               })  
       cy.get('#__xmlview6--combo-hierarchy-2-inner').type(this.EPIC_Enable_Historical_Upload.Location1)
       cy.get('#__xmlview6--combo-hierarchy-3-inner').type(this.EPIC_Enable_Historical_Upload.Location2)
       cy.get('#__xmlview6--combo-hierarchy-4-inner').type(this.EPIC_Enable_Historical_Upload.Location3)
       cy.get('#__xmlview6--combo-hierarchy-5-inner').type(this.EPIC_Enable_Historical_Upload.Location4)
       cy.wait(2000)
       cy.get('#__xmlview6--input-renamed-tag-1-vhi').click()
       cy.get('#__xmlview6--combobox-domain-arrow').click({force: true})
       cy.get('#__item241').click({force: true})
       cy.get('#__box12-arrow').click({force: true})
       cy.wait(1000)
       cy.get('#__item242').click({force: true})
       cy.get('#__item240-__xmlview6--RenamedTagTable-0_cell1').click({force: true})
       cy.wait(2000)
       cy.get('#__button28-BDI-content').click({force: true})
       cy.wait(3000)
       cy.get('#__button26-BDI-content').click()
      //  cy.get('#__button30-BDI-content').click({force: true})
      //  cy.get('#__input0-table-change-messages-0-inner').type(this.EPIC_Enable_Historical_Upload.Update , {force: true})
      //  cy.get('#__input0-table-change-messages-1-inner').type(this.EPIC_Enable_Historical_Upload.Update , {force: true})
      //  cy.get('#__input0-table-change-messages-2-inner').type(this.EPIC_Enable_Historical_Upload.Update , {force: true})
      //  cy.wait(2000)
      //  cy.get('#__button30-BDI-content').click({force: true})
      cy.get('#__item92-__clone372-selectMulti-CbBg').click({timeout: 3000})
      cy.get('#__xmlview5--button-enable-data-load-content').click()

       
        // cy.get('#__tile1').click()
        // cy.wait(3000)
        // cy.get('#__button10-BDI-content').click()
        // cy.wait(2000)
        // cy.get('#__box5-arrow').click({force: true})       
        // cy.get('#__box5-popup-list-listUl>li').each(($e,index)=>{
        //   if ($e.text() === this.EPIC_Enable_Historical_Upload.Plant) {
        //      cy.wrap($e).click({force: true})}
        //      })  
        // cy.get('#plantStep-nextButton-content').click({force: true})
        // cy.get('#data-source-type-arrow').click({force: true})       
        // cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
        //   if ($e.text() === this.EPIC_Enable_Historical_Upload.DataSourceType) {
        //      cy.wrap($e).click({force: true})}
        //      })  
        // cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
        // cy.get('#__input2-inner').type(this.EPIC_Enable_Historical_Upload.DataSourceName , {force: true})
        // cy.get('#__input3-inner').type(this.EPIC_Enable_Historical_Upload.DS_Description , {force: true}) 
        // cy.wait(2000)
        // cy.get('#__input3-inner').clear({force: true})
        // cy.get('#__input3-inner').type(this.EPIC_Enable_Historical_Upload.DS_Description , {force: true})
        //cy.wait(2000)
        // cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
        // cy.get('#__box6-arrow').click({force: true})
        // cy.get('#__box6-popup-list-listUl>li').each(($e,index)=>{
        //   if ($e.text() === this.EPIC_Enable_Historical_Upload.DataServer) {
        //      cy.wrap($e).click({force: true})}
        //      })  
        // cy.get('#__box7-arrow').click({force: true})
        // cy.get('#__box7-popup-list-listUl>li').each(($e,index)=>{
        //   if ($e.text() === this.EPIC_Enable_Historical_Upload.DataServer_Type) {
        //      cy.wrap($e).click({force: true})}
        //      })  
        // cy.get('#__box9-arrow').click({force: true})
        // cy.get('#__box9-popup-list-listUl>li').each(($e,index)=>{
        //   if ($e.text() === this.EPIC_Enable_Historical_Upload.Pco_Cred) {
        //      cy.wrap($e).click({force: true})}
        //      })  
        // cy.get('#dataServerConfigStep-nextButton-inner').click({force: true} , {timeout: 3000})

    

    })

})