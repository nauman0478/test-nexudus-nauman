package com.nexudus.cucumber.steps;

import com.nexudus.pages.DashboardPage;
import com.nexudus.pages.ProductsPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ProductsStepdefs {


    @And("^I navigate to product page$")
    public void iNavigateToProductPage() {
        new DashboardPage().navigateToProductsPage();
    }

    @And("^I click on Add Product button$")
    public void iClickOnAddProductButton() {
        new ProductsPage().clickOnAddProductButton();
    }

    @And("^I fill \"([^\"]*)\" as name$")
    public void iFillAsName(String name) {
        new ProductsPage().enterProductName("Test Product");

    }

    @And("^I fill \"([^\"]*)\" as description$")
    public void iFillAsDescription(String desc) {
        new ProductsPage().enterProductDescription("This is to test the product");

    }

    @And("^I fill the \"([^\"]*)\" as price$")
    public void iFillTheAsPrice(String price)  {
        new ProductsPage().enterUnitPrice("10");

    }

    @And("^I click on save changes$")
    public void iClickOnSaveChanges() {
        new ProductsPage().clickOnSaveChangesButton();
    }

    @And("^I search by the new product by name$")
    public void iSearchByTheNewProductByName() {
        new ProductsPage().enterProductNameInSearchBar("Test Product");
    }

    @Then("^i should be able to see the new product name on top of list$")
    public void iShouldBeAbleToSeeTheNewProductNameOnTopOfList() {
        new ProductsPage().clickOnSearchResult();

    }

    @When("^I select the first item on the list$")
    public void iSelectTheFirstItemOnTheList() {
    }

    @And("^I click on Delete (\\d+) record button$")
    public void iClickOnDeleteRecordButton(int arg0) {
        new ProductsPage().clickOnDeleteButton();
    }

    @And("^I confirm modal dialog by clicking on Yes do it$")
    public void iConfirmModalDialogByClickingOnYesDoIt() {
        new ProductsPage().clickOnYesDoItButton();
    }

    @Then("^I should be able to confirm that product is no longer available$")
    public void iShouldBeAbleToConfirmThatProductIsNoLongerAvailable() {
        Assert.assertTrue(new ProductsPage().noItemFound());
    }
}
