describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_External_Flow').then(function (EPIC_External_Flow) {
        this.EPIC_External_Flow = EPIC_External_Flow
      }) 
    })
    it ('External flow', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_External_Flow.login)
        cy.get('#logonpassfield').type(this.EPIC_External_Flow.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(7000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")    
        cy.get('#__button0').click({timeout: 3000})
        cy.get('#__tile1').click({timeout: 4000})
        cy.get('#__button4-content').click({timeout: 4000})
        cy.get('#__box0-arrow').click({force: true})       
        cy.get('#__box0-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_External_Flow.Plant) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#plantStep-nextButton-content').click({force: true})
        cy.get('#data-source-type-arrow').click({force: true})       
        cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_External_Flow.DataSourceType) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true} , {timeout: 3000})
       
        cy.get('#dataSourceDescriptionStep1 input').eq(0).type(this.EPIC_External_Flow.DataSourceName, {force: true})
        cy.get('#dataSourceDescriptionStep2 input').eq(1).type(this.EPIC_External_Flow.DS_Description, {force: true})
        cy.get('#dataSourceDescriptionStep2-nextButton-BDI-content').click({force: true})
        cy.get('#__button8-BDI-content').click({force: true} , {timeout: 3000})
        cy.get('#__button6').click()
        cy.wait(2000)
        cy.get('#__button13').click({force: true} , {timeout: 5000})
        cy.get('#__button0').click({timeout: 7000})
        cy.get('#__tile6').click({timeout: 7000})
        cy.get('#__button14-BDI-content').click({timeout: 7000})
        cy.get('#__xmlview5--combobox-data-source-arrow').click({timeout: 6000})
        cy.get('#__xmlview5--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_External_Flow.DataSourceName) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview5--input-data-flow-name-inner').type(this.EPIC_External_Flow.DataFlowName)
        cy.get('#__xmlview5--input-description-inner').type(this.EPIC_External_Flow.Description)
        cy.get('#__xmlview5--combobox-flow-type-arrow').click()
        cy.get('#__xmlview5--combobox-flow-type-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_External_Flow.ExternalFlowType) {
               cy.wrap($e).click({force: true})}
               }) 
        cy.get('#__xmlview5--combobox-Country-arrow').click()
        cy.get('#__xmlview5--combobox-Country-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_External_Flow.CountryCode) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview5--switch-stream-gas-textoff').click()
        cy.get('#__xmlview5--input-gas-operator-code-inner').type(this.EPIC_External_Flow.Gas_Supplier_Name)
        cy.get('#__xmlview5--input-gas-code-inner').type(this.EPIC_External_Flow.Gas_Metering_Point)
        
        cy.get('#__xmlview5--combobox-refCondition-arrow').click()
        cy.get('#__xmlview5--combobox-refCondition-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_External_Flow.Reference_Conditions) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview5--combobox-gasFrequency-arrow').click({timeout : 3000})
        cy.get('#__xmlview5--combobox-gasFrequency-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_External_Flow.Gaz_Frequency) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview5--switch-stream-power-textoff').click()
        cy.get('#__xmlview5--input-pwr-operator-code-inner').type(this.EPIC_External_Flow.Power_Supplier_Name)
        cy.get('#__xmlview5--input-pwr-code-inner').type(this.EPIC_External_Flow.Power_Metering_Point)
        cy.get('#__xmlview5--combobox-PowerFequency-arrow').click()
        cy.get('#__xmlview5--combobox-PowerFequency-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_External_Flow.Gaz_Frequency) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('#__xmlview5--combobox-datadestination-arrow').click()
        cy.get('#__xmlview5--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_External_Flow.DataDestination) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview5--switch-enabled-textoff').click()
        cy.get('#__button18-BDI-content').click()
        cy.get('#__button16-inner').click({timeout: 7000})
        cy.wait(2000)
        cy.get('#__button22-inner').click({force: true} , {timeout: 7000})
        cy.get('#__xmlview4--table-external-flows-tblBody').find('div').eq(0).click()
        cy.get('#__xmlview4--button-run-flow-manually-BDI-content').click({timeout: 4000})











    })
})