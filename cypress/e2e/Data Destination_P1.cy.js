describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC5_DATA').then(function (EPIC5_DATA) {
        this.EPIC5_DATA = EPIC5_DATA
      }) 
    })
    it ('Data Destination P1', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC5_DATA.login)
        cy.get('#logonpassfield').type(this.EPIC5_DATA.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(8000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
        cy.wait(8000)
        cy.get('#__button0').click({force: true})
        cy.wait(5000)
        cy.get('#__tile2').click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview3--input-data-destination-inner').type(this.EPIC5_DATA.DestinationName , {force: true})
        cy.get('#__xmlview3--filterbar-data-sources-btnGo-inner').click()
        cy.get('#__xmlview3--table-datadestinations-tblBody').find('tr').should('have.length', 4)
        cy.get('#__button5-inner').click()
        cy.get('#__item38-selectSingle').click({force: true})
        cy.get('#__item30-selectSingle-label').click({force: true})
        cy.get('#__dialog0-acceptbutton-BDI-content').click({force: true})
        cy.get('#__xmlview3--input-data-destination-inner').clear()
        cy.wait(1000)
        cy.get('#__xmlview3--input-data-destination-inner').type(this.EPIC5_DATA.DestinationName2 , {force: true}) 
        cy.get('#__xmlview3--filterbar-data-sources-btnGo-content').click()
        cy.get('#__item24-__clone23').click()
        //cy.get('#__xmlview4--combobox-dd-type-inner').type("TEST" , {force: true})
        cy.wait(5000)
        cy.get('#__button1').click()
        cy.get('#__button4-content').click()
        cy.wait(3000)
        cy.get('#__xmlview4--input-dd-name-inner').type(this.EPIC5_DATA.DDName)
        cy.get('#__xmlview4--combobox-dd-type-arrow').click()
        cy.wait(1000)
        cy.get('#__xmlview4--combobox-dd-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC5_DATA.DDType) {
           cy.wrap($e).click({force: true})}
           })   
        cy.get('#__xmlview4--input-dd-url-inner').type(this.EPIC5_DATA.DDPath)
        cy.get('#__xmlview4--combobox-dd-authMethod-arrow').click()
        cy.wait(1000)
        cy.get('#__xmlview4--combobox-dd-authMethod-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC5_DATA.AuthentificationMenu) {
             cy.wrap($e).click({force: true})}
           })   
        cy.get('#__xmlview4--button-save-content').click()
  
  
  
      })
        
  })
        