describe('template spec', () => {
    beforeEach (() => { 
        cy.fixture('EPIC_Enabled_Real_Time').then(function (EPIC_Enabled_Real_Time) {
            this.EPIC_Enabled_Real_Time = EPIC_Enabled_Real_Time ;
         });
    })
    it ('Asynchronous Notification', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC_Enabled_Real_Time.login)
        cy.get('#logonpassfield').type(this.EPIC_Enabled_Real_Time.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9101/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(9000)
        cy.get('#__tile1').click({force: true})
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        cy.wait(5000)
        cy.get('#__button2-BDI-content').click();
        cy.get('#__box0-arrow').click({ force: true });
        cy.get('#__box0-popup-list-listUl>li').each(($e, index) => {
           if ($e.text() === this.EPIC_Enabled_Real_Time.Plant) {
              cy.wrap($e).click({ force: true });
           }
        });
        cy.get('#plantStep-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#data-source-type-arrow').click({ force: true });
        cy.get('#data-source-type-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Enabled_Real_Time.DataSourceType) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#dataSourceTypeStep-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#__input0-inner').type(this.EPIC_Enabled_Real_Time.DataSourceName, { force: true });
        cy.get('#__input1-inner').type(this.EPIC_Enabled_Real_Time.DataSourceDescription, { force: true });
        cy.wait(2000);
        cy.get('#dataSourceDescriptionStep1-nextButton-BDI-content').click({ force: true });
        cy.wait(2000);
        cy.get('#__box1-arrow').click({ force: true });
        cy.get('#__box1-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Enabled_Real_Time.DataServer) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.wait(2000);
        cy.get('#__box2-arrow').click({force: true})
        cy.get('#__box2-popup-list-listUl>li').each(($e, index) => {
            if ($e.text() === this.EPIC_Enabled_Real_Time.Type) {
               cy.wrap($e).click({ force: true });
            }
          });
        cy.get('#__box4-arrow').click({ force: true });
        cy.get('#__box4-popup-list-listUl>li').each(($e, index) => {
          if ($e.text() === this.EPIC_Enabled_Real_Time.PCo_Cred) {
             cy.wrap($e).click({ force: true });
          }
        });
        cy.get('#dataServerConfigStep-nextButton-BDI-content').click({force: true})
        cy.get('#__button6-BDI-content').click({force: true})
        cy.get('#__button4-inner').click()
        cy.get('#__popover0-messageViewMessageDescriptionText').contains(this.EPIC_Enabled_Real_Time.Message)
        cy.get('#__button11-inner').click({force: true})
        cy.wait(7000)
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.get('#__xmlview2--combobox-plant-popup-list-listUl>li').each(($e, index) => {
            if ($e.text() === this.EPIC_Enabled_Real_Time.Plant) {
               cy.wrap($e).click({ force: true });
            }
          });
        cy.wait(5000)
      //cy.get('#__xmlview2--table-datasources-tblBody').find('tr').eq(5).click({force: true})
        cy.get('tbody[id$="--table-datasources-tblBody"]>tr').contains(this.EPIC_Enabled_Real_Time.DataSourceName).parent().parent().click({timeout: 2000} , {force: true})
        cy.wait(3000)
        var datasourceid 
        cy.get('#__xmlview3--input-source-id-inner').then(($input) => {
           datasourceid = $input.attr("value")
           cy.log(datasourceid)
     
        cy.get('#__xmlview3--switch-realtime-handle').click()
        cy.wait(2000)
        cy.get('#__button13-inner').click()
        cy.get('#__xmlview3--input-pco-prefix-inner').type(this.EPIC_Enabled_Real_Time.Prefix)
        cy.wait(2000)
        cy.get('#__button13-inner').click()
        cy.get('#__button15-BDI-content').click({force: true})
        cy.get('#__input5-table-change-messages-0-inner').type(this.EPIC_Enabled_Real_Time.Update , {force: true})
        cy.get('#__input5-table-change-messages-1-inner').type(this.EPIC_Enabled_Real_Time.Update , {force: true})
        cy.wait(4000)
        cy.get('#__button15-BDI-content').click({force: true})
        cy.wait(3000)
        cy.get('#__button4-inner').click({force: true})
        cy.wait(3000)
        cy.get('#__button10').click({force: true})
        cy.get('#__button0').click({force: true})
        cy.get('#__tile12-title').click({timeout: 7000})
        cy.get('div[id$="input-db-key"] input').type(datasourceid , {force: true})
        cy.get('#__xmlview4--table-audit-log-tblBody').contains(this.EPIC_Enabled_Real_Time.Update)
      })



    })
})