describe('tag catalog', () => {
    beforeEach (() => {
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
        })
    
    })
         
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    it ('Tag catalog filter', function () {
          cy.loginSE(this.testdata.username,this.testdata.password)
          cy.get('#__tile8').click()
          cy.get('#__button4-content').click()
          cy.wait(10000)
          cy.get('#__button7-img').click()
          cy.get('#__item25-content').click({force: true})
          cy.get('#__popover6MessageDescriptionText').contains('Please select one or more tags, please.')
          cy.get('#__button11-img').click({force: true})
          cy.get('#__button8-img').click({force: true})
          cy.get('#__button5-content').click()
          cy.get('#__button7-img').click()
          cy.get('#__item27-content').click({force: true})
          cy.get('#__popover6MessageDescriptionText').contains('Please select one or more tags, please.')
          cy.get('#__button11-img').click({force: true})
          cy.get('#__button8-img').click({force: true})
          cy.get('#__item23-__clone0-selectMulti-CbBg').click()
          var OrName 
          cy.get('tr').eq(1).find('td').eq(4).then($value => {
            OrName = $value.text()
            cy.log(OrName)
            cy.get('#__button4-content').click()
            cy.get('#__xmlview2--switch-hidden-switch').click({force: true})
            cy.get('#__xmlview2--input-original-tag-inner').type(OrName+'{enter}', {force: true})
            cy.wait(10000)
            cy.get('tr').eq(1).find('td').eq(1).click()
            cy.get('#__button5-content').click()
            cy.wait(5000)
            cy.get('#__xmlview2--input-original-tag-inner').clear()
            cy.get('#__xmlview2--switch-hidden-switch').click({force: true})
            cy.wait(5000)
        
          })
        })
      
      })