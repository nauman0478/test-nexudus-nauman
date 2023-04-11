package com.nexudus.pages;

import com.nexudus.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    //Declaring WebElement type variable
    @CacheLookup
    @FindBy(name = "Email")
    WebElement emailField;

    @CacheLookup
    @FindBy(name = "Password")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[@type='submit']")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'The email or password is incorrect.')]")
    WebElement errorMessage;

    public void enterEmail(String email) {
        sendTextToElement(emailField, email);
        log.info("Entered email " + email);
    }

    public void enterPassword(String password) {
        sendTextToElement(passwordField, password);
        log.info("Entered password " + password);
    }

    public void clickOnSignInButton() {
        clickOnElement(signInButton);
        log.info("Clicking on " + signInButton.getText());
    }

    public String getErrorText() {
        log.info("Getting error message, " + errorMessage.getText());
        return getText(errorMessage);
    }

    public String getPageTitle() {
        String title = driver.getTitle();
        log.info("Title of page is " + title);
        return title;
    }
}
