describe('template spec', () => {
   beforeEach(() => {
      cy.fixture('EPIC_Flat_File').then(function (EPIC_Flat_File) {
         this.EPIC_Flat_File = EPIC_Flat_File;
      });
   });
   it('Flat File', function () {
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled');
      cy.get('#logonuidfield').type(this.EPIC_Flat_File.login);
      cy.get('#logonpassfield').type(this.EPIC_Flat_File.password);
      cy.get('.urBtnStdNew').click();
      cy.wait(9000);
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt');
      cy.wait(9000);
      cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage');
      cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS");
      cy.wait(9000);
      cy.get('#__button0').click();
      cy.wait(9000);
      cy.get('#__tile1').click();
      cy.wait(11000);
      Cypress.on('uncaught:exception', (err, runnable) => {
         return false;
      });
      cy.get('#__button4-BDI-content').click();
      cy.get('#__box0-arrow').click({ force: true });
      cy.get('#__box0-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.Plant) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#plantStep-nextButton-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#data-source-type-arrow').click({ force: true });
      cy.get('#data-source-type-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.DataSourceType) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#__input0-inner').type(this.EPIC_Flat_File.DataSourceName, { force: true });
      cy.get('#__input1-inner').type(this.EPIC_Flat_File.DataSourceDescription, { force: true });
      cy.wait(2000);
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#__box1-arrow').click({ force: true });
      cy.get('#__box1-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.DataServer) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.wait(2000);
      cy.get('#__box4-arrow').click({ force: true });
      cy.get('#__box4-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.PCo_Cred) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#__input4-inner').type(this.EPIC_Flat_File.Prefix, { force: true });
      cy.get('#dataServerConfigStep-nextButton-BDI-content').click({ force: true });
      cy.get('#__button8-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#__button6').click();
      cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Flat_File.Message);
      cy.wait(2000);
      cy.get('#__button13').click({ force: true });
      cy.get('#__button4-BDI-content').click();
      cy.get('#__box5-arrow').click({ force: true });
      cy.get('#__box5-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.Plant) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#plantStep-nextButton-content').click({ force: true });
      cy.get('#data-source-type-arrow').click({ force: true });
      cy.get('#data-source-type-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.DataSourceType) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#__input5-inner').type(this.EPIC_Flat_File.DataSourceName_2, { force: true });
      cy.get('#__input6-inner').type(this.EPIC_Flat_File.DataSourceDescription, { force: true });
      cy.wait(2000);
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#__box6-arrow').click({ force: true });
      cy.get('#__box6-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.DataServer) {
            cy.wrap($e).click({ force: true });
         }
      });

      cy.wait(2000);
      cy.get('#__box9-arrow').click({ force: true });
      cy.get('#__box9-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.PCo_Cred) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#__input9-inner').type(this.EPIC_Flat_File.Prefix, { force: true });
      cy.wait(9000);
      cy.get('#dataServerConfigStep-nextButton-BDI-content').click({ force: true });
      cy.wait(9000);
      cy.get('#__button15-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#__button6').click({ force: true });
      cy.wait(2000);
      cy.get('#__item174-imgNav').click({ force: true });
      cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Flat_File.Message);
      cy.get('#__button13').click({ force: true });
      cy.wait(2000);
      cy.get('#__button4-BDI-content').click();
      cy.wait(2000);
      cy.get('#__box10-arrow').click({ force: true });
      cy.get('#__box10-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.Plant) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#plantStep-nextButton-BDI-content').click({ force: true });
      cy.get('#data-source-type-arrow').click({ force: true });
      cy.get('#data-source-type-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.DataSourceType) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({ force: true });
      cy.get('#__input10-inner').type(this.EPIC_Flat_File.DataSourceName_3, { force: true });
      cy.get('#__input11-inner').type(this.EPIC_Flat_File.DataSourceDescription, { force: true });
      cy.wait(2000);
      cy.get('#__box11-arrow').click({ force: true });
      cy.get('#__box11-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.DataServer) {
            cy.wrap($e).click({ force: true });
         }
      });

      cy.get('#__input14-inner').type(this.EPIC_Flat_File.Prefix, { force: true });
      cy.wait(2000);
      cy.get('#__box14-arrow').click({ force: true });
      cy.get('#__box14-popup-list-listUl>li').each(($e, index) => {
         if ($e.text() === this.EPIC_Flat_File.PCo_Cred) {
            cy.wrap($e).click({ force: true });
         }
      });
      cy.wait(5000);
      cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({ force: true });
      cy.get('#dataServerConfigStep-nextButton-BDI-content').click({ force: true });
      cy.wait(5000);
      cy.get('#__button18-BDI-content').click({ force: true });
      cy.wait(2000);
      cy.get('#__button6').click();
      cy.get('#__item262-imgNav').click({ force: true });
      cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Flat_File.Message);
      cy.get('#__button13').click({ force: true });
      cy.wait(2000);
      // cy.get('#__button0').click()
      // cy.wait(5000)
      // cy.get('#__tile6-title').click()
      // cy.wait(3000)
      // cy.get('#__button20-BDI-content').click()
      // cy.wait(2000)
      // cy.get('#__xmlview5--combobox-data-source-arrow').click()
      // cy.get('#__xmlview5--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.DataSourceName_4) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.get('#__xmlview5--input-data-flow-name-inner').type(this.EPIC_Flat_File.DataFlowName)
      // cy.get('#__xmlview5--input-description-inner').type(this.EPIC_Flat_File.DescriptionFileFlow)
      // cy.get('#__xmlview5--input-pco-destination-id-inner').type(this.EPIC_Flat_File.PcoDestinationID)
      // cy.get('#__xmlview5--combobox-datadestination-arrow').click()
      // cy.get('#__xmlview5--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.DataDestination) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.get('#__xmlview5--combobox-synch-type-arrow').click()
      // cy.get('#__xmlview5--combobox-synch-type-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.SyncoType) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.wait(2000)
      // cy.get('#__button25-BDI-content').click({force: true})
      // //cy.get('#__button22').click()
      // Cypress.on('uncaught:exception', (err, runnable) => {
      //    return false
      //  })
      // cy.get('#__button1').click()
      // // cy.get('#__item322-imgNav').click({force: true})
      // // cy.get('#__popover1-messageViewMessageDescriptionText').contains(this.EPIC_Flat_File.Message1)
      // // cy.get('#__button29').click({force: true})
      // cy.wait(2000)
      // cy.get('#__button20-BDI-content').click()
      // cy.get('#__xmlview5--combobox-data-source-arrow').click()
      // cy.get('#__xmlview5--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.DataSourceName_4) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.get('#__xmlview5--input-data-flow-name-inner').type(this.EPIC_Flat_File.DataFlowName , {force: true})
      // cy.get('#__xmlview5--input-description-inner').type(this.EPIC_Flat_File.DescriptionFileFlow , {force: true})
      // cy.get('#__xmlview5--input-pco-destination-id-inner').type(this.EPIC_Flat_File.PcoDestinationID)
      // cy.get('#__xmlview5--combobox-datadestination-arrow').click()
      // cy.get('#__xmlview5--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.DataDestination) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.get('#__xmlview5--combobox-synch-type-arrow').click()
      // cy.get('#__xmlview5--combobox-synch-type-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.SyncoType) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.wait(2000)
      // cy.get('#__button25-BDI-content').click()
      // cy.get('#__button24-inner').click()
      // cy.get('#__item316-imgNav').click({force: true})
      // cy.get('#__popover1-messageViewMessageDescriptionText').contains(this.EPIC_Flat_File.Message2)
      // cy.get('#__button30-inner').click({force: true})
      // cy.wait(2000)
      // cy.get('#__button1').click()
      // cy.get('#__xmlview4--combobox-plant-arrow').click()
      // cy.get('#__xmlview4--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.Plant) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.wait(2000)
      // cy.get('#__xmlview4--filterbar-File-flows-btnGo-BDI-content').click()
      // cy.wait(2000)
      // cy.get('#__xmlview4--combobox-plant-arrow').click()
      // cy.get('#__xmlview4--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.AllPlant) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.get('#__xmlview4--filterbar-File-flows-btnGo-BDI-content').click()
      // cy.wait(2000)
      // cy.get('#__xmlview4--combobox-data-source-arrow').click()
      // cy.wait(2000)
      // cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.DataSourceName_4) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.get('#__xmlview4--filterbar-File-flows-btnGo-BDI-content').click()
      // cy.wait(2000)
      // cy.get('#__xmlview4--combobox-data-source-arrow').click()
      // cy.wait(2000)
      // cy.get('#__xmlview4--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
      //    if ($e.text() === this.EPIC_Flat_File.AllDataSource) {
      //       cy.wrap($e).click({force: true})}
      //       }) 
      // cy.get('#__xmlview4--filterbar-File-flows-btnGo-BDI-content').click()
      // cy.wait(2000)
      // cy.get('#__xmlview4--input-data-flow-inner').type(this.EPIC_Flat_File.DataFlow)
      // cy.wait(2000)
      // cy.get('#__xmlview4--filterbar-File-flows-btnGo-BDI-content').click()
      // cy.wait(2000)
      // cy.get('#__xmlview4--input-data-flow-inner').clear()
      // cy.wait(1000)
      // cy.get('#__xmlview4--filterbar-File-flows-btnGo-BDI-content').click()
      // cy.wait(2000)
      // cy.get('#__button21-inner').click({force: true})
      // cy.wait(2000)
      // cy.get('#__item356-selectSingle-Button').click({force: true})
      // cy.get('#__dialog3-acceptbutton-BDI-content').click({force: true})
      // //cy.get('#__xmlview4--table-File-flows-tblBody').find('tr').eq(1).click({force: true})
      // cy.get('#__icon10-__clone338').should('have.css', 'color', 'rgb(255, 0, 0)')
      // cy.wait(2000)
      // cy.get('#__button20-BDI-content').click()
   });
});
