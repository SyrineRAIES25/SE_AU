describe('template spec', () => {
    beforeEach (() => { 
      cy.fixture('EPIC6_DATA').then(function (EPIC6_DATA) {
        this.EPIC6_DATA = EPIC6_DATA
      }) 
    })
    it ('Data Destination P2', function () {
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/Illuminator?service=Personalization&saml2=disabled')
        cy.get('#logonuidfield').type(this.EPIC6_DATA.login)
        cy.get('#logonpassfield').type(this.EPIC6_DATA.password)
        cy.get('.urBtnStdNew').click()  
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt')
        cy.wait(7000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--list-roles').find('li').contains("STREAMING_ENGINE_ADMIN_ITS")
        cy.wait(5000)
        cy.get('#__button0').click({force: true})
        cy.wait(5000)
        cy.get('#__tile1').click({force: true})
        cy.wait(5000)
        cy.get('#__button4-content').click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview4--combobox-plant-arrow').click({force: true})
        cy.wait(5000)
        cy.get('#__list2>li').each(($e,index)=>{
        if ($e.text() === this.EPIC6_DATA.Plant) {
           cy.wrap($e).click({force: true})}
           })   
        cy.get('#__xmlview4--switch-enabled-handle').click()
        cy.get('#__xmlview4--input-data-source-name-inner').type(this.EPIC6_DATA.DSName)
        cy.get('#__xmlview4--combobox-dataserver-process-arrow').click()
        cy.get('#__list3>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.DataServer) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('#__xmlview4--combobox-dataserver-process-type-arrow').click()
        cy.get('#__list4>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.DataServer_Type) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('#__xmlview4--combobox-dataserver-contextual-arrow').click()
        cy.get('#__list5>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.DataServerContextual) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('#__xmlview4--combobox-dataserver-contextual-type-arrow').click()
        cy.get('#__list6>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.DataServerContextual_Type) {
             cy.wrap($e).click({force: true})}
             })   
        cy.get('#__xmlview4--input-description-inner').type(this.EPIC6_DATA.DSDescription)
        cy.get('#__xmlview4--multicombobox-kepware-channels-arrow').click()
        cy.get('#__item41-selectMulti-CbBg').click({force: true})
        cy.get('#__xmlview4--input-pco-server-url-inner').type(this.EPIC6_DATA.PcoServerUrl)
        cy.get('#__xmlview4--combobox-pco-credential-arrow').click()
        cy.get('#__list8>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.PCoCredential) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview4--input-pco-prefix-inner').type(this.EPIC6_DATA.PcoPrefix)
        cy.get('#__xmlview4--switch-history-handle').click()
        cy.get('#__xmlview4--switch-realtime-handle').click()
        cy.get('#__xmlview4--switch-archive-handle').click()
        cy.get('#__xmlview4--switch-contextual-handle').click()
        cy.wait(3000)
        cy.get('#__button8-content').click({force: true})
        cy.wait(5000)
        cy.get('#__button6').click({force: true})
        cy.get('#__item44-imgNav').click({force: true})
        cy.get('#__popover10MessageDescriptionText').contains(this.EPIC6_DATA.Message3)
        cy.wait(5000)
        cy.get('#__button0').click()
        cy.wait(5000)
        cy.get('#__tile4').click()
        cy.wait(5000)
        cy.get('#__button14-content').click()
        cy.get('#__xmlview6--combobox-data-source-arrow').click()
        cy.get('#__list17>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.DSName) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview6--input-data-flow-name-inner').type(this.EPIC6_DATA.DataFlowName)
        cy.get('#__xmlview6--input-description-inner').type(this.EPIC6_DATA.ArchiveDescription)
        cy.get('#__xmlview6--combobox-datadestination-arrow').click()
        cy.get('#__list18>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.DDestination) {
             cy.wrap($e).click({force: true})}
             }) 
        cy.get('#__xmlview6--switch-enabled-handle').click()
        cy.get('#__button18-content').click()
        cy.wait(5000)
        cy.get('#__button16-inner').click({force: true})
        cy.get('#__item57-imgNav').click({force: true})
        cy.get('#__popover15MessageDescriptionText').contains(this.EPIC6_DATA.Message4)
        cy.wait(1000)
        cy.get('#__button22-inner').click({force: true})
        cy.wait(5000)
        cy.get('#__button0').click()
        cy.wait(3000)
        cy.get('#__tile2').click({force: true})
        cy.wait(3000)
        cy.get('#__button24-inner').click()
        cy.wait(3000)
        cy.get('#__xmlview8--switch-dd-enabled-switch').click()
        cy.get('#__xmlview8--input-dd-name-inner').type(this.EPIC6_DATA.DDName)
        cy.get('#__xmlview8--combobox-dd-type-arrow').click()
        cy.wait(1000)
        cy.get('#__list24>li').each(($e,index)=>{
        if ($e.text() === this.EPIC6_DATA.DDType) {
           cy.wrap($e).click({force: true})}
           })   
        cy.get('#__xmlview8--input-dd-url-inner').type(this.EPIC6_DATA.DDPath)
        cy.get('#__xmlview8--combobox-dd-authMethod-arrow').click()
        cy.wait(1000)
        cy.get('#__list26>li').each(($e,index)=>{
          if ($e.text() === this.EPIC6_DATA.AuthentificationMethode) {
             cy.wrap($e).click({force: true})}
           })   
        cy.get('#__xmlview8--combobox-dd-httpMethod-arrow').click()
        cy.get('#__list28>li').each(($e,index)=>{
            if ($e.text() === this.EPIC6_DATA.HttpMethode) {
               cy.wrap($e).click({force: true})}
               })          
        cy.get('#__xmlview8--button-save-content').click()
        cy.get('#__button26').click()
        cy.get('#__item71-imgNav').click({force: true})
        cy.get('#__popover21MessageDescriptionText').contains(this.EPIC6_DATA.Message)
        cy.wait(3000)
        cy.get('#__button31').click({force: true})
        cy.get('#__button0').click()
        cy.get('#__tile4').click()
        cy.get('#__xmlview5--combobox-plant-arrow').click()
        cy.get('#__list15>li').each(($e,index)=>{
            if ($e.text() === this.EPIC6_DATA.Plant) {
               cy.wrap($e).click({force: true})}
             })  
        cy.wait(5000)
        cy.get('#__xmlview5--table-archive-flows-tblBody').find('div').eq(10).click({force: true})
    
        cy.wait(5000)
        cy.get('#__xmlview6--input-description-inner').clear().type(this.EPIC6_DATA.UpdateDescription)
        // cy.get('#__xmlview6--combobox-datadestination-arrow').click()       
        // cy.get('#__list18>li').each(($e,index)=>{
        //     if ($e.text() === this.EPIC6_DATA.DataDestination) {
        //        cy.wrap($e).click({force: true})}
        //      })  
        cy.get('#__button18-content').click()
        cy.get('#__button33-content').click({force: true})
        cy.get('#__input0-table-change-messages-0-inner').type(this.EPIC6_DATA.Update , {force:true})
        // cy.get('#__input0-table-change-messages-1-inner').type(this.EPIC6_DATA.Update , {force:true})
        cy.get('#__button33-content').click({force: true})
        cy.wait(3000)
        cy.get('#__button16').click()
        cy.get('#__item82-imgNav').click({force: true})
        cy.get('#__popover15MessageDescriptionText').contains(this.EPIC6_DATA.Message2)
        cy.wait(5000)
        cy.get('#__button22').click({force: true})
        cy.get('#__button0').click()
        cy.get('#__tile8').click({force: true})
        cy.wait(11000)
        cy.get('#__xmlview9--combobox-plant-arrow').click({force: true})
        
        cy.get('#__list34>li').each(($e,index)=>{
            if ($e.text() === this.EPIC6_DATA.Plant) {
               cy.wrap($e).click({force: true})}
             })  
        cy.wait(10000)
        cy.get('#__xmlview9--combobox-data-source-arrow').click() 
        cy.get('#__list35>li').each(($e,index)=>{
            if ($e.text() === this.EPIC6_DATA.DataSource) {
               cy.wrap($e).click({force: true})}
             })
        //cy.get('#__xmlview9--table-tag-catalog-tblBody').find('div').eq(3).click({force: true})  
        cy.get('#__item107-__clone283-imgNav').click()
        cy.wait(5000)
        cy.get('#__xmlview10--combobox-uom-arrow').click({force: true})
        cy.get('#__item108-__xmlview10--combobox-uom-0').click({force: true})
        cy.get('#__xmlview10--combo-hierarchy-2-arrow').click()
        cy.wait(5000)
        cy.get('#__item110-__xmlview10--combo-hierarchy-2-0').click({force: true})
        cy.get('#__xmlview10--combo-hierarchy-3-arrow').click()
        cy.get('#__item111-__xmlview10--combo-hierarchy-3-0').click({force: true})
        cy.get('#__xmlview10--combo-hierarchy-4-arrow').click()
        cy.get('#__item112-__xmlview10--combo-hierarchy-4-0').click({force: true})
        cy.get('#__xmlview10--combo-hierarchy-5-arrow').click()
        cy.get('#__item113-__xmlview10--combo-hierarchy-5-0').click({force: true})
        cy.get('#__xmlview10--input-renamed-tag-1-vhi').click()
        cy.get('#__xmlview10--combobox-domain-arrow').click({force: true})
        cy.get('#__item124-__xmlview10--combobox-domain-0').click({force: true})
        cy.get('#__box35-arrow').click({force: true})
        cy.get('#__item125-__box35-0').click({force: true})
        cy.get('#__item127-__xmlview10--RenamedTagTable-0_cell1').click({force: true})
        cy.get('#__xmlview10--switch-archive-handle').click({force: true})     
        cy.get('#__button52-content').click({force: true})
        var textValue
        //cy.get('#__xmlview10--input-original-tag-name-inner').then($value => {textValue = $value.text()
        cy.get('#__button50-content').click()
        cy.get('#__button54-content').click({force: true})
        cy.get('#__input1-table-change-messages-0-inner').type(this.EPIC6_DATA.Update , {force: true})
        //cy.get('#__button54-content').click({force: true})
        cy.get('#__button54-content').click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview9--table-tag-catalog-listUl').find('td').eq(4).then($value => {textValue = $value.text()
        cy.get('#__button0').click({force: true})
        cy.wait(5000)
        cy.get('#__tile9').click()
        cy.wait(5000)
        cy.get('#__item141-__clone483_cell0').click({force: true})
        cy.wait(5000)
        cy.get('#__xmlview11--input-original-tag-inner').type(textValue+'{enter}', {force: true})
        cy.get('#__item139-__clone509-selectMulti-CbBg').click()
        cy.wait(1000)
        cy.get('#__xmlview11--combobox-transformation-arrow').click({force: true})
        cy.get('#__item140-__xmlview11--combobox-transformation-0').click({force: true})
        cy.get('#__xmlview11--button-assign-tags-content').click({force: true})
        cy.get('#__button58-content').click({force: true})
        cy.get('#__input2-table-change-messages-0-inner').type(this.EPIC6_DATA.Update , {force: true})
        cy.get('#__button58-content').click({force: true})
        cy.get('#__button0').click()
        cy.wait(5000)
        cy.get('#__tile2').click()
        
      })
      })        
  }) 
        