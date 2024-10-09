
    describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Refurbish_the_Real_Time').then(function (EPIC_Refurbish_the_Real_Time) {
        this.EPIC_Refurbish_the_Real_Time = EPIC_Refurbish_the_Real_Time
      }) 
    })
    it ('External flow', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Refurbish_the_Real_Time.login)
        cy.get('#logonpassfield').type(this.EPIC_Refurbish_the_Real_Time.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(7000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS") 
        cy.get('#__button0').click({timeout: 3000})
        cy.get('#__tile1').click({timeout: 4000})
        cy.wait(5000)
        cy.get('#__button4-BDI-content').click({timeout: 4000})  
        cy.get('#__box0-arrow').click({force: true})       
        cy.get('#__box0-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Refurbish_the_Real_Time.Plant) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#plantStep-nextButton-content').click({force: true})
        cy.get('#data-source-type-arrow').click({force: true})       
        cy.get('#data-source-type-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Refurbish_the_Real_Time.DataSourceType) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({force: true} , {timeout: 3000})
        cy.wait(4000)
        cy.get('#dataSourceDescriptionStep1 input').eq(0).type(this.EPIC_Refurbish_the_Real_Time.DataSourceName, {force: true})
        cy.get('#dataSourceDescriptionStep1 input').eq(1).type(this.EPIC_Refurbish_the_Real_Time.DataSourceDescription, {force: true})
        cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({force: true})
        cy.get('#__box1-arrow').click({force: true})
        cy.get('#__box1-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Refurbish_the_Real_Time.DataServer_Type) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__box2-arrow').click({force: true})
        cy.get('#__box2-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Refurbish_the_Real_Time.Type) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__box4-arrow').click({force: true})
        cy.get('#__box4-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Refurbish_the_Real_Time.PCo_Cred) {
             cy.wrap($e).click({force: true})}
             })  
        cy.get('#__input4-inner').type(this.EPIC_Refurbish_the_Real_Time.Prefix , {force: true})
        cy.get('#dataServerConfigStep-nextButton-inner').click({force: true} , {timeout: 7000})
        cy.get('#__button8-BDI-content').click({force: true})
        cy.get('#__button6').click({timeout: 7000})
        cy.wait(4000)
        cy.get('#__button13').click({force: true})
        cy.get('#__xmlview3--combobox-plant-arrow').click()
        cy.get('#__xmlview3--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Refurbish_the_Real_Time.Plant) {
               cy.wrap($e).click({force: true})}
               })  
        cy.get('tbody[id$="--table-datasources-tblBody"]>tr').contains(this.EPIC_Refurbish_the_Real_Time.DataSourceName).parents("tr").find("td").eq(1).find("svg").click({force: true} , {timeout: 2000} )
        cy.get('#__toolbar1-overflowButton-inner').click()
        cy.get('#__xmlview3--button-synchronize-pco-destination-BDI-content').click({force: true} , {timeout: 5000})
        cy.get('#__button0').click()
        cy.get('#__tile2-title-inner').click({timeout: 7000})
        cy.get('#__xmlview4--combobox-data-dest-type-arrow').click()
        cy.get('#__xmlview4--combobox-data-dest-type-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Refurbish_the_Real_Time.DestinationType) {
               cy.wrap($e).click({force: true})}
               })  
        cy.wait(2000)
        cy.get('#__button0-inner').click()
        cy.get('#__tile1-title').click({timeout: 7000})
        cy.get('#__xmlview3--combobox-plant-arrow').click()
        cy.get('#__xmlview3--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Refurbish_the_Real_Time.Plant) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('tbody[id$="--table-datasources-tblBody"]>tr').contains(this.EPIC_Refurbish_the_Real_Time.DataSourceName).parents("tr").find("td").eq(1).find("svg").click({force: true} , {timeout: 2000} )




        
    })
})