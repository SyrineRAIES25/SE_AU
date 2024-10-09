describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Add_Country_Code').then(function (EPIC_Add_Country_Code) {
        this.EPIC_Add_Country_Code = EPIC_Add_Country_Code
      }) 
    })
    it ('Historical Upload', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Add_Country_Code.login)
        cy.get('#logonpassfield').type(this.EPIC_Add_Country_Code.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(5000)
        cy.get('#__tile6-title-inner').click()
        cy.get('#__button2-content').click({timeout: 3000})
        cy.get('#__xmlview3--combobox-data-source-arrow').click({timeout: 3000})
        cy.get('#__xmlview3--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.DataSource) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview3--input-data-flow-name-inner').type(this.EPIC_Add_Country_Code.DataFlowName)
        cy.get('#__xmlview3--input-description-inner').type(this.EPIC_Add_Country_Code.Description)
        cy.get('#__xmlview3--combobox-flow-type-arrow').click()
        cy.get('#__xmlview3--combobox-flow-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.ExternelFlow) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview3--combobox-Country-arrow').click()
        cy.get('#__xmlview3--combobox-Country-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.Country) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview3--combobox-datadestination-arrow').click()
        cy.get('#__xmlview3--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.DataDestination) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__button6-content').click()
        cy.get('#__button2-BDI-content').click({timeout: 3000})
        cy.get('#__xmlview3--combobox-data-source-arrow').click({timeout: 3000})
        cy.get('#__xmlview3--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.DataSource) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview3--input-data-flow-name-inner').type(this.EPIC_Add_Country_Code.DataFlowName)
        cy.get('#__xmlview3--input-description-inner').type(this.EPIC_Add_Country_Code.Description)
        cy.get('#__xmlview3--combobox-flow-type-arrow').click()
        cy.get('#__xmlview3--combobox-flow-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.ExternelFlow) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview3--combobox-Country-arrow').click()
        cy.get('#__xmlview3--combobox-Country-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.Country1) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview3--combobox-datadestination-arrow').click()
        cy.get('#__xmlview3--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Add_Country_Code.DataDestination) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__button6-BDI-content').click()




    })

})