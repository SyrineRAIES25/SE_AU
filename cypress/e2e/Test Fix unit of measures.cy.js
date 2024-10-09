describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Test_Fix_Unit_of_measures').then(function (EPIC_Test_Fix_Unit_of_measures) {
        this.EPIC_Test_Fix_Unit_of_measures = EPIC_Test_Fix_Unit_of_measures
      }) 
    })
    it ('Test fix unit of measure', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Test_Fix_Unit_of_measures.login)
        cy.get('#logonpassfield').type(this.EPIC_Test_Fix_Unit_of_measures.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(7000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")    
        cy.get('#__button0').click({timeout: 3000})
        cy.get('#__tile3-title-inner').click({timeout: 7000})
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.wait(5000)
        cy.get('#__button4-content').click({timeout: 7000})
        cy.get('#__xmlview4--combobox-data-source-arrow').click({timeout: 7000})
        cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.DataSource) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview4--input-data-flow-name-inner').type(this.EPIC_Test_Fix_Unit_of_measures.DataFlowName)
        cy.wait(2000)
        cy.get('#__xmlview4--input-description-inner').type(this.EPIC_Test_Fix_Unit_of_measures.Description)
        cy.get('#__xmlview4--combobox-datadestination-arrow').click({timeout: 4000})
        cy.get('#__xmlview4--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.DataDestination) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview4--switch-enabled-textoff').click({force: true} , {timeout: 3000})
        cy.get('#__button8-BDI-content').click({timeout: 2000})
        cy.get('#__button6-inner').click({timeout: 7000})
        cy.get('#__button13-inner').click({force: true})
        cy.wait(2000)
        cy.get('#__button0-inner').click({timeout: 7000})
        cy.get('#__tile1').click({timeout: 7000})
        cy.wait(3000)
        cy.get('#__button14-content').click()
        cy.get('#__box5-arrow').click({force: true})       
        cy.get('#__box5-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.Plant) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#plantStep-nextButton-content').click({force: true})
        cy.get('#data-source-type-arrow').click({force: true})       
        cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.DataSourceType) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
        cy.get('#dataSourceDescriptionStep1 input').eq(0).type(this.EPIC_Test_Fix_Unit_of_measures.DataSourceName, {force: true})
        cy.get('#dataSourceDescriptionStep1 input').eq(1).type(this.EPIC_Test_Fix_Unit_of_measures.DataSourceName, {force: true})
        // cy.get('#__input3-inner').type(this.EPIC_Test_Fix_Unit_of_measures.DS_Description , {force: true}) 
        // cy.get('#__input3-inner').type("{enter}" , {force: true} )
        // cy.get('#__input2-inner').click({force: true})
        // cy.wait(2000)
        cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
        cy.get('#__box6-arrow').click({force: true})
        cy.get('#__box6-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.DataServer) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__box7-arrow').click({force: true})
        cy.get('#__box7-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.DataServer_Type) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__box9-arrow').click({force: true})
        cy.get('#__box9-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.Pco_Cred) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#dataServerConfigStep-nextButton-inner').click({force: true} , {timeout: 7000})
        cy.get('#__button18-BDI-content').click({force: true} , {timeout: 7000} )
        cy.get('#__button16-inner').click({timeout: 3000})
        cy.wait(2000)
        cy.get('#__button22-inner').click({force: true})
        cy.get('#__button0').click()
        cy.get('#__tile8-title').click({timeout: 7000})
        cy.wait(5000)
        cy.get('tbody[id$="--table-tag-catalog-tblBody"]>tr').eq(1).click()
        cy.wait(7000)
        cy.get('#__xmlview7--combobox-uom-arrow').click()
        cy.get('#__xmlview7--combobox-uom-popup-list-listUl').find('li').eq(4).contains(this.EPIC_Test_Fix_Unit_of_measures.Unit1)
        cy.get('#__xmlview7--combobox-uom-popup-list-listUl').find('li').contains(this.EPIC_Test_Fix_Unit_of_measures.Unit2)
        cy.wait(3000)
        cy.get('#__xmlview7--combobox-uom-arrow').click()
        cy.get('#__xmlview7--combobox-uom-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.Unit1) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview7--combo-hierarchy-1-arrow').click()
        cy.get('#__xmlview7--combo-hierarchy-1-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.Location) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('input[id$="--combo-hierarchy-2-inner"]').type(this.EPIC_Test_Fix_Unit_of_measures.Location1)
        cy.get('input[id$="--combo-hierarchy-3-inner"]').type(this.EPIC_Test_Fix_Unit_of_measures.Location2)
        cy.get('input[id$="--combo-hierarchy-4-inner"]').type(this.EPIC_Test_Fix_Unit_of_measures.Location3)
        cy.get('input[id$="--combo-hierarchy-5-inner"]').type(this.EPIC_Test_Fix_Unit_of_measures.Location4)
        cy.get('span[id$="--input-renamed-tag-1-vhi"]').click()
        cy.get('span[id$="--combobox-domain-arrow"]').click({force: true})
        
        cy.get('#__xmlview7--combobox-domain-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.Renamed) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.wait(2000)
        cy.get('#__box17-arrow').click({force: true})
        cy.get('#__box17-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Test_Fix_Unit_of_measures.Renamed1) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('tr[id$="__xmlview7--RenamedTagTable-0"]').click({force: true})
        cy.get('#__button42-BDI-content').click({force: true} , {timeout: 3000})
        cy.get('#__button40-BDI-content').click({timeout: 4000})
        cy.get('#__button44-content').click({force: true} , {timeout: 4000})
        cy.get('#__input5-table-change-messages-0-inner').type(this.EPIC_Test_Fix_Unit_of_measures.Update , {force: true} , {timeout: 4000})
        cy.get('#__input5-table-change-messages-1-inner').type(this.EPIC_Test_Fix_Unit_of_measures.Update , {force: true} , {timeout: 4000})
        cy.get('#__input5-table-change-messages-2-inner').type(this.EPIC_Test_Fix_Unit_of_measures.Update , {force: true} , {timeout: 4000})
        cy.get('#__input5-table-change-messages-3-inner').type(this.EPIC_Test_Fix_Unit_of_measures.Update , {force: true} , {timeout: 4000})
        cy.get('#__button44-content').click({force: true})

        
        


        
        
        






        
      
    
    })



})