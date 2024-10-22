import LoginPage from "../../support/pageObject/page/LoginPage"
import testData from "../../fixtures/credentials.json"


describe('Login ', () => {
    beforeEach(() => {
        LoginPage.open();
    })

    it.only('Login', () => {
        LoginPage.login(testData.userNames, testData.password);
        
    })
})