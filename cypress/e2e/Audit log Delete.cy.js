describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Audit_log_Delete').then(function (EPIC_Audit_log_Delete) {
        this.EPIC_Audit_log_Delete = EPIC_Audit_log_Delete
      }) 
    })
    it ('Audit log Delete', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Audit_log_Delete.login)
        cy.get('#logonpassfield').type(this.EPIC_Audit_log_Delete.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(5000)
        cy.get('#__tile3-title-inner').click()
        cy.wait(7000)
        cy.get('#__button2-BDI-content').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.wait(5000)
        cy.get('#__xmlview3--combobox-data-source-arrow').click()
        cy.get('#__xmlview3--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Audit_log_Delete.DataSource) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview3--input-data-flow-name-inner').type(this.EPIC_Audit_log_Delete.DataFlowName)
        cy.wait(2000)
        cy.get('#__xmlview3--input-description-inner').type(this.EPIC_Audit_log_Delete.Description)
        cy.get('#__xmlview3--combobox-datadestination-arrow').click()
        cy.get('#__xmlview3--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Audit_log_Delete.DataDestination) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview3--switch-enabled-textoff').click({force: true})
        cy.wait(2000)
        cy.get('#__button6-BDI-content').click({timeout: 2000})
        
        cy.get('#__button4-inner').click({timeout: 2000})
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Audit_log_Delete.Message)
        cy.get('#__button11-inner').click({force: true})
        cy.wait(3000)

        cy.get('#__button2-BDI-content').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.wait(5000)
        cy.get('#__xmlview3--combobox-data-source-arrow').click()
        cy.get('#__xmlview3--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Audit_log_Delete.DataSource1) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview3--input-data-flow-name-inner').type(this.EPIC_Audit_log_Delete.DataFlowName1)
        cy.wait(2000)
        cy.get('#__xmlview3--input-description-inner').type(this.EPIC_Audit_log_Delete.Description1)
        cy.get('#__xmlview3--combobox-datadestination-arrow').click()
        cy.get('#__xmlview3--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Audit_log_Delete.DataDestination) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview3--switch-enabled-textoff').click({force: true})
        cy.wait(2000)
        cy.get('#__button6-BDI-content').click()
        cy.wait(5000)
        cy.get('#__button4-inner').click()
        // cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Audit_log_Delete.Message)
        cy.get('#__button10-inner').click({force: true})
        cy.wait(3000)
        cy.get('#__button0-inner').click()
        cy.wait(5000)
        cy.get('#__tile5').click()
        cy.wait(5000)
        cy.get('#__button12-BDI-content').click()
        cy.wait(3000)
        cy.get("#__xmlview5--combobox-data-source-arrow").click()
        cy.get('#__xmlview5--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataSource2) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__xmlview5--input-data-flow-name-inner').type(this.EPIC_Audit_log_Delete.DataFlowName2)
        cy.get('#__xmlview5--input-description-inner').type(this.EPIC_Audit_log_Delete.Description_File_flow)
        cy.get('#__xmlview5--input-pco-destination-id-inner').type(this.EPIC_Audit_log_Delete.PcoDestination)
        cy.get('#__xmlview5--combobox-datadestination-arrow').click()
        cy.get('#__xmlview5--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataDestination) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__xmlview5--combobox-synch-type-arrow').click()
        cy.get('#__xmlview5--combobox-synch-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.Synchro) {
             cy.wrap($e).click({force: true})}
             })
        cy.get('#__xmlview5--switch-enabled-textoff').click()
        cy.wait(3000)
        cy.get('#__button17-BDI-content').click()
        cy.wait(11000)
        cy.get('#__button14-inner').click()
        cy.wait(3000)
        cy.get('#__button21-inner').click({force: true})
        cy.get('#__button0-inner').click()
        cy.wait(3000)
        cy.get('#__tile4').click()
        cy.wait(3000)
        cy.get('#__button23-content').click()
        cy.wait(3000)
        cy.get('#__xmlview7--combobox-data-source-arrow').click()
        cy.get('#__xmlview7--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataSource) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__xmlview7--input-data-flow-name-inner').type(this.EPIC_Audit_log_Delete.DataFlowName3)
        cy.get('#__xmlview7--input-description-inner').type(this.EPIC_Audit_log_Delete.Description3)
        cy.get('#__xmlview7--combobox-datadestination-arrow').click()
        cy.get('#__xmlview7--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataDestination1) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__xmlview7--combobox-mii-transaction-arrow').click()
        cy.get('#__xmlview7--combobox-mii-transaction-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.ContextualDataType) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__button28-content').click()
        cy.wait(3000)
        cy.get('#__button25-inner').click()
        cy.wait(3000)
        cy.get('#__button32-inner').click({force: true})
        cy.wait(3000)
        cy.get('#__button0-inner').click()
        cy.wait(5000)
        cy.get('#__tile2').click()
        cy.wait(2000)
        cy.get('#__button34-BDI-content').click()
        cy.wait(3000)
        cy.get('#__xmlview9--switch-dd-enabled-textoff').click()
        cy.get('#__xmlview9--input-dd-name-inner').type(this.EPIC_Audit_log_Delete.DataDestinationName)
        cy.get('#__xmlview9--combobox-dd-type-arrow').click()
        cy.get('#__xmlview9--combobox-dd-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DestinationType) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__xmlview9--input-dd-url-inner').type(this.EPIC_Audit_log_Delete.Path)
        cy.get('#__xmlview9--combobox-dd-authMethod-arrow').click()
        cy.get('#__xmlview9--combobox-dd-authMethod-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.AuthentificationMedthod) {
             cy.wrap($e).click({force: true})}
             })  
        cy.wait(3000)
        cy.get('#__xmlview9--button-save-inner').click()
        cy.wait(3000)
        cy.get('#__button36-inner').click()
        cy.wait(3000)
        cy.get('#__button41-inner').click({force: true})
        cy.wait(2000)
        cy.get('#__button0-inner').click()
        cy.wait(3000)
        cy.get('#__tile1').click()
        cy.wait(3000)
        cy.get('#__button43-BDI-content').click()
        cy.wait(2000)
        cy.get('#__box20-arrow').click({force: true})       
        cy.get('#__box20-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.Plant) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#plantStep-nextButton-content').click({force: true})
        cy.get('#data-source-type-arrow').click({force: true})       
        cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataSourceType) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true})
        cy.get('#__input2-inner').type(this.EPIC_Audit_log_Delete.DataSourceName , {force: true})
        cy.get('#__input3-inner').type(this.EPIC_Audit_log_Delete.DS_Description , {force: true}) 
        cy.wait(2000)
        cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
        cy.get('#__box21-arrow').click({force: true})
        cy.get('#__box21-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataServer) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__box22-arrow').click({force: true})
        cy.get('#__box22-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataServer_Type) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__box24-arrow').click({force: true})
        cy.get('#__box24-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.Pco_Cred) {
             cy.wrap($e).click({force: true})}
             })  
        cy.wait(5000)
        cy.get('#dataServerConfigStep-nextButton-inner').click({force: true})
        cy.wait(7000)
        cy.get('#__button47-inner').click({force: true})
        cy.get('#__button45').click()
        cy.wait(3000)
        cy.get('#__button45').click({force: true})
        cy.get('#__button0-inner').click()
        cy.wait(3000)
        cy.get('#__tile3-title-inner').click()
        cy.get('#__xmlview2--table-archive-flows-tblBody').find('tr').eq(5).click()
        cy.wait(3000)
        cy.get('#__xmlview3--button-delete-BDI-content').click()
        cy.wait(5000)
        cy.get('#__button53-BDI-content').click({force: true})
        cy.wait(5000)
        cy.get('#__button0-inner').click()
        cy.wait(3000)
        cy.get('#__tile11-title-inner').click()
        cy.wait(3000)
        cy.get('tbody[id$="--table-audit-log-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.Description)
        cy.get('tbody[id$="--table-audit-log-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.Remarque)
        //cy.get('#__text148-__clone297').contains(this.EPIC_Audit_log_Delete.Description)
        cy.wait(3000)
        cy.get('#__button0-inner').click()
        cy.wait(3000)
        cy.get('#__tile4-title').click()
        cy.wait(3000)
        cy.get('#__xmlview6--combobox-data-source-arrow').click()
        cy.get('#__xmlview6--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.DataSource) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview6--filterbar-contextual-flows-btnGo-inner').click()
        cy.wait(1000)
        cy.get('#__xmlview6--table-contextual-flows-tblBody').find('tr').eq(0).click()
        // cy.get('#__xmlview6--table-contextual-flows-tblBody').find('tr').eq(0).click()
        cy.wait(3000)
        cy.get('#__xmlview7--button-delete-BDI-content').click()
        cy.get('#__button59-BDI-content').click({force: true})
        cy.wait(2000)
        cy.get('#__button0-inner').click()
        cy.wait(2000)
        cy.get('#__tile11-title-inner').click()
        cy.wait(3000)
        cy.get('tbody[id$="--table-audit-log-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.Description3)
        cy.get('tbody[id$="--table-audit-log-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.Remarque)
        // cy.wait(3000)
        cy.get('#__button0-inner').click({timeout: 3000})
        cy.get('#__tile5-title-inner').click({timeout : 3000})
        cy.get('#__xmlview4--combobox-plant-arrow').click()
        cy.get('#__xmlview4--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Audit_log_Delete.Plant) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview4--filterbar-File-flows-btnGo-BDI-content').click({timeout: 2000})
        cy.get('#__xmlview4--table-File-flows-tblBody').find('tr').eq(1).click({timeout: 3000})

        cy.get('#__xmlview5--button-delete-BDI-content').click({timeout: 1000})
        cy.get('#__button61-BDI-content').click({force: true})
        cy.wait(2000)
        cy.get('#__button0-inner').click({timeout: 3000})
        cy.get('#__tile11-title-inner').click({timeout: 7000})
        cy.get('tbody[id$="--table-audit-log-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.DataFlowName2)
        cy.get('tbody[id$="--table-audit-log-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.Remarque)
        cy.get('#__button0-inner').click({timeout: 3000})
        cy.get('#__tile4-title').click({timeout: 3000})
        //cy.get('tbody[id$="--table-contextual-flows-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.Contextual_name).parent().parent().click({timeout: 2000} , {force: true})
        cy.get('#__xmlview6--table-contextual-flows-tblBody').find('tr').eq(20).click({timeout: 3000})
        cy.get('#__xmlview7--button-delete-BDI-content').click({timeout: 3000})
        // cy.get('#__button0-inner').click({timeout: 3000})
        // cy.get('#__tile1-title-inner').click({timeout: 3000})
        // cy.get('#__xmlview10--combobox-plant-arrow').click()
        // cy.get('#__xmlview10--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
        //   if ($e.text() === this.EPIC_Audit_log_Delete.Plant) {
        //      cy.wrap($e).click({force: true})}
        //      }) 
        // cy.get('#__xmlview10--filterbar-data-sources-btnGo-content').click({timeout: 2000})
        // //cy.get('#__xmlview10--table-datasources-tblBody').find('tr').contains
        // cy.get('tbody[id$="--table-datasources-tblBody"]>tr').contains(this.EPIC_Audit_log_Delete.DataSourceName).parent().parent().click({timeout: 2000} , {force: true})
        // cy.get('#__xmlview12--button-delete-BDI-content').click({timeout: 2000})
        // cy.get('#__button66-content').click({force: true})






        











        
        










    
    })

})