describe('template spec', () => {
    beforeEach (() => { 
        cy.fixture('EPIC_Data_Destination_P2_Update').then(function (EPIC_Data_Destination_P2_Update) {
            this.EPIC_Data_Destination_P2_Update = EPIC_Data_Destination_P2_Update;
         });
    })
    it ('Data Destination P2', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Data_Destination_P2_Update.login)
        cy.get('#logonpassfield').type(this.EPIC_Data_Destination_P2_Update.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(7000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
        cy.wait(5000)
        cy.get('#__button0').click({force: true})
        cy.wait(5000)
        cy.get('#__tile1').click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.wait(5000)
        
        cy.get('#__button4-BDI-content').click();
        cy.get('#__box0-arrow').click({ force: true });
        cy.get('#__box0-popup-list-listUl>li').each(($e, index) => {
           if ($e.text() === this.EPIC_Data_Destination_P2_Update.Plant) {
              cy.wrap($e).click({ force: true });
           }
        });
        cy.get('#plantStep-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#data-source-type-arrow').click({ force: true });
        cy.get('#data-source-type-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P2_Update.DataSourceType) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#__input0-inner').type(this.EPIC_Data_Destination_P2_Update.DataSourceName, { force: true });
        cy.get('#__input1-inner').type(this.EPIC_Data_Destination_P2_Update.DataSourceDescription, { force: true });
        cy.wait(2000);
        cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#__box1-arrow').click({ force: true });
        cy.get('#__box1-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P2_Update.DataServer) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.wait(2000);
        cy.get('#__box4-arrow').click({ force: true });
        cy.get('#__box4-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Data_Destination_P2_Update.PCo_Cred) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#__input4-inner').type(this.EPIC_Data_Destination_P2_Update.Prefix, { force: true });
        cy.get('#dataServerConfigStep-nextButton-BDI-content').click({ force: true });
        cy.get('#__button8-BDI-content').click({ force: true });
        cy.wait(2000);
        Cypress.on('uncaught:exception', (err, runnable) => {
          return false
        })
        cy.get('#__button6').click()
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Data_Destination_P2_Update.Message3)
        cy.wait(2000)
        cy.get('#__button13-inner').click({force: true})
        cy.get('#__button0').click()
        cy.wait(5000)
        cy.get('#__tile3').click()
        cy.wait(5000)
        cy.get('#__button14-content').click()
        cy.get('#__xmlview5--combobox-data-source-arrow').click()
        cy.get('#__xmlview5--combobox-data-source-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Data_Destination_P2_Update.DSName) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview5--input-data-flow-name-inner').type(this.EPIC_Data_Destination_P2_Update.DataFlowName)
        cy.get('#__xmlview5--input-description-inner').type(this.EPIC_Data_Destination_P2_Update.ArchiveDescription)
        cy.get('#__xmlview5--combobox-datadestination-arrow').click()
        cy.get('#__xmlview5--combobox-datadestination-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Data_Destination_P2_Update.DDestination) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview5--switch-enabled-handle').click()
        cy.get('#__button18-BDI-content').click()
        cy.wait(5000)
        //cy.get('#__button16-inner').click({force: true})
        //cy.get('#__item146-imgNav').click({force: true})
        //cy.get('#__popover1-messageViewMessageDescriptionText').contains(this.EPIC_Data_Destination_P2_Update.Message4)
        //cy.wait(1000)
        //cy.get('#__button23-inner').click({force: true})
        //cy.wait(5000)
        cy.get('#__button0').click()
        cy.wait(3000)
        cy.get('#__tile2').click({force: true})
        cy.wait(3000)
        cy.get('#__button20-inner').click()
        cy.wait(3000)
        cy.get('#__xmlview7--switch-dd-enabled-switch').click()
        cy.get('#__xmlview7--input-dd-name-inner').type(this.EPIC_Data_Destination_P2_Update.DDName)
        cy.get('#__xmlview7--combobox-dd-type-arrow').click()
        cy.wait(1000)
        cy.get('#__xmlview7--combobox-dd-type-popup-list-listUl>li').each(($e,index)=>{
        if ($e.text() === this.EPIC_Data_Destination_P2_Update.DDType) {
           cy.wrap($e).click({force: true})}
           })   
        cy.get('#__xmlview7--input-dd-url-inner').type(this.EPIC_Data_Destination_P2_Update.DDPath)
        cy.get('#__xmlview7--combobox-dd-authMethod-arrow').click()
        cy.wait(1000)
        cy.get('#__xmlview7--combobox-dd-authMethod-popup-list-listUl>li').each(($e,index)=>{
          if ($e.text() === this.EPIC_Data_Destination_P2_Update.AuthentificationMethode) {
             cy.wrap($e).click({force: true})}
           })   
        cy.get('#__xmlview7--combobox-dd-httpMethod-arrow').click()
        cy.get('#__xmlview7--combobox-dd-httpMethod-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Data_Destination_P2_Update.HttpMethode) {
               cy.wrap($e).click({force: true})}
               })          
        cy.get('#__xmlview7--button-save-content').click()
        cy.wait(3000)
      //   cy.get('#__button26').click()
      //   cy.get('#__item171-imgNav').click({force: true})
      //   cy.get('#__popover2-messageViewMessageDescriptionText').contains(this.EPIC_Data_Destination_P2_Update.Message)
      //   cy.wait(3000)
      //   cy.get('#__button32').click({force: true})
        cy.get('#__button0').click()
        cy.wait(7000)
        cy.get('#__tile3').click()
        cy.wait(3000)
        cy.get('#__xmlview4--combobox-plant-arrow').click({force: true})
        cy.get('#__xmlview4--combobox-plant-popup-list-listUl>li').each(($e,index)=>{
            if ($e.text() === this.EPIC_Data_Destination_P2_Update.Plant) {
               cy.wrap($e).click({force: true})}
             })  
        cy.wait(5000)
        cy.get('#__xmlview4--table-archive-flows-tblBody').find('td').eq(2).click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview5--input-description-inner').clear().type(this.EPIC_Data_Destination_P2_Update.UpdateDescription)
    //     // cy.get('#__xmlview6--combobox-datadestination-arrow').click()       
    //     // cy.get('#__list18>li').each(($e,index)=>{
    //     //     if ($e.text() === this.EPIC6_DATA.DataDestination) {
    //     //        cy.wrap($e).click({force: true})}
    //     //      })  
        cy.get('#__button18-content').click()
        cy.get('#__button25-BDI-content').click({force: true})
        cy.get('#__input7-table-change-messages-0-inner').type(this.EPIC_Data_Destination_P2_Update.Update , {force:true})
    //     // cy.get('#__input0-table-change-messages-1-inner').type(this.EPIC6_DATA.Update , {force:true})
        cy.get('#__button25-BDI-content').click({force: true})
      //   cy.wait(3000)
      //   cy.get('#__button16').click()
      //   cy.get('#__item188-imgNav').click({force: true})
      //   cy.get('#__popover1-messageViewMessageDescriptionText').contains(this.EPIC_Data_Destination_P2_Update.Message2)
        cy.wait(5000)
       // cy.get('#__button23').click({force: true})
        cy.get('#__button0').click()
    //     cy.get('#__tile8').click({force: true})


    
    //     cy.wait(11000)
    //     cy.get('#__xmlview9--combobox-plant-arrow').click({force: true})
        
    //     cy.get('#__list34>li').each(($e,index)=>{
    //         if ($e.text() === this.EPIC6_DATA.Plant) {
    //            cy.wrap($e).click({force: true})}
    //          })  
    //     cy.wait(10000)
    //     cy.get('#__xmlview9--combobox-data-source-arrow').click() 
    //     cy.get('#__list35>li').each(($e,index)=>{
    //         if ($e.text() === this.EPIC6_DATA.DataSource) {
    //            cy.wrap($e).click({force: true})}
    //          })
    //     //cy.get('#__xmlview9--table-tag-catalog-tblBody').find('div').eq(3).click({force: true})  
    //     cy.get('#__item107-__clone283-imgNav').click()
    //     cy.wait(5000)
    //     cy.get('#__xmlview10--combobox-uom-arrow').click({force: true})
    //     cy.get('#__item108-__xmlview10--combobox-uom-0').click({force: true})
    //     cy.get('#__xmlview10--combo-hierarchy-2-arrow').click()
    //     cy.wait(5000)
    //     cy.get('#__item110-__xmlview10--combo-hierarchy-2-0').click({force: true})
    //     cy.get('#__xmlview10--combo-hierarchy-3-arrow').click()
    //     cy.get('#__item111-__xmlview10--combo-hierarchy-3-0').click({force: true})
    //     cy.get('#__xmlview10--combo-hierarchy-4-arrow').click()
    //     cy.get('#__item112-__xmlview10--combo-hierarchy-4-0').click({force: true})
    //     cy.get('#__xmlview10--combo-hierarchy-5-arrow').click()
    //     cy.get('#__item113-__xmlview10--combo-hierarchy-5-0').click({force: true})
    //     cy.get('#__xmlview10--input-renamed-tag-1-vhi').click()
    //     cy.get('#__xmlview10--combobox-domain-arrow').click({force: true})
    //     cy.get('#__item124-__xmlview10--combobox-domain-0').click({force: true})
    //     cy.get('#__box35-arrow').click({force: true})
    //     cy.get('#__item125-__box35-0').click({force: true})
    //     cy.get('#__item127-__xmlview10--RenamedTagTable-0_cell1').click({force: true})
    //     cy.get('#__xmlview10--switch-archive-handle').click({force: true})     
    //     cy.get('#__button52-content').click({force: true})
    //     var textValue
    //     //cy.get('#__xmlview10--input-original-tag-name-inner').then($value => {textValue = $value.text()
    //     cy.get('#__button50-content').click()
    //     cy.get('#__button54-content').click({force: true})
    //     cy.get('#__input1-table-change-messages-0-inner').type(this.EPIC6_DATA.Update , {force: true})
    //     //cy.get('#__button54-content').click({force: true})
    //     cy.get('#__button54-content').click({force: true})
    //     cy.wait(5000)
    //     cy.get('#__xmlview9--table-tag-catalog-listUl').find('td').eq(4).then($value => {textValue = $value.text()
    //     cy.get('#__button0').click({force: true})
    //     cy.wait(5000)
    //     cy.get('#__tile9').click()
    //     cy.wait(5000)
    //     cy.get('#__item141-__clone483_cell0').click({force: true})
    //     cy.wait(5000)
    //     cy.get('#__xmlview11--input-original-tag-inner').type(textValue+'{enter}', {force: true})
    //     cy.get('#__item139-__clone509-selectMulti-CbBg').click()
    //     cy.wait(1000)
    //     cy.get('#__xmlview11--combobox-transformation-arrow').click({force: true})
    //     cy.get('#__item140-__xmlview11--combobox-transformation-0').click({force: true})
    //     cy.get('#__xmlview11--button-assign-tags-content').click({force: true})
    //     cy.get('#__button58-content').click({force: true})
    //     cy.get('#__input2-table-change-messages-0-inner').type(this.EPIC6_DATA.Update , {force: true})
    //     cy.get('#__button58-content').click({force: true})
    //     cy.get('#__button0').click()
    //     cy.wait(5000)
    //     cy.get('#__tile2').click()
        
    //   })
       })        
  }) 
        