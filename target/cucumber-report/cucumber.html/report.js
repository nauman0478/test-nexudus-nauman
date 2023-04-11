$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Logintest.feature");
formatter.feature({
  "line": 1,
  "name": "Nexudus Login Test",
  "description": "As a user I should be able to login",
  "id": "nexudus-login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3543441200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 69900500,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "I shouldn\u0027t be able to login with invalid credentials and page shows error message",
  "description": "",
  "id": "nexudus-login-test;i-shouldn\u0027t-be-able-to-login-with-invalid-credentials-and-page-shows-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I confirm login page is available",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter \"bad@example.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"badpassword\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see a clear error message on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iConfirmLoginPageIsAvailable()"
});
formatter.result({
  "duration": 1025409400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bad@example.com",
      "offset": 9
    }
  ],
  "location": "LoginStepdefs.iEnterAsEmail(String)"
});
formatter.result({
  "duration": 50822300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "badpassword",
      "offset": 9
    }
  ],
  "location": "LoginStepdefs.iEnterAsPassword(String)"
});
formatter.result({
  "duration": 48902800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 37944700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldSeeAClearErrorMessageOnTheScreen()"
});
formatter.result({
  "duration": 76178400,
  "status": "passed"
});
formatter.after({
  "duration": 610160800,
  "status": "passed"
});
formatter.before({
  "duration": 2447216200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I should be able to login with valid credentials",
  "description": "",
  "id": "nexudus-login-test;i-should-be-able-to-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I confirm login page is available",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \"adrian+1004930927@nexudus.com\" as email",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"A8Pd6m16YfJt\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be redirected to the dashboard home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iConfirmLoginPageIsAvailable()"
});
formatter.result({
  "duration": 1017740500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adrian+1004930927@nexudus.com",
      "offset": 9
    }
  ],
  "location": "LoginStepdefs.iEnterAsEmail(String)"
});
formatter.result({
  "duration": 65139600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A8Pd6m16YfJt",
      "offset": 9
    }
  ],
  "location": "LoginStepdefs.iEnterAsPassword(String)"
});
formatter.result({
  "duration": 45675600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 37926300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldBeRedirectedToTheDashboardHomePage()"
});
formatter.result({
  "duration": 802386300,
  "status": "passed"
});
formatter.after({
  "duration": 602786200,
  "status": "passed"
});
formatter.uri("products.feature");
formatter.feature({
  "line": 1,
  "name": "Adding and deleting Products",
  "description": "",
  "id": "adding-and-deleting-products",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2418389200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "As a User I should be able to add and delete a product",
  "description": "",
  "id": "adding-and-deleting-products;as-a-user-i-should-be-able-to-add-and-delete-a-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"adrian+1004930927@nexudus.com\" as email",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I enter \"A8Pd6m16YfJt\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on the Login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be redirected to the dashboard home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I navigate to product page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on Add Product button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I fill \"name\" as name",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I fill \"description\" as description",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I fill the \"price\" as price",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on save changes",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I search by the new product by name",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "i should be able to see the new product name on top of list",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I select the first item on the list",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on Delete 1 record button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I confirm modal dialog by clicking on Yes do it",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be able to confirm that product is no longer available",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adrian+1004930927@nexudus.com",
      "offset": 9
    }
  ],
  "location": "LoginStepdefs.iEnterAsEmail(String)"
});
formatter.result({
  "duration": 322184200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A8Pd6m16YfJt",
      "offset": 9
    }
  ],
  "location": "LoginStepdefs.iEnterAsPassword(String)"
});
formatter.result({
  "duration": 70506600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 40357400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iShouldBeRedirectedToTheDashboardHomePage()"
});
formatter.result({
  "duration": 857371700,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iNavigateToProductPage()"
});
formatter.result({
  "duration": 137734600,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iClickOnAddProductButton()"
});
formatter.result({
  "duration": 262447900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 8
    }
  ],
  "location": "ProductsStepdefs.iFillAsName(String)"
});
formatter.result({
  "duration": 171393400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "description",
      "offset": 8
    }
  ],
  "location": "ProductsStepdefs.iFillAsDescription(String)"
});
formatter.result({
  "duration": 90337400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "price",
      "offset": 12
    }
  ],
  "location": "ProductsStepdefs.iFillTheAsPrice(String)"
});
formatter.result({
  "duration": 1114379500,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iClickOnSaveChanges()"
});
formatter.result({
  "duration": 57418500,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iSearchByTheNewProductByName()"
});
formatter.result({
  "duration": 1078124200,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iShouldBeAbleToSeeTheNewProductNameOnTopOfList()"
});
formatter.result({
  "duration": 2114162500,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iSelectTheFirstItemOnTheList()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    }
  ],
  "location": "ProductsStepdefs.iClickOnDeleteRecordButton(int)"
});
formatter.result({
  "duration": 162846000,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iConfirmModalDialogByClickingOnYesDoIt()"
});
formatter.result({
  "duration": 42938600,
  "status": "passed"
});
formatter.match({
  "location": "ProductsStepdefs.iShouldBeAbleToConfirmThatProductIsNoLongerAvailable()"
});
formatter.result({
  "duration": 524182600,
  "status": "passed"
});
formatter.after({
  "duration": 631688100,
  "status": "passed"
});
});