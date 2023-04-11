package com.nexudus.cucumber.steps;

import com.nexudus.pages.DashboardPage;
import com.nexudus.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {
    @Given("^I am on login page$")
    public void iAmOnLoginPage() {
    }

    @When("^I confirm login page is available$")
    public void iConfirmLoginPageIsAvailable() throws InterruptedException {
        Thread.sleep(1000);
       Assert.assertEquals("Sign in to Nexudus Platform", new LoginPage().getPageTitle());
    }

    @And("^I enter \"([^\"]*)\" as email$")
    public void iEnterAsEmail(String email) {
        new LoginPage().enterEmail(email);

    }

    @And("^I enter \"([^\"]*)\" as password$")
    public void iEnterAsPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on the Login button$")
    public void iClickOnTheLoginButton() {
        new LoginPage().clickOnSignInButton();
    }

    @Then("^I should see a clear error message on the screen$")
    public void iShouldSeeAClearErrorMessageOnTheScreen() {
        Assert.assertEquals("The email or password is incorrect.", new LoginPage().getErrorText());
    }

    @Then("^I should be redirected to the dashboard home page$")
    public void iShouldBeRedirectedToTheDashboardHomePage() {
        Assert.assertTrue(new DashboardPage().dashboardTitle());

    }
}
