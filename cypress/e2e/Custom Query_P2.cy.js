describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC2_P2_DATA').then(function (EPIC2_P2_DATA) {
        this.EPIC2_P2_DATA = EPIC2_P2_DATA
      }) 
    })
    it ('Custom Query P2', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC2_P2_DATA.login)
        cy.get('#logonpassfield').type(this.EPIC2_P2_DATA.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(5000)
        cy.get('#__tile5').click()
        cy.wait(7000)
        cy.get('#__button2-content').click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview3--combobox-data-source-arrow').click()
        cy.get('#__xmlview3--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.DataSource) {
             cy.wrap($e).click({force: true})}
           })  
        cy.get('#__xmlview3--input-data-flow-name-inner').type(this.EPIC2_P2_DATA.DataFlowName) 
        cy.get('#__xmlview3--input-description-inner').type(this.EPIC2_P2_DATA.Description)
        cy.get('#__xmlview3--input-text-area-sql-query-inner').type(this.EPIC2_P2_DATA.SQL_Querry)
        cy.get('#__xmlview3--combobox-datadestination-arrow').click()
        cy.get('#__xmlview3--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.DataDestination) {
             cy.wrap($e).click({force: true})}
           })  
        cy.get('#__xmlview3--combobox-mii-transaction-arrow').click()
        cy.get('#__xmlview3--combobox-mii-transaction-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.MIITransaction) {
             cy.wrap($e).click({force: true})}
           }) 
        cy.get('#__xmlview3--switch-enabled-handle').click()
        cy.get('#__button7-content').click()
        cy.wait(5000)
        // cy.get('#__button4').click({force: true})
        // cy.get('#__item10-imgNav').click({force: true})
        // cy.get('#__popover5MessageDescriptionText').contains(this.EPIC2_P2_DATA.Message)
        // cy.wait(5000)
        // cy.get('#__button11').click({force: true})
        cy.get('#__xmlview2--combobox-plant-inner').clear()
        cy.wait(9000)
        // cy.get('#__xmlview2--combobox-plant-inner').type(this.EPIC2_P2_DATA.Plant , {force: true})
        // cy.wait(5000)
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.wait(5000)
        cy.get('#__xmlview2--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.Plant) {
             cy.wrap($e).click({force: true})}
           }) 
        cy.get('#__xmlview2--filterbar-contextual-flows-btnGo-content').click()
        cy.get('#__xmlview2--table-contextual-flows-tblBody').contains(this.EPIC2_P2_DATA.DataFlowName).click()
        cy.wait(5000)
        cy.get('#__button5-content').click({force: true})
        cy.wait(7000)
        // cy.get('#table-sql-test-tblHeader').find('span').eq(1).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(3).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(5).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(7).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(9).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(11).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(13).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(15).should('have.css', 'color', 'rgb(0, 128, 0)')
        // cy.get('#table-sql-test-tblHeader').find('span').eq(17).should('have.css', 'color', 'rgb(255, 0, 0)')
        cy.wait(1000)
        cy.get('#button-close-content').click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview3--input-text-area-sql-query-inner').clear()
        cy.wait(1000)
        cy.get('#__xmlview3--input-text-area-sql-query-inner').type(this.EPIC2_P2_DATA.UpdateSQql)
        cy.get('#__button5-content').click()
        cy.get('#text-error-column-name').contains(this.EPIC2_P2_DATA.ErrorMessage)
        cy.get('#button-close-content').click({force: true})
        cy.get('#__button0').click()
        cy.wait(5000)
        cy.get('#__tile5').click()
        cy.wait(7000)
        cy.get('#__xmlview2--combobox-plant-inner').clear()
        cy.wait(9000)
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.wait(5000)
        cy.get('#__xmlview2--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.Plant) {
             cy.wrap($e).click({force: true})}
           })  
        //cy.get('#__xmlview2--combobox-plant-inner').type(this.EPIC2_P2_DATA.Plant)
        //cy.get('#__item0-__xmlview2--combobox-plant-5').click({force: true})
        cy.get('#__xmlview2--filterbar-contextual-flows-btnGo-content').click()
        
        cy.get('#__xmlview2--table-contextual-flows-tblBody').contains(this.EPIC2_P2_DATA.FlowName).click({force: true})


        cy.get('#__tile10').click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview4--combobox-plant-arrow').click()
        cy.get('#__xmlview4--combobox-plant-popup-list-listUl').find('li').eq(5).click({force: true})
         //cy.get('#__xmlview4--combobox-plant-inner').clear({force: true})
         //cy.wait(7000)
         //cy.get('#__xmlview4--combobox-plant-inner').type(this.EPIC2_P2_DATA.Plant , {force: true})
         //cy.wait(6000)
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(7).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(10).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(13).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(16).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(19).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(22).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(25).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(28).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(31).click()
        cy.get('#__xmlview4--table-batch-catalog-tblBody').find('div').eq(34).click()
        cy.get('#__button9-BDI-content').click()
        cy.get('#__button0').click()
        cy.wait(5000)
        cy.get('#__tile5').click({force: true})
        cy.wait(5000)
        
        cy.get('#__xmlview2--combobox-plant-inner').clear()
        cy.wait(5000)
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.wait(5000)
        cy.get('#__xmlview2--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.Plant_1) {
             cy.wrap($e).click({force: true})}
           })  
        cy.get('#__xmlview2--filterbar-contextual-flows-btnGo-content').click()
        cy.wait(5000)
        cy.get('#__xmlview2--table-contextual-flows-tblBody').find('div').eq(11).click()
        cy.get('#__xmlview2--button-enable-data-upload-BDI-content').click()
        cy.wait(5000)
        cy.get('#historical-upload-time-from-inner').type(this.EPIC2_P2_DATA.StartDateHistorical , {force: true})       
        cy.get('#historical-upload-time-to-inner').type(this.EPIC2_P2_DATA.EndDate , {force: true})
        cy.get('#historical-upload-max-timeframe-inner').clear({force: true})
        cy.get('#historical-upload-max-timeframe-inner').type(this.EPIC2_P2_DATA.Time , {force: true})
        cy.get('#historical-upload-save-content').click({force: true})
        cy.get('#historical-load-close-BDI-content').click({force: true})
        // cy.get('#__button4').click()
        //cy.get('#__xmlview2--table-contextual-flows-tblBody').find('span').eq(5)
        //cy.get('.sapMSLIDescription').contains('Historical Data Upload')
        //wait 1 HOUR
        cy.get('#__xmlview2--table-contextual-flows-tblBody').find('div').eq(0).click()
        cy.get('#__xmlview2--button-disable-data-upload-BDI-content').click()
        cy.get('#__mbox-btn-0-inner').click({force: true})
        cy.get('#historical-load-close-BDI-content').click({force: true})
        cy.wait(5000)
        cy.get('#__button0').click()
        cy.wait(5000)
        cy.get('#__tile1').click()
        cy.wait(5000)
        cy.get('#__button13-BDI-content').click()
        cy.get('#__xmlview6--combobox-plant-arrow').click()
        cy.wait(5000)
        cy.get('#__list14>li').each(($e,index)=>{
        if ($e.text() === this.EPIC2_P2_DATA.PlantDS) {
           cy.wrap($e).click({force: true})}
           }) 
        cy.get('#__xmlview6--switch-enabled-handle').click()  
        cy.get('#__xmlview6--input-data-source-name-inner').type(this.EPIC2_P2_DATA.DSName)
        cy.get('#__xmlview6--combobox-dataserver-process-arrow').click()
        cy.get('#__list15>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.DataServer) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('#__xmlview6--combobox-dataserver-contextual-arrow').click()
        cy.get('#__list17>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.DataServerContextual) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('#__xmlview6--combobox-dataserver-contextual-type-arrow').click()
        cy.get('#__list18>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.DataServerContextual_Type) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('#__xmlview6--input-description-inner').type(this.EPIC2_P2_DATA.DSDescription)
        cy.get('#__xmlview6--input-pco-server-url-inner').type(this.EPIC2_P2_DATA.PcoServerUrl)
        cy.get('#__xmlview6--combobox-pco-credential-arrow').click()
        cy.get('#__list20>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.PCoCredential) {
             cy.wrap($e).click({force: true})}
             })
        cy.get('#__xmlview6--switch-contextual-handle').click()
        cy.get('#__xmlview6--switch-batch-information-enabled-handle').click()
        cy.get('#__xmlview6--combobox-batch-source-system-arrow').click()
        cy.get('#__list21>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.BatchSource) {
             cy.wrap($e).click({force: true})}
             })
        cy.get('#__xmlview6--input-batch-source-equipment-level-inner').type(this.EPIC2_P2_DATA.level)
        
        cy.get('#__xmlview6--input-text-area-sql-query-inner').type(this.EPIC2_P2_DATA.SQLQueryDS)
        cy.get('#__button21-content').click()
        cy.wait(5000)
        cy.get('#__button19').click()
        cy.get('#__item47-imgNav').click({force: true})
        cy.get('#__popover17MessageDescriptionText').contains(this.EPIC2_P2_DATA.Message2) 
        cy.get('#__button25').click({force: true})
        cy.get('#__button0').click()
        cy.wait(5000)
        cy.get('#__tile5').click()
        cy.wait(3000)
        cy.get('#__button2-content').click()
        cy.wait(3000)
        cy.get('#__xmlview3--combobox-data-source-arrow').click()
        cy.get('#__list2>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.DataSource2) {
             cy.wrap($e).click({force: true})}
           }) 
        cy.get('#__xmlview3--input-data-flow-name-inner').type(this.EPIC2_P2_DATA.DataFlowName2) 
        cy.get('#__xmlview3--input-description-inner').type(this.EPIC2_P2_DATA.Description2)
        cy.get('#__xmlview3--input-text-area-sql-query-inner').type(this.EPIC2_P2_DATA.SQL_Querry2)
        cy.get('#__xmlview3--combobox-datadestination-arrow').click()
        cy.get('#__list3>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.DataDestination) {
             cy.wrap($e).click({force: true})}
           })  
        cy.get('#__xmlview3--combobox-mii-transaction-arrow').click()
        cy.get('#__list4>li').each(($e,index)=>{
          if ($e.text() === this.EPIC2_P2_DATA.MIITransaction) {
             cy.wrap($e).click({force: true})}
           }) 
        cy.get('#__xmlview3--switch-enabled-handle').click()
        cy.get('#__button7-content').click()
        cy.wait(5000)
        cy.get('#__button4').click()
        cy.get('#__item57-imgNav').click({force: true})
        cy.get('#__popover5MessageDescriptionText').contains(this.EPIC2_P2_DATA.Message3)
        cy.get('#__button11').click({force: true})
        cy.wait(1000)
        cy.get('#__xmlview2--combobox-plant-inner').clear()
        cy.wait(5000)
        cy.get('#__xmlview2--combobox-plant-inner').type(this.EPIC2_P2_DATA.Plant_2)
        cy.wait(5000)
        cy.get('#__item0-__xmlview2--combobox-plant-17').click({force: true})
        cy.get('#__xmlview2--filterbar-contextual-flows-btnGo-content').click()
        cy.get('#__xmlview2--table-contextual-flows-tblBody').contains(this.EPIC2_P2_DATA.DataFlowName2).click()
        cy.wait(2000)
        cy.get('#__xmlview3--button-test-transaction-content').click()
        cy.wait(5000)
        // cy.get('#__button28-content').click({force: true})
        // cy.get('#__xmlview3--datetimepicker-from-date-inner').type(this.EPIC2_P2_DATA.FromDate , {force: true})
        // cy.get('#__xmlview3--datetimepicker-to-date-inner').type(this.EPIC2_P2_DATA.ToDate+'{enter}' , {force: true})
        // cy.wait(5000)
        // cy.get('#__button28-content').click({force: true})
        cy.get('#__xmlview3--datetimepicker-from-date-icon').click({force: true})
        cy.get('#__xmlview3--datetimepicker-from-date-OK-content').click({force: true})
        cy.get('#__xmlview3--datetimepicker-to-date-icon').click({force: true})
        cy.get('#__xmlview3--datetimepicker-to-date-OK-inner').click({force: true})
        cy.get('#__button28-content').click({force: true})
        cy.get('#__button27-content').click({force: true})
        cy.get('#__button1').click()
        cy.wait(2000)
        cy.get('#__xmlview2--table-contextual-flows-tblBody').find('div').eq(14).click()
        cy.get('#__xmlview2--button-enable-data-upload-content').click()
        cy.get('#historical-upload-time-from-inner').type(this.EPIC2_P2_DATA.StartDateHistorical_1 , {force: true})
        cy.get('#historical-upload-time-to-inner').type(this.EPIC2_P2_DATA.EndDate_1 , {force: true})
        cy.get('#historical-upload-max-timeframe-inner').type(this.EPIC2_P2_DATA.Time_1 , {force: true})
        cy.get('#historical-upload-save-content').click({force: true})
        cy.get('#historical-load-close-content').click({force: true})




     


        






        
    })
  })