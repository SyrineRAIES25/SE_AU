describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC_Data_Destination_P1_Update').then(function (EPIC_Data_Destination_P1_Update) {
        this.EPIC_Data_Destination_P1_Update = EPIC_Data_Destination_P1_Update
      }) 
    })
    it ('Data Destination P1', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Data_Destination_P1_Update.login)
        cy.get('#logonpassfield').type(this.EPIC_Data_Destination_P1_Update.password)
        cy.get('.urBtnStdNew').click()  
        
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(8000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
        cy.wait(8000)
        cy.get('#__button0').click({force: true})
        cy.wait(5000)
        cy.get('#__tile1').click();
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        cy.wait(11000);
        cy.get('#__button4-BDI-content').click();
        cy.get('#__box0-arrow').click({ force: true });
        cy.get('#__box0-popup-list-listUl>li').each(($e, index) => {
           if ($e.text() === this.EPIC_Data_Destination_P1_Update.Plant) {
              cy.wrap($e).click({ force: true });
           }
        });
        cy.get('#plantStep-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#data-source-type-arrow').click({ force: true });
        cy.get('#data-source-type-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.DataSourceType) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#__input0-inner').type(this.EPIC_Data_Destination_P1_Update.DataSourceName, { force: true });
        cy.get('#__input1-inner').type(this.EPIC_Data_Destination_P1_Update.DataSourceDescription, { force: true });
        cy.wait(2000);
        cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#__box1-arrow').click({ force: true });
        cy.get('#__box1-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.DataServer) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.wait(2000);
        cy.get('#__box4-arrow').click({ force: true });
        cy.get('#__box4-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.PCo_Cred) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#__input4-inner').type(this.EPIC_Data_Destination_P1_Update.Prefix, { force: true });
        cy.get('#dataServerConfigStep-nextButton-BDI-content').click({ force: true });
        cy.get('#__button8-BDI-content').click({ force: true });
        cy.wait(2000);
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })
        cy.get('#__button4-BDI-content').click()
        cy.get('#__box5-arrow').click({ force: true });
        cy.get('#__box5-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.Plant) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#plantStep-nextButton-content').click({ force: true });
        cy.get('#data-source-type-arrow').click({ force: true });
        cy.get('#data-source-type-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.DataSourceType) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({ force: true });
       cy.wait(2000);
       cy.get('#__input5-inner').type(this.EPIC_Data_Destination_P1_Update.DataSourceName_2, { force: true });
       cy.get('#__input6-inner').type(this.EPIC_Data_Destination_P1_Update.DataSourceDescription, { force: true });
       cy.wait(2000);
       cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({ force: true });
       cy.wait(2000);
       cy.get('#__box6-arrow').click({ force: true });
       cy.get('#__box6-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.DataServer) {
             cy.wrap($e).click({ force: true });
          }
       });
       cy.wait(2000);
       cy.get('#__box9-arrow').click({ force: true });
       cy.get('#__box9-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.PCo_Cred) {
             cy.wrap($e).click({ force: true });
          }
       });
       cy.get('#__input9-inner').type(this.EPIC_Data_Destination_P1_Update.Prefix, { force: true });
       cy.wait(9000);
       cy.get('#dataServerConfigStep-nextButton-BDI-content').click({ force: true });
       cy.wait(9000);
       cy.get('#__button11-BDI-content').click({ force: true });
       cy.wait(2000);
       Cypress.on('uncaught:exception', (err, runnable) => {
         return false
       })
       cy.wait(2000)
       cy.get('#__button1').click()
       cy.get('#__tile2').click({force: true})
       cy.wait(5000)
       cy.get('#__xmlview4--input-data-destination-inner').type(this.EPIC_Data_Destination_P1_Update.DestinationName , {force: true})
       cy.wait(10000)
       cy.get('#__xmlview4--filterbar-data-destinationw-btnGo-BDI-content').click()
       cy.wait(3000)
       //cy.get('#__xmlview4--table-datadestinations-tblBody').find('tr').should('have.length', 4)
       Cypress.on('uncaught:exception', (err, runnable) => {
        return false
       })
       //cy.get('#__button13-BDI-content').click()
        // cy.get('#__item38-selectSingle').click({force: true})
        // cy.get('#__item30-selectSingle-label').click({force: true})
        // cy.get('#__dialog0-acceptbutton-BDI-content').click({force: true})
        // cy.get('#__xmlview3--input-data-destination-inner').clear()
        
        // cy.wait(1000)
        // cy.get('#__xmlview3--input-data-destination-inner').type(this.EPIC5_DATA.DestinationName2 , {force: true}) 
        // cy.get('#__xmlview3--filterbar-data-sources-btnGo-content').click()
        // cy.get('#__item24-__clone23').click()
        // //cy.get('#__xmlview4--combobox-dd-type-inner').type("TEST" , {force: true})
        // cy.wait(5000)
        // cy.get('#__button1').click()
       cy.get('#__button13-BDI-content').click()
       cy.wait(3000)
       cy.get('#__xmlview5--input-dd-name-inner').type(this.EPIC_Data_Destination_P1_Update.DDName)
       cy.get('#__xmlview5--combobox-dd-type-arrow').click()
       cy.wait(1000)
       cy.get('#__xmlview5--combobox-dd-type-popup-list-listUl>li').each(($e,index)=>{
         if ($e.text() === this.EPIC_Data_Destination_P1_Update.DDType) {
           cy.wrap($e).click({force: true})}
         })   
       cy.get('#__xmlview5--input-dd-url-inner').type(this.EPIC_Data_Destination_P1_Update.DDPath)
       cy.get('#__xmlview5--combobox-dd-authMethod-arrow').click()
       cy.wait(1000)
       cy.get('#__xmlview5--combobox-dd-authMethod-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Data_Destination_P1_Update.AuthentificationMenu) {
             cy.wrap($e).click({force: true})}
           })   
       cy.get('#__xmlview5--button-save-content').click()
  
  
  
      })
        
  })
        